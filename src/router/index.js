import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/containers/Button'
import Icon from '@/containers/Icon'
import Grid from '@/containers/Grid'
import Layout from '@/containers/Layout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/button',
            name: 'Button',
            component: Button,
        },
        {
            path: '/icon',
            name: 'Icon',
            component: Icon,
        },
        {
            path: '/grid',
            name: 'Grid',
            component: Grid,
        },
        {
            path: '/layout',
            name: 'Layout',
            component: Layout,
        },
    ],
})
