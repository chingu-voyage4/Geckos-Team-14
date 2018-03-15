<template>
    <div>
        <ul class="ev-ul">
            <li v-for="(event, index) in events" :key="event.name">
                <div class="event">
                    <div class="ev-name">{{ event.name }}</div>
                    <div class="img-container"><img :src="event.img" class="ev-img" :alt="event.imgAlt"></div>
                    <div class="ev-desc">{{ event.description }}</div>
                </div>
                <br>
                <router-link :to="'/info/'+index" tag="button" class="event-info">Info</router-link>
                <router-link :to="'/edit/'+index" tag="button">Edit event</router-link>
                <br>
            </li>
        </ul>
        <router-link to="/new" tag="button" class="add-btn">Add New event</router-link>
    </div>
</template>
<script>
    export default {
        props: ['events']
    }
</script>

<style scoped>
    .event {
        border: 1px solid coral;
        width: 400px;
        margin: 20px;
    }

    .event-info {
        margin-left: 20px;
    }

    .add-btn {
        margin: 20px 60px;
    }

    .event>div {
        border: 1px solid salmon;
    }

    .ev-name,
    .ev-desc {
        height: 50px;
    }

    .ev-img {
        height: 300px;
        width: auto;
    }

    .ev-ul {
        list-style-type: none;
        display: flex;
        flex-grow: 1;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .img-container {
      text-align: center;
    }
</style>