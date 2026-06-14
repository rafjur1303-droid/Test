//=====(AKTUALIZACJA EKRANU)=====
function updateUI() {
    let multiplier_gain = (rebirth + 1);
    let test_rebirth_gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1));
    let rebirth_gain = 0;
    if (test_rebirth_gain >= 1 && multiplier >= 100) {
        rebirth_gain = test_rebirth_gain;
    } else {
        rebirth_gain = 0;
    }
    let test_superRebirth_gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2));
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
//=====(REBIRTH)=====
    document.getElementById("rebirth_amount").innerText =
        "Rebirth: " + formatujLiczbe(rebirth);
    document.getElementById("rebirth_gain").innerText =
        formatujLiczbe(rebirth_gain);
//=====(SUPER REBIRTH)=====
    document.getElementById("superRebirth_amount").innerText =
        "Super Rebirth: " + formatujLiczbe(superRebirth);
    document.getElementById("superRebirth_gain").innerText =
        formatujLiczbe(superRebirth_gain);
}