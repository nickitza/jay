import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      location
    } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to={"/new"}>
              <Button>Upload Video</Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              id="login"
              name="login"
              active={location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              name="register"
              active={location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    }
  };

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item

              id='home'
              active={this.props.location.pathname === '/'}
              >
              <img 
                height="13px" 
                src='https://resources-live.sketch.cloud/files/c0514774-a772-457b-87d0-a07e56ce861e.png?Expires=1563757200&Signature=Ua6eaL-i5VVBi1u54FqyXWwetxZNWWgWBuM8xI61Yltqclb7tFizW5hPg7o4AF1Tnx-9AHkgj93k6KPjZ~vgOB0sW7e5WJjh5j4rXAXpc8i2JKtdEIKRgN2jEto-QBQEe~YQ1lAic020~59CsTuCao6oQMy~E71K0~8COOI5-F8_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA' 
                />
            </Menu.Item>
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);
