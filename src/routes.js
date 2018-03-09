import EventsList from './components/EventsList.vue'
import NewEditEvent from './components/NewEditEvent.vue'
import EventInfo from './components/EventInfo.vue'

export const routes = [
    {path: '/', component: EventsList},
    {path: '/new', component: NewEditEvent},
    {path: '/edit/:id', component: NewEditEvent},
    {path: '/info/:id', component: EventInfo}
]