import project1 from "../assets/projects/accomodation.jpeg";
import project2 from "../assets/projects/supermarkets.jpeg";
import project3 from "../assets/projects/project-3.jpg";;
import fashionMnist from "../assets/projects/fashionmnist.jpeg";
import rota from "../assets/projects/rota.jpg";
import hadith from "../assets/projects/hadiths.jpg"
export const HERO_CONTENT = `I am a skilled developer with expertise in Python programming and Full Stack Development, specializing in creating responsive, user-centric applications and scalable backend systems. With a focus on delivering innovative solutions, I am dedicated to continuous learning and staying at the forefront of emerging technologies.`;

export const ABOUT_TEXT = ` A BSc Computer Science graduate from the University of Roehampton with a strong foundation in programming, specializing in Python and Full Stack Development. I have experience building dynamic and responsive web applications, combining intuitive frontend design with secure and scalable backend systems. Proficient in tools and technologies like Python libraries, JavaScript, React, Node.js, and databases (MySQL, MongoDB), I am passionate about solving complex problems and delivering high-quality, innovative solutions. With a commitment to continuous learning, I aim to contribute to impactful projects and make a difference in the tech industry.`;



export const PROJECTS = [
  {
    title: "Hadith Generator  ",
    image: hadith ,
    description:
      " A MERN stack website generating random hadiths ",
    technologies: ["Mongo DB","Express JS","React JS","Node JS"],
  },
  {
    title: "Accomodation booking App",
    image: project1,
    description:
      "A back-end text based application developed on c# where users can book an accomodation and interact with it ",
    technologies: ["C#"],
  },
  {
    title: "Super Markets Finder",
    image: project2,
    description:
      "An application for searching the supermarket details the user has searched for using Hash Map .",
    technologies: ["Python","Excel"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Rota Automation",
    image: rota,
    description:
      "A text Based python project for creating rota.I made this project to make a big task easy.This project is an application of low level design thinking",
    technologies: ["Python"],
  },

  {
    title: "Image classifier  ",
    image: fashionMnist ,
    description:
      "A machine learning model built using python to classify fashion Mnist images ",
    technologies: ["Python"],
  },

];

export const CONTACT = {
  address: " London,UK ",
  email: "Adnan.ab164@gmail.com",
};
