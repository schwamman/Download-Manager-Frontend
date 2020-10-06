import axios from 'axios'

const API_URL = 'http://schwamman.com/'

class AuthService {
  login(user) {
    return axios
      .post(`${API_URL}signin`, {}, {
          auth: {
            username: user.username,
            password: user.password
          }
        })
        .then(res => {
          console.log(res)

          if(res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data))
          }

          return res.data
        })
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(user) {
    return axios
      .post(`${API_URL}signup`,
      {
        username: user.username,
        email: user.email,
        password: user.password
      })
  }
}


export default new AuthService()