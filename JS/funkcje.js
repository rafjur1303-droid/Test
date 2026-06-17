//=====(ZAPIS)=====
function saveGame() {
    let save = {
        //=====(ZMIENNE DO ZAPISU)=====
        money: money,
        multiplier: multiplier,
        rebirth: rebirth,
        superRebirth: superRebirth,
        mega: mega,
        up1Count: up1Count,
        up1Cost: up1Cost,
        up1Boost: up1Boost,
        up1Cap: up1Cap,
        up2Count: up2Count,
        up2Cost: up2Cost,
        up2Boost: up2Boost,
        up2Active: up2Active,
        up3Count: up3Count,
        up3Cost: up3Cost,
        up3Boost: up3Boost,
        up3Cap: up3Cap,
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
        up6Cap: up6Cap,
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
        toUpgradeVis : toUpgradeVis,
        up3Vis : up3Vis,
        up4Vis : up4Vis,
        up5Vis : up5Vis,
        up6Vis : up6Vis,
        up7Vis : up7Vis,
        up8Vis : up8Vis,
        up9Vis : up9Vis,
        SRVis : SRVis,
        SRUpgVis : SRUpgVis,
        SRStatsVis : SRStatsVis,
        SRMultiVis : SRMultiVis,
        upgradeBlockVis : upgradeBlockVis,
        upgradesStatsVis : upgradesStatsVis,
        upgrade3StatsVis : upgrade3StatsVis,
        upgrade4StatsVis : upgrade4StatsVis,
        upgrade5StatsVis : upgrade5StatsVis,
        upgrade6StatsVis : upgrade6StatsVis,
        upgrade7StatsVis : upgrade7StatsVis,
        upgrade8StatsVis : upgrade8StatsVis,
        upgrade9StatsVis : upgrade9StatsVis,
        SRAlphabetVis : SRAlphabetVis,
        researchVis : researchVis ,
        researchers : researchers,
        researchersMoneyCost : researchersMoneyCost,
        researchersMultiplierCost : researchersMultiplierCost,
        researchersRebirthCost : researchersRebirthCost,
        researchersSuperRebirthCost : researchersSuperRebirthCost,
        researchSpeedMoneyCost : researchSpeedMoneyCost,
        researchSpeedMultiplierCost : researchSpeedMultiplierCost,
        researchSpeedRebirthCost : researchSpeedRebirthCost,
        researchSpeedSuperRebirthCost : researchSpeedSuperRebirthCost,
        researchSpeedMoneyMulti : researchSpeedMoneyMulti,
        researchSpeedMultiplierMulti : researchSpeedMultiplierMulti,
        researchSpeedRebirthMulti : researchSpeedRebirthMulti,
        researchSpeedSuperRebirthMulti : researchSpeedSuperRebirthMulti,
        currentResearchers : currentResearchers,
        researchTick : researchTick,
        up1Researchers : up1Researchers,
        up1TimeIs : up1TimeIs,
        up1TimeLeft : up1TimeLeft,
        up1Lv : up1Lv,
        up1Scale : up1Scale,
        up1BoostRe : up1BoostRe,
        up2Researchers : up2Researchers,
        up2TimeIs : up2TimeIs,
        up2TimeLeft : up2TimeLeft,
        up2Lv : up2Lv,
        up2Scale : up2Scale,
        up2BoostRe : up2BoostRe,
        up3Researchers : up3Researchers,
        up3TimeIs : up3TimeIs,
        up3TimeLeft : up3TimeLeft,
        up3Lv : up3Lv,
        up3Scale : up3Scale,
        up3BoostRe : up3BoostRe,
        up4Researchers : up4Researchers,
        up4TimeIs : up4TimeIs,
        up4TimeLeft : up4TimeLeft,
        up4Lv : up4Lv,
        up4Scale : up4Scale,
        up4BoostRe : up4BoostRe,
        up4BoostActive : up4BoostActive,
        up5Researchers : up5Researchers,
        up5TimeIs : up5TimeIs,
        up5TimeLeft : up5TimeLeft,
        up5Lv : up5Lv,
        up5Scale : up5Scale,
        up5BoostRe : up5BoostRe,
        up6Researchers : up6Researchers,
        up6TimeIs : up6TimeIs,
        up6TimeLeft : up6TimeLeft,
        up6Lv : up6Lv,
        up6Scale : up6Scale,
        up6BoostRe : up6BoostRe,
        up7Researchers : up7Researchers,
        up7TimeIs : up7TimeIs,
        up7TimeLeft : up7TimeLeft,
        up7Lv : up7Lv,
        up7Scale : up7Scale,
        up7BoostRe : up7BoostRe,
        up8Researchers : up8Researchers,
        up8TimeIs : up8TimeIs,
        up8TimeLeft : up8TimeLeft,
        up8Lv : up8Lv,
        up8Scale : up8Scale,
        up8BoostRe : up8BoostRe,
        up8BoostActive : up8BoostActive,
        up9Researchers : up9Researchers,
        up9TimeIs : up9TimeIs,
        up9TimeLeft : up9TimeLeft,
        up9Lv : up9Lv,
        up9Scale : up9Scale,
        up9BoostRe : up9BoostRe,
        up9BoostActive : up9BoostActive,
        up10Researchers : up10Researchers,
        up10TimeIs : up10TimeIs,
        up10TimeLeft : up10TimeLeft,
        up10Lv : up10Lv,
        up10Scale : up10Scale,
        up10BoostRe : up10BoostRe,
        up11Researchers : up11Researchers,
        up11TimeIs : up11TimeIs,
        up11TimeLeft : up11TimeLeft,
        up11Lv : up11Lv,
        up11Scale : up11Scale,
        up11BoostRe : up11BoostRe,
        up11BoostActive : up11BoostActive,
        up12Researchers : up12Researchers,
        up12TimeIs : up12TimeIs,
        up12TimeLeft : up12TimeLeft,
        up12Lv : up12Lv,
        up12Scale : up12Scale,
        up12BoostRe : up12BoostRe,
        up12BoostActive : up12BoostActive,
        multiplierGain : multiplierGain,
        multiplierGainTest : multiplierGainTest,
        multiplierTime : multiplierTime,
        multiplierTimeTest : multiplierTimeTest,
        multiplierGainResearchers : multiplierGainResearchers,
        multiplierGainTimeIs : multiplierGainTimeIs,
        multiplierGainTimeLeft : multiplierGainTimeLeft,
        multiplierScale : multiplierScale,
        multiplierTimeResearchers : multiplierTimeResearchers,
        multiplierTimeTimeIs : multiplierTimeTimeIs,
        multiplierTimeTimeLeft : multiplierTimeTimeLeft,
        multiplierGainLv : multiplierGainLv,
        multiplierTimeLv : multiplierTimeLv,
        rebirthGain : rebirthGain,
        rebirthGainTest : rebirthGainTest,
        rebirthTime : rebirthTime,
        rebirthTimeTest : rebirthTimeTest,
        rebirthGainResearchers : rebirthGainResearchers,
        rebirthGainTimeIs : rebirthGainTimeIs,
        rebirthGainTimeLeft : rebirthGainTimeLeft,
        rebirthScale : rebirthScale,
        rebirthTimeResearchers : rebirthTimeResearchers,
        rebirthTimeTimeIs : rebirthTimeTimeIs,
        rebirthTimeTimeLeft : rebirthTimeTimeLeft,
        rebirthGainLv : rebirthGainLv,
        rebirthTimeLv : rebirthTimeLv,
        superRebirthGain : superRebirthGain,
        superRebirthGainTest : superRebirthGainTest,
        superRebirthTime : superRebirthTime,
        superRebirthTimeTest : superRebirthTimeTest,
        superRebirthGainResearchers : superRebirthGainResearchers,
        superRebirthGainTimeIs : superRebirthGainTimeIs,
        superRebirthGainTimeLeft : superRebirthGainTimeLeft,
        superRebirthScale : superRebirthScale,
        superRebirthTimeResearchers : superRebirthTimeResearchers,
        superRebirthTimeTimeIs : superRebirthTimeTimeIs,
        superRebirthTimeTimeLeft : superRebirthTimeTimeLeft,
        superRebirthGainLv : superRebirthGainLv,
        superRebirthTimeLv : superRebirthTimeLv,
        up2ReVis : up2ReVis,
        up3ReVis : up3ReVis,
        up4ReVis : up4ReVis,
        up6ReVis : up6ReVis,
        up7ReVis : up7ReVis,
        up8ReVis : up8ReVis,
        up9ReVis : up9ReVis,
        up10ReVis : up10ReVis,
        up11ReVis : up11ReVis,
        up12ReVis : up12ReVis,
        MeVis : MeVis,
        rebirthAutomationVis : rebirthAutomationVis,
        superRebirthAutomationVis : superRebirthAutomationVis,
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
        mega = save.mega;
        up1Count = save.up1Count;
        up1Cost = save.up1Cost;
        up1Boost = save.up1Boost;
        up1Cap = save.up1Cap;
        up2Count = save.up2Count;
        up2Cost = save.up2Cost;
        up2Boost = save.up2Boost;
        up2Active = save.up2Active;
        up3Count = save.up3Count;
        up3Cost = save.up3Cost;
        up3Boost = save.up3Boost;
        up3Cap = save.up3Cap;
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
        up6Cap = save.up6Cap;
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
        toUpgradeVis = save.toUpgradeVis;
        up3Vis = save.up3Vis;
        up4Vis = save.up4Vis;
        up5Vis = save.up5Vis;
        up6Vis = save.up6Vis;
        up7Vis = save.up7Vis;
        up8Vis = save.up8Vis;
        up9Vis = save.up9Vis;
        SRVis = save.SRVis;
        SRUpgVis = save.SRUpgVis;
        SRStatsVis = save.SRStatsVis;
        SRMultiVis = save.SRMultiVis;
        researchVis = save.researchVis;
        upgradeBlockVis = save.upgradeBlockVis;
        upgradesStatsVis = save.upgradesStatsVis;
        upgrade3StatsVis = save.upgrade3StatsVis;
        upgrade4StatsVis = save.upgrade4StatsVis;
        upgrade5StatsVis = save.upgrade5StatsVis;
        upgrade6StatsVis = save.upgrade6StatsVis;
        upgrade7StatsVis = save.upgrade7StatsVis;
        upgrade8StatsVis = save.upgrade8StatsVis;
        upgrade9StatsVis = save.upgrade9StatsVis;
        SRAlphabetVis = save.SRAlphabetVis;
        researchers = save.researchers;
        currentResearchers = save.currentResearchers;
        researchersMoneyCost = save.researchersMoneyCost;
        researchersMultiplierCost = save.researchersMultiplierCost;
        researchersRebirthCost = save.researchersRebirthCost;
        researchersSuperRebirthCost = save.researchersSuperRebirthCost;
        researchSpeedMoneyCost = save.researchSpeedMoneyCost;
        researchSpeedMultiplierCost = save.researchSpeedMultiplierCost;
        researchSpeedRebirthCost = save.researchSpeedRebirthCost;
        researchSpeedSuperRebirthCost = save.researchSpeedSuperRebirthCost || 1;
        researchSpeedMoneyMulti = save.researchSpeedMoneyMulti || 1;
        researchSpeedMultiplierMulti = save.researchSpeedMultiplierMulti || 1;
        researchSpeedRebirthMulti = save.researchSpeedRebirthMulti || 1;
        researchSpeedSuperRebirthMulti = save.researchSpeedSuperRebirthMulti || 1;
        researchTick = save.researchTick;
        up1Researchers = save.up1Researchers;
        up1TimeIs = save.up1TimeIs;
        up1TimeLeft = save.up1TimeLeft;
        up1Lv = save.up1Lv;
        up1Scale = save.up1Scale;
        up1BoostRe = save.up1BoostRe;
        up2Researchers = save.up2Researchers;
        up2TimeIs = save.up2TimeIs;
        up2TimeLeft = save.up2TimeLeft;
        up2Lv = save.up2Lv;
        up2Scale = save.up2Scale;
        up2BoostRe = save.up2BoostRe;
        up3Researchers = save.up3Researchers;
        up3TimeIs = save.up3TimeIs;
        up3TimeLeft = save.up3TimeLeft;
        up3Lv = save.up3Lv;
        up3Scale = save.up3Scale;
        up3BoostRe = save.up3BoostRe;
        up4Researchers = save.up4Researchers;
        up4TimeIs = save.up4TimeIs;
        up4TimeLeft = save.up4TimeLeft;
        up4Lv = save.up4Lv;
        up4Scale = save.up4Scale;
        up4BoostRe = save.up4BoostRe;
        up4BoostActive = save.up4BoostActive;
        up5Researchers = save.up5Researchers;
        up5TimeIs = save.up5TimeIs;
        up5TimeLeft = save.up5TimeLeft;
        up5Lv = save.up5Lv;
        up5Scale = save.up5Scale;
        up5BoostRe = save.up5BoostRe;
        up6Researchers = save.up6Researchers;
        up6TimeIs = save.up6TimeIs;
        up6TimeLeft = save.up6TimeLeft;
        up6Lv = save.up6Lv;
        up6Scale = save.up6Scale;
        up6BoostRe = save.up6BoostRe;
        up7Researchers = save.up7Researchers;
        up7TimeIs = save.up7TimeIs;
        up7TimeLeft = save.up7TimeLeft;
        up7Lv = save.up7Lv;
        up7Scale = save.up7Scale;
        up7BoostRe = save.up7BoostRe;
        up8Researchers = save.up8Researchers;
        up8TimeIs = save.up8TimeIs;
        up8TimeLeft = save.up8TimeLeft;
        up8Lv = save.up8Lv;
        up8Scale = save.up8Scale;
        up8BoostRe = save.up8BoostRe;
        up8BoostActive = save.up8BoostActive;
        up9Researchers = save.up9Researchers;
        up9TimeIs = save.up9TimeIs;
        up9TimeLeft = save.up9TimeLeft;
        up9Lv = save.up9Lv;
        up9Scale = save.up9Scale;
        up9BoostRe = save.up9BoostRe;
        up9BoostActive = save.up9BoostActive;
        up10Researchers = save.up10Researchers;
        up10TimeIs = save.up10TimeIs;
        up10TimeLeft = save.up10TimeLeft;
        up10Lv = save.up10Lv;
        up10Scale = save.up10Scale;
        up10BoostRe = save.up10BoostRe;
        up11Researchers = save.up11Researchers;
        up11TimeIs = save.up11TimeIs;
        up11TimeLeft = save.up11TimeLeft;
        up11Lv = save.up11Lv;
        up11Scale = save.up11Scale;
        up11BoostRe = save.up11BoostRe;
        up11BoostActive = save.up11BoostActive;
        up12Researchers = save.up12Researchers;
        up12TimeIs = save.up12TimeIs;
        up12TimeLeft = save.up12TimeLeft;
        up12Lv = save.up12Lv;
        up12Scale = save.up12Scale;
        up12BoostRe = save.up12BoostRe;
        up12BoostActive = save.up12BoostActive;
        multiplierGain = save.multiplierGain;
        multiplierGainTest = save.multiplierGainTest;
        multiplierTime = save.multiplierTime;
        multiplierTimeTest = save.multiplierTimeTest;
        multiplierGainResearchers = save.multiplierGainResearchers;
        multiplierGainTimeIs = save.multiplierGainTimeIs;
        multiplierGainTimeLeft = save.multiplierGainTimeLeft;
        multiplierScale = save.multiplierScale;
        multiplierTimeResearchers = save.multiplierTimeResearchers;
        multiplierTimeTimeIs = save.multiplierTimeTimeIs;
        multiplierTimeTimeLeft = save.multiplierTimeTimeLeft;
        multiplierGainLv = save.multiplierGainLv;
        multiplierTimeLv = save.multiplierTimeLv;
        rebirthGain = save.rebirthGain;
        rebirthGainTest = save.rebirthGainTest;
        rebirthTime = save.rebirthTime;
        rebirthTimeTest = save.rebirthTimeTest;
        rebirthGainResearchers = save.rebirthGainResearchers;
        rebirthGainTimeIs = save.rebirthGainTimeIs;
        rebirthGainTimeLeft = save.rebirthGainTimeLeft;
        rebirthScale = save.rebirthScale;
        rebirthTimeResearchers = save.rebirthTimeResearchers;
        rebirthTimeTimeIs = save.rebirthTimeTimeIs;
        rebirthTimeTimeLeft = save.rebirthTimeTimeLeft;
        rebirthGainLv = save.rebirthGainLv;
        rebirthTimeLv = save.rebirthTimeLv;
        superRebirthGain = save.superRebirthGain;
        superRebirthGainTest = save.superRebirthGainTest;
        superRebirthTime = save.superRebirthTime;
        superRebirthTimeTest = save.superRebirthTimeTest;
        superRebirthGainResearchers = save.superRebirthGainResearchers;
        superRebirthGainTimeIs = save.superRebirthGainTimeIs;
        superRebirthGainTimeLeft = save.superRebirthGainTimeLeft;
        superRebirthScale = save.superRebirthScale;
        superRebirthTimeResearchers = save.superRebirthTimeResearchers;
        superRebirthTimeTimeIs = save.superRebirthTimeTimeIs;
        superRebirthTimeTimeLeft = save.superRebirthTimeTimeLeft;
        superRebirthGainLv = save.superRebirthGainLv;
        superRebirthTimeLv = save.superRebirthTimeLv;
        up2ReVis = save.up2ReVis;
        up3ReVis = save.up3ReVis;
        up4ReVis = save.up4ReVis;
        up6ReVis = save.up6ReVis;
        up7ReVis = save.up7ReVis;
        up8ReVis = save.up8ReVis;
        up9ReVis = save.up9ReVis;
        up10ReVis = save.up10ReVis;
        up11ReVis = save.up11ReVis;
        up12ReVis = save.up12ReVis;
        MeVis = save.MeVis;
        rebirthAutomationVis = save.rebirthAutomationVis;
        superRebirthAutomationVis = save.superRebirthAutomationVis;
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
        multiplier += (rebirth + 1) * up2Boost * up3Boost * up7Boost * up1BoostRe * up11BoostRe;
        updateUI();
    }
}
//=====
function buyRebirth() {
    if (multiplier >= 100) {
        money = 0;
        let gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1) * up4Boost * up5Boost * up7Boost * up1BoostRe * up4BoostRe * up11BoostRe);
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
        let gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * (mega + 1) * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe * up11BoostRe);
        if (isFinite(gain) && gain > 0) superRebirth += gain;
        rebirth = 0;
        updateUI();
    }
}
//=====
function buyMega() {
    if (superRebirth >= 100) {
        money = 0;
        multiplier = 0;
        rebirth = 0;
        let gain = round(((Math.log10(superRebirth + 1.01) - 1) ** 2.3) * up9BoostRe * up10BoostRe * up11BoostRe);
        if (isFinite(gain) && gain > 0) mega += gain;
        superRebirth = 0;
        updateUI();
    }
}
//=====(AUTO KASA)=====
setInterval(() => {
    money += (multiplier + 1) * up1Boost * up7Boost * up1BoostRe * up11BoostRe;
    updateUI();
}, 100);
//=====(AUTO ZAPIS)=====
setInterval(() => {
    saveGame();
}, 5000);
//=====(UPDATE EKRANU)=====
setInterval(() => {
    updateGame();
}, 250);
//=====(WCZYTYWANIE GRY)=====
window.onload = function() {
    loadGame();
    upgrade1Active();
    upgrade2Active();
    upgrade3Active();
    upgrade4Active();
    upgrade5Active();
    upgrade6Active();
    upgrade7Active();
    upgrade8Active();
    upgrade9Active();
    upgrade10Active();
    upgrade11Active();
    upgrade12Active();
    multiplierGainAutomationActive();
    multiplierTimeAutomationActive();
    rebirthGainAutomationActive();
    rebirthTimeAutomationActive();
    superRebirthGainAutomationActive();
    superRebirthTimeAutomationActive();
    mAutoGain();
    rAutoGain();
    srAutoGain();
}
//=====(CZAS GRY)=====
setInterval(() => {
    playTime += 0.1
    updateUI();
}, 100);