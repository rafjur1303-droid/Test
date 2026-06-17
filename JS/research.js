function reserchers_add1(){
    researchersSpending += 1;
}
function reserchers_add10(){
    researchersSpending += 10;
}
function reserchers_add100(){
    researchersSpending += 100;
}
function reserchers_min1(){
    researchersSpending -= 1;
}
function reserchers_min10(){
    researchersSpending -= 10;
}
function reserchers_min100(){
    researchersSpending -= 100;
}
function reserchers_pro10(){
    researchersSpending = Math.floor(currentResearchers / 10);
}
function reserchers_pro25(){
    researchersSpending = Math.floor(currentResearchers / 4);
}
function reserchers_pro100(){
    researchersSpending = currentResearchers;
}
function reserchers_reset(){
    researchersSpending = 0;
}
function Recall() {
    up1Researchers = 0;
    up2Researchers = 0;
    up3Researchers = 0;
    up4Researchers = 0;
    up5Researchers = 0;
    up6Researchers = 0;
    up7Researchers = 0;
    up8Researchers = 0;
    up9Researchers = 0;
    up10Researchers = 0;
    up11Researchers = 0;
    up12Researchers = 0;
    multiplierTimeResearchers = 0;
    multiplierGainResearchers = 0;
    rebirthTimeResearchers = 0;
    rebirthGainResearchers = 0;
    superRebirthTimeResearchers = 0;
    superRebirthGainResearchers = 0;
    currentResearchers = researchers;
}
//=====(UPGRADE RESEARCH)=====
function upgrade1Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up1Researchers) {
            up1Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up1Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade1Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up1Researchers > 0) {
        up1TimeIs += up1Researchers * (wynik / 2);
        if (up1TimeIs >= up1TimeLeft) {
            up1TimeIs -= up1TimeLeft;
            up1TimeLeft *= up1Scale;
            up1BoostRe *= 1.1;
            up1Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade1Active, Math.round(researchTick / 2));
}
//=====(UPGRADE 2)=====
function upgrade2Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up2Researchers) {
            up2Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up2Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade2Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up2Researchers > 0) {
        up2TimeIs += up2Researchers * (wynik / 2);
        if (up2TimeIs >= up2TimeLeft) {
            up2TimeIs -= up2TimeLeft;
            up2TimeLeft *= up2Scale;
            up2BoostRe += 1;
            up1Cap += 1;
            up3Cap += 1;
            up6Cap += 1;
            up2Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade2Active, Math.round(researchTick / 2));
}
//=====(UPGRADE 3)=====
function upgrade3Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up3Researchers) {
            up3Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up3Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade3Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up3Researchers > 0) {
        up3TimeIs += up3Researchers * (wynik / 2);
        if (up3TimeIs >= up3TimeLeft) {
            up3TimeIs -= up3TimeLeft;
            up3TimeLeft *= up3Scale;
            up3BoostRe *= 1.2;
            up3Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade3Active, Math.round(researchTick / 2));
}
//=====(UPGRADE 4)=====
function upgrade4Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up4Researchers) {
            up4Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up4Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade4Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up4Researchers > 0) {
        up4TimeIs += up4Researchers * (wynik / 2);
        if (up4TimeIs >= up4TimeLeft) {
            up4TimeIs -= up4TimeLeft;
            up4TimeLeft *= up4Scale;
            up4BoostRe += 0.2;
            up4BoostActive = true;
            up4Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade4Active, Math.round(researchTick / 2));
}
function upgrade5Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up5Researchers) {
            up5Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up5Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade5Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up5Researchers > 0) {
        up5TimeIs += up5Researchers * (wynik / 2);
        if (up5TimeIs >= up5TimeLeft) {
            up5TimeIs -= up5TimeLeft;
            up5TimeLeft *= up5Scale;
            if (researchTick >= 800){
                researchTick -= 40;
                up5BoostRe += 40;
            }
            else if(researchTick >= 700){
                researchTick -= 20;
                up5BoostRe += 20;
            }
            else if(researchTick >= 400){
                researchTick -= 10;
                up5BoostRe += 10;
            }
            else if(researchTick >= 200){
                researchTick -= 2;
                up5BoostRe += 2;
            }
            else if(researchTick > 100) {
                researchTick -= 1;
                up5BoostRe += 1;
            }
            up5Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade5Active, Math.round(researchTick / 2));
}
function upgrade6Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up6Researchers) {
            up6Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up6Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade6Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up6Researchers > 0) {
        up6TimeIs += up6Researchers * (wynik / 2);
        if (up6TimeIs >= up6TimeLeft) {
            up6TimeIs -= up6TimeLeft;
            up6TimeLeft *= up6Scale;
            researchSpeedUpgradesMulti *= 1.2;
            up6BoostRe *= 1.2;
            up6Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade6Active, Math.round(researchTick / 2));
}
function upgrade7Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up7Researchers) {
            up7Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up7Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade7Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up7Researchers > 0) {
        up7TimeIs += up7Researchers * (wynik / 2);
        if (up7TimeIs >= up7TimeLeft) {
            up7TimeIs -= up7TimeLeft;
            up7TimeLeft *= up7Scale;
            researchers += 1;
            currentResearchers += 1;
            up7BoostRe += 1;
            up7Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade7Active, Math.round(researchTick / 2));
}
function upgrade8Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up8Researchers) {
            up8Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up8Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade8Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up8Researchers > 0) {
        up8TimeIs += up8Researchers * (wynik / 2);
        if (up8TimeIs >= up8TimeLeft) {
            up8TimeIs -= up8TimeLeft;
            up8TimeLeft *= up8Scale;
            up8BoostRe += 0.2;
            up8BoostActive = true;
            up8Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade8Active, Math.round(researchTick / 2));
}
function upgrade9Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up9Researchers) {
            up9Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up9Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade9Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up9Researchers > 0) {
        up9TimeIs += up9Researchers * (wynik / 2);
        if (up9TimeIs >= up9TimeLeft) {
            up9TimeIs -= up9TimeLeft;
            up9TimeLeft *= up9Scale;
            up9BoostRe *= 1.15;
            up9BoostActive = true;
            up9Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade9Active, Math.round(researchTick / 2));
}
function upgrade10Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up10Researchers) {
            up10Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up10Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade10Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up10Researchers > 0) {
        up10TimeIs += up10Researchers * (wynik / 2);
        if (up10TimeIs >= up10TimeLeft) {
            up10TimeIs -= up10TimeLeft;
            up10TimeLeft *= up10Scale;

            up10BoostRe *= 1.05;
            up10Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade10Active, Math.round(researchTick / 2));
}
function upgrade11Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up11Researchers) {
            up11Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up11Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade11Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up11Researchers > 0) {
        up11TimeIs += up11Researchers * (wynik / 2);
        if (up11TimeIs >= up11TimeLeft) {
            up11TimeIs -= up11TimeLeft;
            up11TimeLeft *= up11Scale;
            up11BoostActive = true;
            up11Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade11Active, Math.round(researchTick / 2));
}
function upgrade12Research() {
    if (up12Lv == 0){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= up12Researchers) {
                up12Researchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                up12Researchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function upgrade12Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up12Researchers > 0 && up12Lv < 1) {
        up12TimeIs += up12Researchers * (wynik / 2);
        if (up12TimeIs >= up12TimeLeft) {
            up12TimeIs -= up12TimeLeft;
            up12TimeLeft *= up12Scale;
            up12BoostActive = true;
            up12Lv = "MAX";
        }
    }
    if (up12Lv == "MAX") {
        currentResearchers += up12Researchers;
        up12Researchers = 0;
    }
    updateUI();
    setTimeout(upgrade12Active, Math.round(researchTick / 2));
}