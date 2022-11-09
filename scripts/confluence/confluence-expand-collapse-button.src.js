// ==UserScript==
// @name         Expand/Collapse all colapsable content in Confluence Cloud pages
// @namespace    https://rafa.atlassian.net
// @version      0.1
// @description  Expands or Collapses all colapsable content in Confluence Cloud pages with one click button
// @author       Vahe Momjyan
// @match        https://rafa.atlassian.net/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
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

    let isExpanded = false;

    function loadAndAddAdditionalButton() {

        const continerDiv = document.querySelector(".PageContent");

        if(!continerDiv){
            setTimeout(loadAndAddAdditionalButton, 1000);
            return;
        }

        continerDiv.insertAdjacentHTML('beforeend', '' +
                                       '<div id="addition_custom_button">Expand</div>');

        const button = document.querySelector("#addition_custom_button");

        button.onclick = function(element){
            if(!isExpanded){
                button.innerText = "Collapse";
                expandAll();
            }else{
                button.innerText = "Expand";
                collapeseAll();
            }
            isExpanded=!isExpanded;
        };

    }

    function expandAll(){
        let expandableNodes = document.querySelectorAll('[aria-label="Expand content"]');

        for (let node of expandableNodes) {
            node.parentNode.click();
        }
    }

    function collapeseAll(){
        let expandableNodes = document.querySelectorAll('[aria-label="Collapse content"]');

        for (let node of expandableNodes) {
            node.parentNode.click();
        }
    }

    loadAndAddAdditionalButton();

    addGlobalStyle('#addition_custom_button { position: fixed;height: 24px;bottom: 30px;right: 212px;z-index: 1000;border-radius: 24px;font-size: 14px;border: none;outline: none;white-space: nowrap;background: rgb(101, 84, 192);padding: 10px 18px;box-shadow: rgb(9 30 66 / 25%) 0px 8px 16px -4px, rgb(9 30 66 / 31%) 0px 0px 1px;transition: all 0.8s ease-in-out 0s;display: inline-flex;-webkit-box-align: center;align-items: center;overflow: hidden; color: white; cursor: pointer;}');
})();