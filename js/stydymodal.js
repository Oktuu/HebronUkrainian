var btn = document.getElementById('clickModal');
var model = document.getElementById('modal');
btn.onclick = function(){
    model.style.display = 'block';

}
window.onclick = function(event) { 
    if (event.target == model) {
        model.style.display = "none";
        }
    };