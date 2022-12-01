const images = new Array(
    "../images/e1250.png",
    "../images/e1500.jpg",
    "../images/e1750.png"
);

function setElement(param){

  

    document.getElementById('src').src = images[param];
}

$(document).ready(function(){

    $("#e1250").click(function(){ setElement($(this).val()); });
    
    $("#e1500").click(function(){ setElement($(this).val()); });

    $("#e1750").click(function(){ setElement($(this).val()); });


});

//setElement(0);