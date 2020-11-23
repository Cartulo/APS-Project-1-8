var ecologia = document.querySelector('.ecologiaimg')
      ecologia.setAttribute("style", "width: 70px; height: 70px; border: 0;")
      ecologia.setAttribute("onmouseover", "aumentar(ecologia)")
      ecologia.setAttribute("onmouseout", "diminuir(ecologia)")

var economia = document.querySelector('.economiaimg')
      economia.setAttribute("style", "width: 70px; height: 70px; border: 0;")
      economia.setAttribute("onmouseover", "aumentar(economia)")
      economia.setAttribute("onmouseout", "diminuir(economia)")

var social = document.querySelector('.socialimg')
      social.setAttribute("style", "width: 70px; height: 70px; border: 0;")
      social.setAttribute("onmouseover", "aumentar(social)")
      social.setAttribute("onmouseout", "diminuir(social)")

function aumentar(x) {
  x.setAttribute("style", "width: 100px; height: 100px;")
}

function diminuir(x) {
  x.setAttribute("style", "width: 70px; height: 70px;")
}
