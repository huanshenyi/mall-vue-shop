<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>MiShop</p>
        </div>
        <div class="footer-link">
            <a href="" target="_blank">GiyHub</a><span>|</span>
            <a href="" target="_blank">GiyHub</a><span>|</span>
            <a href="" target="_blank">GiyHub</a><span>|</span>
            <a href="" target="_blank">GiyHub</a><span>|</span>
        </div>
        <div class="copyright">バージョン管理ドメイン管理など</div>
    </div>
</template>

<script>
    export default {
        name: "NavFooter"
    }
</script>

<style scoped lang="scss">
.footer{
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            color: #999999;
            display: inline-block;
        }
        span{
            margin: 0 10px;
        }
        margin-bottom: 13px;
    }
}
</style>
