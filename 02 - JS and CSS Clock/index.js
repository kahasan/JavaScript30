const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelectorAll('.hand');

let styles = [];
hand.forEach((i) => {
  styles.push(i.style);
});

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  let minutes = now.getMinutes();
  const hours = now.getHours();

  if (seconds == 0) {
    //when seconds reach 0 delete the transition effect to block dizzy moves
    styles.forEach((i) => (i.transition = 'none'));
  } else {
    styles.forEach(
      (i) => (i.transition = 'all 0.5s cubic-bezier(0.42, 0, 0, 1.76)')
    );
  }

  const secondDegree = (seconds / 60) * 360 + 90;
  const minuteDegree = (minutes / 60) * 360 + 90;
  const hourDegree = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
