let botao = document.querySelector('div.btn')
if (botao.innerHTML === '<p>Sign up</p>') {
  botao.addEventListener('click', () => {
    changeToSignUp()
  })
}
if (botao.innerHTML === '<p>Sign in</p>') {
  botao.addEventListener('click', () => {
    changeToSignIn()
  })
}

async function changeToSignUp() {
  // muda o valor do botão 
   document.querySelector('div.btn > p').innerHTML = 'Sign in'

  // muda o valor do tipo da página 
  document.querySelector('.text > h1').innerHTML = "Have a Profile?" 

  // remove o atributo class da primeira div após a div.container 
  document.querySelector('div.container > div').removeAttribute('class')

  // remove o atributo class da tag img filha da div.container
  await console.log(  document.querySelectorAll('div.container > div'))
  document.querySelectorAll('div.container > div')[1].removeAttribute('class')


  document.querySelector('div.container > img').removeAttribute('class')


  document.querySelector('div.container > div').setAttribute('class', 'text1')
  document.querySelectorAll('div.container > div')[1].setAttribute('class', 'forms-container1')
  document.querySelector('div.container > img').setAttribute('class', 'first-imagem-container1')


}

const changeToSignIn = () => {
  document.querySelectorAll('div.container > div')[1].querySelectorAll('div > div').removeAttribute('class')


  document.querySelector('div.btn > p').innerHTML = 'Sign up'
  document.querySelector('div.container > div').removeAttribute('class')
  document.querySelectorAll('div.container > div')[1].removeAttribute('class')
  document.querySelector('div.container > img').removeAttribute('class')

  document.querySelector('div.container > div').setAttribute('class', 'text')
  document.querySelectorAll('div.container > div')[1].setAttribute('class', 'forms-container')
  document.querySelector('div.container > img').setAttribute('class', 'first-imagem-container')
}