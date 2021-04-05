import React from 'react'
import {Redirect} from 'react-router-dom'

class ShowCode extends React.Component {
  state = {
    code: '',
    token: ''
  }

  componentDidMount() {
    const code = this.props.routerProps.history.location.search.split("=")[1]
    fetch('https://api.trakt.tv/oauth/token', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "code": code,
        "client_id": "d390aee5de8e3fda54f860f3b0a7d1bbc637722e0c0eeddb6050d6f1b200a501",
        "client_secret": "a1cb079c1fb1ad6ee4410dbc8eef1078f2725714c3a3f9e1a3afa1158e0c0c84",
        "redirect_uri": "http://localhost:3000/authorize/",
        "grant_type": "authorization_code"
      })
    })
      .then(resp => resp.json())
      .then(json => this.props.storeToken(json.access_token))
  }

  render() {
    if (this.props.token !== '') {
      return <Redirect to="/fetchtest"/>
    } else {

      return(
        <p>hello</p>
      )
    }
  }
}

export default ShowCode