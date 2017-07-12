<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import './style/index'

export default {
    name: 'BvContent',
    props: {
        prefixCls: {
            type: String,
            default: 'bv-layout-content',
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
