import { gsap } from 'gsap'

const follower = document.querySelector('.follower')
const followerImg = document.querySelector('.follower-image')

gsap.registerEffect({
  name: 'mouseFollow',
  effect: (targets, event) => {
    return gsap.to(follower, {
      top: event.pageY - 150,
      left: event.pageX - 250,
      duration: 0.05,
      delay: 0.01,
      ease: 'Power2.easeOut'
    })
  }
})

document.querySelectorAll('.list').forEach((item) => {
  item.addEventListener('mouseenter', (event) => {
    const itemAttr = event.target.getAttribute('data-src')

    followerImg.setAttribute('src', itemAttr)
    follower.classList.add('is-active')
  })

  item.addEventListener('mouseleave', (event) => {
    follower.classList.remove('is-active')
  })

  item.addEventListener('mousemove', (event) => {
    gsap.effects.mouseFollow(item, event)
  })
})
