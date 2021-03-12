import project1 from "../images/project1.jpg";
import project1_animation from "../images/project1_animation.webp";
import project2 from "../images/project2.jpg";
import project2_animation from "../images/project2_animation.gif";
import project3 from "../images/project3.jpg";
import project3_animation from "../images/project3_animation.gif";
import project4 from "../images/project4.webp";
import project4_animation from "../images/project4_animation.gif";
import project5 from "../images/project5.jpeg";
import project5_animation from "../images/project5_animation.gif";
import { FaGgCircle } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Neural Network",
    link: "www.github.com/Sambhav101/Stocks",
    icon: "G",
    image: project1,
    gif: project1_animation,
    title: "Stock Prediction AI",
    description:
      "Designed a neural network that uses Long Short Term Memory model to predict the stock prices",
  },
  {
    id: 2,
    category: "Python",
    link: "www.github.com",
    icon: "G",
    image: project2,
    gif: project2_animation,
    title: "Minesweeper AI",
    description:
      "Crated an AI that uses inference and backtracking algorithm to calculate safe moves in the board",
  },
  {
    id: 3,
    category: "Python",
    link: "www.github.com",
    icon: "G",
    image: project3,
    gif: project3_animation,
    title: "TicTacToe",
    description:
      "Developed an undefeatable tic-tac-toe bot using minmax algorithm",
  },
  {
    id: 4,
    category: "React JS",
    link: "www.github.com",
    icon: "G",
    image: project4,
    gif: project4_animation,
    title: "React Portfolio Website",
    description:
      "A portfolio website featuring my projects and experience built using React",
  },
  {
    id: 5,
    category: "Java",
    link: "www.github.com",
    icon: "G",
    image: project5,
    gif: project5_animation,
    title: "Yearbook App",
    description: "Designed a simple yearbook app using android studio",
  },
];

export default projects;
