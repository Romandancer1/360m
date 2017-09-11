<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&amp;subset=cyrillic" rel="stylesheet">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">
  <title>Document</title>
</head>
<body>

<header class="header__wrap">
  <div class="header">
    <button type="button" class="header__menu-toggle">
      <div class="header__humburger"></div>
    </button>
    <ul class="header__nav-list">
      <li class="header__nav-item">
        <a href="" class="header__nav-link">Главная</a>
      </li>
      <li class="header__nav-item">
        <a href="" class="header__nav-link">Новостройки</a>
      </li>
      <li class="header__nav-item">
        <a href="" class="header__nav-link">Квартиры</a>
      </li>
      <li class="header__nav-item">
        <a href="" class="header__nav-link">Ипотека</a>
      </li>
      <li class="header__nav-item">
        <a href="" class="header__nav-link">Виртуальные туры</a>
      </li>
      <li class="header__nav-item">
        <a href="" class="header__nav-link">Фотоотчеты</a>
      </li>
      <li class="header__nav-item">
        <a href="" class="header__nav-link">Видеообзоры</a>
      </li>
    </ul>
    <div class="header__logo-wrap">
      <a href="" class="header__logo">
        <img src="img/header-logo.png" alt="">
      </a>
      <div style="width: 15px;height: 24px;margin-right: 8px;background-image: url('img/icons/icons-sprite.png');background-position: -163px -35px;"></div> <!--div для иконки карты, пока стили задам через style, потому что непонятно кнопка это или просто картинка, если картинка, то сделаем псевдоэлементом-->
      <span>Иркутск</span>
    </div>
    <div class="header__login-block">
      <a href="" class="header__login-link">Для застройщиков</a>
      <a href="" class="header__login button green-btn medium-btn">Войти на сайт</a>
      <a href="" style="display: block;width: 24px;height: 23px;background-size: cover;background-image: url('img/icons/key.png');" class="fast_link"></a> <!--Такой костыль, потому что я не знаю за что будет отвечать эта кнопка-->
    </div>
  </div>
</header>

<div class="branding" >
  <a class="" href="#" >
    <img src="img/main/38sigma.jpg" alt="Брендирование Иркутск" title="">
  </a>
</div>

<main>
  <?php=renderTemplate("templates/index.php");?>
</main>

<footer class="footer__wrap">
  <div class="footer">
    <div class="footer__body">
      <nav class="footer__nav">
        <ul class="footer__nav-list">
          <li class="footer__nav-item">
            <a href="" class="footer__nav-link">Главная</a>
          </li>
          <li class="footer__nav-item">
            <a href="" class="footer__nav-link">Новостройки</a>
          </li>
          <li class="footer__nav-item">
            <a href="" class="footer__nav-link">Квартиры</a>
          </li>
          <li class="footer__nav-item">
            <a href="" class="footer__nav-link">Ипотека</a>
          </li>
          <li class="footer__nav-item">
            <a href="" class="footer__nav-link">Виртуальные туры</a>
          </li>
          <li class="footer__nav-item">
            <a href="" class="footer__nav-link">Фотоотчеты</a>
          </li>
          <li class="footer__nav-item">
            <a href="" class="footer__nav-link">Видеообзоры</a>
          </li>
        </ul>
      </nav>
      <div class="footer__right">
        <div class="footer__login-block">
          <a href="" class="footer__login-link">Для застройщиков</a>
          <a href="" class="footer__login button green-btn medium-btn">Войти на сайт</a>
        </div>
        <div class="footer__copyright">
          <ul class="footer__social-list">
            <li class="footer__social-item">
              <a href="" class="footer__social-link footer__social-link--vk">Вконтакте</a>
            </li>
            <li class="footer__social-item">
              <a href="" class="footer__social-link footer__social-link--fb">Facebook</a>
            </li>
            <li class="footer__social-item">
              <a href="" class="footer__social-link footer__social-link--utube">YouTube</a>
            </li>
            <li class="footer__social-item">
              <a href="" class="footer__social-link footer__social-link--inst">Instagram</a>
            </li>
          </ul>
          <a href="" class="footer__logo">
            <img src="img/logo.png" alt="">
          </a>
          <span class="footer__age-limit">0+</span>
        </div>
      </div>
    </div>
    <p class="footer__info">
      Информация о ценах на квартиры, размещенная на сайте 360m.ru не является публичной офертой.
      Проектные декларации строительных объектов размещаются на сайтах застройщиков. Сайт 360m.ru -
      информационный ресурс о новостройках. Все медийные материалы сайта находятся под защитой правообладателей,
      копирование материалов сайта без согласования с администрацией запрещается.
    </p>
  </div>
</footer>
</body>
</html>