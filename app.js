const github = new GitHub()
const searchUser = document.querySelector('#searchUser')



searchUser.addEventListener('keyup', (e)=>{
  //Get input text
  const inputText = e.target.value
  if(inputText !== ''){
    github.getUser(inputText)
      .then(data => {
        console.log(data)
      })
  }
})