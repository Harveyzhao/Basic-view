<template>
    <div class="breadcrumb">
        <bv-breadcrumb>
            <bv-breadcrumb-item>Home</bv-breadcrumb-item>
            <bv-breadcrumb-item><a href="">Application Center</a></bv-breadcrumb-item>
            <bv-breadcrumb-item><a href="">Application List</a></bv-breadcrumb-item>
            <bv-breadcrumb-item>An Application</bv-breadcrumb-item>
        </bv-breadcrumb>
        lalala
    </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbItem from '@/components/breadcrumb-item'
import Row from '@/components/row'
import Col from '@/components/col'

export default {
    components: {
        'bv-breadcrumb': Breadcrumb,
        'bv-breadcrumb-item': BreadcrumbItem,
        'bv-row': Row,
        'bv-col': Col,
    },
}
</script>

<style lang="less">
.breadcrumb {
    width: 50%;
}
</style>
