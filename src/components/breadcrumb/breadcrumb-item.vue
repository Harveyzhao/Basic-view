<template v-if="$slot.default">
    <span>
        <a v-if="'href' in this" :class="prefixCls+'-link'" href>
            <slot></slot>
        </a>
        <span v-else :class="prefixCls+'-link'" href>
            <slot></slot>
        </span>
        <span :class="prefixCls+'-separator'">{{$parent.separator}}</span>
    </span>
</template>

<script>
import './style/index'
import Icon from '../icon'

export default {
    name: 'BvbreadcrumbItem',
    components: {
        'bv-icon': Icon,
    },
    date() {
        return {
            separator: '',
        }
    },
    props: {
        href: '',
        prefixCls: {
            type: String,
            default: 'bv-breadcrumb',
        },
    },
}
</script>
