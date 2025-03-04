import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error boundry component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click Here to go back to the homepage</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
