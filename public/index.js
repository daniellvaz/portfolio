const item = document.getElementById("first")

const animation = [
  { transform: "translateY(-20px)" },
  { transform: "translateY(0px)" },
]

window.onwheel = (e) => {
  if(e.deltaY >= 0) {
    item.animate(animation, {
      duration: 800,
      easing: 'ease'
    })
  }
}