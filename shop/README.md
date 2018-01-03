1) Реализованы поверхностные юнит тесты для тестирования AppComponent - app.component.shallow.spec.ts
2) Реализованы изолированные юнит тесты для тестирования OrderByPipe - order-by.pipe.spec.ts
3) Реализованы изолированные юнит тесты для тестирования ProductService - product.service.spec.ts
4) Реализованы интеграционные юнит тесты для тестирования ManageProductComponent - manage-products.component.spec.ts
5) Отчёт о покрытии кода находится в angular5_practice\shop\coverage

Для запуска локального backend-сервера, необходимо в папке shop\src\app\db выполнить команду:
json-server --watch db.json

Для запуска юнит тестов необходимо выполнить команду:
ng test