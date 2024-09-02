function makeResizableDiv(div) {
  const element = document.querySelector(div);
  const resizers = document.querySelectorAll(div + ' .resizer')
  const minimum_size = 84;
  const maximum_size = 320;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  let timer
  for (let i = 0; i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function (e) {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_x = element.offsetLeft;
      original_y = element.offsetTop;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })

    function mouseStopped() {                                 // the actual function that is called
      resetMovingClass()
    }

    function resize(e) {
      clearTimeout(timer)
      timer = setTimeout(mouseStopped, 500)
      if (currentResizer.classList.contains('right')) {
        // either go right or left
        leftRight(e)
        sizeToRight(e)
      } else if (currentResizer.classList.contains('left')) {
        leftRight(e)
        sizeToLeft(e)
      } else if (currentResizer.classList.contains('top')) {
        topBottom(e)
        sizeToTop(e)
      } else if (currentResizer.classList.contains('bottom')) {
        topBottom(e)
        sizeToBottom(e)
      } else if (currentResizer.classList.contains('top-right')) {
        topRightBottomLeft(e)
        sizeToRight(e)
        sizeToTop(e)
      } else if (currentResizer.classList.contains('top-left')) {
        topLeftBottomRight(e)
        sizeToLeft(e)
        sizeToTop(e)
      } else if (currentResizer.classList.contains('bottom-right')) {
        topLeftBottomRight(e)
        sizeToRight(e)
        sizeToBottom(e)
      } else if (currentResizer.classList.contains('bottom-left')) {
        topRightBottomLeft(e)
        sizeToLeft(e)
        sizeToBottom(e)
      }
    }

    function stopResize() {
      window.removeEventListener('mousemove', resize)
      resetMovingClass()
    }

    function resetMovingClass() {
      currentResizer.classList.remove('moving-right')
      currentResizer.classList.remove('moving-left')
      currentResizer.classList.remove('moving-top')
      currentResizer.classList.remove('moving-bottom')
      currentResizer.classList.remove('moving-top-left')
      currentResizer.classList.remove('moving-bottom-left')
      currentResizer.classList.remove('moving-top-right')
      currentResizer.classList.remove('moving-bottom-right')
    }

    function sizeToRight(e) {
      const width = original_width + (e.pageX - original_mouse_x);

      if (width > minimum_size && width < maximum_size) {
        element.style.width = width + 'px'
      }
    }

    function sizeToLeft(e) {
      const width = original_width - (e.pageX - original_mouse_x)
      if (width > minimum_size && width < maximum_size) {
        element.style.width = width + 'px'
        element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
      }
    }

    function sizeToTop(e) {
      const height = original_height - (e.pageY - original_mouse_y)
      if (height > minimum_size && height < maximum_size) {
        element.style.height = height + 'px'
        element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
      }
    }

    function sizeToBottom(e) {
      const height = original_height + (e.pageY - original_mouse_y)
      if (height > minimum_size && height < maximum_size) {
        element.style.height = height + 'px'
      }
    }

    function leftRight(e) {
      if (e.movementX > 0) {
        movingRight()
      } else if (e.movementX < 0) {
        movingLeft()
      }
    }

    function topBottom(e) {
      if (e.movementY > 0) {
        movingBottom()
      } else if (e.movementY < 0) {
        movingTop()
      }
    }
    
    function topRightBottomLeft(e) {
      if (e.movementX > 2 || e.movementY > 2) {
        movingTopRight()
      } else if (e.movementX < -2 || e.movementY < -2) {
        movingBottomLeft()
      }
    }

    function topLeftBottomRight(e) {
      if (e.movementX > 2 || e.movementY < -2) {
        movingBottomRight()
      } else if (e.movementX < -2 || e.movementY > 2) {
        movingTopLeft()
      }
    }

    function movingRight() {
      currentResizer.classList.remove('moving-left')
      currentResizer.classList.add('moving-right')
    }

    function movingLeft() {
      currentResizer.classList.remove('moving-right')
      currentResizer.classList.add('moving-left')
    }

    function movingBottom() {
      currentResizer.classList.remove('moving-top')
      currentResizer.classList.add('moving-bottom')
    }

    function movingTop() {
      currentResizer.classList.remove('moving-bottom')
      currentResizer.classList.add('moving-top')
    }

    function movingBottomLeft() {
      currentResizer.classList.remove('moving-top-right')
      currentResizer.classList.add('moving-bottom-left')
    }

    function movingTopRight() {
      currentResizer.classList.remove('moving-bottom-left')
      currentResizer.classList.add('moving-top-right')
    }

    function movingBottomRight() {
      currentResizer.classList.remove('moving-top-left')
      currentResizer.classList.add('moving-bottom-right')
    }

    function movingTopLeft() {
      currentResizer.classList.remove('moving-bottom-right')
      currentResizer.classList.add('moving-top-left')
    }
  }
}

makeResizableDiv('.resizable')