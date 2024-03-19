import './initial.css'
const content=document.querySelector('#content')


function initialPage(){
    content.textContent=''
    const hero=document.createElement('div')
    hero.classList.add('hero')
    const subText=document.createElement('div')
    subText.classList.add('subText')
    hero.textContent="Darbar"
    subText.textContent="Desh Ka Swad"

    content.appendChild(hero)
    content.appendChild(subText)
}

export default initialPage