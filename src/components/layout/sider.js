import Icon from '../icon'
import './style/index'

export default {
    name: 'BvSider',
    components: {
        'bv-icon': Icon,
    },
    props: {
        collapsible: {
            type: Boolean,
            default: false,
        },
        collapsed: {
            type: Boolean,
            default: false,
        },
        defaultCollapsed: {
            type: Boolean,
            default: false,
        },
        reverseArrow: {
            type: Boolean,
            default: false,
        },
        prefixCls: {
            type: String,
            default: 'bv-layout-sider',
        },
        width: {
            type: [Number, String],
            default: 200,
        },
        collapsedWidth: {
            type: [Number, String],
            default: 64,
        },
        breakpoint: String,
    },
    data() {
        return {
            _collapsed: false,
            below: false,
            mql: null,
        }
    },
    created() {
        this._collapsed = this.collapsed
        const matchMedia = window.matchMedia
        const dimensionMap = {
            xs: '480px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1600px',
        }
        if (matchMedia && this.breakpoint && this.breakpoint in dimensionMap) {
            this.mql = matchMedia(`(max-width: ${dimensionMap[this.breakpoint]})`)
        }
        if ('collapsed' in this) {
            this._collapsed = this.collapsed
        } else {
            this._collapsed = this.defaultCollapsed
        }
    },
    methods: {
        toggle() {
            this._collapsed = !this._collapsed
            this.$emit('onCollapse', this._collapsed)
        },
    },
    render(h) {
        const { prefixCls, _collapsed, collapsedWidth, width, toggle, reverseArrow, below, collapsible } = this
        const siderWidth = _collapsed ? collapsedWidth : width
        const zeroWidthTrigger = collapsedWidth === 0 || collapsedWidth === '0' ? h('span', {
            class: {
                [`${prefixCls}-zero-width-trigger`]: true,
            },
            on: {
                click: toggle,
            },
        }) : null
        const iconObj = {
            expanded: reverseArrow ? h('bv-icon', { props: { type: 'right' } }) : h('bv-icon', { props: { type: 'left' } }),
            collapsed: reverseArrow ? h('bv-icon', { props: { type: 'left' } }) : h('bv-icon', { props: { type: 'right' } }),
        }
        const status = _collapsed ? 'collapsed' : 'expanded'
        const defaultTrigger = iconObj[status]
        const triggerDom = (
            this.$slots.trigger ? zeroWidthTrigger || h('div', {
                class: {
                    [`${prefixCls}-trigger`]: true,
                },
                on: {
                    click: toggle,
                },
            }, [this.$slots.trigger || defaultTrigger]) : null
        )
        const triggerDomShow = collapsible || (below && zeroWidthTrigger) ? triggerDom : null
        return h('div', {
            class: {
                [prefixCls]: true,
                [`${prefixCls}-collapsed`]: !!_collapsed,
                [`${prefixCls}-has-trigger`]: !!this.$slots.trigger,
                [`${prefixCls}-below`]: !!below,
                [`${prefixCls}-zero-width`]: siderWidth === 0 || siderWidth === '0',
            },
            style: {
                flex: `0 0 ${siderWidth}px`,
                width: `${siderWidth}px`,
            },
        }, [
            h('div', {
                class: {
                    [`${prefixCls}-children`]: true,
                },
            }, [
                this.$slots.default,
            ]),
            triggerDomShow,
        ])
    },
}
