import portfolio from "../assets/portfolio.png";
import drImage from "../assets/dr.png";
import ganImage from "../assets/gans.png";
import irisImage from "../assets/iris.png";
import taskImage from "../assets/task.png";
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
    description1:
      "Developed a task management system to assign and plan meals with housemates.",
    description2: "Created the front end using ReactJS and MUI.",
    description3:
      "Developed the backend server using ExpressJS that connects to MongoDB.",
  },
  {
    src: contactFormImage,
    title: "Full Stack Contact Form",
    link: "https://github.com/bhaven123/contact-form-with-backend",
    icon: faGithub,
    text: "A Contact Form that can be integrated into any portfolio website.",
    tools: "ReactJS, ExpressJS, Material-UI, Formik, Yup",
    description1:
      "Created frontend contact form using ReactJS and designed it using Material-UI.",
    description2:
      "Created a backend server using ExpressJS and used Nodemailer to send an email on form submission.",
    description3:
      "Used Formik to handle the form submission and yup for form object schema validation.",
  },
  {
    src: modelDeployImage,
    title: "Full Stack Contact Form",
    link: "https://github.com/bhaven123/model-deploy-demo",
    icon: faGithub,
    text: "A demon for deploying ML API as a Docker Image to create docker containers.",
    tools: "Python, FastAPI, Docker, PyTorch",
    description1: "Used Hugging Face Inference API for the ML model.",
    description2: "Created Model API using FastAPI.",
    description3: "Created Docker Image for deployment.",
  },
  {
    src: irisImage,
    title: "EDA",
    link: "https://github.com/bhaven123/exploratory-data-analysis",
    icon: faGithub,
    text: "A demonstration of exploratory data analysis on Iris Flower dataset.",
    tools: "Python, Jupyter, Pandas, Scikit-learn, Matplotlib, Seaborn",
    description1:
      "Performed EDA on the Iris Flower dataset using Python and Jupyter Notebook.",
    description2: "",
    description3: "",
  },
  {
    src: portfolio,
    title: "Personal Portfolio",
    link: "https://bhaven-naik.com/",
    icon: faLink,
    text: "My portfolio website.",
    tools: " ReactJS, React-Bootstrap, HTML, CSS",
    description1:
      "Developed Personal Portfolio using ReactJS, HTML and Bootstrap CSS.",
    description2:
      "Used React-Bootstrap CSS for responsive design and styling the entire website.",
    description3: "",
  },
  {
    src: ganImage,
    title: "GAN Augmentation",
    link: "https://github.com/bhaven123/Project-GANs.git",
    icon: faGithub,
    text: "A Generative Adversarial Network (GAN) to augment human action recognition videos.",
    tools: "Python, PyTorch, PyTorch Lightning, PyTorchVideo",
    description1: "Worked on developing a GAN as a research project.",
    description2:
      "Developed a GAN that could produce augmented videos of Human Action Recognition using PyTorch and PyTorch Lightning on the HMDB51 dataset.",
    description3:
      "Using a pretrained video classifier available in PyTorchVideo, tested whether the augmented videos help in improving the performance of the classifier.",
  },
  {
    src: drImage,
    title: "Diabetic Retinopathy",
    link: "https://github.com/bhaven123/Project-Diabetic-Retinopathy.git",
    icon: faGithub,
    text: " Fine-tuning a pre-trained model to detect the severities of the Diabetic Retinopathy.",
    tools: "Python, Tensorflow, Keras, Flask, HTML, CSS, AWS EC2",
    description1:
      "Worked with TensorFlow Keras to fine tune a pre-trained VGG16 model with custom classes.",
    description2: "Created a client interface using Flask, HTML, CSS.",
    description3: "Deployed the project using an AWS EC2 instance.",
  },
];

export default PROJECTS_LIST;
