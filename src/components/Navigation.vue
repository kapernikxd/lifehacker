<template>
    <nav class="navigation">
        <div class="container">
            <div class="navigation__inner">
                <ul>
                    <li v-for="navigation in navigations" :key="navigation.name">
                        <a :href="navigation.url">{{ navigation.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation",
        data () {
            return {
                navigations: [
                    { name: 'Что можно выиграть', url:  '#win'},
                    { name: 'Где купить билет', url:  '#tickets' },
                    { name: 'Как играть', url:  '#how_play' },
                    { name: 'Туры лотереи', url:  '#lottery' },
                    { name: 'Где узнать результаты', url:  '#result' },
                    { name: 'Как получить выигрыш', url:  '#take_money' },
                ]
            }
        },

        methods: {
            handleScroll () {
                let navbar = document.querySelector(".navigation");
                let headerheight = document.querySelector(".header").offsetHeight;
                let main = document.querySelector(".main");
                let header = main.offsetHeight + main.offsetTop - headerheight;

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