import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(info, error) {
    this.setState({ hasError: true });
  }
  render() {
    return this.state.hasError ? (
      <h1>Ooops! That is not good!</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
