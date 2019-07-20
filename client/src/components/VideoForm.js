import React from "react";
import { Form, Header, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import ImageUploader from "react-images-upload"

class VideoForm extends React.Component {
  state = {
    title: "",
    duration: "",
    genre: "",
    description: "",
    trailer: "",
  };

  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(trailer) {
    this.setState({
      trailer: trailer[0]
    });
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, duration, genre, description, trailer, } = this.state;
    const video = { ...this.state };
    axios
      .post("/api/videos", video)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header>
            {this.props.match.params.id
              ? "Edit This Video"
              : "Upload New Video"}
          </Header>
          <ImageUploader
            withIcon={true}
            buttonText="Choose image"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            singleImage={true}
            withPreview={true}
          />
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

          <Button color="teal">
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


const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    margin: "0 auto",
  },
}

export default VideoForm;
