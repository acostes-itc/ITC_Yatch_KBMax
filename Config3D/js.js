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
    "blanc",
    "beige",
    "bleu"
];

const fmur_images = [
    "chene",
    "bois_clair",
    "bois_blanc"
];

const fpaillase_images = [
    "chene",
    "bois_clair",
    "bois_blanc"
];

const fsofa_images = [
    "beige",
    "blanc",
];

const fsol_images = [
    "parquet",
    "blanc",
];

const refElements_Textures = [ ["f_coque", "f_mur", "f_paillase", "f_sofa", "f_sol"], [fcoque_images, fmur_images, fpaillase_images, fsofa_images, fsol_images] ];

/* ************************************************ */

function setElement(param){
    selectedElement = param;

    const fun = (element) => element == selectedElement;
    indexElement = refElements_Textures[0].findIndex(fun);

    ar = refElements_Textures[1][indexElement];

    /*
    console.log(selectedElement);
    console.log(indexElement);
    console.log(ar);
    */

    var texte ="";
    ar.forEach(element => { texte += element + " "; });

    //document.getElementById('aaa').textContent = texte;
}

$(document).ready(function(){

    $("#but_coque").click(function(){ setElement($(this).val()); });
    
    $("#but_sofa").click(function(){ setElement($(this).val()); });

    $("#but_paillase").click(function(){ setElement($(this).val()); });

    $("#but_mur").click(function(){ setElement($(this).val()); });

    $("#but_sol").click(function(){ setElement($(this).val()); });

});

setElement("f_mur");


/*
    <img src="./images/chene.png" style="border-radius: 40%;" height="80" width="80"/>

*/
// <input type="image" src="../images/bois.png" style="border: double; border-radius: 50%;" height="170" width="170"/>