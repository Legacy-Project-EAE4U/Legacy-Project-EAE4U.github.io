var input = document.getElementById('input');
input.addEventListener('change', function() {
    readXlsxFile(input.files[0]).then(function(data) {
        //Loop through elements
        var i = 0;
        data.map((row, index) => {
            //Create header for table
            if (i>0) {
                generateTableRows(row, i)
            }
            i++;
        });
    });
});
// Print Sheet head

function generateTableRows (data, loop) {
    var node = document.createElement('li');
    node.setAttribute('style', 'display: list-item;text-align: center;background-color: #820200;')
    var link = document.createElement('a');
    link.setAttribute('id', data[5].toString());
    link.setAttribute('href', 'book_info.html');//Change to actual link
    link.setAttribute('style', 'cursor: pointer; text-decoration: none;color:#fff;');
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
    var slide_link = document.createElement('a');
    slide_link.setAttribute('style', 'cursor:pointer;');
    var slide = document.createElement('div');
    slide.classList.add('mySlides');
    slide.classList.add('fade');
    var book = document.createElement('img');
    book.src = data[4];
    book.setAttribute('style', 'width:100%;height:260px;')
    var texte = document.createElement('div');
    texte.classList.add('text');
    texte.insertAdjacentText('beforeend', data[0]);
    slide.append(book, texte)
    slide_link.append(slide);
    slide_cont.insertBefore(slide_link, slide_cont.firstChild);
    
    var script = document.createElement('script');
    script.setAttribute('src', 'carousel.js');
    auto_slide = document.createElement("script");
    auto_slide.setAttribute('src', 'autoslide.js');
    document.body.appendChild(script);
    
}