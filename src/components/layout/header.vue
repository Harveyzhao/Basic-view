<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import './style/index'

export default {
    name: 'BvHeader',
    props: {
        prefixCls: {
            type: String,
            default: 'bv-layout-header',
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
