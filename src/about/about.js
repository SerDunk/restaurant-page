const content=document.querySelector('#content')

export default function about(){
    content.textContent=''
    const greeting=document.createElement('div')
    greeting.textContent='Darbaar: A Royal Biryani Experience'
    const aboutMessage=document.createElement('div')
    aboutMessage.textContent='Darbaar is where tradition meets innovation, where the aromatic spices of centuries-old recipes are blended with modern techniques to create a symphony of flavors that tantalize the taste buds. Our chefs, trained in the art of biryani making, meticulously craft each dish to perfection, ensuring that every bite is a journey through the rich culinary history of India.'

    content.appendChild(greeting)
    content.appendChild(aboutMessage)
}