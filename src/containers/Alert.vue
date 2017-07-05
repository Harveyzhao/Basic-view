<template>
    <div class="alert">
        <bv-alert message="Success Text" type="success"></bv-alert>
        <div>
            <bv-alert message="Success Text" type="success" />
            <bv-alert message="Info Text" type="info" />
            <bv-alert message="Warning Text" type="warning" />
            <bv-alert message="Error Text" type="error" />
        </div>
        <div>
            <bv-alert message="Success Tips" type="success" showIcon />
            <bv-alert message="Informational Notes" type="info" showIcon />
            <bv-alert message="Warning" type="warning" showIcon />
            <bv-alert message="Error" type="error" showIcon />
            <bv-alert message="success tips" description="Detailed description and advices about successful copywriting." type="success" showIcon />
            <bv-alert message="Informational Notes" description="Additional description and informations about copywriting." type="info" showIcon />
            <bv-alert message="Warning" description="This is a warning notice about copywriting." type="warning" showIcon />
            <bv-alert message="Error" description="This is an error message about copywriting." type="error" showIcon />
        </div>
        <div>
            <bv-alert message="Success Text" description="Success Description Success Description Success Description" type="success" />
            <bv-alert message="Info Text" description="Info Description Info Description Info Description Info Description" type="info" />
            <bv-alert message="Warning Text" description="Warning Description Warning Description Warning Description Warning Description" type="warning" />
            <bv-alert message="Error Text" description="Error Description Error Description Error Description Error Description" type="error" />
        </div>
        <div>
            <bv-alert message="Warning text" banner />
            <br />
            <bv-alert message="Very long warning text warning text text text text text text text" banner closable />
            <br />
            <bv-alert :showIcon="showIcon" message="Warning text without icon" banner />
            <br />
            <bv-alert type="error" message="Error text" banner />
        </div>
        <bv-alert message="Info Text" type="info" closeText="Close Now" />
    </div>
</template>

<script>
import Alert from '@/components/alert'
import Row from '@/components/row'
import Col from '@/components/col'

export default {
    components: {
        'bv-alert': Alert,
        'bv-row': Row,
        'bv-col': Col,
    },
    data() {
        return {
            showIcon: false,
        }
    },
}
</script>

<style lang="less">
.alert {
    width:50%;
}
</style>

