import React from 'react'
import {Grid, } from 'semantic-ui-react'

class VideoAll extends React.Component {
state = {
  video: [],
}

componentDidMount() {
  axios.get("/api/quotes")
    .then( res => { 
      this.setState({ quotes: res.data })
   })
   .catch( err => {
     console.log(err.response)
   })
}

render() {
  return(
    <div>Test</div>
  )
}

}

export default VideoAll