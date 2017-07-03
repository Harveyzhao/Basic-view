<script>
import './style/index.less'

export default {
    name: 'BvRow',
    componentName: 'BvRow',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        gutter: {
            type: Number,
            default: 0,
        },
        type: String,
        justify: {
            type: String,
            default: 'start',
        },
        align: {
            type: String,
            default: 'top',
        },
        prefixCls: {
            type: String,
            default: 'bv-row',
        },
    },
    computed: {
        style() {
            const ret = {}
            if (this.gutter) {
                ret.marginLeft = `-${this.gutter / 2}px`
                ret.marginRight = ret.marginLeft
            }
            return ret
        },
        classes() {
            const { type, justify, align, prefixCls } = this
            return [
                !type ? prefixCls : `${prefixCls}-${type}`,
                type && justify ? `${prefixCls}-${type}-${justify}` : '',
                type && align ? `${prefixCls}-${type}-${align}` : '',
            ]
        },
    },
    render(h) {
        return h(this.tag, {
            class: this.classes,
            style: this.style,
        }, this.$slots.default)
    },

}
</script>
