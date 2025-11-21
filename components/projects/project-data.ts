// components/projects/projects-data.js
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const PROJECTS_DATA = [
  {
    image: "/assets/ecommerce.png",
    title: "Fullstack React Ecommerce App",
    role: "Creator",
    link: "https://github.com/bhaven123/fullstack-socialmedia-mern-app",
    linkIcon: faGithub,
    shortText:
      "Feature-rich eCommerce platform with Stripe, Strapi, Docker, and a modern React front end.",
    tools: [
      "React.js",
      "Redux",
      "Material-UI",
      "Stripe",
      "Strapi",
      "Formik",
      "Yup",
      "Axios",
      "Docker",
    ],
    description: [
      "Built a reusable component-driven front end with React.",
      "Managed app state with Redux for predictable data flow.",
      "Used Material-UI to create a responsive, polished UI.",
      "Integrated Stripe API for secure payment processing.",
      "Used Strapi as a headless CMS for product management.",
      "Handled forms and validation via Formik + Yup.",
      "Used Axios for API communication with the back end.",
      "Containerized the app with Docker for consistent deployment.",
    ],
  },
  {
    image: "/assets/socialmedia.png",
    title: "Responsive MERN Social Media App",
    role: "Creator",
    link: "https://github.com/bhaven123/fullstack-socialmedia-mern-app",
    linkIcon: faGithub,
    shortText:
      "Scalable social media platform built with the MERN stack and Dockerized for deployment.",
    tools: [
      "React.js",
      "Redux",
      "Express.js",
      "MongoDB",
      "Material-UI",
      "Formik",
      "Yup",
      "Axios",
      "Docker",
    ],
    description: [
      "Developed an interactive social feed with React and Redux.",
      "Implemented a robust API with Express.js.",
      "Used MongoDB for flexible data modelling.",
      "Styled the UI with Material-UI for responsive layouts.",
      "Added form management and validation using Formik and Yup.",
      "Containerized the full stack using Docker.",
    ],
  },
  {
    image: "/assets/sfh.png",
    title: "Skills For Hire PHP Projects",
    role: "Teaching Assistant",
    link: "https://github.com/bhaven123/sfh-assignments",
    linkIcon: faGithub,
    shortText:
      "TA assignments and demos for the Skills for Hire Web Development program.",
    tools: ["PHP", "HTML", "CSS", "Bootstrap", "MAMP", "phpMyAdmin"],
    description: [
      "Implemented server-side logic in PHP for multiple mini apps.",
      "Crafted responsive UIs using HTML, CSS, and Bootstrap.",
      "Set up local environments with MAMP.",
      "Managed databases and queries using phpMyAdmin.",
    ],
  },
  {
    image: "/assets/contactform.png",
    title: "Full Stack Contact Form",
    role: "Creator",
    link: "https://github.com/bhaven123/contact-form-with-backend",
    linkIcon: faGithub,
    shortText:
      "Reusable contact form component with validation, backend API and email notifications.",
    tools: ["React.js", "Express.js", "Material-UI", "Formik", "Yup", "Nodemailer"],
    description: [
      "Built a reusable contact form in React.",
      "Styled the form with Material-UI.",
      "Created an Express.js backend for form handling.",
      "Used Nodemailer for automated email notifications.",
      "Handled validation and error states via Formik and Yup.",
      "Dockerized the stack for easy deployment.",
    ],
  },
  {
    image: "/assets/iris.png",
    title: "Iris Dataset EDA",
    role: "Data Scientist",
    link: "https://github.com/bhaven123/exploratory-data-analysis",
    linkIcon: faGithub,
    shortText:
      "Exploratory data analysis on the classic Iris dataset using Python and visualizations.",
    tools: ["Python", "Jupyter", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    description: [
      "Performed data cleaning and preparation with pandas.",
      "Explored feature distributions and correlations.",
      "Built visualizations using seaborn and matplotlib.",
      "Experimented with basic ML models via scikit-learn.",
    ],
  },
  {
    image: "/assets/modeldemo.png",
    title: "Model Deploy Demo",
    role: "ML Engineer",
    link: "https://github.com/bhaven123/model-deploy-demo",
    linkIcon: faGithub,
    shortText:
      "Demo of deploying ML inference as a FastAPI service packaged into a Docker image.",
    tools: ["Python", "FastAPI", "Docker", "PyTorch"],
    description: [
      "Implemented inference endpoints using FastAPI.",
      "Used Hugging Face inference for model serving.",
      "Packaged the API into a Docker image.",
      "Showcased a reproducible approach to ML deployment.",
    ],
  },
  {
    image: "/assets/portfolio.png",
    title: "Personal Portfolio",
    role: "Creator",
    link: "https://bhaven-naik.com/",
    linkIcon: faLink,
    shortText:
      "Responsive single-page portfolio built with React and hosted on Firebase (now evolving to Next.js + Vercel).",
    tools: ["React.js", "React-Bootstrap", "HTML", "CSS", "Firebase Hosting"],
    description: [
      "Built a single-page portfolio using React.",
      "Focused on responsive layout for all screen sizes.",
      "Deployed to Firebase Hosting on a custom domain.",
      "Set up a GitHub-based workflow for continuous deployment.",
    ],
  },
  {
    image: "/assets/gans.png",
    title: "GAN Augmentation",
    role: "Researcher",
    link: "https://github.com/bhaven123/Project-GANs.git",
    linkIcon: faGithub,
    shortText:
      "GAN-based video augmentation for human action recognition and medical imaging experiments.",
    tools: ["Python", "PyTorch", "PyTorch Lightning", "PyTorchVideo"],
    description: [
      "Implemented a DCGAN in PyTorch Lightning.",
      "Trained models on HMDB51 for action recognition.",
      "Used PyTorchVideo for evaluation and baselines.",
      "Explored augmentation techniques for video data.",
    ],
  },
  {
    image: "/assets/dr.png",
    title: "Diabetic Retinopathy",
    role: "Researcher",
    link: "https://github.com/bhaven123/Project-Diabetic-Retinopathy.git",
    linkIcon: faGithub,
    shortText:
      "Deep learning approach using VGG16 to classify severity of diabetic retinopathy from fundus images.",
    tools: ["Python", "TensorFlow", "Keras", "Flask", "HTML", "CSS", "AWS EC2"],
    description: [
      "Fine-tuned a VGG16-based classifier in TensorFlow.",
      "Built a Flask app for model inference.",
      "Designed a simple web interface with HTML/CSS.",
      "Deployed the solution to AWS EC2.",
    ],
  },
];

export default PROJECTS_DATA;
