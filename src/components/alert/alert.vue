<template>
    <transition :name="prefixCls+'-slide-up'">
        <div v-show="closing" :class="classes">
            <bv-icon v-if="showIcon" :class="prefixCls+'-icon'" :type="iconType"></bv-icon>
            <span :class="prefixCls+'-message'">{{message}}</span>
            <span :class="prefixCls+'-description'">{{description}}</span>
            <a v-if="closeText||closable" @click.prevent="handleClose" :class="prefixCls+'-close-icon'">
                <template v-if="closeText">
                    {{closeText}}
                </template>
                <template v-else>
                     <bv-icon type="cross"></bv-icon>
                </template>
            </a>
        </div>
    </transition>
</template>

<script>
import './style/index'
import Icon from '../icon'

export default {
    name: 'BvAlert',
    components: {
        'bv-icon': Icon,
    },
    props: {
        closable: {
            type: Boolean,
        },
        type: {
            type: String,
            default: 'info',
        },
        closeText: '',
        message: '',
        description: '',
        onClose: Function,
        showIcon: {
            type: Boolean,
            default: false,
        },
        banner: {
            type: Boolean,
            default: false,
        },
        prefixCls: {
            type: String,
            default: 'bv-alert',
        },
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
