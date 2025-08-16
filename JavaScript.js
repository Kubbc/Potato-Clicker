let music_audio = document.getElementById("Music");
let potatoSound_audio = document.getElementById("potatoSound");
let purchase_audio = document.getElementById("purchaseSound");
let menuClick = document.getElementById("menuClick");
let Potato = document.getElementById("Potato");
let notification = document.getElementById("notification");
let notificationTitle = document.getElementById("notificationTitle");
let notificationText = document.getElementById("notificationText");


let hoe = document.getElementById("upgrade_hoe");
let farmer = document.getElementById("upgrade_farmer");
let farm = document.getElementById("upgrade_farm");
let fries = document.getElementById("upgrade_fries");
let factory = document.getElementById("upgrade_factory");
let bank = document.getElementById("upgrade_bank");
let potatoMind = document.getElementById("upgrade_potatoMind");
let tool = document.getElementById("upgrade_tool");
let planet = document.getElementById("upgrade_planet");
let cosmic = document.getElementById("upgrade_cosmic");

let hoeAmountShow = document.getElementById("upgrade_hoe_amount");
let hoe_priceShow = document.getElementById("upgrade_hoe_price");
let farmerAmountShow = document.getElementById("upgrade_farmer_amount");
let farmer_priceShow = document.getElementById("upgrade_farmer_price");
let farmAmountShow = document.getElementById("upgrade_farm_amount");
let farm_priceShow = document.getElementById("upgrade_farm_price");
let friesAmountShow = document.getElementById("upgrade_fries_amount");
let fries_priceShow = document.getElementById("upgrade_fries_price");
let factoryAmountShow = document.getElementById("upgrade_factory_amount");
let factory_priceShow = document.getElementById("upgrade_factory_price");
let bankAmountShow = document.getElementById("upgrade_bank_amount");
let bank_priceShow = document.getElementById("upgrade_bank_price");
let potatoMindAmountShow = document.getElementById("upgrade_potatoMind_amount");
let potatoMind_priceShow = document.getElementById("upgrade_potatoMind_price");
let toolAmountShow = document.getElementById("upgrade_tool_amount");
let tool_priceShow = document.getElementById("upgrade_tool_price");
let planetAmountShow = document.getElementById("upgrade_planet_amount");
let planet_priceShow = document.getElementById("upgrade_planet_price");
let cosmicAmountShow = document.getElementById("upgrade_cosmic_amount");
let cosmic_priceShow = document.getElementById("upgrade_cosmic_price");

let ExtraHand = document.getElementById("OneTimeUpgrade_ExtraHand")
let FarmerPPC = document.getElementById("OneTimeUpgrade_FarmerPPC")
let fingerFries = document.getElementById("OneTimeUpgrade_fingerFries")
let exFingers = document.getElementById("OneTimeUpgrade_exFingers")

let HoeX2 = document.getElementById("OneTimeUpgrade_HoeX2");
let farmerX2 = document.getElementById("OneTimeUpgrade_farmerX2");
let farmX2 = document.getElementById("OneTimeUpgrade_farmX2");
let friesX2 = document.getElementById("OneTimeUpgrade_friesX2");
let factoryX2 = document.getElementById("OneTimeUpgrade_factoryX2");
let bankX2 = document.getElementById("OneTimeUpgrade_bankX2");
let potatoMindX2 = document.getElementById("OneTimeUpgrade_potatoMindX2");
let toolX2 = document.getElementById("OneTimeUpgrade_toolX2");
let planetX2 = document.getElementById("OneTimeUpgrade_planetX2");
let cosmicX2 = document.getElementById("OneTimeUpgrade_cosmicX2");

setInterval(Save, 60000)

const price_increase = 1.15;

let isTabHidden = false;

let patchNotesOnOff = false;
let settingsOnOff = false;
let musicOnOff = true;
let SFXOnOff = true;

let musicPlay = 0;
let Money = 0;
let PPC = 1;
let PPS = 0;



let hoe_price = 15;
let hoe_amount = 0;
let hoe_pps = 0.1;

let farmer_price = 100;
let farmer_amount = 0;
let farmer_pps = 1;

let farm_price = 1400;
let farm_amount = 0;
let farm_pps = 10;

let fries_price = 13000;
let fries_amount = 0;
let fries_pps = 60;

let factory_price = 150000;
let factory_amount = 0;
let factory_pps = 300;

let bank_pps = 1250;
let bank_price = 1200000;
let bank_amount = 0;

let potatoMind_price = 18000000;
let potatoMind_amount = 0;
let potatoMind_pps = 7500;

let tool_price = 350000000;
let tool_amount = 0;
let tool_pps = 46000;

let planet_price = 5000000000;
let planet_amount = 0;
let planet_pps = 250000;

let cosmic_price = 80000000000;
let cosmic_amount = 0;
let cosmic_pps = 1800000;



let hoeClick_multiplyer = 0;
let ExtraHand_purchased = false;
let farmerPPC_purchased = false;
let farmerPPC_multiplyer = 0;
let fingerFries_purchased = false;
let fingerFries_multiplyer = 0;
let exFingers_purchased = false;
let exFingers_multiplyer = 0;

let hoeX2_purchased = false;
let hoe_multiplyer = 1;
let farmerX2_purchased = false;
let farmer_multiplyer = 1;
let farmX2_purchased = false;
let farm_multiplyer = 1;
let friesX2_purchased = false;
let fries_multiplyer = 1;
let factoryX2_purchased = false;
let factory_multiplyer = 1;
let bankX2_purchased = false;
let bank_multiplyer = 1;
let potatoMindX2_purchased = false;
let potatoMind_multiplyer = 1;
let toolX2_purchased = false;
let tool_multiplyer = 1;
let planetX2_purchased = false;
let planet_multiplyer = 1;
let cosmicX2_purchased = false;
let cosmic_multiplyer = 1;

let click_multiplyer = 1;


window.onload = function () {
  music_audio.volume = 0.1;
  potatoSound_audio.volume = 1.0;
  purchase_audio.volume = 1.0;

  setInterval(1000)
  LoadSave();
};



document.getElementById("settingsButton").onclick = Settings;
document.getElementById("PatchNotesButton").onclick = PatchNotes;

Potato.onclick = PotatoClick;

hoe.onclick = Hoe_Pressed;
farmer.onclick = Farmer_Pressed;
farm.onclick = Farm_Pressed;
fries.onclick = Fries_Pressed;
factory.onclick = Factory_Pressed;
bank.onclick = Bank_Pressed;
potatoMind.onclick = PotatoMind_Pressed;
tool.onclick = Tool_Pressed;
planet.onclick = Planet_Pressed;
cosmic.onclick = Cosmic_Pressed;

ExtraHand.onclick = ExtraHand_Pressed;
FarmerPPC.onclick = FarmerPPC_Pressed;
fingerFries.onclick = FingerFries_Pressed;
exFingers.onclick = ExFingers_Pressed;

HoeX2.onclick = HoeX2_Pressed;
farmerX2.onclick = FarmerX2_Pressed;
farmX2.onclick = FarmX2_Pressed;
friesX2.onclick = FriesX2_Pressed;
factoryX2.onclick = FactoryX2_Pressed;
bankX2.onclick = BankX2_Pressed;
potatoMindX2.onclick = PotatoMindX2_Pressed;
toolX2.onclick = ToolX2_Pressed;
planetX2.onclick = PlanetX2_Pressed;
cosmicX2.onclick = CosmicX2_Pressed;

function HoeX2_Pressed() {
  if (Money >= 100) {
    Money -= 100
    HoeX2.style.display = "none";
    hoe_multiplyer += 1;
    click_multiplyer *= 2;
    hoeX2_purchased = true;
    PPC = click_multiplyer;

    hoeAmountShow.textContent = hoe_amount;
    hoe_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(hoe_price)}`;
    menuClick.play();
  }
}

function FarmerX2_Pressed() {
  if (Money >= 1000) {
    Money -= 1000
    farmerX2.style.display = "none";
    farmer_multiplyer += 1;
    farmerX2_purchased = true;
    PPC = click_multiplyer;

    farmerAmountShow.textContent = farmer_amount;
    farmer_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(farmer_price)}`;
    menuClick.play();
  }
}

function FarmX2_Pressed() {
  if (Money >= 1500) {
    Money -= 1500
    farmX2.style.display = "none";
    farm_multiplyer += 1;
    farmX2_purchased = true;
    PPC = click_multiplyer;

    farmAmountShow.textContent = farm_amount;
    farm_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(farm_price)}`;
    menuClick.play();
  }
}

function FriesX2_Pressed() {
  if (Money >= 110000) {
    Money -= 110000
    friesX2.style.display = "none";
    fries_multiplyer += 1;
    friesX2_purchased = true;
    PPC = click_multiplyer;

    friesAmountShow.textContent = fries_amount;
    fries_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(fries_price)}`;
    menuClick.play();
  }
}

function FactoryX2_Pressed() {
  if (Money >= 1000000) {
    Money -= 1000000
    factoryX2.style.display = "none";
    factory_multiplyer += 1;
    factoryX2_purchased = true;
    PPC = click_multiplyer;

    factoryAmountShow.textContent = factory_amount;
    factory_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(factory_price)}`;
    menuClick.play();
  }
}

function BankX2_Pressed() {
  if (Money >= 5000000) {
    Money -= 5000000
    bankX2.style.display = "none";
    bank_multiplyer += 1;
    bankX2_purchased = true;
    PPC = click_multiplyer;

    bankAmountShow.textContent = bank_amount;
    bank_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(bank_price)}`;
    menuClick.play();
  }
}

function PotatoMindX2_Pressed() {
  if (Money >= 70000000) {
    Money -= 70000000
    potatoMindX2.style.display = "none";
    potatoMind_multiplyer += 1;
    potatoMindX2_purchased = true;
    PPC = click_multiplyer;

    potatoMindAmountShow.textContent = potatoMind_amount;
    potatoMind_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(potatoMind_price)}`;
    menuClick.play();
  }
}

function ToolX2_Pressed() {
  if (Money >= 1300000000) {
    Money -= 1300000000
    toolX2.style.display = "none";
    tool_multiplyer += 1;
    toolX2_purchased = true;
    PPC = click_multiplyer;

    toolAmountShow.textContent = tool_amount;
    tool_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(tool_price)}`;
    menuClick.play();
  }
}

function PlanetX2_Pressed() {
  if (Money >= 20000000000) {
    Money -= 20000000000
    planetX2.style.display = "none";
    planet_multiplyer += 1;
    planetX2_purchased = true;
    PPC = click_multiplyer;

    planetAmountShow.textContent = planet_amount;
    planet_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(planet_price)}`;
    menuClick.play();
  }
}

function CosmicX2_Pressed() {
  if (Money >= 450000000000) {
    Money -= 450000000000
    cosmicX2.style.display = "none";
    cosmic_multiplyer += 1;
    cosmicX2_purchased = true;
    PPC = click_multiplyer;

    cosmicAmountShow.textContent = cosmic_amount;
    cosmic_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(cosmic_price)}`;
    menuClick.play();
  }
}



function ExtraHand_Pressed() {
  if (Money >= 15000) {
    Money -= 15000;
    ExtraHand.style.display = "none";
    click_multiplyer *= 2;
    ExtraHand_purchased = true;
    PPC = click_multiplyer;
    menuClick.play();
  }
}

function FarmerPPC_Pressed() {
  if (Money >= 50000) {
    Money -= 50000;
    FarmerPPC.style.display = "none";
    farmerPPC_purchased = true;
    menuClick.play();
  }
}

function FingerFries_Pressed() {
  if (Money >= 100000) {
    Money -= 100000;
    fingerFries.style.display = "none";
    fingerFries_purchased = true;
    menuClick.play();
  }
}

function ExFingers_Pressed() {
  if (Money >= 2000000) {
    Money -= 2000000;
    exFingers.style.display = "none";
    exFingers_purchased = true;
    menuClick.play();
  }
}


function PotatoClick(event) {
  if (musicPlay == 0) {
    setTimeout(() => {
      music_audio.play();
      musicPlay += PPC;
    }, 2000);
  }

  potatoSound_audio.play();
  Money += PPC;
  document.getElementById("moneyDisplay").textContent = formatNumber(Money);


  spawnFloatingDollar(event.clientX, event.clientY);
  spawnParticle(event.clientX, event.clientY);
}

function spawnFloatingDollar(x, y) {
  const span = document.createElement('span');
  span.textContent = '+' + formatInfoNum(PPC);
  span.classList.add('float-up');
  span.style.left = `${x}px`;
  span.style.top = (y - 50) + 'px';
  document.body.appendChild(span);

  span.addEventListener('animationend', () => {
    span.remove();
  });
}

function spawnParticle(x, y) {
  const img = document.createElement('img');
  img.src = "Images/Particle.png";
  img.classList.add('particle');


  const randomDirection = Math.random() > 0.5 ? 1 : -1;
  const randomDistance = Math.random() * 30;

  img.style.left = `${x}px`;
  img.style.top = `${y - 20}px`;


  img.style.setProperty('--randomX', randomDirection * randomDistance + 'px');

  document.body.appendChild(img);

  img.addEventListener('animationend', () => {
    img.remove();
  });
}



function Hoe_Pressed() {
  if (Money >= hoe_price) {
    Money -= hoe_price;
    hoe_amount += 1;
    hoe_price = Math.floor(hoe_price * price_increase);

    hoeAmountShow.textContent = hoe_amount;
    hoe_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(hoe_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (hoe_amount == 5) {
    HoeX2.style.display = "flex";
  }
}

function Farmer_Pressed() {
  if (Money >= farmer_price) {
    Money -= farmer_price;
    farmer_amount += 1;
    farmer_price = Math.floor(farmer_price * price_increase);

    farmerAmountShow.textContent = farmer_amount;
    farmer_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(farmer_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (farmer_amount == 5) {
    farmerX2.style.display = "flex";
  }
}

function Farm_Pressed() {
  if (Money >= farm_price) {
    Money -= farm_price;
    farm_amount += 1;
    farm_price = Math.floor(farm_price * price_increase);

    farmAmountShow.textContent = farm_amount;
    farm_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(farm_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (farm_amount == 1) {
    ExtraHand.style.display = "flex";
    FarmerPPC.style.display = "flex";
  }

  if (farm_amount == 5) {
    farmX2.style.display = "flex";
  }
}

function Fries_Pressed() {
  if (Money >= fries_price) {
    Money -= fries_price;
    fries_amount += 1;
    fries_price = Math.floor(fries_price * price_increase);

    friesAmountShow.textContent = fries_amount;
    fries_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(fries_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (fries_amount == 5) {
    friesX2.style.display = "flex";
  }

  if (fries_amount == 1) {
    fingerFries.style.display = "flex";
  }
}

function Factory_Pressed() {
  if (Money >= factory_price) {
    Money -= factory_price;
    factory_amount += 1;
    factory_price = Math.floor(factory_price * price_increase);

    factoryAmountShow.textContent = factory_amount;
    factory_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(factory_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (factory_amount == 5) {
    factoryX2.style.display = "flex";
  }
}

function Bank_Pressed() {
  if (Money >= bank_price) {
    Money -= bank_price;
    bank_amount += 1;
    bank_price = Math.floor(bank_price * price_increase);

    bankAmountShow.textContent = bank_amount;
    bank_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(bank_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (bank_amount == 5) {
    bankX2.style.display = "flex";
  }

  if (bank_amount == 1) {
    exFingers.style.display = "flex";
  }
}

function PotatoMind_Pressed() {
  if (Money >= potatoMind_price) {
    Money -= potatoMind_price;
    potatoMind_amount += 1;
    potatoMind_price = Math.floor(potatoMind_price * price_increase);

    potatoMindAmountShow.textContent = potatoMind_amount;
    potatoMind_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(potatoMind_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (potatoMind_amount == 5) {
    potatoMindX2.style.display = "flex";
  }
}

function Tool_Pressed() {
  if (Money >= tool_price) {
    Money -= tool_price;
    tool_amount += 1;
    tool_price = Math.floor(tool_price * price_increase);

    toolAmountShow.textContent = tool_amount;
    tool_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(tool_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (tool_amount == 5) {
    toolX2.style.display = "flex";
  }
}

function Planet_Pressed() {
  if (Money >= planet_price) {
    Money -= planet_price;
    planet_amount += 1;
    planet_price = Math.floor(planet_price * price_increase);

    planetAmountShow.textContent = planet_amount;
    planet_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(planet_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (planet_amount == 5) {
    planetX2.style.display = "flex";
  }
}

function Cosmic_Pressed() {
  if (Money >= cosmic_price) {
    Money -= cosmic_price;
    cosmic_amount += 1;
    cosmic_price = Math.floor(cosmic_price * price_increase);

    cosmicAmountShow.textContent = cosmic_amount;
    cosmic_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(cosmic_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }

  if (cosmic_amount == 5) {
    cosmicX2.style.display = "flex";
  }
}



function Forever() {

  if (isTabHidden) return;

  if (window.innerWidth < 1200 && window.location.href.includes("index.html")) {
  window.location.href = "TooSmallScreen.html";
  }
  else if (window.innerWidth >= 1200 && window.location.href.includes("TooSmallScreen.html")) {
  window.location.href = "index.html";
  }

  Money += (PPS / 10);




  if (farmerPPC_purchased == true) {
    farmerPPC_multiplyer = (0.1 * farmer_amount);
  }

  if (fingerFries_purchased == true) {
    fingerFries_multiplyer = 20 * fries_amount
  }

  if (exFingers_purchased == true) {
    exFingers_multiplyer = 200 * bank_amount
  }
  
  if (ExtraHand_purchased == true) {
    hoeClick_multiplyer *= 2;
  }

  hoeClick_multiplyer = hoe_amount * 0.1 * hoe_multiplyer;
  click_multiplyer = 1 + farmerPPC_multiplyer + fingerFries_multiplyer + exFingers_multiplyer;
  
  if (hoeX2_purchased == true) {
    click_multiplyer += 1;
  }

  PPC = click_multiplyer;


  PPS = (hoe_amount * hoe_pps * hoe_multiplyer) + (farmer_amount * farmer_pps * farmer_multiplyer) + (farm_amount * farm_pps * farm_multiplyer) + (fries_amount * fries_pps * fries_multiplyer) + (factory_amount * factory_pps * factory_multiplyer) + (bank_amount * bank_pps * bank_multiplyer) + (potatoMind_amount * potatoMind_pps * potatoMind_multiplyer) + (tool_amount * tool_pps * tool_multiplyer) + (planet_amount * planet_pps * planet_multiplyer) + (cosmic_amount * cosmic_pps * cosmic_multiplyer);
  Money += (PPS / 10);
  document.getElementById("PPSDisplay").textContent = "Per second: " + formatInfoNum(PPS);
  document.getElementById("moneyDisplay").textContent = formatNumber(Money);



  if (Money >= hoe_price) {
    hoe_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    hoe_priceShow.style.color = "red"
  }

  if (Money >= farmer_price) {
    farmer_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    farmer_priceShow.style.color = "red"
  }

  if (Money >= farm_price) {
    farm_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    farm_priceShow.style.color = "red"
  }

  if (Money >= fries_price) {
    fries_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    fries_priceShow.style.color = "red"
  }

  if (Money >= factory_price) {
    factory_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    factory_priceShow.style.color = "red"
  }

  if (Money >= bank_price) {
    bank_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    bank_priceShow.style.color = "red"
  }

  if (Money >= potatoMind_price) {
    potatoMind_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    potatoMind_priceShow.style.color = "red"
  }

  if (Money >= tool_price) {
    tool_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    tool_priceShow.style.color = "red"
  }

  if (Money >= planet_price) {
    planet_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    planet_priceShow.style.color = "red"
  }

  if (Money >= cosmic_price) {
    cosmic_priceShow.style.color = "rgb(0, 255, 0)"
  }
  else {
    cosmic_priceShow.style.color = "red"
  }

}


setInterval(Forever, 100);

function formatNumber(num) {
  if (num >= 1e18) {
    return (num / 1e18).toFixed(3).replace(/\.0$/, '') + ' Quintillion';
  } else if (num >= 1e15) {
    return (num / 1e15).toFixed(3).replace(/\.0$/, '') + ' Quadrillion';
  } else if (num >= 1e12) {
    return (num / 1e12).toFixed(3).replace(/\.0$/, '') + ' Trillion';
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(3).replace(/\.0$/, '') + ' Billion';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(3).replace(/\.0$/, '') + ' Million';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(3).replace(/\.0$/, '') + ' Thousand';
  } else {
    return Math.floor(num);
  }
}


function formatInfoNum(num) {
  if (num >= 1e18) {
    return (num / 1e18).toFixed(3).replace(/\.0$/, '') + ' Quintillion';
  } else if (num >= 1e15) {
    return (num / 1e15).toFixed(3).replace(/\.0$/, '') + ' Quadrillion';
  } else if (num >= 1e12) {
    return (num / 1e12).toFixed(3).replace(/\.0$/, '') + ' Trillion';
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(3).replace(/\.0$/, '') + ' Billion';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(3).replace(/\.0$/, '') + ' Million';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(3).replace(/\.0$/, '') + ' Thousand';
  } else {
    return Math.floor(num * 10) / 10;
  }
}

function Settings() {
  if (settingsOnOff == true) {
    document.getElementById("settingsContainer").style.display = "none";
    document.getElementById("PatchNotesContainer").style.display = "none";
    settingsOnOff = false;
    patchNotesOnOff = false;
    menuClick.play();
  }
  else {
    document.getElementById("settingsContainer").style.display = "flex";
    document.getElementById("PatchNotesContainer").style.display = "none";
    settingsOnOff = true;
    patchNotesOnOff = false;
    menuClick.play();
  }
}


document.getElementById("musicSwitch").onclick = MusicOption;
document.getElementById("SFXSwitch").onclick = SFXOption;

function MusicOption() {
  if (musicOnOff == true) {
    music_audio.volume = 0.0;
    musicOnOff = false;
    document.getElementById("musicSwitch").textContent = "Off";
    menuClick.play();
  }
  else {
    music_audio.volume = 0.1;
    musicOnOff = true;
    document.getElementById("musicSwitch").textContent = "On";
    menuClick.play();
  }
}

function SFXOption() {
  if (SFXOnOff == true) {
    potatoSound_audio.volume = 0.0;
    purchase_audio.volume = 0.0;
    menuClick.volume = 0.0;
    SFXOnOff = false;
    document.getElementById("SFXSwitch").textContent = "Off";
    menuClick.play();
  }
  else {
    potatoSound_audio.volume = 1.0;
    purchase_audio.volume = 1.0;
    menuClick.volume = 1.0;
    SFXOnOff = true;
    document.getElementById("SFXSwitch").textContent = "On";
    menuClick.play();
  }
}


function PatchNotes() {
  if (patchNotesOnOff == true) {
    document.getElementById("PatchNotesContainer").style.display = "none";
    document.getElementById("settingsContainer").style.display = "none";
    settingsOnOff = false;
    patchNotesOnOff = false;
    menuClick.play();
  }
  else {
    document.getElementById("PatchNotesContainer").style.display = "flex";
    document.getElementById("settingsContainer").style.display = "none";
    settingsOnOff = false;
    patchNotesOnOff = true;
    menuClick.play();
  }
}

let gameState;


document.getElementById("closeLoad").onclick = function() {
  document.getElementById("loadContainer").style.display = "none";
  menuClick.play();
}

document.getElementById("closeWipe").onclick = function() {
  document.getElementById("wipeSaveContainer").style.display = "none";
  menuClick.play();
}

document.getElementById("closeExport").onclick = function() {
  document.getElementById("exportContainer").style.display = "none";
  menuClick.play();
}



let SaveMSG = true;
document.getElementById("save").onclick = function() {
  Save();
  menuClick.play();
}
document.getElementById("load").onclick = function() {
  document.getElementById("loadContainer").style.display = "flex";
  document.getElementById("wipeSaveContainer").style.display = "none";
  menuClick.play();
}

document.getElementById("loadInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const encoded = this.value;          
    localStorage.setItem("gameSave", encoded);
    LoadSave();
    document.getElementById("loadContainer").style.display = "none";
    menuClick.play();
  }
});


document.getElementById("exportSave").onclick = function() {
  document.getElementById("exportContainer").style.display = "flex"
  document.getElementById("exportCode").textContent = localStorage.getItem("gameSave");

  menuClick.play();
}

document.getElementById("wipeSave").onclick = function() {
  menuClick.play();
  document.getElementById("wipeSaveContainer").style.display = "flex";
  document.getElementById("loadContainer").style.display = "none";
}

document.getElementById("wipeSaveYes").onclick = function() {

  Money = 0;
  PPC = 1;
  PPS = 0;

  hoe_price = 15;
  hoe_amount = 0;
  hoe_pps = 0.1;

  farmer_price = 100;
  farmer_amount = 0;
  farmer_pps = 1;

  farm_price = 1400;
  farm_amount = 0;
  farm_pps = 10;

  fries_price = 13000;
  fries_amount = 0;
  fries_pps = 60;

  factory_price = 150000;
  factory_amount = 0;
  factory_pps = 300;

  bank_price = 1200000;
  bank_amount = 0;
  bank_pps = 1250;

  potatoMind_price = 18000000;
  potatoMind_amount = 0;
  potatoMind_pps = 7500;

  tool_price = 350000000;
  tool_amount = 0;
  tool_pps = 46000;

  planet_price = 5000000000;
  planet_amount = 0;
  planet_pps = 250000;

  cosmic_price = 80000000000;
  cosmic_amount = 0;
  cosmic_pps = 1800000;

  ExtraHand_purchased = false;
  farmerPPC_purchased = false;
  farmerPPC_multiplyer = 0;
  fingerFries_purchased = false;
  fingerFries_multiplyer = 0;
  exFingers_purchased = false;
  exFingers_multiplyer = 0;

  hoeX2_purchased = false;
  hoe_multiplyer = 1;
  farmerX2_purchased = false;
  farmer_multiplyer = 1;
  farmX2_purchased = false;
  farm_multiplyer = 1;
  friesX2_purchased = false;
  fries_multiplyer = 1;
  factoryX2_purchased = false;
  factory_multiplyer = 1;
  bankX2_purchased = false;
  bank_multiplyer = 1;
  potatoMindX2_purchased = false;
  potatoMind_multiplyer = 1;
  toolX2_purchased = false;
  tool_multiplyer = 1;
  planetX2_purchased = false;
  planet_multiplyer = 1;
  cosmicX2_purchased = false;
  cosmic_multiplyer = 1;

  click_multiplyer = 1;
  SaveMSG = false;



  HoeX2.style.display = "none";
  farmerX2.style.display = "none";
  farmX2.style.display = "none";
  friesX2.style.display = "none";
  factoryX2.style.display = "none";
  bankX2.style.display = "none";
  potatoMindX2.style.display = "none";
  toolX2.style.display = "none";
  planetX2.style.display = "none";
  cosmicX2.style.display = "none";

  ExtraHand.style.display = "none";
  FarmerPPC.style.display = "none";
  fingerFries.style.display = "none";
  exFingers.style.display = "none";

  

  Save();

  document.getElementById("wipeSaveContainer").style.display = "none";
  menuClick.play();
  updateUI();

  notificationTitle.textContent = "Wiped.";
  notificationText.textContent = "I hope it was not a missclick";
  notification.style.display = "flex";

  setTimeout(() => {
    notification.style.display = "none";
    Save();
    window.location.reload();
  }, 5000);
}

document.getElementById("wipeSaveNo").onclick = function() {
  document.getElementById("wipeSaveContainer").style.display = "none";
  menuClick.play();
  
}

function Save() {
  gameState = {
    money: Money,
    PPC: PPC,
    PPS: PPS,
    click_multiplyer: click_multiplyer,
    hoe_amount: hoe_amount,
    farmer_amount: farmer_amount,
    farm_amount: farm_amount,
    fries_amount: fries_amount,
    factory_amount: factory_amount,
    bank_amount: bank_amount,
    potatoMind_amount: potatoMind_amount,
    tool_amount: tool_amount,
    planet_amount: planet_amount,
    cosmic_amount: cosmic_amount,
    hoe_price: hoe_price,
    farmer_price: farmer_price,
    farm_price: farm_price,
    fries_price: fries_price,
    factory_price: factory_price,
    bank_price: bank_price,
    potatoMind_price: potatoMind_price,
    tool_price: tool_price,
    planet_price: planet_price,
    cosmic_price: cosmic_price,
    hoe_multiplyer: hoe_multiplyer,
    farmer_multiplyer: farmer_multiplyer,
    farm_multiplyer: farm_multiplyer,
    fries_multiplyer: fries_multiplyer,
    factory_multiplyer: factory_multiplyer,
    bank_multiplyer: bank_multiplyer,
    potatoMind_multiplyer: potatoMind_multiplyer,
    tool_multiplyer: tool_multiplyer,
    planet_multiplyer: planet_multiplyer,
    cosmic_multiplyer: cosmic_multiplyer,

    ExtraHand_purchased: ExtraHand_purchased,
    farmerPPC_purchased: farmerPPC_purchased,
    fingerFries_purchased: fingerFries_purchased,
    exFingers_purchased: exFingers_purchased,

    hoeX2_purchased: hoeX2_purchased,
    farmerX2_purchased: farmerX2_purchased,
    farmX2_purchased: farmX2_purchased,
    friesX2_purchased: friesX2_purchased,
    factoryX2_purchased: factoryX2_purchased,
    bankX2_purchased: bankX2_purchased,
    potatoMindX2_purchased: potatoMindX2_purchased,
    toolX2_purchased: toolX2_purchased,
    planetX2_purchased: planetX2_purchased,
    cosmicX2_purchased: cosmicX2_purchased
  };
  const encodedGameState = btoa(JSON.stringify(gameState));  // Encode to Base64
  localStorage.setItem("gameSave", encodedGameState);  // Store encoded data
  

  if (SaveMSG == true) {
    notificationTitle.textContent = "Saved.";
    notificationText.textContent = "Game was indeed saved";
    notification.style.display = "flex";

    setTimeout(() => {
      notification.style.display = "none";
    }, 2000);
  } else {
    SaveMSG = true;
  }
}


function LoadSave() {
  const encodedGameState = localStorage.getItem("gameSave");
  if (encodedGameState) {
    const gameState = JSON.parse(atob(encodedGameState));  // Decode from Base64 and parse JSON
    console.log(gameState);


    
    
    // Restore the game state from the loaded object
    Money = gameState.money;
    PPC = gameState.PPC;
    PPS = gameState.PPS;
    click_multiplyer = gameState.click_multiplyer;
    hoe_amount = gameState.hoe_amount;
    farmer_amount = gameState.farmer_amount;
    farm_amount = gameState.farm_amount;
    fries_amount = gameState.fries_amount;
    factory_amount = gameState.factory_amount;
    bank_amount = gameState.bank_amount;
    potatoMind_amount = gameState.potatoMind_amount;
    tool_amount = gameState.tool_amount;
    planet_amount = gameState.planet_amount;
    cosmic_amount = gameState.cosmic_amount;
    hoe_price = gameState.hoe_price;
    farmer_price = gameState.farmer_price;
    farm_price = gameState.farm_price;
    fries_price = gameState.fries_price;
    factory_price = gameState.factory_price;
    bank_price = gameState.bank_price;
    potatoMind_price = gameState.potatoMind_price;
    tool_price = gameState.tool_price;
    planet_price = gameState.planet_price;
    cosmic_price = gameState.cosmic_price;
    hoe_multiplyer = gameState.hoe_multiplyer;
    farmer_multiplyer = gameState.farmer_multiplyer;
    farm_multiplyer = gameState.farm_multiplyer;
    fries_multiplyer = gameState.fries_multiplyer;
    factory_multiplyer = gameState.factory_multiplyer;
    bank_multiplyer = gameState.bank_multiplyer;
    potatoMind_multiplyer = gameState.potatoMind_multiplyer;
    tool_multiplyer = gameState.tool_multiplyer;
    planet_multiplyer = gameState.planet_multiplyer;
    cosmic_multiplyer = gameState.cosmic_multiplyer;

    ExtraHand_purchased = gameState.ExtraHand_purchased;
    farmerPPC_purchased = gameState.farmerPPC_purchased;
    fingerFries_purchased = gameState.fingerFries_purchased;
    exFingers_purchased = gameState.exFingers_purchased;

    hoeX2_purchased = gameState.hoeX2_purchased;
    farmerX2_purchased = gameState.farmerX2_purchased;
    farmX2_purchased = gameState.farmX2_purchased;
    friesX2_purchased = gameState.friesX2_purchased;
    factoryX2_purchased = gameState.factoryX2_purchased;
    bankX2_purchased = gameState.bankX2_purchased;
    potatoMindX2_purchased = gameState.potatoMindX2_purchased;
    toolX2_purchased = gameState.toolX2_purchased;
    planetX2_purchased = gameState.planetX2_purchased;
    cosmicX2_purchased = gameState.cosmicX2_purchased;

    // Update the UI with the restored values
    updateUI();

    return gameState;

  } else {
    console.log("No game data found.");
    return null;
  }
    
}

// Helper function to update the UI with the restored game state
function updateUI() {
  document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  hoeAmountShow.textContent = hoe_amount;
  farmerAmountShow.textContent = farmer_amount;
  farmAmountShow.textContent = farm_amount;
  friesAmountShow.textContent = fries_amount;
  factoryAmountShow.textContent = factory_amount;
  bankAmountShow.textContent = bank_amount;
  potatoMindAmountShow.textContent = potatoMind_amount;
  toolAmountShow.textContent = tool_amount;
  planetAmountShow.textContent = planet_amount;
  cosmicAmountShow.textContent = cosmic_amount;
  hoe_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(hoe_price)}`;
  farmer_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(farmer_price)}`;
  farm_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(farm_price)}`;
  fries_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(fries_price)}`;
  factory_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(factory_price)}`;
  bank_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(bank_price)}`;
  potatoMind_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(potatoMind_price)}`;
  planet_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(planet_price)}`;
  cosmic_priceShow.innerHTML = `<img src="Images/Potato.png" class="smallPotato"> ${formatNumber(cosmic_price)}`;
  
  // Handle visibility of upgrades based on purchased status
  
  if (hoe_amount >= 5) {
    HoeX2.style.display = hoeX2_purchased ? "none" : "flex";
  }
  if (farmer_amount >= 5) {
    farmerX2.style.display = farmerX2_purchased ? "none" : "flex";
  }
  if (farm_amount >= 5) {
    farmX2.style.display = farmX2_purchased ? "none" : "flex";
  }
  if (fries_amount >= 5) {
    friesX2.style.display = friesX2_purchased ? "none" : "flex";
  }
  if (factory_amount >= 5) {
    factoryX2.style.display = factoryX2_purchased ? "none" : "flex";
  }
  if (bank_amount >= 5) {
    bankX2.style.display = bankX2_purchased ? "none" : "flex";
  }
  if (potatoMind_amount >= 5) {
    potatoMindX2.style.display = potatoMindX2_purchased ? "none" : "flex";
  }
  if (tool_amount >= 5) {
    toolX2.style.display = toolX2_purchased ? "none" : "flex";
  }
  if (planet_amount >= 5) {
    planetX2.style.display = planetX2_purchased ? "none" : "flex";
  }
  if (cosmic_amount >= 5) {
    cosmicX2.style.display = cosmicX2_purchased ? "none" : "flex";
  }

  if (farmer_amount >= 1) {
    ExtraHand.style.display = ExtraHand_purchased ? "none" : "flex";
    FarmerPPC.style.display = farmerPPC_purchased ? "none" : "flex";
  }
  if (fries_amount >= 1) {
    fingerFries.style.display = fingerFries_purchased ? "none" : "flex";
  }
  if (bank_amount >= 1) {
    exFingers.style.display = exFingers_purchased ? "none" : "flex";
  }
  

}


let hiddenTime = 0;
let shownTime = 0;
let secondsAway = 0;
let offlinePPS = 0;

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    isTabHidden = true;
    hiddenTime = Date.now();
    offlinePPS = PPS;     // snapshot
  } else if (document.visibilityState === "visible") {
    isTabHidden = false;
    shownTime = Date.now();
    secondsAway = (shownTime - hiddenTime) / 1000;
    Money += offlinePPS * secondsAway;


    Money += offlinePPS * secondsAway;

    if (farmerPPC_purchased == true) {
      farmerPPC_multiplyer = (0.1 * farmer_amount);
    }

    if (fingerFries_purchased == true) {
      fingerFries_multiplyer = 20 * fries_amount;
    }

    if (exFingers_purchased == true) {
      exFingers_multiplyer = 200 * bank_amount;
    }

    if (ExtraHand_purchased == true) {
      hoeClick_multiplyer *= 2;
    }

    hoeClick_multiplyer = hoe_amount * 0.1 * hoe_multiplyer;
    click_multiplyer = 1 + farmerPPC_multiplyer + fingerFries_multiplyer + exFingers_multiplyer;

    if (hoeX2_purchased == true) {
      click_multiplyer += 1;
    }

    PPC = click_multiplyer;

    PPS = (hoe_amount * hoe_pps * hoe_multiplyer) 
        + (farmer_amount * farmer_pps * farmer_multiplyer) 
        + (farm_amount * farm_pps * farm_multiplyer) 
        + (fries_amount * fries_pps * fries_multiplyer) 
        + (factory_amount * factory_pps * factory_multiplyer) 
        + (bank_amount * bank_pps * bank_multiplyer) 
        + (potatoMind_amount * potatoMind_pps * potatoMind_multiplyer) 
        + (tool_amount * tool_pps * tool_multiplyer) 
        + (planet_amount * planet_pps * planet_multiplyer) 
        + (cosmic_amount * cosmic_pps * cosmic_multiplyer);

    document.getElementById("PPSDisplay").textContent = "Per second: " + formatInfoNum(PPS);
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }
});
