function toggleMode() {
  //pegando o Html ou body
  const html = document.documentElement
  //enviando instrução para trocar cor
  html.classList.toggle("light")

  //pegar a tag img
  //substituir a imagem
  //se tiver ligth mode,adicionar a imagem ligth
  //set tiver sem ligth mode. manter a imagem normar
}

//function toggleMode() {
//  //pegando o Html ou body
//  const html = document.documentElement
//  //
//  //if (html.classList.contains("light")) {
//  //  html.classList.remove("light")
//  //} else {
//  //  html.classList.add("light")
//
//  html.classList.toggle("light")
//
//  //pegar a tag img
//  //substituir a imagem
//  //se tiver ligth mode,adicionar a imagem ligth
//  //set tiver sem ligth mode. manter a imagem normar
//}
