
const content=document.querySelector('#content')


function initialPage(){
    content.textContent=''
    const hero=document.createElement('div')
    const subText=document.createElement('div')
    
    hero.textContent="Darbar"
    subText.textContent="Desh Ka Swad"

    content.appendChild(hero)
    content.appendChild(subText)
}

export default initialPage