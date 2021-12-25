const text = document.querySelector('#txt');
const btn = document.querySelector('#post');
const clrBtn = document.querySelector('#clr');
const delBtn = document.querySelector('#delete');

const chores = [];



btn.addEventListener('click', function(){
    let textValue = text.value;
    var hOne = document.createElement('h3');
    var tOne = document.createTextNode(textValue);
    hOne.appendChild(tOne);
    document.body.appendChild(hOne);
    chores.push(hOne);
    clrBtn.addEventListener('click', function(){
        tOne.parentNode.remove();
        chores.pop();
    });
});









