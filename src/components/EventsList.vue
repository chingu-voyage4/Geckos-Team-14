<template>
    <div>
        <ul class="ev-ul">
            <li v-for="(event, index) in events" :key="event.name">
                <span class="event">
                    <div class="ev-name">{{ event.name }}</div>
                    <div class="ev-img">{{ event.img }}</div>
                    <div class="ev-desc">{{ event.description }}</div>
                </span>
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
        props: ['events'],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .event {
        border: 1px solid coral;
        display: inline-flex;
        flex-direction: column;
        width: 200px;
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
        height: 100px
    }

    .ev-ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>