//=====(PRZYCISKI RESEARCHERS)=====
function BuyResearchersMoney() {
    if(money >= researchersMoneyCost){
        money -= researchersMoneyCost;
        researchersMoneyCost *= 30;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersMoneyMax(event) {
    event.stopPropagation();
    while(money >= researchersMoneyCost){
        money -= researchersMoneyCost;
        researchersMoneyCost *= 30;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersMultiplier() {
    if(multiplier >= researchersMultiplierCost){
        multiplier -= researchersMultiplierCost;
        researchersMultiplierCost *= 25;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersMultiplierMax(event) {
    event.stopPropagation();
    while(multiplier >= researchersMultiplierCost){
        multiplier -= researchersMultiplierCost;
        researchersMultiplierCost *= 25;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersRebirth() {
    if(rebirth >= researchersRebirthCost){
        rebirth -= researchersRebirthCost;
        researchersRebirthCost *= 20;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersRebirthMax(event) {
    event.stopPropagation();
    while(rebirth >= researchersRebirthCost){
        rebirth -= researchersRebirthCost;
        researchersRebirthCost *= 20;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersSuperRebirth() {
    if(superRebirth >= researchersSuperRebirthCost){
        superRebirth -= researchersSuperRebirthCost;
        researchersSuperRebirthCost *= 11;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersSuperRebirthMax(event) {
    event.stopPropagation();
    while(superRebirth >= researchersSuperRebirthCost){
        superRebirth -= researchersSuperRebirthCost;
        researchersSuperRebirthCost *= 11;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchSpeedMoney() {
    if(money >= researchSpeedMoneyCost){
        money -= researchSpeedMoneyCost;
        researchSpeedMoneyCost *= 3;
        researchSpeedMoneyMulti += 0.01;
    }
}
function BuyResearchSpeedMoneyMax(event) {
    event.stopPropagation();
    while(money >= researchSpeedMoneyCost){
        money -= researchSpeedMoneyCost;
        researchSpeedMoneyCost *= 3;
        researchSpeedMoneyMulti += 0.01;
    }
}
function BuyResearchSpeedMultiplier() {
    if(multiplier >= researchSpeedMultiplierCost){
        multiplier -= researchSpeedMultiplierCost;
        researchSpeedMultiplierCost *= 2.5;
        researchSpeedMultiplierMulti += 0.01;
    }
}
function BuyResearchSpeedMultiplierMax(event) {
    event.stopPropagation();
    while(multiplier >= researchSpeedMultiplierCost){
        multiplier -= researchSpeedMultiplierCost;
        researchSpeedMultiplierCost *= 2.5;
        researchSpeedMultiplierMulti += 0.01;
    }
}
function BuyResearchSpeedRebirth() {
    if(rebirth >= researchSpeedRebirthCost){
        rebirth -= researchSpeedRebirthCost;
        researchSpeedRebirthCost *= 2;
        researchSpeedRebirthMulti += 0.01;
    }
}
function BuyResearchSpeedRebirthMax(event) {
    event.stopPropagation();
    while(rebirth >= researchSpeedRebirthCost){
        rebirth -= researchSpeedRebirthCost;
        researchSpeedRebirthCost *= 2;
        researchSpeedRebirthMulti += 0.01;
    }
}
function BuyResearchSpeedSuperRebirth() {
    if(superRebirth >= researchSpeedSuperRebirthCost){
        superRebirth -= researchSpeedSuperRebirthCost;
        researchSpeedSuperRebirthCost *= 1.5;
        researchSpeedSuperRebirthMulti += 0.01;
    }
}
function BuyResearchSpeedSuperRebirthMax(event) {
    event.stopPropagation();
    while(superRebirth >= researchSpeedSuperRebirthCost){
        superRebirth -= researchSpeedSuperRebirthCost;
        researchSpeedSuperRebirthCost *= 1.5;
        researchSpeedSuperRebirthMulti += 0.01;
    }
}