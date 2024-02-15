function toggleMode() {
    const HTML = document.documentElement
    //o código a baixo faz basicamente tudo que o if fez ali em cima, muito mais simplificada. (mais informações no caderno) 
    HTML.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (HTML.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png") 
    } else { 
        img.setAttribute("src", "./assets/avatar.png")
           
     }
  }





//documentElemente por conta do HTML que esta sendo introduzido no começo.
//   if (HTML.classList.contains('light')) {
//     HTML.classList.remove('light')
//      } else { 
//         HTML.classList.add('light')
//      
//     }
// }