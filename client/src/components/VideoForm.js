import React from "react";
import { Form, Header, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

class VideoForm extends React.Component {
  state = {
    title: "",
    duration: "",
    genre: "",
    description: "",
    trailer: ""
  };

  handleChange = (e, { name, value }) => { 
    this.setState({ [name]: value } );
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, duration, genre, description, trailer } = this.state
    const video = {...this.state}
    axios.post('/api/videos', video)
      .then(res => {
        this.props.history.push('/')
      })
      .catch(err => console.log(err))

  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header>
            {this.props.match.params.id
              ? "Edit This Video"
              : "Upload New Video"}
          </Header>
          <Form.Input
            label="Title"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Duration"
            placeholder="Duration"
            name="duration"
            value={this.state.duration}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Genre"
            placeholder="Genre"
            name="genre"
            value={this.state.genre}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Description"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <Button>
            {this.props.match.params.id ? "Update Video" : "Upload"}
          </Button>
          <Link to={{ pathname: "/" }}>
            <Button>Cancel</Button>
          </Link>
        </Form>
      </Container>
    );
  }
}

export default VideoForm;
