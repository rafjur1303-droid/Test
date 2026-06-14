//=====(AKTUALIZACJA EKRANU)=====
function updateUI() {
    let multiplier_gain = (rebirth + 1) * up2Boost * up3Boost * up7Boost
    let test_rebirth_gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1) * up4Boost * up5Boost * up7Boost);
    let rebirth_gain = 0;
    if (test_rebirth_gain >= 1 && multiplier >= 100) {
        rebirth_gain = test_rebirth_gain;
    } else {
        rebirth_gain = 0;
    }
    let test_superRebirth_gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * up6Boost * up7Boost * up8Boost);
    let superRebirth_gain = 0;
    if (test_superRebirth_gain >= 1 && rebirth >= 100) {
        superRebirth_gain = test_superRebirth_gain.toFixed(2);
    } else {
        superRebirth_gain = 0;
    }
//=====($)=====
    document.getElementById("money_amount").innerText =
        "Money: " + formatujLiczbe(money) + "$";
//=====(MULTIPLIER)=====
    document.getElementById("multiplier_amount").innerText =
        "Multiplier: " + formatujLiczbe(multiplier);
    document.getElementById("multiplier_gain").innerText =
        formatujLiczbe(multiplier_gain);
    let btnMultiplier = document.getElementById("btn-multiplier");
    if (money < 100) {
        btnMultiplier.classList.add("btn-locked");
    } else {
        btnMultiplier.classList.remove("btn-locked");
    }
//=====(REBIRTH)=====
    document.getElementById("rebirth_amount").innerText =
        "Rebirth: " + formatujLiczbe(rebirth);
    document.getElementById("rebirth_gain").innerText =
        formatujLiczbe(rebirth_gain);
    let btnRebirth = document.getElementById("btn-rebirth");
    if (multiplier < 100) {
        btnRebirth.classList.add("btn-locked");
    } else {
        btnRebirth.classList.remove("btn-locked");
    }
//=====(SUPER REBIRTH)=====
    document.getElementById("superRebirth_amount").innerText =
        "Super Rebirth: " + formatujLiczbe(superRebirth);
    document.getElementById("superRebirth_gain").innerText =
        formatujLiczbe(superRebirth_gain);
    let btnSuperRebirth = document.getElementById("btn-superRebirth");
    if (rebirth < 100) {
        btnSuperRebirth.classList.add("btn-locked");
    } else {
        btnSuperRebirth.classList.remove("btn-locked");
    }
    //=====(UPGRADE 1)=====
    document.getElementById("up1_cost").innerText =
        formatujLiczbe(up1Cost);
    document.getElementById("up1_count").innerText =
        up1Count;
    document.getElementById("up1_boost").innerText =
        round(up1Boost);
    document.getElementById("up1_cap").innerText =
        up1Cap;
    let btnUp1 = document.getElementById("btn-Up-1");
    if (money < up1Cost || up1Count == up1Cap) {
        btnUp1.classList.add("btn-locked");
    } else {
        btnUp1.classList.remove("btn-locked");
    }
//=====(UPGRADE 2)=====
    let test_up2_boost = 0.6 + 0.6 * Math.log10(Math.log10(Math.max(1, money) * 13 + 1) * 13)
    if (up2Active == true){
        up2Boost = test_up2_boost;
    }
    document.getElementById("up2_count").innerText =
        up2Count;
    document.getElementById("up2_boost").innerText =
        round(test_up2_boost);
    let btnUp2 = document.getElementById("btn-Up-2");
    if (money < 250000 || up2Count == 1) {
        btnUp2.classList.add("btn-locked");
    } else {
        btnUp2.classList.remove("btn-locked");
    }
//=====(UPGRADE 3)=====
    document.getElementById("up3_cost").innerText =
        formatujLiczbe(up3Cost);
    document.getElementById("up3_count").innerText =
        up3Count;
    document.getElementById("up3_boost").innerText =
        round(up3Boost);
    document.getElementById("up3_cap").innerText =
        up3Cap;
    let btnUp3 = document.getElementById("btn-Up-3");
    if (multiplier < up3Cost || up3Count == up3Cap) {
        btnUp3.classList.add("btn-locked");
    } else {
        btnUp3.classList.remove("btn-locked");
    }
//=====(UPGRADE 4)=====
    let test_up4_boost = round(1.16 + Math.log10(Math.log10(Math.max(1, playTime)**0.6 + 1.1) + 1.2))
    if (up4Active == true) {
        up4Boost = test_up4_boost;
    }
    document.getElementById("up4_count").innerText =
        up4Count;
    document.getElementById("up4_boost").innerText =
        round(test_up4_boost);
    let btnUp4 = document.getElementById("btn-Up-4");
    if (multiplier < 4000 || up4Count == 1) {
        btnUp4.classList.add("btn-locked");
    } else {
        btnUp4.classList.remove("btn-locked");
    }
//=====(UPGRADE 5)=====
    let test_up5_boost = round(1 + 0.35 * Math.log10(Math.max(1,rebirth))**0.35)
    if (up5Active == true) {
        up5Boost = test_up5_boost;
    }
    document.getElementById("up5_count").innerText =
        up5Count;
    document.getElementById("up5_boost").innerText =
        round(test_up5_boost);
    let btnUp5 = document.getElementById("btn-Up-5");
    if (rebirth < 20 || up5Count == 1) {
        btnUp5.classList.add("btn-locked");
    } else {
        btnUp5.classList.remove("btn-locked");
    }
//=====(UPGRADE 6)=====
    document.getElementById("up6_cost").innerText =
        formatujLiczbe(up6Cost);
    document.getElementById("up6_count").innerText =
        up6Count;
    document.getElementById("up6_boost").innerText =
        round(up6Boost);
    document.getElementById("up6_cap").innerText =
        up6Cap;
    let btnUp6 = document.getElementById("btn-Up-6");
    if (rebirth < up6Cost || up6Count == up6Cap) {
        btnUp6.classList.add("btn-locked");
    } else {
        btnUp6.classList.remove("btn-locked");
    }
//=====(UPGRADE 7)=====
    document.getElementById("up7_cost").innerText =
        formatujLiczbe(up7Cost);
    document.getElementById("up7_count").innerText =
        up7Count;
    document.getElementById("up7_boost").innerText =
        round(up7Boost);
    let btnUp7 = document.getElementById("btn-Up-7");
    if (superRebirth < up7Cost || up7Count == 5) {
        btnUp7.classList.add("btn-locked");
    } else {
        btnUp7.classList.remove("btn-locked");
    }
//=====(UPGRADE 8)=====
    let test_up8_boost = 1 + ((up1Count + up2Count + up3Count + up4Count + up5Count + up6Count + up7Count + up8Count + up9Count) * 0.02)
    if (up8Active == true) {
        up8Boost = test_up8_boost;
    }
    document.getElementById("up8_count").innerText =
        up8Count;
    document.getElementById("up8_boost").innerText =
        round(test_up8_boost);
    let btnUp8 = document.getElementById("btn-Up-8");
    if (superRebirth < 18 || up8Count == 1) {
        btnUp8.classList.add("btn-locked");
    } else {
        btnUp8.classList.remove("btn-locked");
    }
//=====(UPGRADE 9)=====
    document.getElementById("up9_count").innerText =
        up9Count;
    let btnUp9 = document.getElementById("btn-Up-9");
    if (superRebirth < 100 || up9Count == 1) {
        btnUp9.classList.add("btn-locked");
    } else {
        btnUp9.classList.remove("btn-locked");
    }
//=====(UPGRADE STATS)=====
    document.getElementById("money-upg").innerText =
        "Money: " + formatujLiczbe(money) + "$";
    document.getElementById("multiplier-upg").innerText =
        "Multiplier: " + formatujLiczbe(multiplier);
    document.getElementById("rebirth-upg").innerText =
        "Rebirth: " + formatujLiczbe(rebirth);
    document.getElementById("superRebirth-upg").innerText =
        "Super Rebirth: " + formatujLiczbe(superRebirth);
}