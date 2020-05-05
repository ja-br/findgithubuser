const github = new GitHub()
const ui = new UI()
const searchUser = document.querySelector('#searchUser')



searchUser.addEventListener('keyup', (e)=>{
  //Get input text
  const inputText = e.target.value
  if(inputText !== ''){
    github.getUser(inputText)
      .then(data => {
        console.log(data)

        if(data.profile.message === 'Not Found'){
          ui.showProfile(data.profile)
        }else{
          //show profile
        }
      })
  } else {
    //clear profile
  }
})