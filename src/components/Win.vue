<template>
    <section class="win" id="win">
        <div class="container">
            <div class="win__inner inner">
                <h2 class="win__inner-title subtitle">{{subtitle}}</h2>
                <img class="win__inner-img img" :src="image">
                <p class="win__inner-text description">
                    В первых турах можно выиграть от нескольких тысяч до нескольких миллионов рублей, а также автомобили, загородные дома и путешествия. Все выигрыши можно получить в денежном эквиваленте.
                </p><br/>
                <p>
                    Самый крупный приз — джекпот. Это десятки и даже сотни миллионов рублей, он накапливается от тиража к тиражу. Джекпот можно выиграть, если 15 чисел верхнего или нижнего поля билета совпадут с номерами на первых 15 бочонках, вытянутых ведущим из мешка. Сумма рекордного джекпота в «Русском лото» уже больше 900 000 000 рублей.
                </p>
                <img class="win__inner-img img" src="../assets/img/2.jpg">
                <p>
                    Призовой фонд формируется из половины стоимости всех проданных билетов. С начала 2019 года общая сумма выигрышей составила свыше 3 миллиардов рублей. Победителями стали около 2 миллионов участников лотереи.
                </p><br/>
                <div class="info_box">

                    <h3 class="info_box__title h3">Самые крупные выигрыши в «Русском лото»</h3>
                    <div class="info_box__items">


                        <div class="info_box__item" v-for="(info_box, i) in info_boxs" :key="i">
                            <div class="info_box__item-left">
                                <div class="info_box__item-img">
                                    <div class="info_box__item-circle-second">
                                        <p class="info_box__item-num">{{info_box.icon}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">{{info_box.title}}</p>
                                <p class="info_box__ir-description">{{info_box.description}}</p><br>
                            </div>
                        </div>

                    </div>
                </div>

                <p class="win__inner-last-p">
                    В России все лотереи государственные и регулируются Федеральным законом № 138-ФЗ. Организаторами розыгрышей выступают Министерство спорта РФ и Министерство финансов РФ. Они утверждают условия лотерей и заключают контракты с операторами. Часть денег, вырученных от продажи билетов, идёт на финансирование государственных программ по развитию физической культуры и спорта.
                </p>
                <br>

            </div>
        </div>
    </section>
</template>

<script>
    import image from '../assets/img/1.jpg';
    export default {
        name: "Win",
        data () {
            return {
                subtitle: "Что можно выиграть",
                image: image,
                info_boxs: [
                    {   title: 'Наталья Власова — 506 000 000 рублей.',
                        description: '1 204-й тираж, трансляция от 5 ноября 2017 года. Деньги пенсионерка решила потратить на покупку жилья, отдых, образование дочери и благотворительность.',
                        icon: 1
                    },
                    {   title: 'Любовь и Сергей Догоровы — 500 000 000 рублей.',
                        description: '1 264-й тираж, трансляция от 1 января 2019 года. Победители вложились в путешествия, покупку квартиры, помощь родственникам и благотворительность. Часть суммы собираются инвестировать.',
                        icon: 2
                    },
                    {   title: 'Николай и Оксана Мирошниченко — 500 000 000 рублей.',
                        description: '1 264-й тираж, трансляция от 1 января 2019 года. Полмиллиарда планируют потратить на путешествия, выплату ипотеки, помощь родственникам и благотворительность.',
                        icon: 3
                    },
                ]
            }
        },
        methods: {
            handleScroll () {
                let listItems = document.querySelectorAll(".info_box__item-img");
                for (let i = 0; i < listItems.length; i++) {
                    let listItem = listItems[i];

                    if (this.isPartiallyVisible(listItem)) {
                        listItem.classList.add("active");
                    } else {
                        listItem.classList.remove("active");
                    }
                }

            },

            isPartiallyVisible(el) {
                var elementBoundary = el.getBoundingClientRect();

                var top = elementBoundary.top;
                var bottom = elementBoundary.bottom;
                var height = elementBoundary.height;

                return ((top + height >= 0) && (height + window.innerHeight >= bottom));
            },

        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
    }
</script>

<style scoped lang="scss">

    .win {
        padding-top: 59px;
    }

    .win__inner .info_box .info_box__items {
        margin-top: 40px;
    }

    .win__inner-last-p {
        margin-top: 10px;
    }

    @media (max-width: 479px) {
        .win {
            padding-top: 25px;
        }
    }

</style>