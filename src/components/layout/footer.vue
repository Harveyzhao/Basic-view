<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import './style/index'

export default {
    name: 'BvFooter',
    props: {
        prefixCls: {
            type: String,
            default: 'bv-layout-footer',
        },
    },
    computed: {
        classes() {
            const { prefixCls } = this
            const hasSider = false
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
