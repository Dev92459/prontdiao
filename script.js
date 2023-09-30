function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem//
  const img = document.querySelector("#profile img")

  //substiuir imagem//
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem light//
    img.setAttribute("src", "./assets/Prontidãonegativa.png")
  } else {
    // se tiver sem o light mode//
    img.setAttribute("src", "./assets/prontidaomilitar.png")
  }
}

function togglemode() {
  const body = document.body
  const switchButton = document.querySelector("#switch button")

  if (body.classList.contains("light")) {
    body.classList.remove("light")
    switchButton.style.transform = "translateY(-50%)"
  } else {
    body.classList.add("light")
    switchButton.style.transform = "translateY(-50%) translateX(100%)"
  }
}
