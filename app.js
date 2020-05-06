const github = new GitHub()
const ui = new UI()
const searchUser = document.querySelector('#searchUser')



searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const inputText = e.target.value

  if (inputText !== '') {
    // HTTP request
    github.getUser(inputText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          //show profile
          ui.showProfile(data.profile)
        }
      })
  } else {
    //clear profile
    ui.clearProfile()
    ui.clearAlert()

  }
})