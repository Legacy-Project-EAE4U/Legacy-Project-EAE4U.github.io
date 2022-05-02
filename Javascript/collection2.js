function createCollection() {
    var node = document.createElement('li');
    node.setAttribute('style', 'display: list-item;text-align: center;background-color: #820200;')
    var link = document.createElement('a');
    var img = document.createElement('img');
    img.src = data[4]
    img.classList.add('book-cover');

    var detail = document.createElement('div');
    detail.classList.add('book-detail');
    var author = document.createElement('p');
    author.innerText = data[1] + " " + data[2];
    var title = document.createElement('p');
    title.innerText = data[0];

    detail.append(title,author);
    link.append(img, detail);
    node.appendChild(link);
    document.getElementById('book-list').appendChild(node);

    slide_cont = document.getElementById('slide-con')
    var slide = document.createElement('div');
    slide.classList.add('mySlides');
    slide.classList.add('fade');
    var book = document.createElement('img');
    book.src = data[4];
    book.setAttribute('style', 'width:100%;height:280px;')
    var texte = document.createElement('div');
    texte.classList.add('text');
    texte.insertAdjacentText('beforeend', data[0]);
    slide.append(book, texte)
    slide_cont.insertBefore(slide, slide_cont.firstChild);
    
    var script = document.createElement('script');
    script.setAttribute('src', 'carousel.js')
    document.body.appendChild(script);
    
}