<template>
    <section class="result">
        <div class="container">
            <div class="result__inner inner">
                <h2 class="result__inner-title subtitle">Где узнать результаты</h2>
                <img class="result__inner-img img" src="../assets/img/6.jpg">

                <p>Иногда участники лотереи покупают билеты и забывают про них. По иронии именно эти билеты часто оказываются счастливыми, а представители лотереи неделями ищут победителей.</p>
                <br>
                <p>Такой прецедент случился с пенсионеркой Натальей Власовой из посёлка Панино Воронежской области, которая сорвала джекпот и выиграла 506 миллионов рублей. Победительница уже хотела выкинуть залежавшийся на серванте билет из прошлого тиража, но случайно обнаружила, что он выигрышный. Вот что можно сделать, чтобы не попасть в такую ситуацию:</p>
                <br>
                <div class="info_box">

                    <div class="info_box__items">

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group1.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Посмотреть трансляцию</p>
                                <p class="info_box__ir-description">Проверенный способ узнать результат раньше всех и хорошая семейная традиция. Трансляция розыгрышей проходит каждое воскресенье в программе «У нас выигрывают!» на НТВ.</p> <br/>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group2.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Проверить числа в архиве тиражей </p>
                                <p class="info_box__ir-description"><a href="">Найдите</a> номер тиража, указанный на билете, и узнайте, какие бочонки ведущий вынул из мешка во время трансляции. Либо введите номер билета на <a href="">специальной странице</a> и проверьте, счастливый ли он.</p> <br/>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group3.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Получить SMS</p>
                                <p class="info_box__ir-description">Если при покупке билета вы указывали номер телефона, на него придёт сообщение о выигрыше свыше 15 тысяч рублей.</p> <br/>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group4.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Проверить результаты в мобильном приложении</p>
                                <p class="info_box__ir-description">Программа для <a href="">iOS и Android</a> предоставляет архив тиражей и присылает push-уведомления со свежими результатами. Также в приложении можно покупать билеты, изучать программу предстоящих розыгрышей и смотреть трансляции.</p> <br/> <br/>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group5.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Спросить результаты в точках распространения билетов</p>
                                <p class="info_box__ir-description">На случай, если под рукой ни компьютера, ни телефона, а ждать совсем не хочется.</p> <br/> <br/>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group6.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Узнать в газете</p>
                                <p class="info_box__ir-description">Результаты тиражей публикуются по средам в «Аргументах и фактах».</p> <br/> <br/>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group7.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Узнать по телефону </p>
                                <p class="info_box__ir-description">Номер круглосуточной горячей линии: 8 (900) 555 00 55.</p> <br/>
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
        name: "Result"
    }
</script>

<style scoped>
    .result {
        padding-top: 50px;
    }

    @media (max-width: 479px) {
        .result {
            padding-top: 32px;
        }
    }
</style>