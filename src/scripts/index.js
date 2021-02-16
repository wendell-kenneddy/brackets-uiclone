const linksList = document.querySelectorAll('a.section-link')
const divsList = document.querySelectorAll('div.x-line')

const linksArray = [...linksList]
const divsArray = [...divsList]

//Navbar para dispositivos com display de 891px+

linksArray.forEach(el => {
  const index = linksArray.indexOf(el)
  const length = el.textContent.length

  el.addEventListener('mouseover', function addWidth() {
    divsArray[index].style.width = length * 8 + 'px'
  })

  el.addEventListener('mouseout', function removeWidth() {
    divsArray[index].style.width = '0px'
  })
})