<template>
    <div class="layout">
        <div class="layout-demo1">
            <bv-layout>
                <bv-header>bv-header</bv-header>
                <bv-content>bv-content</bv-content>
                <bv-footer>bv-footer</bv-footer>
            </bv-layout>
    
            <bv-layout>
                <bv-header>bv-header</bv-header>
                <bv-layout>
                    <bv-sider>bv-sider</bv-sider>
                    <bv-content>bv-content</bv-content>
                </bv-layout>
                <bv-footer>bv-footer</bv-footer>
            </bv-layout>
    
            <bv-layout>
                <bv-header>bv-header</bv-header>
                <bv-layout>
                    <bv-content>bv-content</bv-content>
                    <bv-sider>bv-sider</bv-sider>
                </bv-layout>
                <bv-footer>bv-footer</bv-footer>
            </bv-layout>
    
            <bv-layout>
                <bv-sider>bv-sider</bv-sider>
                <bv-layout>
                    <bv-header>bv-header</bv-header>
                    <bv-content>bv-content</bv-content>
                    <bv-footer>bv-footer</bv-footer>
                </bv-layout>
            </bv-layout>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header'
import Content from '@/components/content'
import Footer from '@/components/footer'
import Sider from '@/components/sider'
import Layout from '@/components/layout'

export default {
    components: {
        'bv-header': Header,
        'bv-content': Content,
        'bv-footer': Footer,
        'bv-sider': Sider,
        'bv-layout': Layout,
    },
}
</script>

<style lang="less">
.layout {
    .layout-demo1 {
        text-align: center;
        >.bv-layout {
            margin-bottom: 48px;
        }
        .bv-layout-header,
        .bv-layout-footer {
            background: #7dbcea;
            color: #fff;
        }
        .bv-layout-content {
            background: rgba(16, 142, 233, 1);
            color: #fff;
            min-height: 120px;
            line-height: 120px;
        }
        .bv-layout-sider {
            background: #3ba0e9;
            color: #fff;
            line-height: 120px;
        }
    }
}
</style>
