//Create caroussel elements//
var slide = document.createElement('div');
slide.classList.add('mySlides fade');
var book = document.createElement('img');
book.src = 'Data Test/Book Cover/1.jpg';
book.setAttribute('style', 'width:100%;')
var texte = document.createElement('div');
text.classList.add('text');
text.createTextNode("Caption Here");
slide.append(book, texte);
document.getElementsByTagName('slide-con').appendChild(slide);