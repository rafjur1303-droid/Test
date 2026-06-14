//=====(ZMIANA MENU)=====
function changeMainTab(tabName) {
    document.getElementById('sub-menu-stats').style.display = 'none';
    document.getElementById('sub-menu-research').style.display = 'none';
    document.getElementById('sub-menu-settings').style.display = 'none';
    document.getElementById('panel-stats').style.display = 'none';
    document.getElementById('panel-research').style.display = 'none';
    document.getElementById('panel-settings').style.display = 'none';
    document.getElementById('sub-menu-' + tabName).style.display = 'flex';
    document.getElementById('panel-' + tabName).style.display = 'block';
    let buttons = document.getElementsByClassName('side-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-main');
    }
    event.target.classList.add('active-main');
    let defaultSub = {
        'stats': 'stats',
        'research': 'researchers',
        'settings': 'settings'
    };
    changeSubTab(tabName, defaultSub[tabName]);
}
function changeSubTab(mainTabName, subTabName) {
    let currentPanel = document.getElementById('panel-' + mainTabName);
    let subPanels = currentPanel.getElementsByClassName('sub-game-panel');
    for (let i = 0; i < subPanels.length; i++) {
        subPanels[i].style.display = 'none';
    }
    document.getElementById('sub-panel-' + mainTabName + '-' + subTabName).style.display = 'block';
    let menuBar = document.getElementById('sub-menu-' + mainTabName);
    let subButtons = menuBar.getElementsByClassName('sub-btn');
    for (let i = 0; i < subButtons.length; i++) {
        subButtons[i].classList.remove('active-sub');
    }
    if(event && event.target && event.target.classList.contains('sub-btn')) {
        event.target.classList.add('active-sub');
    } else {
        subButtons[0].classList.add('active-sub');
    }
}
//=====(FUNKCJA DO FORMATOWANIA)=====
function formatujLiczbe(n) {
    if (n === null || n === undefined || isNaN(n)) return "0";
    if (!isFinite(n)) return "∞";
    n = Number(n); // upewnij się że to liczba, nie string
    if (n < 1000) {
        return parseFloat(n.toFixed(2));
    } else if (n < 1000000) {
        return parseFloat((n / 1000).toFixed(2)) + "k";
    } else if (n < 1000000000) {
        return parseFloat((n / 1000000).toFixed(2)) + "m";
    } else {
        let wykladnik = Math.floor(Math.log10(n));
        let mantysa = parseFloat((n / Math.pow(10, wykladnik)).toFixed(2));
        return mantysa + "e" + wykladnik;
    }
}
//=====(ZAOKRONGLANIE)=====
function round(liczba) {
    return Math.round(liczba * 100) / 100;
}
//=====(KUPOWANIE PODCZAS TRZYMANIA)=====
let multiplierInterval = null;
function startAutoBuyMultiplier(e) {
    if (e) {
        if (e.type === 'touchstart' && e.cancelable) {
            e.preventDefault();
        }
    }
    if (multiplierInterval !== null) return;
    buyMultiplier();
    multiplierInterval = setInterval(function() {
        buyMultiplier();
    }, 140);
}
function stopAutoBuyMultiplier() {
    if (multiplierInterval !== null) {
        clearInterval(multiplierInterval);
        multiplierInterval = null;
    }
}
//=====(FUNKCJE PRZYCISKÓW)=====
function buyMultiplier() {
    if (money >= 100) {
        money -= 100;
        multiplier += 1 * (rebirth + 1);
        updateUI();
    }
}
//=====
function buyRebirth() {
    if (multiplier >= 100) {
        money = 0;
        let gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1));
        if (isFinite(gain) && gain > 0) rebirth += gain;
        multiplier = 0;
        updateUI();
    }
}
//=====
function buySuperRebirth() {
    if (rebirth >= 100) {
        money = 0;
        multiplier = 0;
        let gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2));
        if (isFinite(gain) && gain > 0) superRebirth += gain;
        rebirth = 0;
        updateUI();
    }
}
//=====(AUTO KASA)=====
setInterval(() => {
    money += (multiplier + 1);
    updateUI();
}, 100);