window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.nav1').classList.replace('nav1', 'nav2')
  } else {
    document.querySelector('.nav2').classList.replace('nav2', 'nav1')
  }
}
