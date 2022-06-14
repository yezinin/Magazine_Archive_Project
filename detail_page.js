const frame = document.getElementById('frame')
const card = document.getElementById('card')
const light = document.getElementById('light')

let { x, y, width, height } = frame.getBoundingClientRect()

function mouseMove(e) {
    const left = e.clientX - x
    const top = e.clientY - y
    const centerX = left - width / 2
    const centerY = top - height / 2
    const d = Math.sqrt(centerX**2 + centerY**2)

    card.style.boxShadow = `
    ${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)
    `

    card.style.transform = `
    rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg)
    `

    light.style.backgroundImage = `
    radial-gradient(circle at ${left}px ${top}px, #00000040, #ffffff00, #ffffff99)
    `
}

frame.addEventListener('mouseenter', () => {
    frame.addEventListener('mousemove', mouseMove)
})

frame.addEventListener('mouseleave', () => {
    frame.removeEventListener('mousemove', mouseMove)
    card.style.boxShadow = ''
    card.style.transform = ''
    light.style.backgroundImage = ''
})

window.addEventListener('resize', () => {
    rect = frame.getBoundingClientRect()
    x = rect.x
    y = rect.y
    width = rect.width
    height = rect.height
})





const animatedTags = document.querySelectorAll("h1, .wordsection ul,h2, h3, p, section img, a.button")

animatedTags.forEach(tag =>{
    tag.style.transform = "translateX(-20px)"
    tag.style.opacity = "0";
})

document.addEventListener("scroll", function(){
    
    let delay = 0.25;

    animatedTags.forEach(tag=>{
      const tagTop = tag.getBoundingClientRect().top;
      const tagBottom = tag.getBoundingClientRect().bottom;
      if(tagTop < window.innerHeight && tagBottom > 0){
        tag.style.animation =`fadeIn 1s ${delay}s both`;
        delay +=0.1;

      }else{
        tag.style.animation = "0";
      }

    })

})

const buttonTag = document.querySelector(".wordsection ul a");

buttonTag.addEventListener("mouseover", function(){
    buttonTag.style.background = "red";
})

buttonTag.addEventListener("mouseout", function(){
    buttonTag.style.background = "var(--dark-blue)";
})