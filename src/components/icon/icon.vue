<template>
    <i :class="classes">
    </i>
</template>

<script>
export default {
    name: 'BvIcon',
    props: {
        type: String,
        spin: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            const { type, spin } = this
            return [
                'anticon',
                !!spin || type === 'loading' ? 'anticon-spin' : '',
                `anticon-${type}`,
            ]
        },
    },
}
</script>
