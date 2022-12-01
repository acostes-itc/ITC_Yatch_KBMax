var config;
document.addEventListener("DOMContentLoaded", function() {
    //start the embed
    config = new kbmax.ConfiguratorEmbed({
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

function setConfig(fieldName, fieldValue){
    console.log("*** "+fieldName+" : "+fieldValue+" ***");
    if(fieldName == "f_coque") config.setFields({ "f_coque" : fieldValue });
    else if (fieldName == "f_mur") config.setFields({ "f_mur" : fieldValue });
    else if (fieldName == "f_paillase") config.setFields({ "f_paillase" : fieldValue });
    else if (fieldName == "f_sofa") config.setFields({ "f_sofa" : fieldValue });
    else if (fieldName == "f_sol") config.setFields({ "f_sol" : fieldValue });
}

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

    /*
    console.log("***");
    console.log(selectedElement);
    console.log(indexElement);
    console.log(listTex);
    console.log("***");
    */

    var htmlLigne = "";
    var htmlDiv = "";

    listTex[0].forEach(tex => {
        fun = (element) => element == tex;
        indexTex = listTex[0].findIndex(fun);

        htmlLigne = "<img class='texture' id='"+ refElements_Textures[0][indexElement]+"_"+tex +"' src='"+ listTex[1][indexTex] + "'/>";
        console.log(htmlLigne);

        htmlDiv += htmlLigne + "\n";
    });

    document.getElementById('textureSelector').innerHTML = htmlDiv;
    // <img class ="texture" id = 'f_mur_chene' src="./images/chene.png"/>
}

$(document).ready(function(){

    $("#but_coque").click(function(){ setElement($(this).val()); });
    
    $("#but_sofa").click(function(){ setElement($(this).val()); });

    $("#but_paillase").click(function(){ setElement($(this).val()); });

    $("#but_mur").click(function(){ setElement($(this).val()); });

    $("#but_sol").click(function(){ setElement($(this).val()); });

    /* ********************************************************************** */

    $("#f_coque_blanc").click(function(){ setConfig("f_coque", "blanc"); });
    $("#f_coque_beige").click(function(){ setConfig("f_coque", "beige"); });
    $("#f_coque_bleu").click(function(){ setConfig("f_coque", "bleu"); });

    $("#f_mur_chene").click(function(){ setConfig("f_mur", "chene"); });
    $("#f_mur_bois_clair").click(function(){ setConfig("f_mur", "bois_clair"); });
    $("#f_mur_bois_blanc").click(function(){ setConfig("f_mur", "bois_blanc"); });

    $("#f_paillase_chene").click(function(){ setConfig("f_paillase", "chene"); });
    $("#f_paillase_bois_clair").click(function(){ setConfig("f_paillase", "bois_clair"); });
    $("#f_paillase_bois_blanc").click(function(){ setConfig("f_paillase", "bois_blanc"); });

    $("#f_sofa_beige").click(function(){ setConfig("f_sofa", "beige"); });
    $("#f_sofa_blanc").click(function(){ setConfig("f_sofa", "blanc"); });

    $("#f_sol_parquet").click(function(){ setConfig("f_sol", "parquet"); });
    $("#f_sol_blanc").click(function(){ setConfig("f_sol", "blanc"); });
    
});

setElement("f_sofa");
