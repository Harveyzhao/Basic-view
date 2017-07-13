<template>
    <div class="breadcrumb">
        <bv-breadcrumb>
            <bv-breadcrumb-item>Home</bv-breadcrumb-item>
            <bv-breadcrumb-item><a href="">Application Center</a></bv-breadcrumb-item>
            <bv-breadcrumb-item><a href="">Application List</a></bv-breadcrumb-item>
            <bv-breadcrumb-item>An Application</bv-breadcrumb-item>
        </bv-breadcrumb>

        <bv-breadcrumb>
            <bv-breadcrumb-item href=""><bv-icon type="home" /></bv-breadcrumb-item>
            <bv-breadcrumb-item href="">
                <bv-icon type="user" />
                <span>Application List</span>
            </bv-breadcrumb-item>
            <bv-breadcrumb-item> Application</bv-breadcrumb-item>
        </bv-breadcrumb>

        <bv-breadcrumb separator=">">
            <bv-breadcrumb-item>Home</bv-breadcrumb-item>
            <bv-breadcrumb-item href="">Application Center</bv-breadcrumb-item>
            <bv-breadcrumb-item href="">Application List</bv-breadcrumb-item>
            <bv-breadcrumb-item>An Application</bv-breadcrumb-item>
        </bv-breadcrumb>
    </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbItem from '@/components/breadcrumb-item'
import Icon from '@/components/icon'

export default {
    components: {
        'bv-breadcrumb': Breadcrumb,
        'bv-breadcrumb-item': BreadcrumbItem,
        'bv-icon': Icon,
    },
}
</script>

<style lang="less">
.breadcrumb {
    width: 50%;
}
</style>
