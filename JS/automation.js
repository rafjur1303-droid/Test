//=====(MULTIPLIER AUTOMATION)=====
function multiplierGainAutomation() {
    if (multiplierGainTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= multiplierGainResearchers) {
                multiplierGainResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                multiplierGainResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function multiplierGainAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (multiplierGainResearchers > 0 && multiplierGainTest != "MAX") {
        multiplierGainTimeIs += multiplierGainResearchers * (wynik / 2);
        if (multiplierGainTimeIs >= multiplierGainTimeLeft) {
            multiplierGainTimeIs -= multiplierGainTimeLeft;
            multiplierGainTimeLeft *= multiplierScale;
            if (multiplierGainLv == 0) {
                multiplierGain += 0.1;
                multiplierGainTest += 0.1;
            } else if (multiplierGainLv == 1) {
                multiplierGain += 0.1;
                multiplierGainTest += 0.3;
            } else if (multiplierGainLv == 2) {
                multiplierGain += 0.3;
                multiplierGainTest += 0.5;
            } else if (multiplierGainLv == 3) {
                multiplierGain += 0.5;
                multiplierGainTest += 1;
            } else if (multiplierGainLv == 4) {
                multiplierGain += 1;
                multiplierGainTest += 3;
            } else if (multiplierGainLv == 5) {
                multiplierGain += 3;
                multiplierGainTest += 5;
            } else if (multiplierGainLv == 6) {
                multiplierGain += 5;
                multiplierGainTest += 10;
            } else if (multiplierGainLv == 7) {
                multiplierGain += 10;
                multiplierGainTest += 5;
            } else if (multiplierGainLv == 8) {
                multiplierGain += 5;
                multiplierGainTest += 15;
            } else if (multiplierGainLv == 9) {
                multiplierGain += 15;
                multiplierGainTest += 10;
            } else if (multiplierGainLv == 10) {
                multiplierGain += 10;
                multiplierGainTest += 20;
            } else if (multiplierGainLv == 11) {
                multiplierGain += 20;
                multiplierGainTest += 30;
            } else if (multiplierGainLv == 12) {
                multiplierGain += 30;
                multiplierGainTest = "MAX"
            }
            multiplierGainLv += 1;
        }
        if (multiplierGainTest == "MAX") {
            currentResearchers += multiplierGainResearchers;
            multiplierGainResearchers = 0;
        }

    }
    updateUI();
    setTimeout(multiplierGainAutomationActive, Math.round(researchTick / 2));
}
//=====(MULTIPLIER AUTOMATION)=====
function multiplierTimeAutomation() {
    if (multiplierTimeTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= multiplierTimeResearchers) {
                multiplierTimeResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                multiplierTimeResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function multiplierTimeAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (multiplierTimeResearchers > 0 && multiplierTimeTest != "MAX") {
        multiplierTimeTimeIs += multiplierTimeResearchers * (wynik / 2);
        if (multiplierTimeTimeIs >= multiplierTimeTimeLeft) {
            multiplierTimeTimeIs -= multiplierTimeTimeLeft;
            multiplierTimeTimeLeft *= multiplierScale;
            if (multiplierTimeLv == 0) {
                multiplierTime -= 2;
                multiplierTimeTest -= 3;
            }
            else if (multiplierTimeLv == 1) {
                multiplierTime -= 3;
                multiplierTimeTest -= 1;
            }
            else if (multiplierTimeLv == 2) {
                multiplierTime -= 1;
                multiplierTimeTest -= 1;
            }
            else if (multiplierTimeLv == 3) {
                multiplierTime -= 1;
                multiplierTimeTest -= 1;
            }
            else if (multiplierTimeLv == 4) {
                multiplierTime -= 1;
                multiplierTimeTest -= 0.5;
            }
            else if (multiplierTimeLv == 5) {
                multiplierTime -= 0.5;
                multiplierTimeTest -= 0.5;
            }
            else if (multiplierTimeLv == 6) {
                multiplierTime -= 0.5;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 7) {
                multiplierTime -= 0.1;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 8) {
                multiplierTime -= 0.1;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 9) {
                multiplierTime -= 0.1;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 10) {
                multiplierTime -= 0.1;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 11) {
                multiplierTime -= 0.1;
                multiplierTimeTest = "MAX";
            }
            multiplierTimeLv += 1;
        }
        if (multiplierTimeTest == "MAX") {
            currentResearchers += multiplierTimeResearchers;
            multiplierTimeResearchers = 0;
        }
    }
    updateUI();
    setTimeout(multiplierTimeAutomationActive, Math.round(researchTick / 2));
}
//=====(REBIRTH AUTOMATION)=====
function rebirthGainAutomation() {
    if (rebirthGainTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= rebirthGainResearchers) {
                rebirthGainResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                rebirthGainResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function rebirthGainAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (rebirthGainResearchers > 0 && rebirthGainTest != "MAX") {
        rebirthGainTimeIs += rebirthGainResearchers * (wynik / 2);
        if (rebirthGainTimeIs >= rebirthGainTimeLeft) {
            rebirthGainTimeIs -= rebirthGainTimeLeft;
            rebirthGainTimeLeft *= rebirthScale;
            if (rebirthGainLv == 0) {
                rebirthGain += 0.1;
                rebirthGainTest += 0.1;
            } else if (rebirthGainLv == 1) {
                rebirthGain += 0.1;
                rebirthGainTest += 0.3;
            } else if (rebirthGainLv == 2) {
                rebirthGain += 0.3;
                rebirthGainTest += 0.5;
            } else if (rebirthGainLv == 3) {
                rebirthGain += 0.5;
                rebirthGainTest += 1;
            } else if (rebirthGainLv == 4) {
                rebirthGain += 1;
                rebirthGainTest += 3;
            } else if (rebirthGainLv == 5) {
                rebirthGain += 3;
                rebirthGainTest += 5;
            } else if (rebirthGainLv == 6) {
                rebirthGain += 5;
                rebirthGainTest += 10;
            } else if (rebirthGainLv == 7) {
                rebirthGain += 10;
                rebirthGainTest += 5;
            } else if (rebirthGainLv == 8) {
                rebirthGain += 5;
                rebirthGainTest += 15;
            } else if (rebirthGainLv == 9) {
                rebirthGain += 15;
                rebirthGainTest += 10;
            } else if (rebirthGainLv == 10) {
                rebirthGain += 10;
                rebirthGainTest += 20;
            } else if (rebirthGainLv == 11) {
                rebirthGain += 20;
                rebirthGainTest += 30;
            } else if (rebirthGainLv == 12) {
                rebirthGain += 30;
                rebirthGainTest = "MAX"
            }
            rebirthGainLv += 1;
        }
        if (rebirthGainTest == "MAX") {
            currentResearchers += rebirthGainResearchers;
            rebirthGainResearchers = 0;
        }

    }
    updateUI();
    setTimeout(rebirthGainAutomationActive, Math.round(researchTick / 2));
}
//=====(REBIRTH AUTOMATION)=====
function rebirthTimeAutomation() {
    if (rebirthTimeTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= rebirthTimeResearchers) {
                rebirthTimeResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                rebirthTimeResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function rebirthTimeAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (rebirthTimeResearchers > 0 && rebirthTimeTest != "MAX") {
        rebirthTimeTimeIs += rebirthTimeResearchers * (wynik / 2);
        if (rebirthTimeTimeIs >= rebirthTimeTimeLeft) {
            rebirthTimeTimeIs -= rebirthTimeTimeLeft;
            rebirthTimeTimeLeft *= rebirthScale;
            if (rebirthTimeLv == 0) {
                rebirthTime -= 2;
                rebirthTimeTest -= 3;
            }
            else if (rebirthTimeLv == 1) {
                rebirthTime -= 3;
                rebirthTimeTest -= 1;
            }
            else if (rebirthTimeLv == 2) {
                rebirthTime -= 1;
                rebirthTimeTest -= 1;
            }
            else if (rebirthTimeLv == 3) {
                rebirthTime -= 1;
                rebirthTimeTest -= 1;
            }
            else if (rebirthTimeLv == 4) {
                rebirthTime -= 1;
                rebirthTimeTest -= 0.5;
            }
            else if (rebirthTimeLv == 5) {
                rebirthTime -= 0.5;
                rebirthTimeTest -= 0.5;
            }
            else if (rebirthTimeLv == 6) {
                rebirthTime -= 0.5;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 7) {
                rebirthTime -= 0.1;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 8) {
                rebirthTime -= 0.1;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 9) {
                rebirthTime -= 0.1;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 10) {
                rebirthTime -= 0.1;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 11) {
                rebirthTime -= 0.1;
                rebirthTimeTest = "MAX";
            }
            rebirthTimeLv += 1;
        }
        if (rebirthTimeTest == "MAX") {
            currentResearchers += rebirthTimeResearchers;
            rebirthTimeResearchers = 0;
        }
    }
    updateUI();
    setTimeout(rebirthTimeAutomationActive, Math.round(researchTick / 2));
}
//=====(SUPER REBIRTH AUTOMATION)=====
function superRebirthGainAutomation() {
    if (superRebirthGainTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= superRebirthGainResearchers) {
                superRebirthGainResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                superRebirthGainResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function superRebirthGainAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (superRebirthGainResearchers > 0 && superRebirthGainTest != "MAX") {
        superRebirthGainTimeIs += superRebirthGainResearchers * (wynik / 2);
        if (superRebirthGainTimeIs >= superRebirthGainTimeLeft) {
            superRebirthGainTimeIs -= superRebirthGainTimeLeft;
            superRebirthGainTimeLeft *= superRebirthScale;
            if (superRebirthGainLv == 0) {
                superRebirthGain += 0.1;
                superRebirthGainTest += 0.1;
            } else if (superRebirthGainLv == 1) {
                superRebirthGain += 0.1;
                superRebirthGainTest += 0.3;
            } else if (superRebirthGainLv == 2) {
                superRebirthGain += 0.3;
                superRebirthGainTest += 0.5;
            } else if (superRebirthGainLv == 3) {
                superRebirthGain += 0.5;
                superRebirthGainTest += 1;
            } else if (superRebirthGainLv == 4) {
                superRebirthGain += 1;
                superRebirthGainTest += 3;
            } else if (superRebirthGainLv == 5) {
                superRebirthGain += 3;
                superRebirthGainTest += 5;
            } else if (superRebirthGainLv == 6) {
                superRebirthGain += 5;
                superRebirthGainTest += 10;
            } else if (superRebirthGainLv == 7) {
                superRebirthGain += 10;
                superRebirthGainTest += 5;
            } else if (superRebirthGainLv == 8) {
                superRebirthGain += 5;
                superRebirthGainTest += 15;
            } else if (superRebirthGainLv == 9) {
                superRebirthGain += 15;
                superRebirthGainTest += 10;
            } else if (superRebirthGainLv == 10) {
                superRebirthGain += 10;
                superRebirthGainTest += 20;
            } else if (superRebirthGainLv == 11) {
                superRebirthGain += 20;
                superRebirthGainTest += 30;
            } else if (superRebirthGainLv == 12) {
                superRebirthGain += 30;
                superRebirthGainTest = "MAX"
            }
            superRebirthGainLv += 1;
        }
        if (superRebirthGainTest == "MAX") {
            currentResearchers += superRebirthGainResearchers;
            superRebirthGainResearchers = 0;
        }

    }
    updateUI();
    setTimeout(superRebirthGainAutomationActive, Math.round(researchTick / 2));
}
//=====(SUPER REBIRTH AUTOMATION)=====
function superRebirthTimeAutomation() {
    if (superRebirthTimeTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= superRebirthTimeResearchers) {
                superRebirthTimeResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                superRebirthTimeResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function superRebirthTimeAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (superRebirthTimeResearchers > 0 && superRebirthTimeTest != "MAX") {
        superRebirthTimeTimeIs += superRebirthTimeResearchers * (wynik / 2);
        if (superRebirthTimeTimeIs >= superRebirthTimeTimeLeft) {
            superRebirthTimeTimeIs -= superRebirthTimeTimeLeft;
            superRebirthTimeTimeLeft *= superRebirthScale;
            if (superRebirthTimeLv == 0) {
                superRebirthTime -= 2;
                superRebirthTimeTest -= 3;
            }
            else if (superRebirthTimeLv == 1) {
                superRebirthTime -= 3;
                superRebirthTimeTest -= 1;
            }
            else if (superRebirthTimeLv == 2) {
                superRebirthTime -= 1;
                superRebirthTimeTest -= 1;
            }
            else if (superRebirthTimeLv == 3) {
                superRebirthTime -= 1;
                superRebirthTimeTest -= 1;
            }
            else if (superRebirthTimeLv == 4) {
                superRebirthTime -= 1;
                superRebirthTimeTest -= 0.5;
            }
            else if (superRebirthTimeLv == 5) {
                superRebirthTime -= 0.5;
                superRebirthTimeTest -= 0.5;
            }
            else if (superRebirthTimeLv == 6) {
                superRebirthTime -= 0.5;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 7) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 8) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 9) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 10) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 11) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest = "MAX";
            }
            superRebirthTimeLv += 1;
        }
        if (superRebirthTimeTest == "MAX") {
            currentResearchers += superRebirthTimeResearchers;
            superRebirthTimeResearchers = 0;
        }
    }
    updateUI();
    setTimeout(superRebirthTimeAutomationActive, Math.round(researchTick / 2));
}
//=====(MULRIPLIER AUTO GAIN)=====
function mAutoGain() {
    let gain = 1 * (rebirth + 1) * up2Boost * up3Boost * up7Boost * up1BoostRe;
    if (gain > 0) {
        multiplier += gain * (multiplierGain / 100)
    }
    updateUI();
    setTimeout(mAutoGain, Math.round(multiplierTime * 1000));
}
//=====(REBIRTH AUTO GAIN)=====
function rAutoGain() {
    let gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1) * up4Boost * up5Boost * up7Boost * up1BoostRe);
    if (gain > 0) {
        rebirth += gain * (rebirthGain / 100)
    }
    updateUI();
    setTimeout(rAutoGain, Math.round(rebirthTime * 1000));
}
//=====(SUPER REBIRTH AUTO GAIN)=====
function srAutoGain() {
    let gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * (mega + 1)  * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe);
    if (gain > 0) {
        superRebirth += gain * (superRebirthGain / 100)
    }
    updateUI();
    setTimeout(srAutoGain, Math.round(superRebirthTime * 1000));
}