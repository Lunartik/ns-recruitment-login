// ==UserScript==
// @name         One-Click Login For Recruitment
// @version      1.0
// @namespace    thisismoon
// @description  Allows for immediate switching to another nation after recruitment TG has been sent
// @author       Moon
// @match        https://www.nationstates.net/*page=telegrams*
// @match        https://www.nationstates.net/*page=compose_telegram*
// ==/UserScript==

(async function() {
    'use strict';

    const puppetNames = ['', '', '']; // put your region names here
    const puppets = ['', '', '']; // put your nation names here
    const puppetPass = ['', '', '']; //put your nation passwords here

    const headerContent = document.getElementsByTagName('h1')[0];

    for (let i = 0; i < puppets.length; i++) {
        const nationName = puppetNames[i];
        const nationPass = puppetPass[i];
        const nationString = puppets[i];

        const linky = document.createElement('a');
        linky.href = `/page=telegrams?nation=${nationString}&password=${nationPass}&logging_in=1`;
        linky.target = '_parent';
        linky.textContent = nationName;
        linky.style.fontSize = '20px';
        linky.style.padding = '15px 25px';
        linky.style.backgroundColor = '#363636ff';
        linky.style.color = 'white';
        linky.style.display = 'inline-block';
        linky.style.margin = '5px'

        headerContent.appendChild(linky);

        headerContent.appendChild(linky);

        linky.prepend(document.createElement('br'));
    }

})()
