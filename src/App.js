import React, { Component } from "react";
import ImagesCard from "./components/ImagesCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SWImages from "./starWarsLinks.json";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    message: "Click an Image to Begin.  Don't click on the same image twice!!",
    SWImages
  };
  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score });
    }
    this.setState({ message: "Sorry. You Lost." });
    this.setState({ score: 0 });
    this.state.SWImages.forEach(image => {
      image.clicked = false;
    });
    return true;
  };
  // Counter
  //high score
  // shuffle
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  clickedImage = id => {
    this.state.SWImages.find((image, index) => {
      if (image.id === id) {
        if (SWImages[index].clicked === false) {
          SWImages[index].clicked = true;
          // console.log(SWImages[index]);
          this.shuffle(this.state.SWImages);
          this.setState({ score: this.state.score + 1 });
          this.setState({ message: "Keep Clicking.  You're Doing Great" });
          return true;
        } else {
          console.log("you lose");
          return this.gameOver();
        }
      }
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.SWImages);
    return (
      <div>
        <Title
          score={this.state.score}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        <Wrapper>
          {this.state.SWImages.map(SWImage => (
            <ImagesCard
              id={SWImage.id}
              key={SWImage.id}
              image={SWImage.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
