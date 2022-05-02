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
    var img = document.createElement('img');
    img.src = 'Book Cover/' + loop.toString()+ '.jpg'
    img.classList.add('book-cover');
    img.setAttribute('style', 'width: 100%;max-width: 160px;background-color: #820200;');

    var detail = document.createElement('div')
    detail.classList.add('book-detail')
    var author = document.createElement('p');
    author.innerText = data[1] + " " + data[2];
    var title = document.createElement('p');
    title.innerText = data[0];

    detail.append(title,author);
    link.append(img, detail);
    node.appendChild(link);
    document.getElementById('book-list').appendChild(node);
    
    
}