import React from "react";
import { Header, Card, Grid, Image, Button } from "semantic-ui-react"
import {Link, } from "react-router-dom"
import axios from "axios";


class Home extends React.Component {
  state = { videos: [] };

  componentDidMount() {
    axios.get("/api/videos")
    .then(res => {
      this.setState({ videos: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
    }
      
  deleteVideo = (id) => {
    axios.delete(`/api/videos/${id}`).then(res => {
      const { videos } = this.state;
      this.setState({ videos: videos.filter(video => video.id !== id) });
    });
  };
  
    
  allVideos = () => {
    const { videos } = this.state;
    if (videos.length <= 0) return <h2>No Video Yet...</h2>;
    return (
      <>
      <Header as='h2'>All Videos</Header>
      <Grid style={{ marginTop: "25px" }}>
        <Grid.Column>
          <Card.Group itemsPerRow={4}>
            {videos.map(video => (
              <Card key={video.id}>
                <Image src={video.trailer} alt="Boo Hoo" />
                <Card.Content>
                  <Card.Header>{video.title}</Card.Header>
                  <Card.Meta>{video.description}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button onClick={() => this.deleteVideo(video.id)}>Delete</Button>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
      </>
    );
  };

  render() {
    return (
    <>
    {this.allVideos()}
    </>
    )
  }
}


export default Home;
