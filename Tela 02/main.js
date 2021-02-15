let botao = document.querySelector('div.btn > p')
 
botao.addEventListener('click', async function () {
  if (botao.innerHTML === 'Sign up') {
    changeToSignUp()
  }
  else if (botao.innerHTML === 'Sign in') {
      changeToSignIn()
  }
})



const changeToSignUp = () => {
  document.querySelector('div.container > img').setAttribute('src', './imagens/undraw_Code_thinking_re_gka2.svg')
  document.querySelector('h2.tittle').innerHTML = 'Sign up'
  document.querySelector('div.btn > p').innerHTML = 'Sign in'
  document.querySelector('.text > h1').innerHTML = "Have a Profile?" 
  document.querySelector('div.container > div').classList.replace('text', 'text1')
  document.querySelectorAll('div.container > div')[1].classList.replace('forms-container', 'forms-container1')
  document.querySelector('div.container > img').classList.replace('first-imagem-container', 'first-imagem-container1')
  document.querySelector('div.signin-signup').classList.replace('signin-signup', 'signin')


}


const changeToSignIn = () => {
  document.querySelector('div.container > img').setAttribute('src', './imagens/undraw_Data_trends_re_2cdy.svg')
  document.querySelector('h2.tittle').innerHTML = 'Sign in'
  // muda o valor do botão 
  document.querySelector('div.btn > p').innerHTML = 'Sign up'

  // muda o valor do tipo da página 
  document.querySelector('.text1 > h1').innerHTML = "New Here?" 

  // altera o valor class da primeira div após a div.container 
  document.querySelector('div.container > div').classList.replace('text1', 'text')

  // remove o atributo class da segunda div filha do div.container
  document.querySelectorAll('div.container > div')[1].classList.replace('forms-container1', 'forms-container')

  // remove a classe da tag img 
  document.querySelector('div.container > img').classList.replace('first-imagem-container1', 'first-imagem-container')

  document.querySelector('div.signin').classList.replace('signin', 'signin-signup')
}