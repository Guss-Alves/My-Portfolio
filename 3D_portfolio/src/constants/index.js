import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
    python,
    sql,
    java,
    bootstrap,
    finance,
    gusbook
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
        title: "ReactJs Developer",
        icon: mobile,
    },
    {
        title: "Backend/Frontend Developer",
        icon: backend,
    }
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "MySQL",
        icon: sql,
    },
    {
        name: "git",
        icon: git,
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Gusbook",
        description:
            "Web-based social media(facebook clone), that allows users to make posts that support image upload, follow and unfollow friends, check their profiles and much more.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "cloudinary",
                color: "pink-text-gradient",
            },
            {
                name: "Node.js",
                color: "text-purple-400",
            }
        ],
        image: gusbook,
        source_code_link: "https://github.com/Guss-Alves/social-media-app",
    },
    {
        name: "Finance Tracker",
        description:
            "Web application that enables users to keep track of all their expenses, also being able to separate them by many different categories, and analyse in a precise chart .",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "Node.js",
                color: "text-purple-400",
            }
        ],
        image: finance,
        source_code_link: "https://github.com/Guss-Alves/Finance-Tracker",
    },
    {
        name: "Weather App",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "Spring mvc",
                color: "blue-text-gradient",
            },
            {
                name: "restAPI",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/Guss-Alves/Weather-app",
    },
];

export { services, technologies, testimonials, projects };
