const images = new Array(
    "../images/evasion.jpg",
    "../images/elegance.jpg",
    "../images/prestige.jpg"
);

function setElement(param){

  

    document.getElementById('src').src = images[param];
}

$(document).ready(function(){

    $("#elegance").click(function(){ setElement($(this).val()); });
    
    $("#evasion").click(function(){ setElement($(this).val()); });

    $("#prestige").click(function(){ setElement($(this).val()); });


});

//setElement(0);