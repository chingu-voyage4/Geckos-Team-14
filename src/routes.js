import EventsList from './components/EventsList.vue'
import NewEditEvent from './components/NewEditEvent.vue'
import EventInfo from './components/EventInfo.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import ResetPassword from './components/ResetPassword.vue'

export const routes = [
    {path: '/', component: EventsList},
    {path: '/register', component: Signup},
    {path: '/login', component: Login},
    {path: '/reset-password', component: ResetPassword},
    {path: '/new', component: NewEditEvent},
    {path: '/edit/:id', component: NewEditEvent},
    {path: '/info/:id', component: EventInfo}
]