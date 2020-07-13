<template>
    <section class="main">
        <div class="container">
            <div class="main__inner inner">
                <div class="main__inner-img">
                    <img class="main__img" src="../assets/img/5-30.png">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
    .main {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        background-position: 0px 0px, 50% 50%;
        background-size: cover;
        background-image: url('../assets/img/bg-image.png');
        height: 640px;

    }

    .main__inner-img:hover {
        animation: 1.2s ease-in-out 0s normal none infinite running trambling-animation;
    }

    @keyframes trambling-animation {
        0%, 50%, 100% {
            transform: translate(0);
        }
        10%, 30% {
            transform: translate(10px);
        }
        20%, 40% {
            transform: translate(-10px);
        }
    }
    @media (max-width: 1024px) {

        .main {
            height: 512px;
        }

        .main__img {
            height: 246px;
        }
    }

    @media (max-width: 768px) {

        .main {
            height: 384px;
        }

        .main__img {
            height: 185px;
        }
    }


    @media (max-width: 479px) {
        .main {
            height: 205px;
        }

        .main__img {
            height: 77px;
            margin-top: 45px;
        }
    }
</style>