1) �������� ���������� ����� �� product.component.html:
	- ��� �������������� ���� - Price: {{item.price | currency:'UAH':'?'}}
	- ��� �������������� ���� ���������� - Last update: {{item.lastUpdateTime | date:'yyyy-MM-dd'}}
	- ��� �������������� ��������� � ������� ������� - Category: {{item.category | uppercase }}
2) �������� ���������������� ���� �� product-list.component.html:
	- let product of products | orderBy:sortByProperty:sortByAscending