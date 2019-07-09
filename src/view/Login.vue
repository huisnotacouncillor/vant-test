<template>
    <div class="page">
        <van-cell-group>
            <van-field
                v-model="username"
                left-icon="contact"
                label="手机号码"
                placeholder="请输入手机号码"
                error-message="请正确输入手机号码"
                />
            <van-field
                v-model="password"
                left-icon="contact"
                label="密码"
                placeholder="请输入密码"
                />
        </van-cell-group>
        <van-button type="primary" size="large" @click="submit"></van-button>
    </div>
</template>
<script>
import { CellGroup, Button, Cell, Toast } from 'vant'
export default {
    components: {
        [CellGroup.name]: CellGroup,
        [Button.name]: Button,
        [Cell.name]: Cell,
        [Toast.name]: Toast,
    },
    methods: {
        submit() {
            Toast('哈哈哈！！！')
        }
    }
}
</script>
<style lang="less">
    // .page {

    // }
</style>

