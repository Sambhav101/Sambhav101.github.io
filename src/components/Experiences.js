import logo_tarifica from "../images/logo_tarifica.png";
import logo_google from "../images/logo_google.png";
import logo_microsoft from "../images/logo_microsoft.png";
import logo_college from "../images/logo1.png";
import logo_chase from "../images/logo_chase.png";
import { FaBorderNone } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Software/Data Engineer Intern",
    company: "Tarifica",
    duration: "July 2021 - Present",
    desc1:
      "Building and maintaining web-scrapers using Selenium and BeautifulSoup packages; creating new Django Models, APIs, and reporting tools to optimize server performance. ",
    desc2:
      "Using PostgreSQL and pgAdmin to manage and report data into the dashboards, building ETL pipelines to clean and wrangle data for analytics",
    desc3:
      "Working on regression models and sentimental analysis using NLP to analyze value and forecast growth of products",
    logo: logo_tarifica,
  },
  {
    id: 2,
    title: "Summer Challenge Student",
    company: "Google Cloud",
    duration: "July 2021 - Sep 2021",
    desc1:
      "Completed a 5-course Coursera specialization focused on GCP Compute, Kubernetes, and App engine; deployed and managed VMs in the cloud, set up virtual private networks and load balancers, and created database in Cloud storage like Cloud SQL and BigQuery.",
    desc2:
      "Involved in hands-on labs and projects to design and build a simple system from scratch, automated deployment in the cloud using CI/CD pipelines, and created uptime checks and alerts for monitoring and logging.",
    desc3:
      "Completed google quests to earn skill badges each focusing in different aspects of software development.",
    logo: logo_google,
  },
  {
    id: 3,
    title: "Data Science Research Fellow",
    company: "Microsoft",
    duration: "June 2021 - July 2021",
    desc1:
      'Published the replication and extension of the article "Police Complaints" into Github, analyzing the distributions of police officers` and victims` race and gender with the proportion of complaints from 3 cities: NYC, Chicago, and Philadelphia.',
    desc2:
      "Researched different papers and publications and performed replication, analysis as well as an extension, and studied the statistical significance of results.",
    desc3:
      "Used R to read and clean the data files, used different data manipulation techniques to build linear models, and played with data visualizations.",
    logo: logo_microsoft,
  },
  {
    id: 4,
    title: "Software Engineering Virtual Experience",
    company: "JP Morgan Chase/Forage",
    duration: "Jun 2020 - July 2020",
    desc1:
      "Played around with different methods of data visualization to observe the ratio of two stocks and trigger alerts when needed.",
    desc2:
      "Used React and node.js to render the various components of user interface in the web application",
    desc3:
      "Used Perspective, a open source tool to stream analytics and data via WebAssembly",
    logo: logo_chase,
  },
  {
    id: 5,
    title: "IT Student Technician",
    company: "St. Joseph's College",
    duration: "Jan 2019 - June 2021",
    desc1:
      "Administered phone calls & used an online ticketing system to manage support actions and requests",
    desc2:
      "Resolved any tech issues through phone or direct communication by providing fine customer service",
    desc3:
      "Installed computers, projectors and tech networks in various campus events along with technicians",
    logo: logo_college,
  },
];

export default experiences;
