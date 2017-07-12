<template>
    <div className={classNames(className, prefixCls)}>
        {crumbs}
    </div>
</template>

<script>
import './style/index'
import Icon from '../icon'

export default {
    name: 'Bvbreadcrumb',
    components: {
        'bv-icon': Icon,
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
        separator: '',
        itemRender: '',
    },
    data() {
        return {
            closing: true,
            closed: false,
        }
    },
    computed: {
        classes() {
            let { type, showIcon } = this
            const { banner, description, prefixCls } = this
            // banner模式默认有 Icon
            showIcon = banner && showIcon === undefined ? true : showIcon
            // banner模式默认为警告
            type = banner && type === undefined ? 'warning' : type || 'info'

            return [
                prefixCls,
                `${prefixCls}-${type}`,
                !this.closing ? `${prefixCls}-close` : '',
                description ? `${prefixCls}-with-description` : '',
                !showIcon ? `${prefixCls}-no-icon` : '',
                banner ? `${prefixCls}-banner` : '',
            ]
        },
        iconType() {
            const { type, description } = this
            let iconType = ''
            switch (type) {
            case 'success':
                iconType = 'check-circle'
                break
            case 'info':
                iconType = 'info-circle'
                break
            case 'error':
                iconType = 'cross-circle'
                break
            case 'warning':
                iconType = 'exclamation-circle'
                break
            default:
                iconType = 'default'
            }
            if (description) {
                iconType += '-o'
            }
            return iconType
        },
    },
    methods: {
        handleClose() {
            this.closing = false
            this.$el.style.height = `${this.$el.offsetHeight}px`
            this.$el.style.height = `${this.$el.offsetHeight}px`
            this.$on('close')
            setTimeout(() => {
                this.animationEnd()
            }, 300)
        },
        animationEnd() {
            this.closed = true
            this.closing = true
        },
    },
}
</script>
