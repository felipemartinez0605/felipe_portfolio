/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Felipe Martinez",
  title: "Hi all, I'm Felipe",
  subTitle: emoji(
    "Senior Full-Stack Engineer with 5+ years of experience building secure, scalable web applications as a Frontend & Backend specialist. I lead end-to-end development for web apps, from system design and implementation to deployment and optimization. My background includes microservices architecture, modern JavaScript frameworks, and API-driven systems. I actively manage DevOps workflows, including CI/CD pipelines and cloud infrastructure, to ensure reliable and maintainable platforms. I value clean code, performance, collaboration, and continuous improvement."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/felipemartinez0605",
  linkedin: "https://www.linkedin.com/in/felipe-ignacio-martinez-artigas/",
  gmail: "felipemartinez4824@gmail.com",
  // stackoverflow: "https://stackoverflow.com/users/10422806/Felipe-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad de Aconcagua",
      logo: require("./assets/images/university_logo.png"),
      subHeader: "Bachelor of Science in Computer Software Engineering",
      duration: "March 2019 - June 2023",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Graduated with a strong focus on software architecture, data structures, and system design.",
        "While participating in various events and club activities at university, I gained practical experience developing microservice-based applications and RESTful APIs.",
        "Built solid full-stack development skills, including experience with relational databases and embedded systems."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineer",
      company: "BetterWorld Technology",
      companylogo: require("./assets/images/betterworld_logo.jpeg"),
      date: "Apr 2024 – Present",
      desc: "Designed and developed a scalable e-commerce platform focused on performance, security, and user experience, supporting long-term platform growth.",
      descBullets: [
        "Integrated Elasticsearch to enhance product search speed and accuracy, increasing product discoverability by approximately 30–40%.",
        "Implemented secure payment gateways and strengthened authentication and session management, improving checkout security and GDPR compliance by around 35%.",
        "Reduced cart abandonment during the payment stage by approximately 20–25% through optimized checkout workflows.",
        "Applied a mobile-first optimization strategy, improving mobile page load performance by about 30%.",
        "Increased mobile-based transaction completion rates by roughly 25% through responsive UI and performance enhancements.",
        "Deployed and managed core services on AWS cloud infrastructure, improving system scalability, availability, and operational stability by approximately 30%."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Healthware Systems",
      companylogo: require("./assets/images/healthware_logo.png"),
      date: "Jun 2023 – Mar 2024",
      desc: "Supported the development and maintenance of a web-based healthcare platform used by medical staff and administrators.",
      descBullets: [
        "Designed and implemented responsive dashboards, improving daily operational visibility and reducing  manual status checks by approximately 25%.",
        "Built role-based access control for doctors, administrators, and staff, enhancing data security and access accuracy by around 40%.",
        "Developed an automated document verification and notification workflow, reducing document processing time by nearly 35% and improving staff response speed.",
        "Introduced an AI-based system to automatically generate required document lists for specific treatments, increasing overall work efficiency by about 30%.",
        "Integrated hospital EHR data into internal systems and maintained secure access logging and CI/CD pipelines with GitHub Actions, improving deployment reliability and audit readiness by roughly 20%."
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "ZeroFox",
      companylogo: require("./assets/images/zerofox_logo.jpeg"),
      date: "Feb 2021 – Apr 2023",
      desc: "Delivered measurable improvements across multiple security domains, contributing to stronger and more resilient production systems.",
      descBullets: [
        "Reduced production security vulnerabilities by approximately 30–40% through improved secure coding practices and threat-focused security design.",
        "Automated key security checks within CI/CD pipelines as part of Security Automation & DevSecOps, reducing manual security review effort by 45–55% and accelerating release cycles by around 25%.",
        "Strengthened cloud infrastructure security by contributing to Cloud Security Projects, improving configuration compliance and monitoring coverage by roughly 35–45%.",
        "Collaborated closely within Agile teams to improve cross-team security alignment and delivery efficiency, resulting in an estimated 20–30% improvement in sprint-level security task completion and overall team velocity."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/solist_logo.jpeg"),
      projectName: "The Solist",
      projectDesc: "The Solist is an e-commerce platform that sells authentic luxury goods such as watches, jewelry, and accessories at discounted prices. The key concept of the site is “shopworn” products, which means items that were displayed in retail stores or remained unsold inventory from authorized retailers, but were never actually owned by a customer.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://thesolist.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/modclothes_logo.png"),
      projectName: "ModClothes",
      projectDesc: "ModCloth is an e-commerce fashion website that sells vintage-inspired women’s clothing, accessories, and home décor. The brand is known for its retro style, unique designs, and inclusive sizing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://modcloth.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have done !",

  achievementsCards: [
    {
      title: "Software Engineer Certification",
      subtitle:
        "Completed HackerRank Software Engineer certification, showcasing proficiency in coding challenges, algorithm design, data structures, and efficient problem solving.",
      image: require("./assets/images/hackerrank_logo.png"),
      imageAlt: "HackkerRank Logo Alt",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/e38d234ace45"
        }
      ]
    },
    {
      title: "Go (Intermediate) Certification",
      subtitle:
        "Demonstrated intermediate-level skills in Go programming, including concurrency, problem solving, and core language features.",
      image: require("./assets/images/hackerrank_logo.png"),
      imageAlt: "HackkerRank Logo Alt",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/8d83b11e8916"
        }
      ]
    },

    {
      title: "Angular (Intermediate) Certification",
      subtitle: "Proven knowledge of Angular development, including components, services, routing, and reactive programming concepts.",
      image: require("./assets/images/hackerrank_logo.png"),
      imageAlt: "HackkerRank Logo Alt",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/9a04b0f98e1a"
        }
      ]
    },

    {
      title: "JavaScript (Intermediate) Certification",
      subtitle: "Intermediate JavaScript certification demonstrating modern programming and problem-solving skills.",
      image: require("./assets/images/hackerrank_logo.png"),
      imageAlt: "HackkerRank Logo Alt",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/dac3bb891897"
        }
      ]
    },

    {
      title: "English Proficient C2 Certification",
      subtitle: "Certified C2 English proficiency by EF SET, demonstrating advanced reading, writing, and professional communication skills.",
      image: require("./assets/images/efset_logo.png"),
      imageAlt: "HackkerRank Logo Alt",
      footerLink: [
        {
          name: "View Certification",
          url: "https://cert.efset.org/sFmtnQ"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@felipemartinez0605/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/felipemartinez0605-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Felipe-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+56-929508025",
  email_address: "felipemartinez4824@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
