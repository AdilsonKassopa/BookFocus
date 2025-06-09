const navBtnElement = document.getElementsByClassName('nav__btn')
const sectionElements = document.getElementsByClassName('section')
console.log(navBtnElement);

navBtnElement[0].onclick = () => {
    sectionElements[0].style.display = 'flex'
    sectionElements[1].style.display = 'none'
    sectionElements[2].style.display = 'none'
}
navBtnElement[1].onclick = () => {
    sectionElements[1].style.display = 'flex'
    sectionElements[0].style.display = 'none'
    sectionElements[2].style.display = 'none'
}
navBtnElement[2].onclick = () => {
    sectionElements[2].style.display = 'flex'
    sectionElements[0].style.display = 'none'
    sectionElements[1].style.display = 'none'
}