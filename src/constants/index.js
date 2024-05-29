// constants.js
import jiraImg from '../assets/images/jira-project.png';
import airbnbImg from '../assets/images/air-bnb-api.png';
import youtubeCloneImg from '../assets/images/youtube-clone-project.png';
import randomQuotesImg from '../assets/images/random-quotes-machine-project.png';

export const projects = [
  {
    title: "Jira",
    desc: "Cloning in Jira refers to creating an exact copy of an existing issue. The clone inherits all the fields, including summaries, descriptions, attachments, and linked issues, but it gets a new issue key. This helps streamline workflow management by enabling quick duplication of tasks.",
    tags: [
      { name: "React", color: "red-600" },
      { name: "Bootstrap", color: "blue-600" },
      { name: "Antd", color: "green-600" },
    ],
    img: jiraImg,
    link: "https://project-jira-bc34.vercel.app/login",
    code: "https://github.com/Quaniscoding/project-jira-bc34",
  },
  {
    title: "Air-bnb-api",
    desc: "The AirBnB API provides developers with programmatic access to AirBnB's platform, enabling the creation and management of listings, bookings, and user interactions. This robust API allows integration of AirBnB's services into applications, providing users with seamless experiences for discovering, booking, and managing accommodations.",
    tags: [
      { name: "bcrypt", color: "blue-600" },
      { name: "Node js", color: "green-600" },
      { name: "mongodb", color: "green-600" },
      { name: "express", color: "green-600" },
      { name: "swagger", color: "green-600" },
    ],
    img: airbnbImg,
    link: "",
    code: "https://github.com/Quaniscoding/air-bnb-api",
  },
  {
    title: "Youtube-clone",
    desc: "The YouTube Clone is a video-sharing platform that allows users to upload, watch, and interact with video content. This application replicates the core functionalities of YouTube, providing a user-friendly interface.",
    tags: [
      { name: "React", color: "green-600" },
      { name: "axios", color: "green-600" },
      { name: "CRUD api", color: "green-600" },
    ],
    img: youtubeCloneImg,
    link: "https://youtube-clone-sigma-sandy.vercel.app/",
    code: "https://github.com/Quaniscoding/youtube-clone",
  },
  {
    title: "Random quotes machine",
    desc: "The Random Quotes Machine is a dynamic and interactive web application designed to inspire and entertain users with a diverse array of quotes. Each time the user interacts with the machine, it generates a new, random quote from a rich database containing quotes from various authors, philosophers, celebrities, and historical figures",
    tags: [
      { name: "React", color: "green-600" },
      { name: "redux", color: "green-600" },
      { name: "redux-thunk", color: "green-600" },
    ],
    img: randomQuotesImg,
    link: "https://random-quote-machine-eight-ecru.vercel.app/",
    code: "https://github.com/Quaniscoding/random-quote-machine",
  },
];
