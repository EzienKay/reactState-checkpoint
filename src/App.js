import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "Glory James",
      bio: "I'm a fullStack web developer at Gomycode.",
      imgSrc: "profile.jpg",
      profession: "Web Developer"
    },
    show: false,
    intervalId: null,
    mountedTime: 0,
  };

  componentDidMount() {
    // this.setState({ mountedTime: Date.now() });

    // Set an interval to update the mounted time every second
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: Date.now() });
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted to avoid memory leaks
    clearInterval(this.state.intervalId);
  }

  handleToggleProfile = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.handleToggleProfile}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Mounted Time: {new Date(mountedTime).toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;

