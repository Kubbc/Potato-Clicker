let music_audio = document.getElementById("Music");
let potatoSound_audio = document.getElementById("potatoSound");
let purchase_audio = document.getElementById("purchaseSound");
let menuClick = document.getElementById("menuClick");
let Potato = document.getElementById("Potato");

let hoe = document.getElementById("upgrade_hoe");
let farmer = document.getElementById("upgrade_farmer");
let farm = document.getElementById("upgrade_farm");
let fries = document.getElementById("upgrade_fries");
let factory = document.getElementById("upgrade_factory");

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

let HoeX2 = document.getElementById("OneTimeUpgrade_HoeX2");
let ExtraHand = document.getElementById("OneTimeUpgrade_ExtraHand")
let FarmerPPC = document.getElementById("OneTimeUpgrade_FarmerPPC")

const price_increase = 1.18;

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
let farm_price = 1000;
let farm_amount = 0;
let farm_pps = 20;
let fries_price = 12000;
let fries_amount = 0;
let fries_pps = 250;
let factory_price = 110000;
let factory_amount = 0;
let factory_pps = 2100;

let hoeX2_purchased = false;
let hoe_multiplyer = 1;
let ExtraHand_purchased = false;
let farmerPPC_purchased = false;
let farmerPPC_multiplyer = 1;

let click_multiplyer = 1;

window.onload = function () {
  music_audio.volume = 0.1;
  potatoSound_audio.volume = 1.0;
  purchase_audio.volume = 1.0;
};

document.getElementById("settingsButton").onclick = Settings;
document.getElementById("PatchNotesButton").onclick = PatchNotes;

Potato.onclick = PotatoClick;

hoe.onclick = Hoe_Pressed;
farmer.onclick = Farmer_Pressed;
farm.onclick = Farm_Pressed;
fries.onclick = Fries_Pressed;
factory.onclick = Factory_Pressed;

HoeX2.onclick = HoeX2_Pressed;
ExtraHand.onclick = ExtraHand_Pressed;
FarmerPPC.onclick = FarmerPPC_Pressed;

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
  if (Money >= 100000) {
    Money -= 100000;
    FarmerPPC.style.display = "none";
    farmerPPC_purchased = true;
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

  if (hoe_amount == 10 && hoe_multiplyer == 1) {
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

  if (fries_amount == 1) {
    FarmerPPC.style.display = "flex";
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
}





function Forever() {

  if (farmerPPC_purchased == true) {
    farmerPPC_multiplyer = (0.1 * farmer_amount);
    click_multiplyer = 1 + farmerPPC_multiplyer;

    
    if (hoeX2_purchased == true) {
      click_multiplyer *= 2;
    }
    if (ExtraHand_purchased == true) {
      click_multiplyer *= 2;
    }
  }

  PPC = click_multiplyer;

  PPS = (hoe_amount * hoe_pps) * hoe_multiplyer + (farmer_amount * farmer_pps) + (farm_amount * farm_pps) + (fries_amount * fries_pps) + (factory_amount * factory_pps);
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