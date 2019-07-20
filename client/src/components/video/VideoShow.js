import React from 'react'
import axios from 'axios'
import {Card, Grid, Container, Image } from 'semantic-ui-react'

import ResponsiveEmbed from 'react-responsive-embed'


class VideoShow extends React.Component {
  state = {
    videos: [],
    comments: [],
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

  vidComments = () => {
    const { id, } = this.props.match.params
    return this.state.comments.map(c => (
      <div style={{ marginTop: '40px', padding: '20px', border: '1px solid black' }}>
        
          <Card style={{ height: "300px", width: '300px', textAlign: 'center' }}>
            <h3>{c.name}</h3>
            <Card.Description>
              ${c.price}
            </Card.Description>
          
             
          
          </Card>
       
      </div>
    ))
  }


  render() {
    const { id } = this.props.match.params
    return (
     <>
      <div >
     <Grid divided style={{ height: '100vh', width: '100vw', marginTop: "20px"}} margin="0px">
      <Grid.Row textAlign={'center'} style={{ height: '65%',}} position="flex"  >
       <Grid.Column width={13} color="teal" textAlign={"center"}>
       <Container>
       <iframe
        className="videoContainer"
        title="YT"
        id="ytplayer" 
        type="text/html" 
        width="900" 
        height="500"
        src="https://www.youtube.com/embed?listType=playlist&list=PL50JhZpTWVPIbp_XsZ5mZKSbS19wYvOoD&autoplay=0&loop=1&modestbranding=1"
        frameBorder="0"
        />
        </Container>
       </Grid.Column>
       </Grid.Row>

       <Grid.Row textAlign={'center'} style={{ height: '30%'}} position="flex" >
         <Grid.Column width={13} color="blue" textAlign={"center"}>
          user info video description
         </Grid.Column>
       </Grid.Row>

      <Grid.Row textAlign={'center'} style={{ height: '30%'}} position="flex" >
        <Grid.Column width={8} color="green" textAlign={"center"}>
        comments go here
        </Grid.Column>
        <Grid.Column width={5} color="grey" textAlign={"center"}>
        thumbnail vids go here
        </Grid.Column>
      </Grid.Row>

     </Grid>
     </div>
     </>
    )
  }

  // <Image
  // style={{
  //   height: '200px',
  //   width: '200px',
  // }}
  // src={"https://loremflickr.com/400/400/products?" + Math.random()} alt="Product" />
}
export default VideoShow