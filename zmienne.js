//=====(ZMIENNE)=====
let money = 0;
let multiplier = 0;
let rebirth = 0;
let superRebirth = 0;
let mega = 0;
//=====(UBGRADE 1)=====
let up1Count = 0;
let up1Cost = 10000;
let up1Boost = 1;
let up1Cap = 10;
//=====(UBGRADE 2)=====
let up2Count = 0;
let up2Cost = 250000;
let up2Active = false;
let up2Boost = 1;
//=====(UBGRADE 3)=====
let up3Count = 0;
let up3Cost = 250;
let up3Boost = 1;
let up3Cap = 10;
//=====(UBGRADE 4)=====
let up4Count = 0;
let up4Cost = 4000;
let up4Active = false;
let up4Boost = 1;
let playTime = 0;
//=====(UBGRADE 5)=====
let up5Count = 0;
let up5Cost = 20;
let up5Active = false;
let up5Boost = 1;
//=====(UBGRADE 6)=====
let up6Count = 0;
let up6Cost = 125;
let up6Boost = 1;
let up6Cap = 25;
//=====(UBGRADE 7)=====
let up7Count = 0;
let up7Cost = 8;
let up7Boost = 1;
//=====(UBGRADE 8)=====
let up8Count = 0;
let up8Cost = 25;
let up8Active = false;
let up8Boost = 1;
//=====(UBGRADE 9)=====
let up9Count = 0;
let up9Cost = 125;
let up9Active = false;
//=====(AUTO UPDATE EKRANU)=====
let toUpgradeVis = false;
let up3Vis = false;
let up4Vis = false;
let up5Vis = false;
let up6Vis = false;
let up7Vis = false;
let up8Vis = false;
let up9Vis = false;
let SRVis = false;
let SRUpgVis = false;
let SRStatsVis = false;
let SRMultiVis = false;
let researchVis = false;
let upgradeBlockVis = false;
let upgradesStatsVis = false;
let upgrade3StatsVis = false;
let upgrade4StatsVis = false;
let upgrade5StatsVis = false;
let upgrade6StatsVis = false;
let upgrade7StatsVis = false;
let upgrade8StatsVis = false;
let upgrade9StatsVis = false;
let SRAlphabetVis = false;
let up2ReVis = false;
let up3ReVis = false;
let up4ReVis = false;
let up6ReVis = false;
let up7ReVis = false;
let up8ReVis = false;
let up9ReVis = false;
let up10ReVis = false;
let up11ReVis = false;
let up12ReVis = false;
let MeVis = false;
let rebirthAutomationVis = false;
let superRebirthAutomationVis = false;
//=====(RESEARCHERS)=====
let researchers = 0;
let researchersMoneyCost = 400000000000;
let researchersMultiplierCost = 200000000;
let researchersRebirthCost = 5000000;
let researchersSuperRebirthCost = 2000;
//=====(RESEARCHERS SPEED)=====
let researchSpeedMoneyCost = 10000000000;
let researchSpeedMultiplierCost = 25000000;
let researchSpeedRebirthCost = 500000;
let researchSpeedSuperRebirthCost = 250;
let researchSpeedMoneyMulti = 1;
let researchSpeedMultiplierMulti = 1;
let researchSpeedRebirthMulti = 1;
let researchSpeedSuperRebirthMulti = 1;
let researchSpeedUpgradesMulti = 1;
//=====(RESEARCH UPGRADES)=====
let researchTick = 1000
let currentResearchers = 0
let researchersSpending = 0
//=====(UBGRADE 1 RESEARCH)=====
let up1Researchers = 0
let up1TimeIs = 0
let up1TimeLeft = 60
let up1Lv = 0
let up1Scale = 1.4
let up1BoostRe = 1
//=====(UBGRADE 2 RESEARCH)=====
let up2Researchers = 0
let up2TimeIs = 0
let up2TimeLeft = 200
let up2Lv = 0
let up2Scale = 1.4
let up2BoostRe = 0
//=====(UBGRADE 3 RESEARCH)=====
let up3Researchers = 0
let up3TimeIs = 0
let up3TimeLeft = 450
let up3Lv = 0
let up3Scale = 1.3
let up3BoostRe = 1
//=====(UBGRADE 4 RESEARCH)=====
let up4Researchers = 0
let up4TimeIs = 0
let up4TimeLeft = 800
let up4Lv = 0
let up4Scale = 1.5
let up4BoostRe = 1
let up4BoostActive = false
//=====(UBGRADE 5 RESEARCH)=====
let up5Researchers = 0
let up5TimeIs = 0
let up5TimeLeft = 120
let up5Lv = 0
let up5Scale = 1.6
let up5BoostRe = 0
//=====(UBGRADE 6 RESEARCH)=====
let up6Researchers = 0
let up6TimeIs = 0
let up6TimeLeft = 300
let up6Lv = 0
let up6Scale = 1.6
let up6BoostRe = 1
//=====(UBGRADE 7 RESEARCH)=====
let up7Researchers = 0
let up7TimeIs = 0
let up7TimeLeft = 500
let up7Lv = 0
let up7Scale = 2.2
let up7BoostRe = 0
//=====(UBGRADE 8 RESEARCH)=====
let up8Researchers = 0
let up8TimeIs = 0
let up8TimeLeft = 1200
let up8Lv = 0
let up8Scale = 2
let up8BoostRe = 1
let up8BoostActive = false
//=====(UBGRADE 9 RESEARCH)=====
let up9Researchers = 0
let up9TimeIs = 0
let up9TimeLeft = 600
let up9Lv = 0
let up9Scale = 1.6
let up9BoostRe = 1
let up9BoostActive = false
//=====(UBGRADE 10 RESEARCH)=====
let up10Researchers = 0
let up10TimeIs = 0
let up10TimeLeft = 1000
let up10Lv = 0
let up10Scale = 1.3
let up10BoostRe = 1
//=====(UBGRADE 11 RESEARCH)=====
let up11Researchers = 0
let up11TimeIs = 0
let up11TimeLeft = 2400
let up11Lv = 1
let up11Scale = 1.8
let up11BoostRe = 1
let up11BoostActive = false
//=====(UBGRADE 12 RESEARCH)=====
let up12Researchers = 0
let up12TimeIs = 0
let up12TimeLeft = 10000
let up12Lv = 0
let up12Scale = 1.8
let up12BoostRe = 1
let up12BoostActive = false
//=====(AUTO GAIN)=====
//=====(MULTIPLIER)=====
let multiplierGain = 0;
let multiplierGainTest = 0.1;
let multiplierTime = 10;
let multiplierTimeTest = 8;
let multiplierGainResearchers = 0;
let multiplierGainTimeIs = 0;
let multiplierGainTimeLeft = 150;
let multiplierScale = 1.7;
let multiplierTimeResearchers = 0;
let multiplierTimeTimeIs = 0;
let multiplierTimeTimeLeft = 200;
let multiplierGainLv = 0
let multiplierTimeLv = 0
//=====(REBIRTH)=====
let rebirthGain = 0;
let rebirthGainTest = 0.1;
let rebirthTime = 10;
let rebirthTimeTest = 8;
let rebirthGainResearchers = 0;
let rebirthGainTimeIs = 0;
let rebirthGainTimeLeft = 500;
let rebirthScale = 1.9;
let rebirthTimeResearchers = 0;
let rebirthTimeTimeIs = 0;
let rebirthTimeTimeLeft = 450;
let rebirthGainLv = 0
let rebirthTimeLv = 0
//=====(SUPER REBIRTH)=====
let superRebirthGain = 0;
let superRebirthGainTest = 0.1;
let superRebirthTime = 10;
let superRebirthTimeTest = 8;
let superRebirthGainResearchers = 0;
let superRebirthGainTimeIs = 0;
let superRebirthGainTimeLeft = 900;
let superRebirthScale = 2.2;
let superRebirthTimeResearchers = 0;
let superRebirthTimeTimeIs = 0;
let superRebirthTimeTimeLeft = 920;
let superRebirthGainLv = 0
let superRebirthTimeLv = 0