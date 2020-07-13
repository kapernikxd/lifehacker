<template>
    <nav class="navigation">
        <div class="container">
            <div class="navigation__inner">
                <ul>
                    <li><a href="">Что можно выиграть</a></li>
                    <li><a href="">Где купить билет</a></li>
                    <li><a href="">Как играть</a></li>
                    <li><a href="">Туры лотереи</a></li>
                    <li><a href="">Где узнать результаты</a></li>
                    <li><a href="">Как получить выигрыш</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation",
        methods: {
            handleScroll () {
                let navbar = document.querySelector(".navigation");
                var main = document.querySelector(".main");
                let header = main.offsetHeight + main.offsetTop;

                if (window.pageYOffset >= header) {
                    navbar.classList.add("sticky-nav")
                } else {
                    navbar.classList.remove("sticky-nav");
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
    .navigation {
        margin-top: 27px;
        padding-top: 21px;
        padding-bottom: 22px;
        width: 100%;
        transition-duration: .2s;
    }


    .sticky-nav {
        position: fixed;
        top: 43px;
        z-index: 9999;
        background-color: white;
        border-bottom: 1px solid #e4e4e4;
        box-shadow: 0 0 10px rgba(0,0,0,0.16);
        transition-duration: .2s;
    }

    @media (max-width: 1024px) {

        .navigation {
            width: 100%;
            overflow-x: auto;
        }

        .navigation__inner{
            position: relative;
            width: 100%;
            min-width: 1080px;
            overflow-x: auto;
        }
    }

    @media (max-width: 479px) {
        .navigation {
            padding-top: 11px;
            padding-bottom: 8px;
        }

        .navigation .container {
            padding: 0;
        }

        .sticky-nav {
            top: 18px;
        }
    }

</style>