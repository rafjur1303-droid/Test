function updateGame(){
//=====(UPGRADE)=====
    let toUpgrade  = document.getElementById("toUpgrade");
    if (money >= 5000 || toUpgradeVis == true ) {
        toUpgradeVis = true;
        toUpgrade.classList.remove("hidden");
    } else {
        toUpgrade.classList.add("hidden");
    }
//=====(UPGRADE 3)=====
    let Up3  = document.getElementById("btn-Up-3");
    if (multiplier >= 200 || up3Vis == true) {
        up3Vis = true;
        Up3.classList.remove("hidden");
    } else {
        Up3.classList.add("hidden");
    }
//=====(UPGRADE 4)=====
    let Up4  = document.getElementById("btn-Up-4");
    if (rebirth >= 5 || up4Vis == true) {
        up4Vis = true;
        Up4.classList.remove("hidden");
    } else {
        Up4.classList.add("hidden");
    }
//=====(UPGRADE 5)=====
    let Up5  = document.getElementById("btn-Up-5");
    if (rebirth >= 10 || up5Vis == true) {
        up5Vis = true;
        Up5.classList.remove("hidden");
    } else {
        Up5.classList.add("hidden");
    }
//=====(UPGRADE 6)=====
    let Up6  = document.getElementById("btn-Up-6");
    if (superRebirth >= 1 || up6Vis == true) {
        up6Vis = true;
        Up6.classList.remove("hidden");
    } else {
        Up6.classList.add("hidden");
    }
//=====(UPGRADE 7)=====
    let Up7  = document.getElementById("btn-Up-7");
    if (superRebirth >= 2 || up7Vis == true) {
        up7Vis = true;
        Up7.classList.remove("hidden");
    } else {
        Up7.classList.add("hidden");
    }
//=====(UPGRADE 8)=====
    let Up8  = document.getElementById("btn-Up-8");
    if (superRebirth >= 10 || up8Vis == true) {
        up8Vis = true;
        Up8.classList.remove("hidden");
    } else {
        Up8.classList.add("hidden");
    }
//=====(UPGRADE 9)=====
    let Up9  = document.getElementById("btn-Up-9");
    if (superRebirth >= 50 || up9Vis == true) {
        up9Vis = true;
        Up9.classList.remove("hidden");
    } else {
        Up9.classList.add("hidden");
    }
//=====(SUPER REBIRTH)=====
    let SR  = document.getElementById("btn-superRebirth");
    if (rebirth >= 40 || SRVis == true) {
        SRVis = true;
        SR.classList.remove("hidden");
    } else {
        SR.classList.add("hidden");
    }
    let SRamount  = document.getElementById("superRebirth_amount");
    if (rebirth >= 40 || SRUpgVis == true) {
        SRUpgVis = true;
        SRamount.classList.remove("hidden");
    } else {
        SRamount.classList.add("hidden");
    }
    let SRUpg  = document.getElementById("superRebirth-upg");
    if (rebirth >= 40 || SRUpgVis == true) {
        SRUpgVis = true;
        SRUpg.classList.remove("hidden");
    } else {
        SRUpg.classList.add("hidden");
    }
//=====(MEGA)=====
    let Me  = document.getElementById("btn-mega");
    if (up9BoostActive == true || MeVis == true) {
        MeVis = true;
        Me.classList.remove("hidden");
    } else {
        Me.classList.add("hidden");
    }
    let Meamount  = document.getElementById("mega_amount");
    if (up9BoostActive == true || MeVis == true) {
        MeVis = true;
        Meamount.classList.remove("hidden");
    } else {
        Meamount.classList.add("hidden");
    }
//=====(RESEARCH)=====
    let Research = document.getElementById("research-btn");
    if (up9Active == true) {
        document.getElementById("research-btn").innerText =
            "Research";
        Research.classList.remove("disabled-button");
    }
    else{
        document.getElementById("research-btn").innerText =
            "???";
        Research.classList.add("disabled-button");
    }
//=====(GAME INFO)=====
    let SRStatsInfo  = document.getElementById("sr-stats-info");
    if (rebirth >= 40 || SRStatsVis == true) {
        SRStatsVis = true;
        SRStatsInfo.classList.remove("hiddenPlus");
    } else {
        SRStatsInfo.classList.add("hiddenPlus");
    }
    let SRStatsMulti  = document.getElementById("sr-stats-multi");
    if (rebirth >= 40 || SRMultiVis == true) {
        SRMultiVis = true;
        SRStatsMulti.classList.remove("hiddenPlus");
    } else {
        SRStatsMulti.classList.add("hiddenPlus");
    }
    let upgradesBlock  = document.getElementById("upgrade-block");
    if (money >= 5000 || upgradeBlockVis == true) {
        upgradeBlockVis = true;
        upgradesBlock.classList.remove("hiddenPlus");
    } else {
        upgradesBlock.classList.add("hiddenPlus");
    }
    let upgradesInfo  = document.getElementById("upgrade-info");
    if (money >= 5000 || upgradesStatsVis == true) {
        upgradesStatsVis = true;
        upgradesInfo.classList.remove("hiddenPlus");
    } else {
        upgradesInfo.classList.add("hiddenPlus");
    }
    let upgrade3Info  = document.getElementById("upgrade3-info");
    if (multiplier >= 200 || upgrade3StatsVis == true) {
        upgrade3StatsVis = true;
        upgrade3Info.classList.remove("hiddenPlus");
    } else {
        upgrade3Info.classList.add("hiddenPlus");
    }
    let upgrade4Info  = document.getElementById("upgrade4-info");
    if (rebirth >= 5 || upgrade4StatsVis == true) {
        upgrade4StatsVis = true;
        upgrade4Info.classList.remove("hiddenPlus");
    } else {
        upgrade4Info.classList.add("hiddenPlus");
    }
    let upgrade5Info  = document.getElementById("upgrade5-info");
    if (rebirth >= 10 || upgrade5StatsVis == true) {
        upgrade5StatsVis = true;
        upgrade5Info.classList.remove("hiddenPlus");
    } else {
        upgrade5Info.classList.add("hiddenPlus");
    }
    let upgrade6Info  = document.getElementById("upgrade6-info");
    if (superRebirth >= 1 || upgrade6StatsVis == true) {
        upgrade6StatsVis = true;
        upgrade6Info.classList.remove("hiddenPlus");
    } else {
        upgrade6Info.classList.add("hiddenPlus");
    }
    let upgrade7Info  = document.getElementById("upgrade7-info");
    if (superRebirth >= 2 || upgrade7StatsVis == true) {
        upgrade7StatsVis = true;
        upgrade7Info.classList.remove("hiddenPlus");
    } else {
        upgrade7Info.classList.add("hiddenPlus");
    }
    let upgrade8Info  = document.getElementById("upgrade8-info");
    if (superRebirth >= 10 || upgrade8StatsVis == true) {
        upgrade8StatsVis = true;
        upgrade8Info.classList.remove("hiddenPlus");
    } else {
        upgrade8Info.classList.add("hiddenPlus");
    }
    let upgrade9Info  = document.getElementById("upgrade9-info");
    if (superRebirth >= 50 || upgrade9StatsVis == true) {
        upgrade9StatsVis = true;
        upgrade9Info.classList.remove("hiddenPlus");
    } else {
        upgrade9Info.classList.add("hiddenPlus");
    }
    let SRStatsAlphabet  = document.getElementById("sr-alphabet");
    if (rebirth >= 40 || SRAlphabetVis == true) {
        SRAlphabetVis = true;
        SRStatsAlphabet.classList.remove("hiddenPlus");
    } else {
        SRStatsAlphabet.classList.add("hiddenPlus");
    }
    let researchersBlock  = document.getElementById("researchers-block");
    let researchersInfo  = document.getElementById("researchers-info");
    let researchSpeedBlock  = document.getElementById("research-speed-block");
    let researchSpeedInfo  = document.getElementById("research-speed-info");
    let researchSpendingBlock  = document.getElementById("research-spending-block");
    let researchSpendingInfo  = document.getElementById("research-spending-info");
    let researchBlock = document.getElementById("research-block");
    let researchInfo  = document.getElementById("research-info");
    let automationBlock  = document.getElementById("automation-block");
    let automationInfo  = document.getElementById("automation-info");
    let reAlphabet  = document.getElementById("re-alphabet");
    let wszystkieBloki = [
        researchersBlock, researchersInfo, researchSpeedBlock, researchSpeedInfo,
        researchSpendingBlock, researchSpendingInfo, researchBlock, researchInfo,
        automationBlock, automationInfo, reAlphabet
    ];
    wszystkieBloki.forEach(block => {
        if (block !== null) {
            if (up9Active === true || researchVis === true) {
                block.classList.remove("hiddenPlus");
                researchVis = true;
            } else {
                block.classList.add("hiddenPlus");
            }
        }
    });
    //===================
    let lvl = (up1Lv + up2Lv + up3Lv + up4Lv + up5Lv + up6Lv + up7Lv + up8Lv + up9Lv + up10Lv + up11Lv + up12Lv) - 1;
    //===================
    let Re2  = document.getElementById("research2-stats");
    if (lvl >= 2 || up2ReVis == true) {
        Re2.classList.remove("hiddenPlus");
    } else {
        Re2.classList.add("hiddenPlus");
    }
    let Re3  = document.getElementById("research3-stats");
    if (lvl >= 5 || up3ReVis == true) {
        Re3.classList.remove("hiddenPlus");
    } else {
        Re3.classList.add("hiddenPlus");
    }
    let Re4  = document.getElementById("research4-stats");
    let Re4F = document.getElementById("research4-formula");
    if (lvl >= 11 || up4ReVis == true) {
        Re4.classList.remove("hiddenPlus");
        Re4F.classList.remove("hiddenPlus");
    } else {
        Re4.classList.add("hiddenPlus");
        Re4F.classList.add("hiddenPlus");
    }
    let Re6  = document.getElementById("research6-stats");
    if (lvl >= 4 || up6ReVis == true) {
        Re6.classList.remove("hiddenPlus");
    } else {
        Re6.classList.add("hiddenPlus");
    }
    let Re7  = document.getElementById("research7-stats");
    if (lvl >= 7 || up7ReVis == true) {
        Re7.classList.remove("hiddenPlus");
    } else {
        Re7.classList.add("hiddenPlus");
    }
    let Re8  = document.getElementById("research8-stats");
    let Re8F = document.getElementById("research8-formula");
    if (lvl >= 18 || up8ReVis == true) {
        Re8.classList.remove("hiddenPlus");
        Re8F.classList.remove("hiddenPlus");
    } else {
        Re8.classList.add("hiddenPlus");
        Re8F.classList.add("hiddenPlus");
    }
    let Re9  = document.getElementById("research9-stats");
    if (lvl >= 10 || up9ReVis == true) {
        Re9.classList.remove("hiddenPlus");
    } else {
        Re9.classList.add("hiddenPlus");
    }
    let Re10  = document.getElementById("research10-stats");
    if (lvl >= 12 || up10ReVis == true) {
        Re10.classList.remove("hiddenPlus");
    } else {
        Re10.classList.add("hiddenPlus");
    }
    let Re11  = document.getElementById("research11-stats");
    let Re11F = document.getElementById("research11-formula");
    if (lvl >= 16 || up11ReVis == true) {
        Re11.classList.remove("hiddenPlus");
        Re11F.classList.remove("hiddenPlus");
    } else {
        Re11.classList.add("hiddenPlus");
        Re11F.classList.add("hiddenPlus");
    }
    let Re12  = document.getElementById("research12-stats");
    if (lvl >= 40 || up12ReVis == true) {
        Re12.classList.remove("hiddenPlus");
    } else {
        Re12.classList.add("hiddenPlus");
    }
//=====(RESEARCH UPGRADES)=====
    let Up2Re  = document.getElementById("research-upgrade-2");
    if (lvl >= 2 || up2ReVis == true) {
        up2ReVis = true;
        Up2Re.classList.remove("hidden");
    } else {
        Up2Re.classList.add("hidden");
    }
    let Up3Re  = document.getElementById("research-upgrade-3");
    if (lvl >= 5 || up3ReVis == true) {
        up3ReVis = true;
        Up3Re.classList.remove("hidden");
    } else {
        Up3Re.classList.add("hidden");
    }

    let Up4Re  = document.getElementById("research-upgrade-4");
    if (lvl >= 11 || up4ReVis == true) {
        up4ReVis = true;
        Up4Re.classList.remove("hidden");
    } else {
        Up4Re.classList.add("hidden");
    }
    let Up6Re  = document.getElementById("research-upgrade-6");
    if (lvl >= 4 || up6ReVis == true) {
        up6ReVis = true;
        Up6Re.classList.remove("hidden");
    } else {
        Up6Re.classList.add("hidden");
    }
    let Up7Re  = document.getElementById("research-upgrade-7");
    if (lvl >= 7 || up7ReVis == true) {
        up7ReVis = true;
        Up7Re.classList.remove("hidden");
    } else {
        Up7Re.classList.add("hidden");
    }
    let Up8Re  = document.getElementById("research-upgrade-8");
    if (lvl >= 18 || up8ReVis == true) {
        up8ReVis = true;
        Up8Re.classList.remove("hidden");
    } else {
        Up8Re.classList.add("hidden");
    }
    let Up9Re  = document.getElementById("research-upgrade-9");
    if (lvl >= 10 || up9ReVis == true) {
        up9ReVis = true;
        Up9Re.classList.remove("hidden");
    } else {
        Up9Re.classList.add("hidden");
    }
    let Up10Re  = document.getElementById("research-upgrade-10");
    if (lvl >= 12 || up10ReVis == true) {
        up10ReVis = true;
        Up10Re.classList.remove("hidden");
    } else {
        Up10Re.classList.add("hidden");
    }
    let Up11Re  = document.getElementById("research-upgrade-11");
    if (lvl >= 16 || up11ReVis == true) {
        up11ReVis = true;
        Up11Re.classList.remove("hidden");
    } else {
        Up11Re.classList.add("hidden");
    }
    let Up12Re  = document.getElementById("research-upgrade-12");
    if (lvl >= 40 || up12ReVis == true) {
        up12ReVis = true;
        Up12Re.classList.remove("hidden");
    } else {
        Up12Re.classList.add("hidden");
    }
//=====(AUTOMATION)=====
    const rebirthAutomation = document.querySelectorAll('.rebirth');
    if (multiplierGain >= 1 || rebirthAutomationVis == true) {
        rebirthAutomationVis = true;
        rebirthAutomation.forEach(element => {
            element.classList.remove('hidden');
        });
    }
    else{
        rebirthAutomation.forEach(element => {
            element.classList.add('hidden');
        });
    }
    const superRebirthAutomation = document.querySelectorAll('.superRebirth');
    if (rebirthGain >= 1 || superRebirthAutomationVis == true) {
        superRebirthAutomationVis = true;
        superRebirthAutomation.forEach(element => {
            element.classList.remove('hidden');
        });
    }
    else{
        superRebirthAutomation.forEach(element => {
            element.classList.add('hidden');
        });
    }
}