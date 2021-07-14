function removeTransition(e) {
  //You don't need to remove class in each event. Just select transform named.
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function play(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return; // If there is no audio tag just return. Otherwise you will have an error when you are trying to audio.play
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

  //Bad way to remove playing class in this senerio. Bc transition time in css can be replaceable by the designers. And after that your code won't be async any longer.
  // setTimeout(() => {
  //   key.classList.remove('playing');
  // }, 100);
}

const keys = document.querySelectorAll('.key');
//When transition is end trigger removeTransition. Like these methods you can listen css functions.
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', play);
