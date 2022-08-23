// ==UserScript==
// @name         Make OpsGenie Create Incident Description resizable
// @namespace    https://github.com/hammerhg/tampermonkey_scripts
// @version      0.1
// @description  Makes OpsGenie Create Incident Descripotion field resiable
// @author       Vahe Momjyan
// @match        https://webbfontaine.app.eu.opsgenie.com/incident/list
// @icon         https://www.google.com/s2/favicons?sz=64&domain=opsgenie.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('[name=description] {  resize: vertical ! important;}');

})();