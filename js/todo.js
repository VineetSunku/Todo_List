var options = {
    strings: ['Enter you ', 'Enter Your TODO '],
    typeSpeed: 70
  };
  
  var typed = new Typed('.blink', options);
var add=document.getElementById('add');
var removeAll=document.getElementById('removeall');
var list=document.getElementById('list');

//remove all button
removeAll.onclick = function(){
    list.innerHTML='';

}


//adding a new list

add.onclick = function(){
    addlis(list);
document.getElementById('userinput').value='';
document.getElementById('userinput').focus();

}
function addlis(targetUl){
    var inputtext=document.getElementById('userinput').value;
    var li=document.createElement('li');
    var text =document.createTextNode(inputtext+' ');
    var removeButoon=document.createElement('button');

    if(inputtext !== '')
{
    removeButoon.className='btn btn-xs btn-danger';
    removeButoon.innerHTML='&times;';
    removeButoon.setAttribute('onclick','removeMe(this)');
    li.appendChild(text);
    li.appendChild(removeButoon);
    targetUl.appendChild(li);
}
else{
    alert("please enter a todo");
}
}

function removeMe(item){
    var p=item.parentElement;
    p.parentElement.removeChild(p);
}



