1) применил встроенные пайпы на product.component.html:
	- для форматирования цены - Price: {{item.price | currency:'UAH':'?'}}
	- для форматирования даты обновления - Last update: {{item.lastUpdateTime | date:'yyyy-MM-dd'}}
	- для форматирования категории в верхний регистр - Category: {{item.category | uppercase }}
2) применил пользовательский пайп на product-list.component.html:
	- let product of products | orderBy:sortByProperty:sortByAscending