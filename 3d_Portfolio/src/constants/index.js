import {
  mobile,
  backend,
  creator,
  web,
  meta,
  starbucks,
  tesla,
  shopify,
  
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
  
];

const services = [
  {
    title: "Industrial Chemistry UG Student",
    icon: web,
  },
  {
    title: "Mumbaikar",
    icon: mobile,
  },
  {
    title: "Tech Savvyy ",
    icon: backend,
  },
  {
    title: "Experienced Learner",
    icon: creator,
  },
];



const experiences = [
  {
    title: "Atal Tinkering Labs (ATL) Core Member",
    company_name: "ATL | AIMS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2017 - April 2020",
    points: [
      "Made Multiple Projects during my tenure where I inspired hundreds of budding Innovators and provided them a platform.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to build creative Projects.",
      "Participated in National Innovation Fest 2019 Representing My School (RISG) Which won prize hosted by Nehru Science Center",
    ],
  },
  {
    title: "YJ",
    company_name: "Ryan International Group of Institutions TV",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Feb 2019",
    points: [
      "The new path-breaking show 'Young Jourknows' takes the viewers Beyond Breaking News, bringing them news of the people, for the people, but by the Youth !",
      "Completing BBN Course Qualifies Ryan Students as YJs Covering news and featuring it on Social Media Platforms like Youtube , Facebook.",
      "Was Involved in Young Jourknows program on Space Toon Kids TV, TV 9, Sahara One, and Topper TV.",
    ],
  },
  {
    title: "Volunteer",
    company_name: "Indian Institute of Technology, Hyderabad ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "I have been actively volunteering in all the Major Events on IITH Campus, like E-Summit ‘23, TEDx IITH ’23, ELAN & NVISION ’23,10/10 ALUMNI EVENT ’22, ALUMNI DAY ’22, ELAN & NVISON WORKSHOPS and lot more and have learned a lot from each of these Experiences..",
    ],
  },
  {
    title: "Operations Manager",
    company_name: "IITH E-Cell",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Planning events and activities carried out by E-Cell and ensuring its smooth functioning.",
      "Expanding Contacts which could help E-Cell in its Events.",
      "Learning more about behind the scenes work which requires to be done for E-Cell"
    ],
  },
];



export { services, experiences };