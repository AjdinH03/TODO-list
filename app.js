const text = document.querySelector('#txt');
const btn = document.querySelector('#post');

btn.addEventListener('click', function(){
    let textValue = text.value;
    var hOne = document.createElement('h3');
    var tOne = document.createTextNode(textValue);
    hOne.appendChild(tOne);
    document.body.appendChild(hOne);
});



