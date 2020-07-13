<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__inner-info">© 2019 Лайфхакер</div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        padding-top: 19px;
        padding-bottom: 17px;
        background-color: #000000;
        color: white;
    }

    .footer__inner {
        text-align: end;
    }

    @media (max-width: 479px) {
        .footer__inner {
            text-align: start;
        }
    }

</style>