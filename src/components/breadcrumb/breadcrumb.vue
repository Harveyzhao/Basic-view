
    <!-- <div :className="classes">
        <bv-breadcrumb-item v-for="item in routes"></bv-breadcrumb-item>
    </div> -->

<script>
import './style/index'
import Icon from '../icon'
import BreadcrumbItem from './breadcrumb-item'


export default {
    name: 'Bvbreadcrumb',
    components: {
        'bv-icon': Icon,
        'bv-breadcrumb-item': BreadcrumbItem,
    },
    props: {
        prefixCls: {
            type: String,
            default: 'bv-breadcrumb',
        },
        routes: {
            type: Array,
        },
        params: {
            type: Object,
        },
        separator: {
            type: String,
            default: '/',
        },
        itemRender: '',
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    },

    render(h) {
        let crumbs
        const { separator, prefixCls, routes, params = {} } = this
        function getBreadcrumbName(route, params) {
            if (!route.breadcrumbName) {
                return null
            }
            const paramsKeys = Object.keys(params).join('|')
            const name = route.breadcrumbName.replace(new RegExp(`:(${paramsKeys})`, 'g'), (replacement, key) => params[key] || replacement)
            return name
        }

        function defaultItemRender(route, params, routes, paths) {
            const isLastItem = routes.indexOf(route) === routes.length - 1
            const name = getBreadcrumbName(route, params)
            return isLastItem ? h('span', {}, [{ name }]) : h('a', { props: { href: `#/${paths.join('/')}` } }, [{ name }])
        }
        if (routes && routes.length > 0) {
            const paths = []
            crumbs = routes.map((route) => {
                route.path = route.path || ''
                let path = route.path.replace(/^\//, '')
                Object.keys(params).forEach((key) => {
                    path = path.replace(`:${key}`, params[key])
                })
                if (path) {
                    paths.push(path)
                }
                const item = []
                item.push(defaultItemRender(route, params, routes, paths))
                return h('bv-breadcrumb-item', { props: { separator, key: route.breadcrumbName || path } }, item)
            })
        } else {
            crumbs = this.$slots.default
        }
        return h('div', {
            class: {
                [prefixCls]: true,
            },
        }, [
            crumbs,
        ])
    },
}

</script>
