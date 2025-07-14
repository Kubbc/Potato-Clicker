window.onload = function () {
  const music_audio = document.getElementById("Music");
  const potatoSound_audio = document.getElementById("potatoSound");
  const Potato = document.getElementById("Potato");
  music_audio.volume = 0.1;
  potatoSound_audio.volume = 1.0;
}

Potato.onclick = PotatoClick;

var musicPlay = 0;
var Money = 0;
var PPC = 1;

function PotatoClick() {

  if (musicPlay == 0) {
    setTimeout(() => {
      const music_audio = document.getElementById("Music")
      music_audio.play();
      musicPlay += PPC;
    }, 2000);
  }


  const potatoSound_audio = document.getElementById("potatoSound")
  potatoSound_audio.play();
  Money += 1;
  document.getElementById("moneyDisplay").textContent = Money;

}