<template>
  <div>
    <Main/>
    <Navigation />
    <HowItsWork/>
    <Win/>
    <Tickets/>
    <HowPlay/>
    <Lottery />
    <Result />
    <TakeMoney />
  </div>
</template>

<script>


export default {

  name: 'Home',
  components: {

  }



}

</script>

<style>
  body {
    margin: 0;
    padding: 0;
    position: relative;
    color: #424242;
    font-size: 18px;
    line-height: 26px;
    text-align: left;
    font-family: 'Roboto', sans-serif;
  }

  p{
    padding: 0;
    margin: 0;
    /*margin-top: 18px;*/
  }

  a {
    color: #3670F9;
  }

  a:hover {
    color: #ED5E42;
  }

  a:visited {
    color: #9197A3;
  }

  .img {
    width: 100%;
    margin-top: 35px;
    margin-bottom: 41px;
  }

  .container {
    position: relative;
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .inner {
    position: relative;
    max-width: 740px;
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    font-size: 48px;
    color: #000000;
    font-family: 'Roboto Condensed', sans-serif;
    line-height: 1.2em;
  }

  .subtitle {
    font-size: 36px;
    line-height: 0;
    color:#040404;
    /*padding-bottom: 35px;*/
    font-family: 'Roboto Condensed', sans-serif;
    line-height: 1.2em;
  }

  .h3 {
    font-size: 30px;
    line-height: 0;
    color:#040404;
    font-family: 'Roboto Condensed', sans-serif;
    line-height: 1.2em;
  }


  .info_box__item {
    display: flex;
    justify-content: start;
  }

  .info_box__item-right {
    margin-left: 38px;
  }


  .info_box__ir-title {
    font-weight: 700;
  }

  .info_box__item-img {
    transition: all 0.8s ease-in-out;
    transform: translate3d(-30px, 0, 0);
    opacity: 0;
  }

  .info_box__item-img.active {
    transform: translate3d(0px, 0, 0);
    opacity: 1;
  }


  ul {
    margin: 0;
    padding: 0;
    font-weight: 700;
    display: flex;
    justify-content: space-around;
  }

  li {
    list-style-type: none;
  }

  ul li a{
    color: #919DA3;
    text-decoration: none;
    font-size: 16px;
  }


  ul li a:hover{
    color: #ED5E42;
  }

  ul li a:visited{
    color: #9197A3;
  }

  @media (max-width: 1024px) {
    .container {
      padding-left: 65px;
      padding-right: 65px;

    }
  }

  @media (max-width: 768px) {

    .container {
      padding-left: 60px;
      padding-right: 60px;

    }

    .inner {
      width: 100%;
    }

  }


  @media (max-width: 479px) {
    .img {
      margin-top: 30px;
      margin-bottom: 31px;
    }

    body {
      font-size: 16px;
    }
    .container {
      padding-left: 15px;
      padding-right: 15px;

    }

    .title {
      font-size: 27px;
    }

    .subtitle {
      font-size: 24px;
    }

    .h3 {
      font-size: 20px;
    }

    .info_box__item {
      display: block;
    }
    .info_box__ir-description {
      margin-top: 0px;
    }

    .info_box__item-img {
      height: 45px;
    }
    .info_box__item-left {
      float: left;
      margin-right: 10px;
    }
    .info_box__item-right {
      margin-left: 0px;
    }

  }
</style>
