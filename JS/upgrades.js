//=====(UPGRADE)=====
function Upgrade1() {
    if(money >= up1Cost && up1Count < up1Cap) {
        money -= up1Cost;
        up1Cost *= 1.4;
        up1Boost *= 1.10;
        up1Count++;
        updateUI();
    }
}
function Upgrade1Max(event){
    event.stopPropagation();
    while(money >= up1Cost && up1Count < up1Cap) {
        money -= up1Cost;
        up1Cost *= 1.4;
        up1Boost *= 1.10;
        up1Count++;
        updateUI();
    }
}
function Upgrade2() {
    if(money >= up2Cost && up2Count < 1) {
        money -= up2Cost;
        up2Active = true;
        up2Count++;
        updateUI();
    }
}
function Upgrade3() {
    if(multiplier >= up3Cost && up3Count < up3Cap) {
        multiplier -= up3Cost;
        up3Cost *= 1.4;
        up3Boost *= 1.15;
        up3Count++;
        updateUI();
    }
}
function Upgrade3Max() {
    while(multiplier >= up3Cost && up3Count < up3Cap) {
        multiplier -= up3Cost;
        up3Cost *= 1.4;
        up3Boost *= 1.15;
        up3Count++;
        updateUI();
    }
}
function Upgrade4() {
    if(multiplier >= up4Cost && up4Count < 1) {
        multiplier -= up4Cost;
        up4Active = true;
        up4Count++;
        updateUI();
    }
}
function Upgrade5() {
    if(rebirth >= up5Cost && up5Count < 1) {
        rebirth -= up5Cost;
        up5Active = true;
        up5Count++;
        updateUI();
    }
}
function Upgrade6() {
    if(rebirth >= up6Cost && up6Count < up6Cap) {
        rebirth -= up6Cost;
        up6Cost *= 1.05;
        up6Boost *= 1.05;
        up6Count++;
        updateUI();
    }
}
function Upgrade6Max() {
    while(rebirth >= up6Cost && up6Count < up6Cap) {
        rebirth -= up6Cost;
        up6Cost *= 1.05;
        up6Boost *= 1.05;
        up6Count++;
        updateUI();
    }
}
function Upgrade7() {
    if(superRebirth >= up7Cost && up7Count < 5) {
        superRebirth -= up7Cost;
        up7Cost *= 1.6;
        up7Boost *= 1.2;
        up7Count++;
        updateUI();
    }
}
function Upgrade7Max() {
    while (superRebirth >= up7Cost && up7Count < 5) {
        superRebirth -= up7Cost;
        up7Cost *= 1.6;
        up7Boost *= 1.2;
        up7Count++;
        updateUI();
    }
}
function Upgrade8() {
    if(superRebirth >= up8Cost && up8Count < 1) {
        superRebirth -= up8Cost;
        up8Active = true;
        up8Count++;
        updateUI();
    }
}
function Upgrade9() {
    if(superRebirth >= up9Cost && up9Count < 1) {
        superRebirth -= up9Cost;
        up9Active = true;
        up9Count++;
        updateUI();
    }
}