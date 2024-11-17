import project1 from "../images/project1.png";
import project1_animation from "../images/project1.png";
import project2 from "../images/project2.png";
import project2_animation from "../images/project2_animation.gif";
import project3 from "../images/project3.png";
import project3_animation from "../images/project3_animation.gif";
import project6 from "../images/project6.png";
import project6_animation from "../images/project6_animation.gif";
import project7 from "../images/project7.png";
import project7_animation from "../images/project7_animation.gif";
import project8 from "../images/project8.png";
import project8_animation from "../images/project8.png";
import project9 from "../images/project9.jpeg";
import project9_animation from "../images/project9.jpeg";
import project10 from "../images/project10.png";

const projects = [
  {
    id: 10,
    category: "R",
    link: "https://github.com/msr-ds3/officer-complaints-2021-group-6",
    icon: "View Source",
    image: project10,
    gif: project10,
    title: "Police Complaints Data Analysis",
    description:
      "Replication, Extension and Analysis of police complaints data from 3 cities",
    tools: "Bash | R | ggplot | tidyverse",
  },
  {
    id: 7,
    category: "R",
    link: "https://github.com/Sambhav101/Twitter-Sentiment-Analysis-in-R",
    icon: "View Source",
    image: project7,
    gif: project7_animation,
    title: "Twitter Sentiment Analysis in R",
    description:
      "a shiny web application that fetches tweet data and analyzes sentiment using lexicon approach",
    tools: "R | ggplot | tidyr | shiny",
  },

  {
    id: 1,
    category: "Neural Network",
    link: "https://www.github.com/Sambhav101/Stocks-Prediction-Using-LSTM",
    icon: "View Source",
    image: project1,
    gif: project1_animation,
    title: "Stock Prediction Using LSTM",
    description:
      "Designed a neural network that uses Long Short Term Memory model to predict the stock prices",
    tools: "Python | LSTM | Matplolib | TensorFlow",
  },
  {
    id: 6,
    category: "Neural Network",
    link: "https://www.github.com/Sambhav101/digit-recognition-app",
    icon: "View Source",
    image: project6,
    gif: project6_animation,
    title: "Digit Recognition App",
    description:
      "Designed a webapp using flask and a trained deep CNN model to accurately identify digits",
    tools: "Python| OpenCV| Tensorflow| JavaScript",
  },
  {
    id: 8,
    category: "R",
    link: "https://github.com/Sambhav101/Credit-Card-Fraud-Detection",
    icon: "View Source",
    image: project8,
    gif: project8_animation,
    title: "Credit Card Fraud Detection",
    description:
      "Analyzed different Classifier models to detect credit card fraud transactions.",
    tools: "R | XGBoost | Random Forest",
  },
  {
    id: 9,
    category: "R",
    link: "https://github.com/Sambhav101/Iris-Flower-Classification",
    icon: "View Source",
    image: project9,
    gif: project9_animation,
    title: "Iris Flower Classification",
    description:
      "Analyzed the Iris flowers data, and built several classifiers to classify them into species ",
    tools: "R| LDA | KNN | ggplot",
  },
  {
    id: 2,
    category: "Python",
    link: "https://www.github.com/Sambhav101/Minesweeper",
    icon: "View Source",
    image: project2,
    gif: project2_animation,
    title: "Minesweeper AI",
    description:
      "Created an AI that uses inference and backtracking to calculate safe moves in the board",
    tools: "Python | pyGame",
  },
  {
    id: 3,
    category: "Python",
    link: "https://www.github.com/Sambhav101/TicTacToe",
    icon: "View Source",
    image: project3,
    gif: project3_animation,
    title: "TicTacToe",
    description:
      "Developed an undefeatable tic-tac-toe bot using minmax algorithm",
    tools: "Python | RL | pyGame",
  },
];

export default projects;
