<template>
    <section class="lottery">
        <div class="container">
            <div class="lottery__inner inner">
                <h2 class="lottery__inner-title subtitle">Туры лотереи</h2>
                <img class="lottery__inner-img img" src="../assets/img/5.jpg">

                <div class="info_box">

                    <div class="info_box__items">

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group1.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Первый тур</p>
                                <p class="info_box__ir-description">Выигрывают билеты, в которых пять чисел в любой из строк раньше других совпадут с номерами бочонков, вынутых ведущим из мешка. Раньше других — значит раньше, чем в других билетах, участвующих
                                    в тираже.</p><br>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group2.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Второй тур</p>
                                <p class="info_box__ir-description">Здесь выигрывают те билеты, в которых оказались зачёркнуты все 15 чисел в верхнем или нижнем поле. Если это случилось на пятнадцатом ходу, поздравляем — вы выиграли джекпот.</p><br>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group3.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Третий и последующие туры</p>
                                <p class="info_box__ir-description">На этих этапах выигрывают билеты, в которых раньше других совпадут все 30 чисел.</p><br>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group4.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">«Кубышка»</p>
                                <p class="info_box__ir-description">Дополнительный тур, который проводят не всегда. В нём выигрывают билеты, где все невыпавшие в тираже числа оказываются в одном поле — верхнем или нижнем.</p><br>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Lottery"
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