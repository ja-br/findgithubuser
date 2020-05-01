class GitHub{
  constructor(){
    this.client_id = '35bc07df9ca6d00134b9'
    this.client_secret = '1a1d817a010834bd589c5f7500a936ee368c3b6e'
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&c;ient_secret=${this.client_secret}`)

    const profile = await profileResponse.json()

    return{
      profile
    }
  }
}