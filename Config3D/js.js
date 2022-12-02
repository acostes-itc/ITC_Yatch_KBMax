/**
 * Fichier Javascript,
 * 
 * Utilisation : Communication entre l'Interface Web et le Configurateur KBMax
 * 
 * Fonctionnement :
 *      - Lorsque la page est  'ready' (voir doc jQuery) et lorsque un clique est effectué sur la page, le script récupère  les informations de la page
 * 
 *      - Ainsi si un clique est effectué sur un des éléments dont l'id est renseigné, l'appelle à la fonction se fait
 * 
 *      - Cette dernière communique avec le Configurateur KBMax
 * 
 * Bibliotèques :
 * 
 *  <script src="https://itc-dev.kbmax.com/embed.min.js"></script>
 *  <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
 * 
 * Auteur : Allan COSTES, acostes@itcelerator.fr
 */

/* ************************************************ */

var config; // Initialisation du configurateur KBMax (voir doc Epicor)
document.addEventListener("DOMContentLoaded", function() {
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
});

function setConfig(fieldName, fieldValue){ // Pour communniquer avec le configurateur KBMax

    if(fieldName == "f_coque") config.setFields({ "f_coque" : fieldValue });
    else if (fieldName == "f_mur") config.setFields({ "f_mur" : fieldValue });
    else if (fieldName == "f_paillase") config.setFields({ "f_paillase" : fieldValue });
    else if (fieldName == "f_sofa") config.setFields({ "f_sofa" : fieldValue });
    else if (fieldName == "f_sol") config.setFields({ "f_sol" : fieldValue });
    else if (fieldName == "f_vue") config.setFields({ "f_vue" : fieldValue}); console.log(fieldValue);
}

    /* ************************************************ */

function jEvents(){

    // Boutons de textures
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

    /* ************************************************ */
    const selectedColor = '#BEBEBE';
    const unselectedColor = '#F5F5F5';

    // Boutons de vues
    $("#cam1").click(function(){
        setConfig("f_vue", 1);
        document.getElementById('cam1').style.backgroundColor = selectedColor;
        document.getElementById('cam2').style.backgroundColor = unselectedColor;
        document.getElementById('cam3').style.backgroundColor = unselectedColor;
    });
    $("#cam2").click(function(){
        setConfig("f_vue", 2);
        document.getElementById('cam1').style.backgroundColor = unselectedColor;
        document.getElementById('cam2').style.backgroundColor = selectedColor;
        document.getElementById('cam3').style.backgroundColor = unselectedColor;
    });
    $("#cam3").click(function(){
        setConfig("f_vue", 3);
        document.getElementById('cam1').style.backgroundColor = unselectedColor;
        document.getElementById('cam2').style.backgroundColor = unselectedColor;
        document.getElementById('cam3').style.backgroundColor = selectedColor;

    });

}

/* ************************************************ */

// Initialisation de la fonction jEvents étant un 'Listener'
$(document).ready(function(){ jEvents();});
$(document).click(function(){ jEvents();});