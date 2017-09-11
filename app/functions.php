<?php

/**
 * Метод для вывода шаблона на страницу
 * @param $template_url // url шаблона
 * @param $data // массив данных, для текущего шаблона
 * @return string // готовый шаблон
 */
function renderTemplate($template_url, $data = false) {
    // Проверка на существование url
    if (!file_exists($template_url)) {
        return "";
    }

    // Буферизация вывода с сжатием
    ob_start("ob_gzhandler");

    // Проверка на существование данных
    if ($data) {
        // Импорт переменных из массива данных в текущую таблицу символов
        extract($data);
    }

    // Вызов шаблона
    require_once ($template_url);

    // Сброс буфера вывода
    ob_get_flush();
}