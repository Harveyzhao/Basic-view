<script>
import './style/index.less'

export default {
    name: 'BvCol',
    props: {
        span: {
            type: Number,
            default: 24,
        },
        tag: {
            type: String,
            default: 'div',
        },
        order: Number,
        offset: Number,
        pull: Number,
        push: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
        prefixCls: {
            type: String,
            default: 'bv-col',
        },
    },
    computed: {
        gutter() {
            let parent = this.$parent
            while (parent && parent.$options.componentName !== 'BvRow') {
                parent = parent.$parent
            }
            return parent ? parent.gutter : 0
        },
        classes() {
            const { prefixCls, span, order, offset, push, pull } = this
            let sizeClassObj = {};
            ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
                let sizeProps = {}
                if (typeof this[size] === 'number') {
                    sizeProps.span = this[size]
                } else if (typeof this[size] === 'object') {
                    sizeProps = this[size] || {}
                }

                // delete others[size]

                sizeClassObj = Object.assign({}, sizeClassObj, {
                    [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
                    [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
                    [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
                    [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
                    [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
                })
            })
            return [
                span !== undefined ? `${prefixCls}-${span}` : '',
                order ? `${prefixCls}-order-${order}` : '',
                offset ? `${prefixCls}-offset-${offset}` : '',
                push ? `${prefixCls}-push-${push}` : '',
                pull ? `${prefixCls}-pull-${pull}` : '',
                sizeClassObj,
            ]
        },
    },
    render(h) {
        const style = {}
        if (this.gutter) {
            style.paddingLeft = `${this.gutter / 2}px`
            style.paddingRight = style.paddingLeft
        }
        return h(this.tag, {
            class: this.classes,
            style,
        }, this.$slots.default)
    },
}
</script>
