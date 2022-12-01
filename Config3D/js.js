var config;
document.addEventListener("DOMContentLoaded", function() {
    //start the embed
    var config = new kbmax.ConfiguratorEmbed({
        kbmaxUrl: "https://itc-dev.kbmax.com",
        elementId: "viewer",
        configuratorId: 78,
        showHeader: false,
        showDrawer: false,
        showMove: false,
        bindToFormSelector: "",
        loadStyle: "image",
        loadImage: "",
    });
    /*
    config.setFields({
        "FieldName": "FieldValue"
    });   
    */
});

/* ************************************************ */
var selectedElement;
var indexElement;

const fcoque_images = [
    ["blanc", "beige", "bleu"],
    ["./images/coque_blanc.png", "./images/coque_beige.svg", "./images/coque_bleu.svg"]
];

const fmur_images = [ 
    ["chene", "bois_clair", "bois_blanc"],
    ["./images/chene.png", "./images/bois_clair.png", "./images/bois_blanc.png"]
];

const fpaillase_images = [
    ["chene", "bois_clair", "bois_blanc"],
    ["./images/chene.png", "./images/bois_clair.png", "./images/bois_blanc.png"]
];

const fsofa_images = [
    ["beige", "blanc"],
    ["./images/sofa_beige.png", "./images/sofa_blanc.png"]
];

const fsol_images = [
    ["parquet", "blanc"],
    ["./images/parquet.png", "./images/sol_blanc.png"]
];

const refElements_Textures = [ ["f_coque", "f_mur", "f_paillase", "f_sofa", "f_sol"], [fcoque_images, fmur_images, fpaillase_images, fsofa_images, fsol_images] ];

/* ************************************************ */

function setElement(param){
    selectedElement = param;

    var fun = (element) => element == selectedElement;
    indexElement = refElements_Textures[0].findIndex(fun);

    listTex = refElements_Textures[1][indexElement];

    console.log("***");
    console.log(selectedElement);
    console.log(indexElement);
    console.log(listTex);
    console.log("***");
    

    var htmlLigne = "";
    var htmlDiv = "";

    listTex[0].forEach(tex => {
        fun = (element) => element == tex;
        indexTex = listTex[0].findIndex(fun);

        htmlLigne = "<img class='texture' id='"+ refElements_Textures[0][indexElement]+"_"+tex +"' src='"+ listTex[1][indexTex] + "'/>";
        console.log(htmlLigne);

        htmlDiv += htmlLigne + "\n";
    });

    console.log(htmlDiv);

    document.getElementById('textureSelector').innerHTML = htmlDiv;
    
/*
    <img class ="texture" id = 'f_mur_chene' src="./images/chene.png"/>

*/

    //var texte ="";
    //listTex[0].forEach(element => { texte += element + " "; });
    //document.getElementById('aaa').textContent = texte;
}

$(document).ready(function(){

    $("#but_coque").click(function(){ setElement($(this).val()); });
    
    $("#but_sofa").click(function(){ setElement($(this).val()); });

    $("#but_paillase").click(function(){ setElement($(this).val()); });

    $("#but_mur").click(function(){ setElement($(this).val()); });

    $("#but_sol").click(function(){ setElement($(this).val()); });

});

setElement("f_coque");
