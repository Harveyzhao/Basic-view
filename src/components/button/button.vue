<template>
    <button :disabled="disabled" @click="handleClick" :autofocus="autofocus" :type="nativeType" :class="classes">
        <bv-icon v-if="loading || icon" :type="loading ? 'loading' : icon"></bv-icon>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
import './style/index'
import Icon from '../icon'

export default {
    name: 'BvButton',
    components: {
        'bv-icon': Icon,
    },
    props: {
        type: {
            type: String,
            default: 'default',
        },
        size: String,
        icon: {
            type: String,
            default: '',
        },
        nativeType: {
            type: String,
            default: 'button',
        },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        autofocus: Boolean,
        prefixCls: {
            type: String,
            default: 'bv-btn',
        },
        shape: {
            type: String,
        },
        ghost: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            clicked: false,
            timeout: 0,
        }
    },
    computed: {
        classes() {
            const { type, size, prefixCls, shape, loading, clicked, ghost, icon } = this
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
                type ? `${prefixCls}-${type}` : '',
                shape ? `${prefixCls}-${shape}` : '',
                sizeCls ? `${prefixCls}-${sizeCls}` : '',
                loading ? `${prefixCls}-loading` : '',
                clicked ? `${prefixCls}-clicked` : '',
                ghost ? `${prefixCls}-background-ghost` : '',
                !this.$slots.default && icon ? `${prefixCls}-icon-only` : '',
            ]
        },
    },
    methods: {
        handleClick(evt) {
            this.clicked = true
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => (this.clicked = false), 500)
            this.$emit('click', evt)
        },
    },
    destroyed() {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
    },
}
</script>
