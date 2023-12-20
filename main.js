var button = document.getElementById('no')
var height = window.innerHeight - 50
var width = window.innerWidth - 50

button.addEventListener('mouseover', function(){
    button.style.position ="absolute"
    button.style.top = Math.random() *height + "px"
    button.style.left = Math.random() *height + "px"
    button.style.right = Math.random() *height + "px"



})