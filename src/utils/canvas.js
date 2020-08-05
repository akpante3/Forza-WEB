import  { randomIntFromRange, randomColor, distance } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth
const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}



// Event Listeners
addEventListener('mousemove', (event) => {
  console.log(event.clientX)
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  init()
})

// Objects
// class Object {
  function Particle(x, y, radius, color) {
    this.x = x
    this.y = y
    // moving particle
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    }
    this.radius = radius
    this.color = color
    this.mass = 1


  this.draw = () => {
  var img = new Image(150, 150);
  img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg'
  c.drawImage(img, this.x, this.y, 100, 100);

    // c.beginPath()
    // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    // c.fillStyle = this.color
    // c.fill()
    // c.closePath()
  }

  this.update = () => {
    this.draw()

    for (let i = 0; i < particles.length; i++) {
      if (this == particles[i]) continue;

      // check collision
      if (distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
        resolveCollision(this, particles[i])
      }
    }
    // makong them bounce off the wall
    if (this.x - this.radius <= 0 || this.x + this.radius >= window.innerWidth) {
      this.velocity.x = -this.velocity.x
    }
    if (this.y - this.radius <= 0 || this.y + this.radius >= window.innerHeight) {
      this.velocity.y = -this.velocity.y
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y

  }

}

// Implementation
let particles;
function init() {
  particles = []
  for (let i = 0; i < 8; i++) {
    const radius = 80;
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);
    const color = 'blue'
    if (i !== 0) {
       for ( let j = 0; j < particles.length; j++) {
          if (distance(x, y, particles[j].x, particles[j].y) - radius * 2< 0) {
            x = randomIntFromRange(radius, canvas.width - radius);
            y = Math.random() * window.innerHeight;

            j = -1
          }
       }
    }
    particles.push( new Particle(x, y, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  particles.forEach(particle => {
    particle.update(particles);
  })
}

init() 
animate()

