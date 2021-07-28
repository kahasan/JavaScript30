const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log(this);

  this.classList.toggle('open');
}

//If you just try to toggle like
//this.classList.toggle("open-active")
//this function will be triggered twice.
//Because there are two transition. flex-grow and font-size
//Log e.property and see them
function toggleActive(e) {
  console.log(e.propertyName);

  //Normally we can do if(e.propertyName === "flex-grow") {...}
  //But there are some difference in browser
  //Some of them includes flex property and the others have flex-grow
  //Avoid this issue just check if properties includes "flex"...
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));

panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
