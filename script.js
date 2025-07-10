document.getElementById('next').onclick=function(){
var list=document.querySelectorAll('#slid');
document.getElementById('imag-slid').appendChild(list[0]);
}
document.getElementById('prev').onclick=function(){
var list=document.querySelectorAll('#slid');
document.getElementById('imag-slid').prepend(list[list.length -1]);



}