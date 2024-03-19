import './menu.css'


const content=document.querySelector('#content')
const menuContent=document.createElement('div')
menuContent.classList.add('menu-content')

function menu(name,description){

    const card=document.createElement('div')
    card.classList.add('card')
    const foodImage=document.createElement('img')
    
    const foodName=document.createElement('h2')
    const foodDesc=document.createElement('p')
    
    foodImage.src =`images/${name}.jpg`;
    foodImage.classList.add('image')
    foodName.textContent=name
    foodName.classList.add('food-name')
    foodDesc.textContent=description

    card.appendChild(foodImage)
    card.appendChild(foodName)
    card.appendChild(foodDesc)

    menuContent.appendChild(card)
    
}




export default function menuLoad(){
    content.textContent=''
    menuContent.textContent=''
    menu('Veg-Biryani',' Fragrant basmati rice cooked with a medley of colorful vegetables and aromatic spices, offering a flavorful vegetarian delight.')
    menu('Paneer-Biryani','Fragrant basmati rice layered with soft paneer cubes, delicately spiced and cooked to perfection, providing a rich and satisfying vegetarian alternative.')
    menu('Chicken-Biryani',' Aromatic basmati rice cooked with tender chicken pieces marinated in spices, creating a tantalizing blend of flavors and textures')
    menu('Mutton-Biryani','Fragrant basmati rice layered with succulent mutton pieces, slow-cooked with aromatic spices, resulting in a hearty and indulgent dish.')
    menu('Fish-Biryani','Fragrant basmati rice cooked with tender fish pieces, infused with coastal spices and herbs, offering a unique and delicious seafood variation of the classic biryani.')
    content.appendChild(menuContent)
}





