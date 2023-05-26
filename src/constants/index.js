import {
  mobile,
  backend,
  Binance,
  creator,
  web,
  javascript,
  python,
  C,
  html,
  css,
  reactjs,
  SQL,
  tailwind,
  nodejs,
  java,
  git,
  figma,
  UW,
  UW2,
  UW3,
  SS,
  AL,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UX/UI Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TC",
    icon: C,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "SQL",
    icon: SQL,
  },
];

const experiences = [
  {
    title: "IT Intern ",
    company_name: "Ashok Leyland",
    icon: AL,
    iconBg: "#FEFEFA",
    date: "Feburary 2022 - July 2022",
    points: [
      "Managed Ashok Leyland's Dealer Management System (DMS) software for vehicle and parts sales,customer service, and warranty using IT, sales, and customer service expertise",
      "Conducted regular maintenance and updates to ensure data integrity and optimized DMS performance",
      "Created custom reports and dashboards to improve decision-making and provided training to new staff on DMS software usage "
    ],
  },
  {
    title: "Summer Intern",
    company_name: "Social Sync",
    icon: SS,
    iconBg: "#ffffff",
    date: "May 2021 - June 2021",
    points: [
      "Produced high-quality technical documents, spreadsheets, and presentations for internal and external use, ensuring clarity, accuracy, and consistency",
      "Collaborated with software developers, project managers, and other stakeholders to gather and organize information, and ensure that documentation aligns with project goals and requirements",
      "Assisted in customer support and communication efforts, interacting with customers through various channels to provide information and resolve issues.",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "Binance",
    icon: Binance,
    iconBg: "#FFFF00",
    date: "2021 - 2022",
    points: [
      "Functioned as the link between Binance and the campus community, leveraging my expertise in software development to produce informative and appealing digital content that highlighted Binance's products and services.", 
      "Developed and maintained a social media presence for Binance, disseminating up-to-date news and information to crypto enthusiasts and potential customers.",
      "Developed and maintained a social media presence for Binance, disseminating up-to-date news and information to crypto enthusiasts and potential customers.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "UW Data Science Club",
    icon: UW,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Designed visually appealing interfaces for UW DSC Club events and hackathons using Canva and Figma, resulting in a 25% increase in student participation.",
      "Collaborated closely with the UW DSC Club team to understand project requirements and design custom graphics, including posters, flyers, social media graphics, and email campaigns, that effectively promoted events to the student body.",
      "Demonstrated strong communication skills, providing regular design updates to team members, taking constructive feedback, and incorporating changes to ensure project goals were met within tight timelines.",
    ],
  },
  
  {
    title: "Graphic Designer",
    company_name: "UW Computer Science Club",
    icon: UW2,
    iconBg: "#152238",
    date: "May 2023 - Present",
    points: [
      "Designed visually striking graphics using Canva and Figma for UW CSC club events and activities, leading to a 30% increase in student engagement and participation.",
      "Worked closely with the UW CSC club team to understand project requirements and deliver high-quality designs, including posters, flyers, social media graphics, and email campaigns, that effectively promoted events and strengthened the club's brand identity.",
      "Demonstrated excellent collaboration and communication skills, regularly updating team members on design progress, accepting feedback, and delivering polished designs within tight deadlines.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      " I found him to be an attentive and inquisitive student who was always eager to learn and engage in class discussions.",
    name: "Clive Forrester, Ph.D.",
    designation: "Continuing Lecturer ",
    company: "University of Waterloo",
    image: "https://i1.rgstatic.net/ii/profile.image/11431281114733887-1674642938797_Q128/Clive-Forrester.jpg",
  },
  {
    testimonial:
      "Mr. Sethi was found to be punctual, hardworking and inquisitive.",
    name: "Rakhi Kumar",
    designation: "Head – Human Resources (HR),",
    company: "Social Sync ",
    image: "https://media.licdn.com/dms/image/C5103AQGiyBkIjqZbsg/profile-displayphoto-shrink_400_400/0/1517513163720?e=1689811200&v=beta&t=Y42eToD0oO-gngKZKGw9A1pQzQxqkJARMJZY2xnHrRI",
  },
  {
    testimonial:
      "Mr.Sethi was reliable, dedicated, and always willing to go above and beyond to ensure that tasks were completed to the best of his ability.",
    name: "Ashwani Verma",
    designation: "General Manager",
    company: "Ashok Leyland",
    image: "https://github.com/prabhsharan1/Bank-Management-System/assets/122405126/73de160f-5c9f-4dcd-a47d-72a391e97021",
  },
];

const projects = [
 {
    name: "Pharmacy Management System",
    description:
      "Allows to store Medicines data along different category as well as discounts in an easy and efficent way",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter library",
        color: "green-text-gradient",
      },  {
        name: "IDLE",
        color: "pink-text-gradient",
      },
    
    ],
    image: "https://user-images.githubusercontent.com/122405126/212968225-e6ca676b-a6a2-441e-b953-bd3c8fb611cb.png",
    source_code_link: "https://github.com/prabhsharan1/Medical-Pharmacy-App",
  },
  {
    name: "Calculator App with Java and Apache NetBeans",
    description:
      "This is a calculator app that you can have on your pc with an interactive user interface made with Apache NetBeans",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Apache NetBeans",
        color: "green-text-gradient",
      },
      {
        name: "Eclipse IDE",
        color: "pink-text-gradient",
      },
     
    ],
    image: "https://user-images.githubusercontent.com/122405126/213076953-ddcbc79b-98d3-466c-bcbe-5a70b433148f.jpg",
    source_code_link: "https://github.com/prabhsharan1/CALCULATOR",
  },
  {
    name: "My First Developer's Portfolio",
    description:
      "My first Developer Porfolio with animations, custom loading screen and links to all my socials .",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: "https://github.com/prabhsharan1/Toyota-Innovation-Challenge-ImageProcessingFundamentals/assets/122405126/cab83c9c-3039-4a76-92b4-30dd993c3426",
    source_code_link: "https://prabhsharansinghsethi.w3spaces.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
