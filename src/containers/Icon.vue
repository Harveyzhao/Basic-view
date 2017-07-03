<template>
    <div class="icon">
        <li>
            <bv-icon type="link" />
            <span>link</span>
        </li>
        <li>
            <bv-icon type="step-backward" />
        </li>
        <li>
            <bv-icon type="step-backward" />
        </li>
        <li>
            <bv-icon type="step-forward" />
        </li>
        <li>
            <bv-icon type="fast-backward" />
        </li>
        <li>
            <bv-icon type="shrink" />
        </li>
        <li>
            <bv-icon type="arrows-alt" />
        </li>
        <li>
            <bv-icon type="down" />
        </li>
        <li>
            <bv-icon type="up" />
        </li>
        <li>
            <bv-icon type="left" />
        </li>
        <li>
            <bv-icon type="right" />
        </li>
    </div>
</template>

<script>
import Icon from '@/components/icon'

export default {
    components: {
        'bv-icon': Icon,
    },
}
</script>

<style lang="less">
.icon {
    li {
        float: left;
        width: 16.66%;
        text-align: center;
        list-style: none;
        cursor: pointer;
        height: 100px;
        color: #555;
        transition: all .3s;
        position: relative;
        margin: 3px 0;
        border-radius: 4px;
        background-color: #fff;
        overflow: hidden;
        padding: 10px 0 0;
        .anticon {
            font-size: 24px;
            margin: 12px 0 16px;
            transition: all .3s;
        }
        &:hover {
            background-color: #108ee9;
            color: #fff;
            .anticon {
                transform: scale(1.4);
            }
        }
        span {
            display: block;
            text-align: center;
            transform: scale(.83);
            font-family: Lucida Console, Consolas;
            white-space: nowrap;
        }
    }
}
</style>

