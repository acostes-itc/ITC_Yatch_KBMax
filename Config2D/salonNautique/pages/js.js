const images = new Array(
    "../images/evasion.png",
    "../images/elegance.png",
    "../images/prestige.png"
);

function setElement(param){

    var html="<img src='"+images[param]+"'>"; //html

    document.getElementById('img').innerHTML = html;
}

$(document).ready(function(){

    $("#elegance").click(function(){ console.log('fsf'); setElement($(this).val()); });
    
    $("#evasion").click(function(){ setElement($(this).val()); });

    $("#prestige").click(function(){ setElement($(this).val()); });


});

//setElement(0);