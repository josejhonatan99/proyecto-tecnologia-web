$(document).ready(main);
var contador=1;
function main(){
$(".manu").click(function(){
    if(contador==1){
        $("nav").animate({
            left:"0"
        });
        contador=0;
    }
    else{
        contador=1;
        $("nav").animate({
            left:"-100%"
        });
    } 
});
}
(function(){
    var fecha=new Date();
    document.getElementById('resultado').value=fecha
}())