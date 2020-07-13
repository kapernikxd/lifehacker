<template>
    <section class="lottery" id="lottery">
        <div class="container">
            <div class="lottery__inner inner">
                <h2 class="lottery__inner-title subtitle">{{subtitle}}</h2>
                <img class="lottery__inner-img img" :src="image">

                <div class="info_box">

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

            </div>
        </div>
    </section>
</template>

<script>
    import image from '../assets/img/5.jpg';
    export default {
        name: "Lottery",
        data () {
            return {
                subtitle: "Туры лотереи",
                image: image,
                info_boxs: [
                    {   title: 'Первый тур',
                        description: 'Выигрывают билеты, в которых пять чисел в любой из строк раньше других совпадут с номерами бочонков, вынутых ведущим из мешка. Раньше других — значит раньше, чем в других билетах, участвующих в тираже.',
                        icon: 1
                    },
                    {   title: 'Второй тур',
                        description: 'Здесь выигрывают те билеты, в которых оказались зачёркнуты все 15 чисел в верхнем или нижнем поле. Если это случилось на пятнадцатом ходу, поздравляем — вы выиграли джекпот.',
                        icon: 2
                    },
                    {   title: 'Третий и последующие туры',
                        description: 'На этих этапах выигрывают билеты, в которых раньше других совпадут все 30 чисел.',
                        icon: 3
                    },
                    {   title: '«Кубышка»',
                        description: 'Дополнительный тур, который проводят не всегда. В нём выигрывают билеты, где все невыпавшие в тираже числа оказываются в одном поле — верхнем или нижнем.',
                        icon: 4
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    .lottery {
        padding-top: 56px;
    }

    @media (max-width: 479px) {
        .lottery {
            padding-top: 34px;
        }
    }

</style>