let music_audio = document.getElementById("Music");
let potatoSound_audio = document.getElementById("potatoSound");
let purchase_audio = document.getElementById("purchaseSound")
let menuClick = document.getElementById("menuClick")
let Potato = document.getElementById("Potato");

let hoe = document.getElementById("upgrade_hoe")
let farmer = document.getElementById("upgrade_farmer")

let hoeAmountShow = document.getElementById("upgrade_hoe_amount")
let hoe_priceShow = document.getElementById("upgrade_hoe_price")
let farmerAmountShow = document.getElementById("upgrade_farmer_amount")
let farmer_priceShow = document.getElementById("upgrade_farmer_price")

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
let farmer_price = 100;
let farmer_amount = 0;


window.onload = function () {
  music_audio.volume = 0.1;
  potatoSound_audio.volume = 1.0;
  purchaseSound_audio.volume = 1.0;
};

document.getElementById("settingsButton").onclick = Settings;
document.getElementById("PatchNotesButton").onclick = PatchNotes;

Potato.onclick = PotatoClick;

hoe.onclick = Hoe_Pressed;
farmer.onclick = Farmer_Pressed;


function PotatoClick(event) {
  if (musicPlay == 0) {
    setTimeout(() => {
      music_audio.play();
      musicPlay += PPC;
    }, 2000);
  }

  potatoSound_audio.play();
  Money += 1;
  document.getElementById("moneyDisplay").textContent = formatNumber(Money);


  spawnFloatingDollar(event.clientX, event.clientY);
  spawnParticle(event.clientX, event.clientY);
}

function spawnFloatingDollar(x, y) {
  const span = document.createElement('span');
  span.textContent = '+' + PPC;
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
  img.src = "images/Particle.png";
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
    PPS += 0.1;
    hoe_price = Math.floor(hoe_price * price_increase);

    hoeAmountShow.textContent = hoe_amount;
    hoe_priceShow.innerHTML = `<img src="images/Potato.png" class="smallPotato"> ${formatNumber(hoe_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }
}

function Farmer_Pressed() {
  if (Money >= farmer_price) {
    Money -= farmer_price;
    farmer_amount += 1;
    PPS += 1;
    farmer_price = Math.floor(farmer_price * price_increase);

    farmerAmountShow.textContent = farmer_amount;
    farmer_priceShow.innerHTML = `<img src="images/Potato.png" class="smallPotato"> ${formatNumber(farmer_price)}`;
    purchase_audio.play();
    document.getElementById("moneyDisplay").textContent = formatNumber(Money);
  }
}



function GivePPS() {
  Money += PPS;
  document.getElementById("moneyDisplay").textContent = formatNumber(Money);
}

function Forever() {
  document.getElementById("PPSDisplay").textContent = "Per second: " + formatNumber(PPS);

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
}

setInterval(GivePPS, 1000);
setInterval(Forever, 100);


function formatNumber(num) {
  if (num >= 1e18) {
    return (num / 1e18).toFixed(1).replace(/\.0$/, '') + ' Quintillion';
  } else if (num >= 1e15) {
    return (num / 1e15).toFixed(1).replace(/\.0$/, '') + ' Quadrillion';
  } else if (num >= 1e12) {
    return (num / 1e12).toFixed(1).replace(/\.0$/, '') + ' Trillion';
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, '') + ' Billion';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1).replace(/\.0$/, '') + ' Million';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1).replace(/\.0$/, '') + ' Thousand';
  } else {
    return Math.floor(num);
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