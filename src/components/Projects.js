import portfolio from "../assets/portfolio.png";
import drImage from "../assets/dr.png";
import ganImage from "../assets/gans.png";
import irisImage from "../assets/iris.png";
import taskImage from "../assets/task.png";
import cakeImage from "../assets/cake.png";
import contactFormImage from "../assets/contactform.png";
import modelDeployImage from "../assets/modeldemo.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const PROJECTS_LIST = [
  {
    src: taskImage,
    title: "Task App",
    link: "https://github.com/bhaven123/Task-App",
    icon: faGithub,
    text: "An app that assigns tasks for collaboration on planning meals.",
    tools: "ReactJS, ExpressJS, Material-UI, MongoDB",
    description: [
      "Developed a task management system to assign and plan meals with housemates.",
      "Created the front end using ReactJS to build a quality user interface. ",
      "Designed the application using Material-UI to create a stylish and modern-looking app.",
      "Developed the backend server using ExpressJS that connects to the MongoDB database.",
    ],
  },
  {
    src: cakeImage,
    title: "Full-Stack Cake Ordering System",
    link: "https://github.com/bhaven123/cake-ordering-system",
    icon: faGithub,
    text: "An app used to order cakes online.",
    tools: "ReactJS, ExpressJS, Material-UI, MongoDB",
    description: [
      "Developed a Cake Ordering System with client and user dashboards to assist home-based cake businesses.",
      "Implemented front-end using ReactJS for flexibility and state-of-the-art functionality.",
      "Created backend using ExpressJS to build the API and communicate with the database.",
      "Consists of features like order customization and online payment, etc.",
    ],
  },
  {
    src: contactFormImage,
    title: "Full Stack Contact Form",
    link: "https://github.com/bhaven123/contact-form-with-backend",
    icon: faGithub,
    text: "A Contact Form that can be integrated into any portfolio website.",
    tools: "ReactJS, ExpressJS, Material-UI, Formik, Yup",
    description: [
      "Developed a single-page contact form using ReactJS that can be integrated into any portfolio or website.",
      "Designed the form using Material-UI for responsiveness and rapid prototyping.",
      "Created a backend server using ExpressJS and used Nodemailer to send an email on form submission.",
      "Used Formik to handle the form submission and yup for form object schema validation.",
    ],
  },
  {
    src: irisImage,
    title: "EDA",
    link: "https://github.com/bhaven123/exploratory-data-analysis",
    icon: faGithub,
    text: "A demonstration of exploratory data analysis on Iris Flower dataset.",
    tools: "Python, Jupyter, Pandas, Scikit-learn, Matplotlib, Seaborn",
    description: [
      "Performed EDA on the Iris Flower dataset using Python and Jupyter Notebook.",
    ],
  },
  {
    src: modelDeployImage,
    title: "Model Deploy Demonstration",
    link: "https://github.com/bhaven123/model-deploy-demo",
    icon: faGithub,
    text: "A demo for deploying ML API as a Docker Image to create docker containers.",
    tools: "Python, FastAPI, Docker, PyTorch",
    description: [
      "Used Hugging Face Inference API for the ML model.",
      "Created Model API using FastAPI.",
      "Created Docker Image for deployment.",
    ],
  },
  {
    src: portfolio,
    title: "Personal Portfolio",
    link: "https://bhaven-naik.com/",
    icon: faLink,
    text: "My portfolio website.",
    tools: " ReactJS, React-Bootstrap, HTML, CSS",
    description: [
      "Created a single-page portfolio website using ReactJS.",
      "Designed the website using React-Bootstrap for responsiveness.",
      "Deployed the website using Firebase Hosting on a custom domain.",
      "Created a GitHub workflow to deploy new changes to the website.",
    ],
  },
  {
    src: ganImage,
    title: "GAN Augmentation",
    link: "https://github.com/bhaven123/Project-GANs.git",
    icon: faGithub,
    text: "A Generative Adversarial Network (GAN) to augment human action recognition videos.",
    tools: "Python, PyTorch, PyTorch Lightning, PyTorchVideo",
    description: [
      "Worked on developing a GAN as a research project.",
      "Developed a GAN that could produce augmented videos of Human Action Recognition using PyTorch and PyTorch Lightning on the HMDB51 dataset.",
      "Using a pretrained video classifier available in PyTorchVideo, tested whether the augmented videos help in improving the performance of the classifier.",
    ],
  },
  {
    src: drImage,
    title: "Diabetic Retinopathy",
    link: "https://github.com/bhaven123/Project-Diabetic-Retinopathy.git",
    icon: faGithub,
    text: " Fine-tuning a pre-trained model to detect the severities of the Diabetic Retinopathy.",
    tools: "Python, Tensorflow, Keras, Flask, HTML, CSS, AWS EC2",
    description: [
      "Worked with TensorFlow Keras to fine tune a pre-trained VGG16 model with custom classes.",
      "Created a client interface using Flask, HTML, CSS.",
      "Deployed the project using an AWS EC2 instance.",
    ],
  },
];

export default PROJECTS_LIST;
