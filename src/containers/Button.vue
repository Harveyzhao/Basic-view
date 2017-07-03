<template>
    <div class="button">
        <div>
            <bv-button type="primary">Primary</bv-button>
            <bv-button>Default</bv-button>
            <bv-button type="dashed">Dashed</bv-button>
            <bv-button type="danger">Danger</bv-button>
        </div>
        <div>
            <bv-button type="primary" shape="circle" icon="search" />
            <bv-button type="primary" icon="search">Search</bv-button>
            <bv-button shape="circle" icon="search" />
            <bv-button icon="search">Search</bv-button>
            <div class="split"></div>
            <bv-button shape="circle" icon="search" />
            <bv-button icon="search">Search</bv-button>
            <bv-button type="dashed" shape="circle" icon="search" />
            <bv-button type="dashed" icon="search">Search</bv-button>
        </div>
        <div>
            <bv-button type="primary">Primary</bv-button>
            <bv-button type="primary" disabled>Primary(disabled)</bv-button>
            <div class="split"></div>
            <bv-button>Default</bv-button>
            <bv-button disabled>Default(disabled)</bv-button>
            <div class="split"></div>
            <bv-button>Ghost</bv-button>
            <bv-button disabled>Ghost(disabled)</bv-button>
            <div class="split"></div>
            <bv-button type="dashed">Dashed</bv-button>
            <bv-button type="dashed" disabled>Dashed(disabled)</bv-button>
        </div>
        <div>
            <bv-button type="primary" loading>
                Loading
            </bv-button>
            <bv-button type="primary" size="small" loading>
                Loading
            </bv-button>
            <div class="split"></div>
            <bv-button type="primary" :loading="loading" @click="enterLoading">
                Click me!
            </bv-button>
            <bv-button type="primary" icon="poweroff" :loading="loading" @click="enterLoading">
                Click me!
            </bv-button>
            <div class="split"></div>
            <bv-button shape="circle" loading />
            <bv-button type="primary" shape="circle" loading />
        </div>
        <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
            <bv-button type="primary" ghost>Primary</bv-button>
            <bv-button ghost>Default</bv-button>
            <bv-button type="dashed" ghost>Dashed</bv-button>
            <bv-button type="danger" ghost>danger</bv-button>
        </div>
        <hr>
        <div>
            <h4>Basic</h4>
            <bv-button-group>
                <bv-button>Cancel</bv-button>
                <bv-button type="primary">OK</bv-button>
            </bv-button-group>
            <bv-button-group>
                <bv-button disabled>L</bv-button>
                <bv-button disabled>M</bv-button>
                <bv-button disabled>R</bv-button>
            </bv-button-group>
            <bv-button-group>
                <bv-button type="primary">L</bv-button>
                <bv-button>M</bv-button>
                <bv-button>M</bv-button>
                <bv-button type="dashed">R</bv-button>
            </bv-button-group>
    
            <h4>With Icon</h4>
            <bv-button-group>
                <bv-button type="primary">
                    <bv-icon type="left" />Go back
                </bv-button>
                <bv-button type="primary">
                    Go forward
                    <bv-icon type="right" />
                </bv-button>
            </bv-button-group>
            <bv-button-group>
                <bv-button type="primary" icon="cloud" />
                <bv-button type="primary" icon="cloud-download" />
            </bv-button-group>
        </div>
    </div>
</template>

<script>
import Button from '@/components/button'
import ButtonGroup from '@/components/button-group'
import Icon from '@/components/icon'

export default {
    components: {
        'bv-button': Button,
        'bv-icon': Icon,
        'bv-button-group': ButtonGroup,
    },
    data() {
        return {
            loading: false,
            iconLoading: true,
        }
    },
    methods: {
        enterLoading() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 1000)
        },
    },
}
</script>

