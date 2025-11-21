import portfolio from "../assets/portfolio.png";
import drImage from "../assets/dr.png";
import ganImage from "../assets/gans.png";
import irisImage from "../assets/iris.png";
import contactFormImage from "../assets/contactform.png";
import modelDeployImage from "../assets/modeldemo.png";
import socialMediaImage from "../assets/socialmedia.png";
import ecommerceImage from "../assets/ecommerce.png";
import sfhImage from "../assets/sfh.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const PROJECTS_LIST = [
  {
    src: ecommerceImage,
    title: "Fullstack React Ecommerce App with Stripe Payment and Docker",
    link: "https://github.com/bhaven123/fullstack-socialmedia-mern-app",
    icon: faGithub,
    text: "This project harnesses the power of React, Stripe payment gateway, Strapi headless CMS, Material-UI (MUI), Redux state management, and Docker containerization to create a feature-rich and scalable eCommerce platform.",
    tools:
      "React.js, Redux, Material-UI, Stripe, Strapi, Formik, Yup, Axios, Docker",
    description: [
      "Created a feature-rich front-end using React.js, implementing reusable components and leveraging the power of React's virtual DOM for efficient rendering.",
      "Utilized Redux for state management, ensuring a centralized and predictable data flow within the application.",
      "Designed an appealing and responsive user interface by leveraging the Material-UI library, providing a seamless user experience across different devices and screen sizes.",
      "Integrated the Stripe API for secure and reliable payment processing, allowing users to make credit card payments with ease and confidence.",
      "Leveraged Strapi, a headless CMS (Content Management System), to manage and organize product data efficiently, enabling easy content updates and maintenance.",
      "Implemented Formik and Yup libraries for form management and validation, ensuring data integrity and a smooth form submission process.",
      "Utilized Axios for efficient communication with the back-end, enabling seamless data exchange and smooth API integration.",
      "Employed Docker to containerize the application, facilitating easy deployment and ensuring consistency across different environments.",
      "Adhered to best practices for code organization, modularity, and reusability, resulting in a scalable and maintainable codebase.",
    ],
  },
  {
    src: socialMediaImage,
    title: "Fullstack Responsive MERN Social Media App with Docker",
    link: "https://github.com/bhaven123/fullstack-socialmedia-mern-app",
    icon: faGithub,
    text: "This project combines the power of the MERN stack, along with several additional tools and technologies, to create a feature-rich and scalable social media platform.",
    tools:
      "React.js, Redux, Express.js, Material-UI, MongoDB, Formik, Yup, Axios, Docker",
    description: [
      "Created an engaging and interactive front-end using React.js, employing modular and reusable components to deliver a seamless user experience and taking advantage of React's virtual DOM for efficient rendering.",
      "Implemented Redux for state management, enabling a centralized and predictable data flow throughout the application, which facilitated the smooth handling of complex application states and ensured optimal performance and scalability.",
      "Developed an intuitive and visually captivating user interface by leveraging the power of Material-UI, resulting in responsive layouts and an immersive user experience across diverse devices and screen sizes.",
      "Designed and implemented a robust back-end using Express.js, skillfully handling API requests and data manipulation, which played a pivotal role in delivering a performant and reliable application.",
      "Utilized MongoDB, a NoSQL database, to create an efficient and flexible data storage solution for managing user profiles, posts, comments, and other social media-related data, ensuring seamless scalability and ease of maintenance.",
      "Implemented the Formik and Yup libraries to streamline form management and validation, creating a user-friendly data entry process while maintaining data integrity and enhancing overall application security.",
      "Leveraged the power of Axios, a powerful HTTP client, to enable seamless communication between the front-end and back-end, facilitating efficient data exchange and integrating external APIs smoothly.",
      "Employed Docker to containerize the application, simplifying the deployment process, ensuring consistency across different environments, and promoting scalability and ease of deployment.",
      "Employed best practices in code organization, modularity, and reusability to create a well-structured and maintainable codebase, facilitating future enhancements and collaborations.",
    ],
  },
  {
    src: sfhImage,
    title: "Skills For Hire PHP Projects",
    link: "https://github.com/bhaven123/sfh-assignments",
    icon: faGithub,
    text: "These projects include TA assignments part of the Skills for Hire Web Development Program provided by Digital Nova Scotia.",
    tools: "PHP, HTML, CSS, Bootstrap, MAMP, phpMyAdmin",
    description: [
      "Developed the projects using PHP as the primary programming language, allowing for server-side scripting and dynamic content generation.",
      "Employed HTML and CSS to create a well-structured and visually appealing user interface, ensuring an optimal user experience.",
      "Utilized Bootstrap, a popular front-end framework, to enhance the application's responsiveness and improve its compatibility across different devices and screen sizes.",
      "Set up and configured the development environment using MAMP (Mac, Apache, MySQL, PHP), providing a seamless local server setup for testing and development purposes.",
      "Leveraged phpMyAdmin, a web-based database management tool, for efficient database administration, ensuring secure storage and retrieval of assignment-related data.",
      "Ensured code modularity, reusability, and maintainability through best practices in PHP, HTML, and CSS coding, resulting in a scalable and maintainable codebase.",
    ],
  },
  {
    src: contactFormImage,
    title: "Full Stack Contact Form",
    link: "https://github.com/bhaven123/contact-form-with-backend",
    icon: faGithub,
    text: "Developed a highly functional and customizable contact form integrated with React.js, Material-UI, and Nodemailer for seamless communication and automated email notifications.",
    tools: "React.js, Express.js, Material-UI, Formik, Yup",
    description: [
      "Developed a highly functional single-page contact form using React.js, offering a customizable solution that can be seamlessly integrated into any portfolio or website.",
      "Designed the contact form interface using Material-UI, ensuring responsiveness across different devices and providing rapid prototyping capabilities for efficient development iterations.",
      "Created a backend server using Express.js, facilitating seamless communication between the frontend and backend components and ensuring secure data transmission.",
      "Implemented Nodemailer, an email sending library for Node.js, to enable automatic email notifications upon form submission, enhancing user engagement and communication.",
      "Leveraged Formik, a powerful form management library, to handle form submission seamlessly, providing robust form validation, and simplifying error handling and form state management.",
      "Utilized Yup, a schema validation library, to define and enforce validation rules for the form objects, ensuring data integrity and accuracy.",
      "Employed Docker to create a containerized environment, allowing the frontend and backend components to run in a single container, simplifying deployment and ensuring consistent application performance across different environments.",
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
      "Implemented and conducted Exploratory Data Analysis (EDA) on the Iris Flower dataset, employing Python libraries such as pandas, scikit-learn, seaborn, and matplotlib. This comprehensive analysis aimed to gain insights into the dataset's characteristics, relationships, and distributions.",
      "Designed and developed the EDA process in a Jupyter Notebook, utilizing its interactive environment to enhance visualization and facilitate a comprehensive understanding of the dataset. This approach allowed for a seamless and visually appealing exploration of the data.",
      "Created visually informative charts, plots, and statistical summaries using seaborn and matplotlib, enabling effective data visualization and interpretation. Leveraged these visualizations to uncover patterns, correlations, and trends within the Iris Flower dataset.",
      "Utilized pandas for data manipulation and preprocessing, ensuring the dataset was properly formatted and prepared for analysis. Employed scikit-learn to explore various statistical techniques and machine learning models to further analyze and understand the dataset.",
      "Demonstrated proficiency in Python libraries for data analysis, employing pandas, scikit-learn, seaborn, and matplotlib for efficient and insightful EDA of the Iris Flower dataset.",
      "Showcased strong data visualization skills by designing and developing an interactive EDA process in Jupyter Notebook, resulting in enhanced comprehension of the dataset.",
      "Contributed to the field of data analysis by applying EDA techniques to extract meaningful insights from the Iris Flower dataset, providing valuable knowledge for further research and applications.",
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
      "Implemented inference requests to machine learning models using the Hugging Face Inference API, enabling seamless and accurate predictions.",
      "Developed a Model API using FastAPI, a high-performance Python web framework, to create a robust interface for efficient communication between clients and machine learning models.",
      "Designed and created a Docker Container Image to streamline the deployment process, ensuring portability and reproducibility of the project.",
      "Demonstrated proficiency in utilizing the Hugging Face Inference API for efficient inference and prediction tasks.",
      "Showcased expertise in web development by leveraging FastAPI to develop a performant and scalable Model API.",
      "Utilized Docker containerization to simplify and streamline the deployment of the project across different environments.",
      "Highlighted strong skills in machine learning deployment, web development, and containerization.",
      "Contributed to the development of efficient and scalable solutions for machine learning inference and deployment.",
    ],
  },
  {
    src: portfolio,
    title: "Personal Portfolio",
    link: "https://bhaven-naik.com/",
    icon: faLink,
    text: "Created a responsive single-page portfolio website using React.js, deployed on a custom domain with Firebase Hosting, and implemented an efficient GitHub workflow for seamless updates.",
    tools: " React.js, React-Bootstrap, HTML, CSS",
    description: [
      "Developed a single-page portfolio website utilizing React.js, resulting in an aesthetically pleasing and interactive user interface.",
      "Designed the website with a focus on responsiveness, employing React-Bootstrap to ensure optimal viewing experience across various devices and screen sizes.",
      "Successfully deployed the website using Firebase Hosting, configuring it to be accessible on a custom domain for improved branding and user experience.",
      "Implemented a streamlined GitHub workflow, enabling seamless deployment of new changes to the website. This workflow ensured efficient version control.",
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
      "Implemented and developed a research project focused on exploring the applications of Generative Adversarial Networks (GANs) in Augmentation and Medical Imaging.",
      "Created a PyTorch Lightning Deep Convolutional GAN (DCGAN) to fine-tune and train on the HMDB51 dataset for generating augmented videos.",
      "Designed and implemented a scalable training pipeline using PyTorch Lightning, optimizing network architecture and hyperparameters for efficient model training.",
      "Utilized PyTorchVideo's pre-trained classifier to measure and compare the performance of augmented clips with respect to their original counterparts.",
      "Conducted a comprehensive evaluation of generated augmentations, assessing fidelity and quality using advanced evaluation techniques.",
      "Developed proficiency in GAN implementation, PyTorch Lightning, and PyTorchVideo for efficient training and performance evaluation.",
      "Deepened understanding of Augmentation and Medical Imaging domains, acquiring valuable insights into the applications of GANs.",
      "Demonstrated strong research and technical skills, contributing to the advancement of artificial intelligence and computer vision fields.",
    ],
  },
  {
    src: drImage,
    title: "Diabetic Retinopathy",
    link: "https://github.com/bhaven123/Project-Diabetic-Retinopathy.git",
    icon: faGithub,
    text: "Fine-tuning a pre-trained model to detect the severities of the Diabetic Retinopathy.",
    tools: "Python, Tensorflow, Keras, Flask, HTML, CSS, AWS EC2",
    description: [
      "Implemented and fine-tuned a pre-trained VGG16 model using TensorFlow Keras for the classification of Diabetic Retinopathy severities.",
      "Developed an intuitive client interface utilizing Flask for the backend and HTML for the front end, ensuring ease of use and accessibility.",
      "Designed the client interface using CSS to enhance aesthetics and create a visually appealing user experience.",
      "Deployed the project on an AWS EC2 instance, ensuring scalability and reliable performance.",
      "Demonstrated proficiency in TensorFlow Keras, model customization, and medical image classification.",
      "Showcased expertise in web development, utilizing Flask, HTML, and CSS to create a user-friendly interface.",
      "Leveraged AWS EC2 for project deployment, ensuring accessibility and scalability.",
      "Contributed to improving healthcare outcomes through innovative technology applications.",
    ],
  },
];

export default PROJECTS_LIST;
