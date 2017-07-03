<template>
    <div class="grid">
        <div>
            <bv-row>
                <bv-col :span="12">col-12</bv-col>
                <bv-col :span="12">col-12</bv-col>
            </bv-row>
            <bv-row>
                <bv-col :span="8">col-8</bv-col>
                <bv-col :span="8">col-8</bv-col>
                <bv-col :span="8">col-8</bv-col>
            </bv-row>
            <bv-row>
                <bv-col :span="6">col-6</bv-col>
                <bv-col :span="6">col-6</bv-col>
                <bv-col :span="6">col-6</bv-col>
                <bv-col :span="6">col-6</bv-col>
            </bv-row>
        </div>
        <div class="gutter-example">
            <bv-row :gutter="16">
                <bv-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6</div>
                </bv-col>
                <bv-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6</div>
                </bv-col>
                <bv-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6</div>
                </bv-col>
                <bv-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6</div>
                </bv-col>
            </bv-row>
        </div>
        <div>
            <bv-row>
                <bv-col :span="8">col-8</bv-col>
                <bv-col :span="8" :offset="8">col-8</bv-col>
            </bv-row>
            <bv-row>
                <bv-col :span="6" :offset="6">col-6 col-offset-6</bv-col>
                <bv-col :span="6" :offset="6">col-6 col-offset-6</bv-col>
            </bv-row>
            <bv-row>
                <bv-col :span="12" :offset="6">col-12 col-offset-6</bv-col>
            </bv-row>
        </div>
        <div>
            <bv-row>
                <bv-col :span="18" :push="6">col-18 col-push-6</bv-col>
                <bv-col :span="6" :pull="18">col-6 col-pull-18</bv-col>
            </bv-row>
        </div>
        <div>
            <p>sub-element align left</p>
            <bv-row type="flex" justify="start">
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
            </bv-row>
    
            <p>sub-element align center</p>
            <bv-row type="flex" justify="center">
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
            </bv-row>
    
            <p>sub-element align right</p>
            <bv-row type="flex" justify="end">
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
            </bv-row>
    
            <p>sub-element monospaced arrangement</p>
            <bv-row type="flex" justify="space-between">
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
            </bv-row>
    
            <p>sub-element align full</p>
            <bv-row type="flex" justify="space-around">
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
                <bv-col :span="4">col-4</bv-col>
            </bv-row>
        </div>
        <div>
            <p>Align Top</p>
            <bv-row type="flex" justify="center" align="top">
                <bv-col :span="4">
                    <p style="height:100px;">col-4</p>
                </bv-col>
                <bv-col :span="4">
                    <p style="height:50px;">col-4</p>
                </bv-col>
                <bv-col :span="4">
                    <p style="height:120px;">col-4</p>
                </bv-col>
                <bv-col :span="4">
                    <p style="height:80px;">col-4</p>
                </bv-col>
            </bv-row>
    
            <p>Align Center</p>
            <bv-row type="flex" justify="space-around" align="middle">
                <bv-col :span="4">
                    <p style="height:100px;">col-4</p>
                </bv-col>
                <bv-col :span="4">
                    <p style="height:50px;">col-4</p>
                </bv-col>
                <bv-col :span="4">
                    <p style="height:100px;">col-4</p>
                </bv-col>
                <bv-col :span="4">
                    <p style="height:80px;">col-4</p>
                </bv-col>
            </bv-row>
    
            <p>Align Bottom</p>
            <bv-row type="flex" justify="space-between" align="bottom">
                <bv-col :span="4">
                    <p style="height:100px;">col-4</p>
                </bv-col>
                <bv-col :span="4">
                    <p style="height:50px;">col-4</p>
                </bv-col>
                <bv-col :span="4">
                    <p style="height:120px;">col-4</p>
                </bv-col>
                <bv-col :span="4">
                    <p style="height:80px;">col-4</p>
                </bv-col>
            </bv-row>
        </div>
        <div>
            <bv-row type="flex">
                <bv-col :span="6" :order="4">1 col-order-4</bv-col>
                <bv-col :span="6" :order="3">2 col-order-3</bv-col>
                <bv-col :span="6" :order="2">3 col-order-2</bv-col>
                <bv-col :span="6" :order="1">4 col-order-1</bv-col>
            </bv-row>
        </div>
        <div>
            <bv-row>
                <bv-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</bv-col>
                <bv-col :xs="2" :sm="16" :md="12" :lg="8" :xl="4">Col</bv-col>
                <bv-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</bv-col>
            </bv-row>
        </div>
        <div>
            <bv-row>
                <bv-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</bv-col>
                <bv-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</bv-col>
                <bv-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</bv-col>
            </bv-row>
        </div>
    </div>
</template>

<script>
import Row from '@/components/row'
import Col from '@/components/col'

export default {
    components: {
        'bv-row': Row,
        'bv-col': Col,
    },
}
</script>

<style lang="less">
.grid {
    .bv-row-flex>div:not(.gutter-row),
    .bv-row>div:not(.gutter-row),
    .bv-row-flex>div:not(.gutter-row),
    .bv-row>div:not(.gutter-row) {
        background: #00a0e9;
        padding: 16px 0;
    }
    .bv-row-flex>div:not(.gutter-row):nth-child(odd),
    .bv-row>div:not(.gutter-row):nth-child(odd),
    .bv-row-flex>div:not(.gutter-row):nth-child(odd),
    .bv-row>div:not(.gutter-row):nth-child(odd) {
        background: rgba(0, 160, 233, .7);
    }
    .bv-row>div,
    .bv-row-flex>div {
        text-align: center;
        border-radius: 0;
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
    }
    .gutter-example .ant-row>div {
        background: transparent;
        border: 0;
    }
    .gutter-box {
        background: #00A0E9;
        padding: 5px 0;
    }
}
</style>

