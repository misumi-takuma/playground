import { gsap } from 'gsap'

const parallaxContainer = document.getElementById('body')
const chouchin = document.querySelectorAll('.chouchin-wrap')

const fixer = 0.003

gsap.registerEffect({
  name: 'mousemoveParallax',
  effect: (targets, config) => {
    return gsap.set(targets, { x: config.x, y: config.y })
  }
})

document.addEventListener('mousemove', function (event) {
  // get the mouseX - negative on left, positive on right
  const pageX =
    event.pageX - parallaxContainer.getBoundingClientRect().width * 0.5

  // same here, get the y. use console.log(pageY) to see the values
  const pageY =
    event.pageY - parallaxContainer.getBoundingClientRect().height * 0.5

  chouchin.forEach((item) => {
    const speedX = item.getAttribute('data-speed-x')
    const speedY = item.getAttribute('data-speed-y')

    gsap.effects.mousemoveParallax(item, {
      x: (item.offsetLeft + pageX * speedX) * fixer,
      y: (item.offsetTop + pageY * speedY) * fixer
    })
  })
})

console.log('Hello JS')
