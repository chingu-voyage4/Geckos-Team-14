import EventsList from './components/EventsList.vue'
import NewEditEvent from './components/NewEditEvent.vue'
import EventInfo from './components/EventInfo.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

export const routes = [
    {path: '/', component: EventsList},
    {path: '/signup', component: Signup},
    {path: '/login', component: Login},
    {path: '/new', component: NewEditEvent},
    {path: '/edit/:id', component: NewEditEvent},
    {path: '/info/:id', component: EventInfo}
]