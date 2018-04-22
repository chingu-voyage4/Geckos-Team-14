<template>
  <div class="container" v-if = "login">
    <div class="profile">
      <transition name = "fade"
                mode = "out-in" 
                >
                <div v-if = "!changeEmailRequest&&!changePasswordRequest&&!deleteAccountRequest">
                  <button @click="changeEmailRequest=!changeEmailRequest"
                          class="change">Change email</button>
                  <button @click="changePasswordRequest=!changePasswordRequest"
                          class="change">Change password</button>
                  <button @click="deleteAccountRequest=!deleteAccountRequest"
                          class="change">Delete account</button>  
                  <router-link to="/" tag = "button" class="cancel-button">Back</router-link>      
                </div>
                <p class="change-email" v-else-if="changeEmailRequest">
                  <label for="new-email">New email:</label>
                  <input type="email" placeholder = "New Email" v-model = "newEmail" id = "new-email">
                  <br><br>
                  <label for="password">Password:</label>
                  <input type="password" placeholder = "Password" v-model = "password" id = "password">
                  <br><br>
                  <span class="fill">Please fill in all the fields to continue.</span>
                  <br><br>
                  <span v-if="emailChange" class="notification">Email changed<br><br></span>
                  <button @click = "changeEmail" :disabled="emailCheck">Change Email</button>
                  <button @click="changeEmailRequest=!changeEmailRequest" class="cancel-button">Back</button>
                </p>
                <p class="change-password" v-else-if = "changePasswordRequest">
                  <label for="cur-password">Password:</label>
                  <input type="password" placeholder = "Current Password" v-model = "curPassword" id = "cur-password">
                  <br><br>
                  <label for="new-password">New password:</label>
                  <input type="password" placeholder = "New Password" v-model = "newPassword" id = "new-password">
                  <br><br>
                  <label for="confirm-password">Confirm password:</label>
                  <input type="password" placeholder = "Confirm New Password" v-model = "confirmPassword" id = "confirm-password">
                  <br><br>
                  <span class="fill">Please fill in all the fields to continue.</span>
                  <br><br>
                  <span v-if="passwordChange" class="notification">Password changed<br><br></span>
                  <button @click = "changePassword" :disabled="passwordCheck">Change Password</button>
                  <button @click="changePasswordRequest=!changePasswordRequest" class="cancel-button">Back</button>
                </p>
                <p class="delete-account" v-else-if = "deleteAccountRequest">
                  <label for="del-password">Password:</label>
                  <input type="password" placeholder = "Current Password" v-model = "delPassword" id = "del-password">
                  <br><br>
                  <span>Are you sure?</span>
                  <br><br>
                  <span class="fill">Please fill in password field to continue.</span>
                  <br><br>
                  <button @click = "deleteAccount" :disabled = "!delPassword || (/^\s+$/).test(delPassword)">Delete Account</button>
                  <button @click="deleteAccountRequest=!deleteAccountRequest" class="cancel-button">Back</button>
                </p>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['login'],
  data() {
    return {
      changeEmailRequest: false,
      changePasswordRequest: false,
      deleteAccountRequest: false,
      emailChange: false,
      passwordChange: false,
      newEmail: '',
      password: '',
      curPassword: '',
      newPassword: '',
      confirmPassword: '',
      delPassword: ''
    }
  },
  computed: {
    emailCheck(){
      return  (!this.newEmail || (/^\s+$/).test(this.newEmail)) ||
              (!this.password || (/^\s+$/).test(this.password))
    },
    passwordCheck(){
      return  (!this.curPassword || (/^\s+$/).test(this.curPassword)) ||
              (!this.newPassword || (/^\s+$/).test(this.newPassword)) ||
              (!this.confirmPassword || (/^\s+$/).test(this.confirmPassword))
    }
  },
  methods: {
    changeEmail(){
        axios.put(`https://codemeets.herokuapp.com/users/`+this.login.id, 
        {
          newEmail: this.newEmail,
          password: this.password
        }
        , {headers: {'Authorization': sessionStorage.token}})
          .then(response => {
            this.$emit('emailChanged', this.newEmail);
            this.emailChange = true;
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    changePassword(){
      if (this.newPassword === this.confirmPassword){
      axios.put(`https://codemeets.herokuapp.com/users/`+this.login.id, {
          password: this.curPassword,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword
        }, {headers: {'Authorization': sessionStorage.token}})
        .then(response => {
          this.passwordChange = true;
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    deleteAccount(){
      axios.post(`https://codemeets.herokuapp.com/users/`+this.login.id+`/delete`, 
      {password: this.delPassword}, 
      {headers: {'Authorization': sessionStorage.token}})
        .then(response => {
          sessionStorage.clear();
          this.$emit('exit');
          this.$router.push('/');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
  
</script>

<style scoped>
.reset-profile {
  text-align: left;
}
.change {
  margin-bottom: 20px;
  display: block;
  width: 180px;
  text-align: center;
}
.change:nth-child(3) {
  margin: 0 0 60px;
}
.change-email, .change-password, .delete-account{
  margin: 20px 0;
}
.profile {
  width: 520px;
  margin: 20px auto;
  padding: 20px;
}
label{
  display: inline-block;
  width: 200px;
}
input {
  width: 300px;
  margin-bottom: 0;
}
.container {
  min-height: calc(100vh - 252px);
}
.notification {
  color:#463ac9;
}
</style>
