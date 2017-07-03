<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BvButtonGroup',
    props: {
        size: String,
        prefixCls: {
            type: String,
            default: 'bv-btn-group',
        },
    },
    computed: {
        classes() {
            const { size, prefixCls } = this
            let sizeCls = ''
            switch (size) {
            case 'large':
                sizeCls = 'lg'
                break
            case 'small':
                sizeCls = 'sm'
                break
            default:
                break
            }
            return [
                prefixCls,
                sizeCls ? `${prefixCls}-${sizeCls}` : '',
            ]
        },
    },
}
</script>
