//=====(AKTUALIZACJA EKRANU)=====
function updateUI() {
    let multiplier_gain = (rebirth + 1) * up2Boost * up3Boost * up7Boost * up1BoostRe
    let test_rebirth_gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1) * up4Boost * up5Boost * up7Boost * up1BoostRe * up4BoostRe * up11BoostRe);
    let rebirth_gain = 0;
    if (test_rebirth_gain >= 1 && multiplier >= 100) {
        rebirth_gain = test_rebirth_gain;
    } else {
        rebirth_gain = 0;
    }
    let test_superRebirth_gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * (mega + 1) * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe * up11BoostRe);
    let superRebirth_gain = 0;
    if (test_superRebirth_gain >= 1 && rebirth >= 100) {
        superRebirth_gain = test_superRebirth_gain.toFixed(2);
    } else {
        superRebirth_gain = 0;
    }
    let test_mega_gain = round(((Math.log10(superRebirth + 1.01) - 1) ** 2.3) * up9BoostRe * up10BoostRe * up11BoostRe * up11BoostRe);
    let mega_gain = 0;
    if (test_mega_gain >= 1 && superRebirth >= 100) {
        mega_gain = test_mega_gain.toFixed(2);
    } else {
        mega_gain = 0;
    }
    let multiplierMulti = (rebirth + 1) * up2Boost * up3Boost * up7Boost * up1BoostRe * up11BoostRe;
    let rebirthMulti= (superRebirth + 1) * up4Boost * up5Boost * up7Boost * up1BoostRe * up4BoostRe * up11BoostRe;
    let superRebirthMulti = (mega + 1) * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe * up11BoostRe;
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
//=====(MEGA)=====
    document.getElementById("mega_amount").innerText =
        "Mega: " + formatujLiczbe(mega);
    document.getElementById("mega_gain").innerText =
        formatujLiczbe(mega_gain);
    let btnMega = document.getElementById("btn-mega");
    if (superRebirth < 100) {
        btnMega.classList.add("btn-locked");
    } else {
        btnMega.classList.remove("btn-locked");
    }
    //=====(UPGRADE 1)=====
    document.getElementById("up1_cost").innerText =
        formatujLiczbe(up1Cost);
    document.getElementById("up1_count").innerText =
        up1Count;
    document.getElementById("up1_boost").innerText =
        round(up1Boost);
    document.getElementById("up1_boost_stats_info").innerText =
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
    document.getElementById("up2_boost_stats_info").innerText =
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
    document.getElementById("up3_boost_stats_info").innerText =
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
    document.getElementById("up4_boost_stats_info").innerText =
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
    document.getElementById("up5_boost_stats_info").innerText =
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
    document.getElementById("up6_boost_stats_info").innerText =
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
    document.getElementById("up7_boost_stats_info").innerText =
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
    document.getElementById("up8_boost_stats_info").innerText =
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
//=====(STATS INFO)=====
    document.getElementById("multiplier-multi").innerText =
        formatujLiczbe(multiplierMulti);
    document.getElementById("rebirth-multi").innerText =
        formatujLiczbe(rebirthMulti);
    document.getElementById("superRebirth-multi").innerText =
        formatujLiczbe(superRebirthMulti);
    document.getElementById("research-money-cost").innerText =
        formatujLiczbe(researchersMoneyCost);
//=====(RESEARCHERS)=====
    //=====($)=====
    let elMoneyCost = document.getElementById("research-money-cost");
    if(elMoneyCost) elMoneyCost.innerText = formatujLiczbe(researchersMoneyCost || researchSpeedMoneyCost);

    let btnResMoney = document.getElementById("money-research");
    if (btnResMoney) {
        if (money < (researchersMoneyCost || researchSpeedMoneyCost)) btnResMoney.classList.add("btn-locked");
        else btnResMoney.classList.remove("btn-locked");
    }

    //=====(M)=====
    let elMultiCost = document.getElementById("research-multiplier-cost");
    if(elMultiCost) elMultiCost.innerText = formatujLiczbe(researchersMultiplierCost || researchSpeedMultiplierCost);

    let btnResMultiplier = document.getElementById("multiplier-research");
    if (btnResMultiplier) {
        if (multiplier < (researchersMultiplierCost || researchSpeedMultiplierCost)) btnResMultiplier.classList.add("btn-locked");
        else btnResMultiplier.classList.remove("btn-locked");
    }

    //=====(R)=====
    let elRebirthCost = document.getElementById("research-rebirth-cost");
    if(elRebirthCost) elRebirthCost.innerText = formatujLiczbe(researchersRebirthCost || researchSpeedRebirthCost);

    let btnResRebirth = document.getElementById("rebirth-research");
    if (btnResRebirth) {
        if (rebirth < (researchersRebirthCost || researchSpeedRebirthCost)) btnResRebirth.classList.add("btn-locked");
        else btnResRebirth.classList.remove("btn-locked");
    }

    //=====(SR)=====
    let elSRCost = document.getElementById("research-superRebirth-cost");
    if(elSRCost) elSRCost.innerText = formatujLiczbe(researchersSuperRebirthCost || researchSpeedSuperRebirthCost);

    let btnResSuperRebirth = document.getElementById("superRebirth-research");
    if (btnResSuperRebirth) {
        if (superRebirth < (researchersSuperRebirthCost || researchSpeedSuperRebirthCost)) btnResSuperRebirth.classList.add("btn-locked");
        else btnResSuperRebirth.classList.remove("btn-locked");
    }

    //=====($ SPEED)=====
    let elSpeedMoneyCost = document.getElementById("research-speed-money-cost");
    if(elSpeedMoneyCost) elSpeedMoneyCost.innerText = formatujLiczbe(researchSpeedMoneyCost);

    let btnSpeedMoney = document.getElementById("money-multi-research");
    if (btnSpeedMoney) {
        if (money < researchSpeedMoneyCost) btnSpeedMoney.classList.add("btn-locked");
        else btnSpeedMoney.classList.remove("btn-locked");
    }

    //=====(M SPEED)=====
    let elSpeedMultiCost = document.getElementById("research-speed-multiplier-cost");
    if(elSpeedMultiCost) elSpeedMultiCost.innerText = formatujLiczbe(researchSpeedMultiplierCost);

    let btnSpeedMultiplier = document.getElementById("multiplier-multi-research");
    if (btnSpeedMultiplier) {
        if (multiplier < researchSpeedMultiplierCost) btnSpeedMultiplier.classList.add("btn-locked");
        else btnSpeedMultiplier.classList.remove("btn-locked");
    }

    //=====(R SPEED)=====
    let elSpeedRebirthCost = document.getElementById("research-speed-rebirth-cost");
    if(elSpeedRebirthCost) elSpeedRebirthCost.innerText = formatujLiczbe(researchSpeedRebirthCost);

    let btnSpeedRebirth = document.getElementById("rebirth-multi-research");
    if (btnSpeedRebirth) {
        if (rebirth < researchSpeedRebirthCost) btnSpeedRebirth.classList.add("btn-locked");
        else btnSpeedRebirth.classList.remove("btn-locked");
    }

    //=====(SR SPEED)=====
    let elSpeedSRCost = document.getElementById("research-speed-superRebirth-cost");
    if(elSpeedSRCost) elSpeedSRCost.innerText = formatujLiczbe(researchSpeedSuperRebirthCost);

    let btnSpeedSuperRebirth = document.getElementById("superRebirth-multi-research");
    if (btnSpeedSuperRebirth) {
        if (superRebirth < researchSpeedSuperRebirthCost) btnSpeedSuperRebirth.classList.add("btn-locked");
        else btnSpeedSuperRebirth.classList.remove("btn-locked");
    }
    if (researchers == 1) {
        document.getElementById("researchers-amount").innerText =
            "You have " + formatujLiczbe(researchers) + " researcher";
    }
    else {
        document.getElementById("researchers-amount").innerText =
            "You have " + formatujLiczbe(researchers) + " researchers";
    }
    if (researchers == 1) {
        document.getElementById("researchers-amount").innerText =
            "You have " + formatujLiczbe(researchers) + " researcher";
    } else {
        document.getElementById("researchers-amount").innerText =
            "You have " + formatujLiczbe(researchers) + " researchers";
    }
    document.getElementById("money-speed").innerText = researchSpeedMoneyMulti.toFixed(2);
    document.getElementById("multiplier-speed").innerText = researchSpeedMultiplierMulti.toFixed(2);
    document.getElementById("rebirth-speed").innerText = researchSpeedRebirthMulti.toFixed(2);
    document.getElementById("superRebirth-speed").innerText = researchSpeedSuperRebirthMulti.toFixed(2);
    document.getElementById("upgrades-speed").innerText = researchSpeedUpgradesMulti.toFixed(2);
    let łącznaPrędkość = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    document.getElementById("suma-speed").innerText = łącznaPrędkość.toFixed(2);
//=====(NAPISY RESEARCH)=====
    document.getElementById("money-re").innerText =
        "Money: " + formatujLiczbe(money) + "$";
    document.getElementById("multiplier-re").innerText =
        "Multiplier: " + formatujLiczbe(multiplier);
    document.getElementById("rebirth-re").innerText =
        "Rebirth: " + formatujLiczbe(rebirth);
    document.getElementById("superRebirth-re").innerText =
        "Super Rebirth: " + formatujLiczbe(superRebirth);
//=====(SPENDING GRID)=====
    document.querySelectorAll(".researchers-teraz").forEach(el => el.innerText = currentResearchers);
    document.querySelectorAll(".researchers-suma").forEach(el => el.innerText = researchers);
    document.querySelectorAll(".research-speed-okno").forEach(el => el.innerText = formatujLiczbe(łącznaPrędkość));
    document.querySelectorAll(".researchers-spending").forEach(el => el.innerText = researchersSpending);
//=====(RESEARCH UPGRADE 1)=====
    document.getElementById("up1-lv").innerText =
        up1Lv;
    document.getElementById("up1-boost").innerText =
        formatujLiczbe(up1BoostRe);
    document.getElementById("re1_boost_stats_info").innerText =
        formatujLiczbe(up1BoostRe);
    document.getElementById("up1-time-is").innerText =
        formatujLiczbe(up1TimeIs);
    document.getElementById("up1-time-left").innerText =
        formatujLiczbe(up1TimeLeft);
    document.getElementById("up1-researchers").innerText =
        up1Researchers;
    let progress1 = (up1TimeIs / up1TimeLeft) * 100;
    document.getElementById("up1-progress").style.width = progress1 + "%";
//=====(RESEARCH UPGRADE 2)=====
    document.getElementById("up2-lv").innerText =
        up2Lv;
    document.getElementById("up2-boost").innerText =
        formatujLiczbe(up2BoostRe);
    document.getElementById("re2_boost_stats_info").innerText =
        formatujLiczbe(up2BoostRe);
    document.getElementById("up2-time-is").innerText =
        formatujLiczbe(up2TimeIs);
    document.getElementById("up2-time-left").innerText =
        formatujLiczbe(up2TimeLeft);
    document.getElementById("up2-researchers").innerText =
        up2Researchers;
    let progress2 = (up2TimeIs / up2TimeLeft) * 100;
    document.getElementById("up2-progress").style.width = progress2 + "%";
//=====(RESEARCH UPGRADE 3)=====
    document.getElementById("up3-lv").innerText =
        up3Lv;
    document.getElementById("up3-boost").innerText =
        formatujLiczbe(up3BoostRe);
    document.getElementById("re3_boost_stats_info").innerText =
        formatujLiczbe(up3BoostRe);
    document.getElementById("up3-time-is").innerText =
        formatujLiczbe(up3TimeIs);
    document.getElementById("up3-time-left").innerText =
        formatujLiczbe(up3TimeLeft);
    document.getElementById("up3-researchers").innerText =
        up3Researchers;
    let progress3 = (up3TimeIs / up3TimeLeft) * 100;
    document.getElementById("up3-progress").style.width = progress3 + "%";
//=====(RESEARCH UPGRADE 4)=====
    let test_up4_boost_re = round((1.1 + 0.28 * Math.log10(Math.log10(Math.max(1, superRebirth) + 5) + 0.35)) ** (1 + (up4Lv / 4)));
    if (up4BoostActive == true) {
        up4BoostRe = test_up4_boost_re;
    }
    document.getElementById("up4-lv").innerText =
        up4Lv;
    document.getElementById("up4-boost").innerText =
        formatujLiczbe(up4BoostRe);
    document.getElementById("re4_boost_stats_info").innerText =
        formatujLiczbe(up4BoostRe);
    document.getElementById("up4-time-is").innerText =
        formatujLiczbe(up4TimeIs);
    document.getElementById("up4-time-left").innerText =
        formatujLiczbe(up4TimeLeft);
    document.getElementById("up4-researchers").innerText =
        up4Researchers;
    let progress4 = (up4TimeIs / up4TimeLeft) * 100;
    document.getElementById("up4-progress").style.width = progress4 + "%";
//=====(RESEARCH UPGRADE 5)=====
    document.getElementById("up5-lv").innerText =
        up5Lv;
    document.getElementById("up5-boost").innerText =
        formatujLiczbe(up5BoostRe);
    document.getElementById("re5_boost_stats_info").innerText =
        formatujLiczbe(up5BoostRe);
    document.getElementById("up5-time-is").innerText =
        formatujLiczbe(up5TimeIs);
    document.getElementById("up5-time-left").innerText =
        formatujLiczbe(up5TimeLeft);
    document.getElementById("up5-researchers").innerText =
        up5Researchers;
    let progress5 = (up5TimeIs / up5TimeLeft) * 100;
    document.getElementById("up5-progress").style.width = progress5 + "%";
//=====(RESEARCH UPGRADE 6)=====
    document.getElementById("up6-lv").innerText =
        up6Lv;
    document.getElementById("up6-boost").innerText =
        formatujLiczbe(up6BoostRe);
    document.getElementById("re6_boost_stats_info").innerText =
        formatujLiczbe(up6BoostRe);
    document.getElementById("up6-time-is").innerText =
        formatujLiczbe(up6TimeIs);
    document.getElementById("up6-time-left").innerText =
        formatujLiczbe(up6TimeLeft);
    document.getElementById("up6-researchers").innerText =
        up6Researchers;
    let progress6 = (up6TimeIs / up6TimeLeft) * 100;
    document.getElementById("up6-progress").style.width = progress6 + "%";
//=====(RESEARCH UPGRADE 7)=====
    document.getElementById("up7-lv").innerText =
        up7Lv;
    document.getElementById("up7-boost").innerText =
        formatujLiczbe(up7BoostRe);
    document.getElementById("re7_boost_stats_info").innerText =
        formatujLiczbe(up7BoostRe);
    document.getElementById("up7-time-is").innerText =
        formatujLiczbe(up7TimeIs);
    document.getElementById("up7-time-left").innerText =
        formatujLiczbe(up7TimeLeft);
    document.getElementById("up7-researchers").innerText =
        up7Researchers;
    let progress7 = (up7TimeIs / up7TimeLeft) * 100;
    document.getElementById("up7-progress").style.width = progress7 + "%";
//=====(RESEARCH UPGRADE 8)=====
    let test_up8_boost_re = round((1.1 + 0.28 * Math.log10(Math.log10(Math.max(1, money) + 5) + 0.35)) ** (1 + (up8Lv / 4)));
    if (up8BoostActive == true) {
        up8BoostRe = test_up8_boost_re;
    }
    researchSpeedUpgradesMulti = up8BoostRe * up6BoostRe;
    document.getElementById("up8-lv").innerText =
        up8Lv;
    document.getElementById("up8-boost").innerText =
        formatujLiczbe(up8BoostRe);
    document.getElementById("re8_boost_stats_info").innerText =
        formatujLiczbe(up8BoostRe);
    document.getElementById("up8-time-is").innerText =
        formatujLiczbe(up8TimeIs);
    document.getElementById("up8-time-left").innerText =
        formatujLiczbe(up8TimeLeft);
    document.getElementById("up8-researchers").innerText =
        up8Researchers;
    let progress8 = (up8TimeIs / up8TimeLeft) * 100;
    document.getElementById("up8-progress").style.width = progress8 + "%";
//=====(RESEARCH UPGRADE 9)=====
    researchSpeedUpgradesMulti = up8BoostRe * up6BoostRe;
    document.getElementById("up9-lv").innerText =
        up9Lv;
    document.getElementById("up9-boost").innerText =
        formatujLiczbe(up9BoostRe);
    document.getElementById("re9_boost_stats_info").innerText =
        formatujLiczbe(up9BoostRe);
    document.getElementById("up9-time-is").innerText =
        formatujLiczbe(up9TimeIs);
    document.getElementById("up9-time-left").innerText =
        formatujLiczbe(up9TimeLeft);
    document.getElementById("up9-researchers").innerText =
        up9Researchers;
    let progress9 = (up9TimeIs / up9TimeLeft) * 100;
    document.getElementById("up9-progress").style.width = progress9 + "%";
//=====(RESEARCH UPGRADE 10)=====
    document.getElementById("up10-lv").innerText =
        up10Lv;
    document.getElementById("up10-boost").innerText =
        formatujLiczbe(up10BoostRe);
    document.getElementById("re10_boost_stats_info").innerText =
        formatujLiczbe(up10BoostRe);
    document.getElementById("up10-time-is").innerText =
        formatujLiczbe(up10TimeIs);
    document.getElementById("up10-time-left").innerText =
        formatujLiczbe(up10TimeLeft);
    document.getElementById("up10-researchers").innerText =
        up10Researchers;
    let progress10 = (up10TimeIs / up10TimeLeft) * 100;
    document.getElementById("up10-progress").style.width = progress10 + "%";
//=====(RESEARCH UPGRADE 11)=====
    let test_up11_boost_re = round((1 + 0.33 * Math.log10(Math.log10(Math.max(1, mega) + 5) + 0.35)) ** (1 + (up11Lv / 5)));
    if (up11BoostActive == true && mega > 0) {
        up11BoostRe = test_up11_boost_re;
    }
    document.getElementById("up11-lv").innerText =
        up11Lv;
    document.getElementById("up11-boost").innerText =
        formatujLiczbe(up11BoostRe);
    document.getElementById("re11_boost_stats_info").innerText =
        formatujLiczbe(up11BoostRe);
    document.getElementById("up11-time-is").innerText =
        formatujLiczbe(up11TimeIs);
    document.getElementById("up11-time-left").innerText =
        formatujLiczbe(up11TimeLeft);
    document.getElementById("up11-researchers").innerText =
        up11Researchers;
    let progress11 = (up11TimeIs / up11TimeLeft) * 100;
    document.getElementById("up11-progress").style.width = progress11 + "%";
//=====(RESEARCH UPGRADE 12)=====
    document.getElementById("up12-lv").innerText =
        up12Lv;
    document.getElementById("up12-time-is").innerText =
        formatujLiczbe(up12TimeIs);
    document.getElementById("up12-time-left").innerText =
        formatujLiczbe(up12TimeLeft);
    document.getElementById("up12-researchers").innerText =
        up12Researchers;
    if (up12Lv == 0){
        let progress12 = (up12TimeIs / up12TimeLeft) * 100;
        document.getElementById("up12-progress").style.width = progress12 + "%";
    }
    else{
        document.getElementById("up12-progress").style.width = "0%";
        up12TimeLeft = "MAX";
        up12TimeIs = "MAX";
    }
//=====(AUTO MULTIPLIER GAIN)=====
    document.getElementById("multiplier-time-is").innerText =
        formatujLiczbe(multiplierGainTimeIs);
    document.getElementById("multiplier-time-left").innerText =
        formatujLiczbe(multiplierGainTimeLeft);
    document.getElementById("multiplier-researchers").innerText =
        multiplierGainResearchers;
    document.getElementById("multiplier-gain").innerText =
        multiplierGain;
    document.getElementById("multiplier-gain-1").innerText =
        multiplierGain;
    document.getElementById("multiplier-gain-test").innerText =
        multiplierGainTest;
    if (multiplierGainTest != "MAX"){
        let progressMultiplierGain = (multiplierGainTimeIs / multiplierGainTimeLeft) * 100;
        document.getElementById("multiplier-progress").style.width = progressMultiplierGain + "%";
    }
    else{
        document.getElementById("multiplier-progress").style.width = "0%";
        multiplierGainTimeLeft= "MAX";
        multiplierGainTimeIs = "MAX";
    }
    document.getElementById("multiplier-time-time-is").innerText =
        formatujLiczbe(multiplierTimeTimeIs);
    document.getElementById("multiplier-time-time-left").innerText =
        formatujLiczbe(multiplierTimeTimeLeft);
    document.getElementById("multiplier-time-researchers").innerText =
        multiplierTimeResearchers;
    if (multiplierTimeTest != "MAX") {
        document.getElementById("multiplier-time").innerText =
            round(multiplierTime);
        document.getElementById("multiplier-time-1").innerText =
            round(multiplierTime);
        document.getElementById("multiplier-time-test").innerText =
            round(multiplierTimeTest);
    }
    else {
        document.getElementById("multiplier-time").innerText =
            round(multiplierTime);
        document.getElementById("multiplier-time-1").innerText =
            round(multiplierTime);
        document.getElementById("multiplier-time-test").innerText =
            multiplierTimeTest;
    }
    if (multiplierTimeTest != "MAX"){
        let progressMultiplierTime = (multiplierTimeTimeIs / multiplierTimeTimeLeft) * 100;
        document.getElementById("multiplier-time-progress").style.width = progressMultiplierTime + "%";
    }
    else{
        document.getElementById("multiplier-time-progress").style.width = "0%";
        multiplierTimeTimeLeft= "MAX";
        multiplierTimeTimeIs = "MAX";
    }
//=====(AUTO REBIRTH GAIN)=====
    document.getElementById("rebirth-time-is").innerText =
        formatujLiczbe(rebirthGainTimeIs);
    document.getElementById("rebirth-time-left").innerText =
        formatujLiczbe(rebirthGainTimeLeft);
    document.getElementById("rebirth-researchers").innerText =
        rebirthGainResearchers;
    document.getElementById("rebirth-gain").innerText =
        rebirthGain;
    document.getElementById("rebirth-gain-1").innerText =
        rebirthGain;
    document.getElementById("rebirth-gain-test").innerText =
        rebirthGainTest;
    if (rebirthGainTest != "MAX"){
        let progressRebirthGain = (rebirthGainTimeIs / rebirthGainTimeLeft) * 100;
        document.getElementById("rebirth-progress").style.width = progressRebirthGain + "%";
    }
    else{
        document.getElementById("rebirth-progress").style.width = "0%";
        rebirthGainTimeLeft= "MAX";
        rebirthGainTimeIs = "MAX";
    }
    document.getElementById("rebirth-time-time-is").innerText =
        formatujLiczbe(rebirthTimeTimeIs);
    document.getElementById("rebirth-time-time-left").innerText =
        formatujLiczbe(rebirthTimeTimeLeft);
    document.getElementById("rebirth-time-researchers").innerText =
        rebirthTimeResearchers;
    if (rebirthTimeTest != "MAX") {
        document.getElementById("rebirth-time").innerText =
            round(rebirthTime);
        document.getElementById("rebirth-time-1").innerText =
            round(rebirthTime);
        document.getElementById("rebirth-time-test").innerText =
            round(rebirthTimeTest);
    }
    else {
        document.getElementById("rebirth-time").innerText =
            round(rebirthTime);
        document.getElementById("rebirth-time-1").innerText =
            round(rebirthTime);
        document.getElementById("rebirth-time-test").innerText =
            rebirthTimeTest;
    }
    if (rebirthTimeTest != "MAX"){
        let progressRebirthTime = (rebirthTimeTimeIs / rebirthTimeTimeLeft) * 100;
        document.getElementById("rebirth-time-progress").style.width = progressRebirthTime + "%";
    }
    else{
        document.getElementById("rebirth-time-progress").style.width = "0%";
        rebirthTimeTimeLeft= "MAX";
        rebirthTimeTimeIs = "MAX";
    }
//=====(AUTO SUPER REBIRTH GAIN)=====
    document.getElementById("superRebirth-time-is").innerText =
        formatujLiczbe(superRebirthGainTimeIs);
    document.getElementById("superRebirth-time-left").innerText =
        formatujLiczbe(superRebirthGainTimeLeft);
    document.getElementById("superRebirth-researchers").innerText =
        superRebirthGainResearchers;
    document.getElementById("superRebirth-gain").innerText =
        superRebirthGain;
    document.getElementById("superRebirth-gain-1").innerText =
        superRebirthGain;
    document.getElementById("superRebirth-gain-test").innerText =
        superRebirthGainTest;
    if (superRebirthGainTest != "MAX"){
        let progressSuperRebirthGain = (superRebirthGainTimeIs / superRebirthGainTimeLeft) * 100;
        document.getElementById("superRebirth-progress").style.width = progressSuperRebirthGain + "%";
    }
    else{
        document.getElementById("superRebirth-progress").style.width = "0%";
        superRebirthGainTimeLeft= "MAX";
        superRebirthGainTimeIs = "MAX";
    }
    document.getElementById("superRebirth-time-time-is").innerText =
        formatujLiczbe(superRebirthTimeTimeIs);
    document.getElementById("superRebirth-time-time-left").innerText =
        formatujLiczbe(superRebirthTimeTimeLeft);
    document.getElementById("superRebirth-time-researchers").innerText =
        superRebirthTimeResearchers;
    if (superRebirthTimeTest != "MAX") {
        document.getElementById("superRebirth-time").innerText =
            round(superRebirthTime);
        document.getElementById("superRebirth-time-1").innerText =
            round(superRebirthTime);
        document.getElementById("superRebirth-time-test").innerText =
            round(superRebirthTimeTest);
    }
    else {
        document.getElementById("superRebirth-time").innerText =
            round(superRebirthTime);
        document.getElementById("superRebirth-time-1").innerText =
            round(superRebirthTime);
        document.getElementById("superRebirth-time-test").innerText =
            superRebirthTimeTest;
    }
    if (superRebirthTimeTest != "MAX"){
        let progressSuperRebirthTime = (superRebirthTimeTimeIs / superRebirthTimeTimeLeft) * 100;
        document.getElementById("superRebirth-time-progress").style.width = progressSuperRebirthTime + "%";
    }
    else{
        document.getElementById("superRebirth-time-progress").style.width = "0%";
        superRebirthTimeTimeLeft= "MAX";
        superRebirthTimeTimeIs = "MAX";
    }
}