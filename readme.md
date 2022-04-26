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


### element.getElementBy

- document.getElementById или просто id
Если у элемента есть атрибут id, то мы можем получить его вызовом document.getElementById(id)

- elem.getElementsByTagName(tag):поиск элемента по тегу

- elem.getElementsByСlassName(class):поиск элемента по названию класса

- document.getElementsByName(name):поиск элемента по атрибуту name
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
    <ul id="products-list">
             <li class="products-list-item selected">ICE CREAM</li>
             <li class="products-list-item">CAYENNE CHOCOLATE</li>
             <li class="products-list-item">CAKE BATTER</li>
           </ul>
	
</body>
</html>

   ```
```js

let list = document.getElementById("products-list");

console.log(list);


// в консоль будет выведен весь элемент с вложенными в него узлами


let listByTag = document.getElementByTagName("ul");

console.log(listByTag);

// в консоль будет выведен этот же элемент но он был найден не по id а по названию его тега 




```

### querySelectorAll
Самый универсальный метод поиска ,возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.

### querySelector

Метод elem.querySelector(css)возвращает первый элемент, соответствующий данному CSS-селектору.

результат такой же, как при вызове elem.querySelectorAll(css)[0], но он сначала найдёт все элементы, а потом возьмёт первый, в то время как elem.querySelector найдёт только первый и остановится
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
    <ul id="products-list">
             <li class="products-list-item selected">ICE CREAM</li>
             <li class="products-list-item">CAYENNE CHOCOLATE</li>
             <li class="products-list-item">CAKE BATTER</li>
           </ul>
	
</body>
</html>

   ```
  ```js
   
   let listItem = document.querySelectorAll( 'li');
   
   console.log(listItem); 
   
   // В консоль будет выведен нодлист всех элементов с тегом 'li'
   
   let item = document.querySelector('li');
   
   console.log(item);
   
   // в консоль будет выведен первый элемент с тегом 'li';
   
    ```

fdhtphlrhlrhlr
   
### Разница между ними

Все методы "getElementsBy*" возвращают живую коллекцию. Такие коллекции всегда отражают текущее состояние документа и автоматически обновляются при его изменении.

Напротив, querySelectorAll возвращает статическую коллекцию. Это похоже на фиксированный массив элементов.

