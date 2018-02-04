
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var spanF = document.getElementById('close');
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
spanF.onclick = function() {
        modalfirst.style.display = "none";

}
var modalfirst = document.getElementById('financModal');
var firstbtn = document.getElementById('financeClick');
(function(){
firstbtn.onclick = function(){
	modalfirst.style.display="block";
}

window.onclick = function(event) {  // function to close window when it open .
    if (event.target == modalfirst) {
        modalfirst.style.display = "none";
        }
        if(event.target == modal){
        	modal.style.display = "none";
        }
         if(event.target == modelVol){
        	modelVol.style.display = "none";
        }
        if(event.target == helpModal){
        	helpModal.style.display = "none";
        }
      } 
 })();
// finance block
//volonterstvo

//volonterstering
var volClck = document.getElementById('clickVolontering');
var modelVol = document.getElementById('modalVol');

(function(){
volClck.onclick = function(){

	console.log(modelVol);
	modelVol.style.display = 'block';

}
})();
//volonterstering
//help
var clickHelp = document.getElementById('helpClick');
var helpModal = document.getElementById('helpModal');
(function(){
clickHelp.onclick = function(){

	console.log(helpModal);
	helpModal.style.display = 'block';

}
})();
//help 
