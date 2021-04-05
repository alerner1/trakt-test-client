import React from 'react';

export default class FetchTest extends React.Component {
  componentDidMount() {
    fetch('http://whateverorigin.com/get?url=https://trakt.tv/shows/star-trek-discovery')
    .then(resp => resp.json())
    .then(console.log)
  }

  render() {
    
    return(<p>{this.props.token}</p>)
  }
}