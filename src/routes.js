import EventsList from './components/EventsList.vue'
import NewEditEvent from './components/NewEditEvent.vue'
import EventInfo from './components/EventInfo.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Profile from './components/Profile.vue'

export const routes = [
    {path: '/', component: EventsList},
    {path: '/register', component: Signup},
    {path: '/login', component: Login},
    {path: '/new', component: NewEditEvent},
    {path: '/edit/:id', component: NewEditEvent},
    {path: '/info/:id', component: EventInfo},
    {path: '/profile', component: Profile}
]