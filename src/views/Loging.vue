<template>
    <div class="login">
        <div class="submit-form">
            <div class="title">KOL后台管理系统</div>
            <div class="login-input">
                <input
                        placeholder="机构编号"
                        ref="mcn_account"
                        autofocus
                        @keyup.enter="changeFocus"
                        v-model="loginData.mcn_account"
                        class="input"
                        id="name"
                        type="text"
                />
            </div>
            <div class="login-input">
                <input
                        placeholder="用户名"
                        ref="account"
                        @keyup.enter="changeFocus"
                        v-model="loginData.account"
                        type="account"
                />
            </div>
            <div class="login-input">
                <input
                        placeholder="密码"
                        ref="password"
                        @keyup.enter="login"
                        v-model="loginData.password"
                        type="password"
                />
            </div>
            <div class="submit-btn">
                <input type="button" @click="login" id="submit" value="登  录" name />
            </div>
        </div>
    </div>
</template>

<script>
    import * as api from "@/api/index.js";
    import * as messageApi from "@/api/message.js";

    export default {
        name: "login",
        data: () => {
            return {
                loginData: {
                    account: "",
                    password: ""
                },
                saveAccount: false
            };
        },
        mounted() {},
        computed: {},
        methods: {
            changeFocus() {
                const { mcn_account, account } = this.loginData;
                if (mcn_account) {
                    this.$refs.account.focus();
                }else if (account) {
                    this.$refs.password.focus();
                }
            },
            login() {
                const { mcn_account, account, password } = this.loginData;
                if (!mcn_account.trim()) {
                    this.$message({
                        message: "请输入机构编号",
                        type: "error"
                    });
                    this.$refs.mcn_account.focus();
                    return;
                }
                if (!account.trim()) {
                    this.$message({
                        message: "请输入用户名",
                        type: "error"
                    });
                    this.$refs.account.focus();
                    return;
                }
                if (!password.trim()) {
                    this.$message({
                        message: "请输入密码",
                        type: "error"
                    });
                    this.$refs.password.focus();
                    return;
                }
                api.login(
                    {
                        mcn_account,
                        account,
                        password
                    },
                    true
                )
                    .then(res => {
                        this.$store.commit("login", res);
                        messageApi.getUnreadCount().then(res => {
                            this.$store.commit("setUnreadCount", res.total_count);
                        });
                        this.$router.push("/");
                    })
                    .catch(res => {res});
            }
        }
    };
</script>
<style lang="less">
    .login {
        position: absolute;
        background-image: url("../assets/images/bg_large.png");
        background-size: cover;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .submit-form {
            padding: 30px 65px;
            width: 460px;
            height: 330px;
            background: #fff;
            box-shadow: 0px 3px 14px 0 rgba(118, 130, 140, 0.6);
            border-radius: 5px;
            line-height: 26px;
            .title {
                color: #3497ec;
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 30px;
            }
            .login-input {
                border-bottom: 1px solid #e8e9ed;
                margin-bottom: 28px;
                input {
                    font-size: 14px;
                    line-height: 26px;
                    width: 100%;
                }
            }
            .login-radio {
                color: #999;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 25px;
            }
            .submit-btn {
                input {
                    cursor: pointer;
                    background: #272a31;
                    width: 100%;
                    height: 46px;
                    color: #ffffff;
                    border-radius: 4px;
                    font-size: 16px;
                }
            }
        }
    }
</style>


