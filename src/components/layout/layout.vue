<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import './style/index'

export default {
    name: 'BvLayout',
    props: {
        prefixCls: {
            type: String,
            default: 'bv-layout',
        },
    },
    computed: {
        classes() {
            const { prefixCls } = this
            let hasSider = false
            this.$slots.default.forEach((item) => {
                if (item.componentOptions && item.componentOptions.tag === 'bv-sider') {
                    hasSider = true
                }
            })
            return [
                prefixCls,
                {
                    [`${prefixCls}-has-sider`]: hasSider,
                },
            ]
        },
    },
}
</script>
