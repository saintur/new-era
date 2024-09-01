const icons = [
  { icon: 'alias 2x'},
  { icon: 'resize nwse 2x'},
  { icon: 'resize nesw 2x'},
  // { icon: 'resize nw 2x'},
  // { icon: 'resize se 2x'},
  // { icon: 'resize ne 2x'},
  // { icon: 'resize sw 2x'},
  // { icon: 'n 2x'},
  // { icon: 's 2x'},
  // { icon: 'e 2x'},
  // { icon: 'w 2x'},
  { icon: 'e-w 2x'},
  { icon: 'n-s 2x'},
  { icon: 'pointer 2x', height: 12 },
  { icon: 'contextmenu 2x', height: 40 },
  { icon: 'help 2x' },
  { icon: 'ibeam 2x' },
  { icon: 'cell 2x' },
  { icon: 'move 2x' },
  { icon: 'camera 2x', },
  { icon: 'grab 2x' },
  { icon: 'grabbing 2x' },
  { icon: 'forbidden 2x' },
  { icon: 'poof 2x' },
  { icon: 'zoom in 2x' },
  { icon: 'zoom out 2x' },
]

icons.forEach(item => {
  const filename = `${item.icon}.png`;
  const img = document.createElement('img')
  img.classList.add('icon');
  img.src = `./icons/${filename}`;
  img.alt = `${item.icon}.png`;
  if (item.height) {
    img.style.height = `${item.height}px`
  } else {
    img.style.height = '18px'
  }
  const lightContainer = document.getElementById('light-icons');
  lightContainer.appendChild(img);
});

icons.forEach(item => {
  const filename = `${item.icon}.png`;
  const img = document.createElement('img')
  img.classList.add('icon');
  img.src = `./icons/${filename}`;
  if (item.height) {
    img.style.height = `${item.height}px`
  } else {
    img.style.height = '18px'
  }
  const darkContainer = document.getElementById('dark-icons');
  darkContainer.appendChild(img);
});