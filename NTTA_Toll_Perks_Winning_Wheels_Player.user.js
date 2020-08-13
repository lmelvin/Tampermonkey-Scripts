// ==UserScript==
// @name         NTTA Winning Wheels Auto Player
// @namespace    https://github.com/lmelvin
// @version      0.1
// @license      MIT
// @description  automates NTTA Toll Perks "Winning Wheels" game
// @author       lmelvin
// @match        https://tollperks.com/game/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const PLAY_BUTTON_SELECTOR = "#playBtn";
    const PLAY_AGAIN_BUTTON_SELECTOR = "#playAgainBtn";

    let playButton = document.querySelector(PLAY_BUTTON_SELECTOR);
    let playAgainButton = document.querySelector(PLAY_AGAIN_BUTTON_SELECTOR);

    setTimeout(play, 3000);

    function play() {
        if (playButton.style.display !== "none") {
            playButton.click();
        } else {
            playAgainButton.click(); // this seems to force a page reload, which is fine
        }

        // nothing fancy, just replay after 13 seconds
        // they may change the timing in the future so being a little conservative on the timing
        // At the end of the day, the animation and thus delay doesn't mean much. 
        // It sends a request to an API when the button is clicked and gets the game results back immediately
        // We could have just written an xhr request that sends along cookies to the API endpoint.
        setTimeout(play, 13000);
    }
})();