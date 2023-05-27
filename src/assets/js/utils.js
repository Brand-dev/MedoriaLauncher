/**
 * @author Brand
 * @license CC-BY-NC 4.0 - https://creativecommons.org/licenses/by-nc/4.0/
 */

import config from './utils/config.js';
import database from './utils/database.js';
import logger from './utils/logger.js';
import slider from './utils/slider.js';

export {
    config as config,
    database as database,
    logger as logger,
    changePanel as changePanel,
    addAccount as addAccount,
    slider as Slider,
    accountSelect as accountSelect
}

function changePanel(id) {
    let panel = document.querySelector(`.${id}`);
    let active = document.querySelector(`.active`)
    if (active) active.classList.toggle("active");
    panel.classList.add("active");
}

function addAccount(data) {
    let div = document.createElement("div");
    div.classList.add("account");
    div.id = data.uuid;
    div.innerHTML = `
        <img class="account-image" src="https://visage.surgeplay.com/bust/${data.uuid}">
        <div>PSEUDO</div>
        <div class="account-name">${data.name}</div>
        <br>
        <div>UUID</div>
        <div class="account-uuid">${data.uuid}</div>
        <div class="account-delete">DÉCONNEXION</div>
    `
    document.querySelector('.accounts').appendChild(div);
}

function accountSelect(uuid) {
    let account = document.getElementById(uuid);
    let pseudo = account.querySelector('.account-uuid').innerText;
    let activeAccount = document.querySelector('.active-account')

    if (activeAccount) activeAccount.classList.toggle('active-account');
    account.classList.add('active-account');
    headplayer(pseudo);
}

function headplayer(pseudo) {
    document.querySelector(".player-head").style.backgroundImage = `url(https://visage.surgeplay.com/full/${pseudo})`;
}