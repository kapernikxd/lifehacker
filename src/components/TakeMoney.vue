<template>
    <section class="take_money">
        <div class="container">
            <div class="take_money__inner inner">
                <h2 class="result__inner-title subtitle">Как получить выигрыш</h2>
                <img class="take_money__inner-img img" src="../assets/img/8.jpg">
                <p>Чтобы получить выигрыш, нужно предъявить паспорт и лотерейный билет. Забрать приз можно в течение шести месяцев после обращения за выигрышем и подачей заявления.</p><br/>
                <p>Если в этот срок получить выигрыш по какой-то причине не удалось, нужно заполнить специальную форму, которая есть на <a href="">сайте «Столото»</a>, и обратиться в лотерейный центр в Москве. </p><br/>
                <p>В этом случае выигрыш будет ждать победителя ещё три года. Все выигрыши, за которыми никто не пришёл, перечисляются в государственный бюджет.</p><br/>

                <div class="info_box">

                    <h3 class="info_box__title h3">Где забрать деньги</h3>
                    <p class="info_box__subtitle">В зависимости от суммы есть несколько способов забрать приз:</p><br/>
                    <div class="info_box__items">

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group1.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Перевести на баланс кошелька «Столото» — до 100 000 рублей</p>
                                <p class="info_box__ir-description">Этот вариант подойдёт, если вы указали номер телефона при покупке. Зарегистрируйтесь на сайте с этим номером и выберите «Перевести выигрыш в кошелёк» на странице информации о билете. Эти деньги можно использовать для покупки новых билетов.</p><br/>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group2.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Забрать в точке продаж — до 2 000 рублей </p>
                                <p class="info_box__ir-description">Чтобы найти подходящую точку, нужно выбрать на странице с картой «Столото» пункт «Получить выигрыш» и ввести сумму выигрыша.</p><br/>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group3.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">Перевести на лицевой счёт — от 100 000 рублей </p>
                                <p class="info_box__ir-description">Для получения выигрыша нужно предоставить комплект документов и реквизиты счёта. Подробности — на сайте «Столото».</p><br/>
                            </div>
                        </div>

                        <div class="info_box__item">
                            <div class="info_box__item-left">
                                <img class="info_box__item-img" src="../assets/img/Group4.png">
                            </div>
                            <div class="info_box__item-right">
                                <p class="info_box__ir-title">В лотерейном центре «Столото» в Москве можно получить<br/>
                                    любую сумму. </p>
                            </div>
                        </div>

                    </div>
                </div>

                <h3 class="take_money__inner-title h3">Какие налоги придётся заплатить</h3><br/>
                <p>Налог с выигрыша для россиян составляет 13%. Для нерезидентов РФ — 30%. Если за год вы выиграли не больше 4 000 рублей, ничего платить не нужно.</p><br/>
                <p>Выплату от 15 000 рублей вы получите уже с удержанным налогом 13%. Если выигрыш меньше 15 000 рублей, нужно подать в налоговый орган по месту жительства декларацию, оформленную по форме 3-НДФЛ, а потом заплатить налог в банке или онлайн. То же самое придётся сделать для получения вещевого приза: например, автомобиля или квартиры. </p><br/>
                <p>Каждый выигрыш фиксируется в системе Федеральной налоговой службы. Все невостребованные выигрыши перечисляются в госбюджет, так как организатор лотерей — государство.</p><br/>

                <a class="take_money__button" href="">Играть в «Русское лото»</a>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TakeMoney"
    }
</script>

<style scoped>

    .take_money {
        padding-top: 47px;
        padding-bottom: 94px;
    }

    .take_money__inner-title {
        margin-top: 55px;
    }

    .take_money__button {
        margin-top: 71px;
        background-color: #ED5E42;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 24px;
        text-align: center;
        padding-top: 11px;
        padding-bottom: 7px;
        color: white;
        width: 100%;
        display: block;
        cursor: pointer;
        text-decoration: none;
    }

    .take_money__button:hover {
        color: white;
    }

    @media (max-width: 479px) {
        .take_money {
            padding-top: 34px;
            padding-bottom: 40px;
        }

        .take_money__button {
            font-size: 18px;
            margin-top: 36px;
        }
    }

</style>