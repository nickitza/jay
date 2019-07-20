import React from 'react'
import axios from 'axios'
import {Card, Grid } from 'semantic-ui-react'
import ResponsiveEmbed from 'react-responsive-embed'


class VideoShow extends React.Component {
  state = {
    videos: []
  }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/videos/${id}`)
      .then(res => {
        this.setState({ videos: res.data, });
        console.log(res.data)
      })
      axios.get(`/api/videos/${id}/comments`)
      .then(res => {
        this.setState({ comments: res.data })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  }


  render() {
    const { id } = this.props.match.params
    return (
     <>
     <Grid>
      <Grid.Row textAlign={'center'} style={{ height: '40%', marginTop: "20px"}} display="flex" >
       <Grid.Column width={16} color="teal" textAlign={"center"}>
       <iframe
        className="videoContainer"
        title="YT"
        id="ytplayer" 
        type="text/html" 
        width="800" 
        height="500"
        src="https://www.youtube.com/embed?listType=playlist&list=PL50JhZpTWVPIbp_XsZ5mZKSbS19wYvOoD&autoplay=0&loop=1&modestbranding=1"
        frameBorder="0"
        allowFullScreen
        />
       </Grid.Column>

      </Grid.Row>

     </Grid>
     </>
    )
  }

}
export default VideoShow