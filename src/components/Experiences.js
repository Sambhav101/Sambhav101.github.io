import logo_meta from "../images/logo_meta.png"
import logo_tarifica from "../images/logo_tarifica.png";
import logo_amazon from "../images/logo_amazon.png"
import logo_microsoft from "../images/logo_microsoft.png";
import logo_college from "../images/logo1.png";

const experiences = [
  {
    id: 1,
    title: "ML Infra Support Engineer",
    company: "Meta / HCL Technologies",
    duration: "March 2024 - Present",
    desc1:
      "Implemented monitoring systems and doctor tool to track model performance in production and set up alerting mechanisms for any model processing related errors like entropy explosions or deviations",
    desc2:
      "Worked closely with Research Scientists and ML engineers to understand model requirements and provided infrastructure support for experimentation and testing.",
    desc3:
      "Implemented Gen AI tool to assist research scientists with locating and debugging errors during model packing, splitting, lowering, and transformation",
    logo: logo_meta,
  },
  {
    id: 2,
    title: "Software/Data Engineer",
    company: "Tarifica",
    duration: "June 2023 - Feb 2024",
    desc1:
      "Built and maintained over 300 web scrapers using Python and BeautifulSoup to capture raw data from various sources, transforming it into structured data stored in PostgreSQL databases for further analysis. ",
    desc2:
      "Designed and implemented ETL pipelines using the Flask framework to filter, process, and transmit high-quality data to downstream systems for analysis and visualization, ensuring accuracy and efficiency.",
    desc3:
      "Refactored and optimized legacy code to enhance its performance, readability, and output accuracy, added new features, logging, monitoring and testing to ensure reliability",
    logo: logo_tarifica,
  },
  {
    id: 3,
    title: "Software Development Engineer",
    company: "Amazon",
    duration: "July 2022 - March 2023",
    desc1:
      "Designed, developed, and monitored live microservices using AWS technologies such as EC2, Lambda, and CloudWatch, enabling seamless operation of Amazon Go and Just Walk Out stores. ",
    desc2:
      "Led the migration and upgrade of a critical service to AWS, significantly reducing operational costs, latency, and support tickets, while enhancing service reliability through improved metrics, alarms, and automated deployment pipelines.",
    desc3:
      "Delivered high-quality, timely solutions across multiple languages, including Java, Kotlin, Python, TypeScript, and Ruby, in a Linux-based environment, ensuring efficient sprint task completion and superior system performance.",
    logo: logo_amazon,
  },
  {
    id: 4,
    title: "Data Science Research Fellow",
    company: "Microsoft",
    duration: "June 2021 - July 2021",
    desc1:
      "Conducted an in-depth analysis and extended the study 'Police Complaints' published on the Financial Times article. Investigated the relationships between police officers’ and victims' race and gender, analyzing complaint distributions across three major cities: NYC, Chicago, and Philadelphia",
    desc2:
      "Conducted comprehensive research on statistical data analysis techniques, replicating and extending existing studies using R, and generated new findings by exploring corelations and patterns",
    desc3:
      "Developed advanced regression and machine learning models in R to derive meaningful insights, and presented the findings through visually compelling and informative visualizations that communicated complex data-driven results to data scientists and Engineers",
    logo: logo_microsoft,
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
