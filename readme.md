## Document object model(DOM)
</hr>

- каждый HTML-тег является объектом. 

- Вложенные теги являются «детьми» родительского элемента. 

- Текст, который находится внутри тега, также является объектом.

- Все объекты доступны при помощи JavaScript, их можно  использовать для изменения страницы.


## Element.innerHTML и Node.innerText
</hr>

- InnerHTML содержит в себе все вложенные в данный элемент элементы  вместе с текстовыми узлами. 

- InnerText содержит в себе только содержимое всех текстовых узлов данного элемента.


Пример

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script defer src=""></script>
</head>
<body>
    <ul class="products-list">
             <li class="products-list-item selected">ICE CREAM</li>
             <li class="products-list-item">CAYENNE CHOCOLATE</li>
             <li class="products-list-item">CAKE BATTER</li>
           </ul>
	
</body>
</html>

   ```

```js

let list = document.querySelector('.products-list');

console.log(list.innerHTML);

// Результат:
// <li class="products-list-item selected">ICE CREAM</li>
//<li class="products-list-item">CAYENNE CHOCOLATE</li>
//<li class="products-list-item">CAKE BATTER</li>

console.log(list.innerText);
// Результат: 
// ICE CREAM
// CAYENNE CHOCOLATE
// CAKE BATTER


```
## Как обратиться к элементу на странице:


### document.getElementBy













