function myfunction() {
    window.location.href="http://127.0.0.1:5500/index2.html";
}
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var name = document.getElementById('fname').value;
if(!regName.test(name)){
    alert('Invalid name given.');
}else{
    alert('Valid name given.');
}