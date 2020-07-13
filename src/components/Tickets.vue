<template>
    <section class="tickets">
        <div class="container">
            <div class="tickets__inner inner">
                <h2 class="tickets__inner-title subtitle">Где купить билет</h2>
                <img class="tickets__inner-img img" src="../assets/img/3.jpg">

                <div class="info_box">
                    <div class="info_box__items">

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group1-1.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">На сайте </p>
                                <p class="info_box__ir-description"><a href="">Здесь</a> можно найти билеты с любимыми числами и купить разом до 100 штук. А ещё доступна опция заказа пяти билетов, в которых будут все числа от 1 до 90.</p><br>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group1-2.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">В мобильном приложении</p>
                                <p class="info_box__ir-description">Удобно покупать билеты с <a href="">iOS и Android</a>, следить за результатами розыгрышей и смотреть трансляции.</p><br>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group1-3.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">В розничных точках продаж </p>
                                <p class="info_box__ir-description">На <a href="">карте</a> можно найти киоски, лотерейные аппараты и партнёрские магазины: «Почта России», «Связной», «Билайн», «МегаФон», «Ростелеком», Tele2, «Перекрёсток», «Пятёрочка», «Бристоль».</p><br>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group1-4.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Через SMS </p>
                                <p class="info_box__ir-description">Нужно найти на специальной <a href="">странице</a> идентификационный код лотереи и прислать его SMS-сообщением на номер 9999. Деньги спишутся с баланса мобильного телефона.</p><br>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="tickets__inner-bottom">
                    <div class="tickets__inner-bottom-line-top"></div>
                    <p class="tickets__ib-text">Продажи билетов на воскресный тираж закрываются в субботу в 17:20 по московскому времени.</p>
                    <div class="tickets__inner-bottom-line-bottom"></div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Tickets"
    }
</script>

<style scoped>
    .tickets {
        padding-top: 35px;
    }

    .tickets__inner-bottom {
        margin-top: 22px;
    }
    .tickets__inner-bottom-line-top {
        height: 3px;
        width: 50px;
        background-color: #ED5E42;
    }

    .tickets__ib-text {
        margin-top: 22px;
        font-weight: 700;
        margin-bottom: 22px;
    }

    .tickets__inner-bottom-line-bottom {
        height: 3px;
        width: 50px;
        background-color: #ED5E42;
    }

    @media (max-width: 479px) {
        .tickets {
            padding-top: 11px;
        }

    }

</style>