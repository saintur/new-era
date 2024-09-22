const icons = [
  { icon: 'alias 2x', cursor: 'default'},
  { icon: 'nw-se 2x', cursor: 'nwse-resize'},
  { icon: 'ne-sw 2x', cursor: 'nesw-resize'},
  // { icon: 'nw 2x', cursor: 'nw-resize'},
  // { icon: 'se 2x', cursor: 'se-resize'},
  // { icon: 'ne 2x', cursor: 'ne-resize'},
  // { icon: 'sw 2x', cursor: 'sw-resize'},
  // { icon: 'n 2x', cursor: 'n-resize'},
  // { icon: 's 2x', cursor: 's-resize'},
  // { icon: 'e 2x', cursor: 'e-resize'},
  // { icon: 'w 2x', cursor: 'w-resize'},
  { icon: 'e-w 2x', cursor: 'alias', cursor: 'ew-resize'},
  { icon: 'n-s 2x', cursor: 'alias', cursor: 'ns-resize'},
  { icon: 'pointer 2x', height: 12, cursor: 'pointer' },
  { icon: 'contextmenu 2x', height: 40, cursor: 'context-menu' },
  { icon: 'help 2x', cursor: 'help' },
  { icon: 'ibeam 2x', cursor: 'text' },
  { icon: 'cell 2x', cursor: 'cell' },
  { icon: 'move 2x', cursor: 'move' },
  { icon: 'camera 2x', cursor: 'alias' },
  { icon: 'grab 2x', cursor: 'grab' },
  { icon: 'grabbing 2x', cursor: 'grabbing' },
  { icon: 'forbidden 2x', cursor: 'not-allowed' },
  { icon: 'poof 2x', cursor: 'alias' },
  { icon: 'zoom in 2x', cursor: 'zoom-in' },
  { icon: 'zoom out 2x', cursor: 'zoom-out' },
]

icons.forEach(item => {
  const content = document.createElement('div')
  content.classList.add('mouse-icon');
  content.style.cursor = item.cursor;
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
  content.appendChild(img)
  lightContainer.appendChild(content);
});

icons.forEach(item => {
  const content = document.createElement('div')
  content.classList.add('mouse-icon');
  content.style.cursor = item.cursor;
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
  content.appendChild(img)
  darkContainer.appendChild(content);
});

icons.forEach(item => {
  const content = document.createElement('div')
  content.classList.add('mouse-icon');
  content.style.cursor = item.cursor;
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
  const lightContainer = document.getElementById('both-icons');
  content.appendChild(img)
  lightContainer.appendChild(content);
});