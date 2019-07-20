import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import VideoForm from './components/VideoForm.js'
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import VideoShow from './components/video/VideoShow'

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/new" component={VideoForm} />
          <Route exact path="/video/:id" component={VideoShow} />
          <Route component={NoMatch} />
          
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;