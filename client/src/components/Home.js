import React from "react";
import { Header, Card, Grid, Image } from "semantic-ui-react";
import axios from "axios";

class Home extends React.Component {
  state = { videos: [] };

  componentDidMount() {
    axios.get("/api/videos").then(res => this.setState({ videos: res.data }));
  }
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
                <Image src="" alt="Boo Hoo" />
                <Card.Content>
                  <Card.Header>{video.title}</Card.Header>
                  <Card.Meta>{video.description}</Card.Meta>
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
    return <>{this.allVideos()}</>;
  }
}


export default Home;
