<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__left">
                    <div class="logo">
                        <a href=""><img class="logo__img" src="../assets/img/logos-white.png"></a>
                    </div>
                </div>
                <div class="header__right">
                    <div class="seti-icons">
                        <a class="seti-icon" href=""><font-awesome-icon class="fa" :icon="{ prefix: 'fab', iconName: 'facebook' }"/></a>
                        <a class="seti-icon" href=""><font-awesome-icon class="fa" :icon="{ prefix: 'fab', iconName: 'twitter' }"/></a>
                        <a class="seti-icon" href=""><font-awesome-icon class="fa" :icon="{ prefix: 'fab', iconName: 'vk' }"/></a>

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",

        methods: {
            handleScroll () {
                let main = document.querySelector(".main");
                let header = main.offsetHeight + main.offsetTop;

                let fa_icons = document.querySelectorAll(".fa")
                if (window.pageYOffset >= header) {
                    document.querySelector(".header").classList.add("header-color")
                    for (let fa_icon of fa_icons) {
                        fa_icon.style.color = "#ED5E42"
                    }

                } else {
                    document.querySelector(".header").classList.remove("header-color");
                    for (let fa_icon of fa_icons) {
                        fa_icon.style.color = "#FF9E27"
                    }
                }
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },

    }
</script>

<style scoped>

    .header {
        position: fixed;
        width: 100%;
        padding-top: 12px;
        padding-bottom: 12px;
        margin-top: 23px;
        z-index: 100;
        transition-duration: .1s;
    }

    .header-color {
        background-color: #ED5E42;
        margin-top: 0px;
        transition-duration: .1s;
    }
    .header__inner {
        display: flex;
        justify-content: space-between;
        max-width: 1080px;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }


    .seti-icon {
        margin-left: 22px;
        width: 40px;
        height: 40px;
        background-color: white;
        border-radius: 20px;
        display: inline-block;
        text-align: center;
    }

    .fa {
        font-size: 22px !important;
        margin-top: 9px;
        color: #FF9E27;
    }

    .seti-icon:hover .fa{
        color: #ED5E42 !important;
    }

    @media (max-width: 768px) {

        .seti-icon {
            margin-left: 5px;
        }
    }

    @media (max-width: 479px) {

        .header {
            margin-top: 0px;
            background-color: #ED5E42;
            padding-top: 9px;
            padding-bottom: 7px;
        }

        .header__inner {
            align-items: normal;
        }


        .seti-icon {
            margin-left: 12px;
            width: 25px;
            height: 25px;
            border-radius: 20px;
        }

        .seti-icon:hover .fa {
            color: #FF9E27 !important;
        }

        .fa {
            margin-top: 0px;
            font-size: inherit !important;
            color: #ED5E42 !important;
        }

        .logo__img {
            height: 23px;
        }

    }
</style>