import { v4 as uuidv4 } from "uuid";
import { ProjectType } from "../types/common";

export const projects: ProjectType[] = [
  {
    id: uuidv4(),
    title: "MacQueen",
    type: "Booking App",
    link: "https://www.macqueen.co/",
    image: "/assets/images/projects/macqueen/cover.png",
    details: {
      android:
        "https://play.google.com/store/apps/details?id=com.zeidex.macqueen&hl=en&gl=US",
      ios: "https://apps.apple.com/sa/app/macqueen/id1495088277",
      brief: "Hotels Booking App.",
      techs: ["React Native", "ReactJS", "NextJS"],
    },
    year: 2023,
  },
  {
    id: uuidv4(),
    title: "Gebhaly",
    type: "E-commerce Website",
    link: "https://www.gebhaly.com/",
    image: "/assets/images/projects/gebhaly/cover.png",
    details: {
      extension:
        "https://chrome.google.com/webstore/detail/gebhaly/kadfaclbnegniefcmnnlpleggkhmkcne",
      brief:
        "An E-commerce website. I was responsible for developing some pages of this website using NextJS. Some of the pages I was responsible for are the blog pages, the Offers page, and the support page. I was also responsible for developing the email templates of the system as well as most of Gebhaly's Chrome Extension. It was developed for Gebhaly's Company.",
      techs: ["ReactJS", "NextJS"],
    },
    year: 2022,
  },
  {
    id: uuidv4(),
    title: "EG Parcel Express - EPX",
    type: "Shipping Website",
    link: "https://www.egparcelexpress.com/",
    image: "/assets/images/projects/egparcelexpress/cover.png",
    details: {
      brief:
        "An international shipping website. I was responsible for building the whole client side of the application from scratch using NextJS. It was developed for Gebhaly's Company.",
      techs: ["ReactJS", "NextJS"],
    },
    year: 2022,
  },
  {
    id: uuidv4(),
    title: "Look me up",
    type: "Search Engine",
    link: "https://lookkmeup.web.app/",
    image: "/assets/images/projects/lookmeup/cover.png",
    details: {
      brief:
        "A google-like mini search engine application with 5k crawled and indexed pages. Worked with 3 other members on both the backend and frontend.",
      techs: ["ReactJS", "Spring Boot", "MongoDB"],
      git: {
        both: "https://github.com/mohammedgrey/Search-Engine",
      },
      API: "https://lookme-up.herokuapp.com/",
      PDF: "/assets/pdfs/SearchEngine.pdf",
    },
    year: 2021,
  },
  {
    id: uuidv4(),
    title: "IzI Handmade",
    type: "Online Store",
    link: "https://izihandmade.web.app/",
    image: "/assets/images/projects/izi/cover.png",
    details: {
      brief:
        "An online store project. Worked on this project solo. Firebase was used for authentication (With Facebook and Google.) There are user roles and permissions implemented on both the server and client side, as there is an admin who can add new products and change prices…etc. ",
      techs: ["ReactJS", "NodeJS", "Express", "MongoDB", "Firebase"],
      git: {
        client: "https://github.com/mohammedgrey/izi",
        server: "https://github.com/mohammedgrey/iziserver",
      },
    },
    year: 2021,
  },
  {
    id: uuidv4(),
    title: "EgySchools",
    type: "Schools System",
    image: "/assets/images/projects/schools/cover.png",
    details: {
      brief:
        "This is the project I worked on during my internship period with Datatec last summer. The project is mainly about creating a system that notifies students about their bus arrival time, upcoming exams and assignments due dates. It is also for parents to be able to track down their children’s progress in the school. And there is an admin panel for the staff and teachers to add bus schedules, due dates, and pretty much manage any interaction done with the system like doing the basic CRUD operations to the users/students/stations/routes/trips/drivers…etc. I have personally taken part in developing both the UI of the student-parent/driver application and the admin panel using Flutter and react.JS respectively. I no longer have access to the repository, as my internship period is over but I am providing a carousel for the pages I have worked on.",
      techs: ["ReactJS", "Flutter"],
      carousel: [
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623331280/Portfolio/EgySchoolsCarousel%20/1_hysikz.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623331281/Portfolio/EgySchoolsCarousel%20/2_taecgt.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623331278/Portfolio/EgySchoolsCarousel%20/3_w5kg12.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623331286/Portfolio/EgySchoolsCarousel%20/4_lresdt.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623334296/Portfolio/EgySchoolsCarousel%20/5_exwbhs.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623334296/Portfolio/EgySchoolsCarousel%20/6_nmnqcl.png",
      ],
      PDF: "/assets/pdfs/Datatec.pdf",
    },
    year: 2020,
  },

  {
    id: uuidv4(),
    title: "Spotify Clone",
    type: "Music App",
    image: "/assets/images/projects/spotify/cover.png",
    details: {
      brief:
        "A Spotify clone project. Worked on the client side of this project along with 4 other members. My tasks included things like redux management, search page, user page, help page…etc.",
      techs: ["ReactJS", "Redux", "React Router"],
      git: {
        client: "https://github.com/FatemaFawzy/Frontend-Team",
      },
    },
    year: 2020,
  },
  {
    id: uuidv4(),
    title: "Santa Game",
    type: "Game Engine",
    image: "/assets/images/projects/santa/cover.png",
    link: "https://drive.google.com/file/d/1RSvIiQUV_hW8EbJwNwemhZwKQCLNBjBw/view?usp=sharing",
    details: {
      brief:
        "Developed a santa clause simple game with 3 other members following the ECS framework where I was responsible for the game logic and the colliding component.",
      techs: ["OpenGL", "C++"],
      git: {
        both: "https://github.com/mohammedgrey/GameEngine",
      },
    },
    year: 2022,
  },
  {
    id: uuidv4(),
    title: "Grades Autofiller",
    type: "Image Processing",
    image: "/assets/images/projects/sheetgrader/cover.png",
    link: "https://sheetgrader.web.app/",
    details: {
      brief:
        "Image Processing project to fill out grades or grade bubble sheets automatically.",
      techs: ["Python", "OpenCV", "Flask", "React.JS"],
      git: {
        both: "https://github.com/MoaazZaki/grade_auto_filler",
      },

      PDF: "/assets/pdfs/ImageProcessing.pdf",
    },
    year: 2022,
  },
  {
    id: uuidv4(),
    title: "Harvard Processor",
    type: "Processor",
    image: "/assets/images/projects/processor/cover.png",
    containImage: true,
    details: {
      brief:
        "Designed and implemented a harvard-like processor that follows the RISC architecture with 3 other members.",
      techs: ["VHDL"],
      git: {
        both: "https://github.com/MoaazZaki/HarvardProcessor",
      },
      PDF: "/assets/pdfs/Processor.pdf",
    },
    year: 2021,
  },
  {
    id: uuidv4(),
    title: "Font Classifier",
    type: "Machine Learning",
    image: "/assets/images/projects/fontclassifier/cover.png",
    link: "https://drive.google.com/file/d/1D5ahomRW4M7fShPb3K_HgJEOPcoD0TtX/view?usp=sharing",
    details: {
      brief:
        "Worked with 3 other members on training a model to classify handwritten fonts.",
      techs: ["Python", "Scikit-learn", "OpenCV"],
      PDF: "/assets/pdfs/FontClassifier.pdf",
    },
    year: 2019,
  },
  {
    id: uuidv4(),
    title: "SRP",
    type: "Networks",
    image: "/assets/images/projects/networks/cover.png",
    details: {
      brief: "Selective repeat protocol using omnet++",
      techs: ["omnet++", "C++"],
      git: {
        both: "https://github.com/mohammedgrey/SelectiveRepeatProtocol",
      },
    },
    year: 2019,
  },
];
