const searchUser = document.querySelector('#searchUser')



searchUser.addEventListener('keyup', (e)=>{
  //Get input text
  const userText = e.target.value
  if(userText !== ''){
    console.log(userText)
  }
})