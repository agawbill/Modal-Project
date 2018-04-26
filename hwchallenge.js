var modal=document.getElementsByClassName('modal')[0]
var button=document.getElementsByClassName('button')[0]
// document.addEventListener("DOMContentLoaded", function(){
//     alert="hello"
//   })



setTimeout(popup, 5000)
//
function popup(){
  modal.style.display="block"
}

button.addEventListener("click", function(){
  modal.style.display="none"
})
