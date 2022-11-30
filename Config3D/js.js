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

const fcoque_images = new Array(
    "blanc",
    "beige",
    "bleu"
);

const fmur_images = new Array(
    "chene",
    "bois_clair",
    "bois_blanc"
);

const fpaillase_images = new Array(
    "chene",
    "bois_clair",
    "bois_blanc"
);

const fsofa_images = new Array(
    "beige",
    "blanc",
);

const fsol_images = new Array(
    "parquet",
    "blanc",
);

const refElements_Images = new Array(["f_coque", "f_mur", "f_paillase", "f_sofa", "f_sol"], [fcoque_images, fmur_images, fpaillase_images, fsofa_images, fsol_images])

/* ************************************************ */

function setElement(param){
    selectedElement = param;
    
    var texte;

    

    document.getElementById('aaa').textContent = texte;
}

$(document).ready(function(){

    $("#but_coque").click(function(){ setElement($(this).val()); });
    
    $("#but_sofa").click(function(){ setElement($(this).val()); });

    $("#but_paillase").click(function(){ setElement($(this).val()); });

    $("#but_mur").click(function(){ setElement($(this).val()); });

    $("#but_sol").click(function(){ setElement($(this).val()); });

});

//setElement("")