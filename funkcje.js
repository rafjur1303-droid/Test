//=====(ZAPIS)=====
function saveGame() {
    let save = {
        //=====(ZMIENNE DO ZAPISU)=====
        money: money,
        multiplier: multiplier,
        rebirth: rebirth,
        superRebirth: superRebirth,
        up1Count: up1Count,
        up1Cost: up1Cost,
        up1Boost: up1Boost,
        up2Count: up2Count,
        up2Cost: up2Cost,
        up2Boost: up2Boost,
        up2Active: up2Active,
        up3Count: up3Count,
        up3Cost: up3Cost,
        up3Boost: up3Boost,
        up4Count: up4Count,
        up4Cost: up4Cost,
        up4Boost: up4Boost,
        up4Active: up4Active,
        playTime: playTime,
        up5Count: up5Count,
        up5Cost: up5Cost,
        up5Boost: up5Boost,
        up5Active: up5Active,
        up6Count: up6Count,
        up6Cost: up6Cost,
        up6Boost: up6Boost,
        up7Count: up7Count,
        up7Cost: up7Cost,
        up7Boost: up7Boost,
        up8Count: up8Count,
        up8Cost: up8Cost,
        up8Boost: up8Boost,
        up8Active: up8Active,
        up9Count: up9Count,
        up9Active: up9Active,
        up9Cost : up9Cost,
    };
    localStorage.setItem("mojaGraSave", JSON.stringify(save));
    console.log("Gra zapisana!");
}
//=====(WCZYTYWANIE)=====
function loadGame() {
    let savedData = localStorage.getItem("mojaGraSave");
    if (savedData) {
        let save = JSON.parse(savedData);
        //=====(ZMIENNE DO WCZYTYWANIA)=====
        money = save.money;
        multiplier = save.multiplier;
        rebirth = save.rebirth;
        superRebirth = save.superRebirth;
        up1Count = save.up1Count;
        up1Cost = save.up1Cost;
        up1Boost = save.up1Boost;
        up2Count = save.up2Count;
        up2Cost = save.up2Cost;
        up2Boost = save.up2Boost;
        up2Active = save.up2Active;
        up3Count = save.up3Count;
        up3Cost = save.up3Cost;
        up3Boost = save.up3Boost;
        up4Count = save.up4Count;
        up4Cost = save.up4Cost;
        up4Boost = save.up4Boost;
        up4Active = save.up4Active;
        playTime = save.playTime;
        up5Count = save.up5Count;
        up5Cost = save.up5Cost;
        up5Boost = save.up5Boost;
        up5Active = save.up5Active;
        up6Count = save.up6Count;
        up6Cost = save.up6Cost;
        up6Boost = save.up6Boost;
        up7Count = save.up7Count;
        up7Cost = save.up7Cost;
        up7Boost = save.up7Boost;
        up8Count = save.up8Count;
        up8Cost = save.up8Cost;
        up8Boost = save.up8Boost;
        up8Active = save.up8Active;
        up9Count = save.up9Count;
        up9Active = save.up9Active;
        up9Cost = save.up9Cost;
        console.log("Gra wczytana!");
    }
}
//=====(HARD RESET)=====
function resetGame() {
    localStorage.removeItem("mojaGraSave");
    localStorage.removeItem("gameTheme");
    location.reload();
}
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
    if (multiplierInterval !== null) return;
    buyMultiplier();
    multiplierInterval = setInterval(function() {
        buyMultiplier();
    }, 130);
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
        multiplier += (rebirth + 1) * up2Boost * up3Boost * up7Boost;
        updateUI();
    }
}
//=====
function buyRebirth() {
    if (multiplier >= 100) {
        money = 0;
        let gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1) * up4Boost * up5Boost * up7Boost);
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
        let gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * up6Boost * up7Boost * up8Boost);
        if (isFinite(gain) && gain > 0) superRebirth += gain;
        rebirth = 0;
        updateUI();
    }
}
//=====(AUTO KASA)=====
setInterval(() => {
    money += (multiplier + 1) * up1Boost * up7Boost;
    updateUI();
}, 100);
//=====(AUTO ZAPIS)=====
setInterval(() => {
    saveGame();
}, 5000);
//=====(WCZYTYWANIE GRY)=====
window.onload = function() {
    loadGame();
}
//=====(CZAS GRY)=====
setInterval(() => {
    playTime += 0.1
    updateUI();
}, 100);