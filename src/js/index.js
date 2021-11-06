import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.registerEffect({
  name: 'wordFadeIn',
  defaults: { duration: 2 },
  effect: (targets, config) => {
    return gsap.timeline().from(
      targets,
      {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: '0% 50% -50',
        ease: 'back',
        stagger: 0.01,
        delay: config.delay / 25
      },
      '+=0'
    )
  }
})

document.querySelectorAll('.word').forEach(function (box, index) {
  gsap.effects.wordFadeIn(box, { delay: index })
})

gsap.registerEffect({
  name: 'scrollSlideIn',
  defaults: { duration: 2 },
  effect: (targets) => {
    return gsap.from(targets, {
      scrollTrigger: { trigger: targets },
      opacity: 0,
      scale: 0,
      transformOrigin: 'center',
      ease: 'back',
      duration: 1,
      delay: Math.random() / 2
    })
  }
})

document.querySelectorAll('.box').forEach((item) => {
  gsap.effects.scrollSlideIn(item)
})

gsap.registerEffect({
  name: 'parallax',
  effect: (targets) => {
    return gsap.to(targets, {
      scrollTrigger: {
        trigger: targets,
        start: 'top bottom',
        scrub: true
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: 'none'
    })
  }
})

document.querySelectorAll('.parallax-image').forEach((item) => {
  gsap.effects.parallax(item)
})

const fixedImage = document.querySelector('.section4__fixedimage')

gsap.to(fixedImage, {
  duration: 0.5,
  scale: 0.7,
  x: '-20%',
  transformOrigin: 'center',
  ease: 'none',
  scrollTrigger: {
    trigger: fixedImage,
    start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
    scrub: true,
    pin: true
  }
})
