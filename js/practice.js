console.log('this is js file');
// 2
function myClick() {
        
   document.body.style.backgroundColor='pink';
}
// 3
const makeRed = document.getElementById('make-red');
makeRed.onclick= makered;
// 4
function makered(){
   document.body.style.backgroundColor='red';
}
// 5
const purpleButton = document.getElementById('make-purple');
 
purpleButton.addEventListener('click',  function() {
document.body.style.backgroundColor='purple';
})
//6 mostly use
document.getElementById('btn-tomato').addEventListener('click',function () {
   document.body.style.backgroundColor='tomato';
})