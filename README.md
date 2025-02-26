# Планировщик дел

[Деплой](https://edelsid.github.io/toDo/)

## Использованные технологии

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)

## Реализованные требования
- Поле ввода принимает текст (но не пустые строки) и при нажатии на Enter создает новую незавершенную задачу,
- При клике на задачу ее статус меняется на законченный и обратно,
- Задачи можно сортировать по статусу: незавершенные (active), завершенные (completed), или отобразить все сразу (all).
- Все завершенные задачи можно удалить разом, нажав на кнопку Clear completed,
- В нижнем левом углу отображается счетчик незавершенных задач,
- Основной функционал приложения покрыт тестами.

## Дополнительный функционал
- Сделана обработка ошибок на случай неполадок в программе или если пользователь пытается создать задачу при пустой строке ввода.
- Сделан адаптив для разных экранов.

## Инструкция по запуску
```
npm i
npm run dev
```

## Команда для запуска тестов
```
npm run test
```