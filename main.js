const divStyle= window.getComputedStyle(document.querySelector('.texto-circular'),'::before') 
const textoCircular = divStyle.getPropertyValue('content')
const divDom= document.querySelector('.texto-circular')


const letrasCirculares = textoCircular.split('')
console.log(letrasCirculares);

letrasCirculares.splice(letrasCirculares.indexOf('\"'),1)
letrasCirculares.splice(letrasCirculares.indexOf('\"'),1)
console.log(letrasCirculares);

for(let i=0; i<letrasCirculares.length; i++){
  divDom.innerHTML += '<span style= " transform: rotate('+((i+1)*11)+'deg);">'+ letrasCirculares[i] +'</span>'
}