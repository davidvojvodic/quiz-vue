// Importing the necessary functions and components from the vue-router package
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Quiz from '../views/QuizView.vue';

// Creating a router instance
const router = createRouter({
    // Setting up the history mode for the router using createWebHistory
    history: createWebHistory(import.meta.env.BASE_URL),
    // Defining the routes for the router
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/quiz/:id',
            name: 'Quiz',
            component: Quiz
        }
    ]
})

// Exporting the router instance as the default export of this module
export default router;
