import {
  VercelIcon,
  ReactIcon,
  GithubIcon,
  FirebaseIcon,
  NodeIcon,
  JavaScriptIcon,
} from "@/components/icons";

const tools = [
  {
    name: "Vercel Deployment",
    icon: <VercelIcon size={26} />,
    url: "https://vercel.com/",
  },
  {
    name: "React JS Library",
    icon: <ReactIcon />,
    url: "https://react.dev/",
  },
  {
    name: "GitHub Repository",
    icon: <GithubIcon size={26} />,
    url: "https://github.com/",
  },
  {
    name: "Firebase Firestore",
    icon: <FirebaseIcon size={26} />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Node.js Runtime",
    icon: <NodeIcon size={26} />,
    url: "https://nodejs.org/",
  },
  {
    name: "JavaScript Language",
    icon: <JavaScriptIcon size={26} />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
];

export default tools;


const certificates = [
  {
    name: "Python (Basic)",
    url: "https://www.hackerrank.com/certificates/94e298a976db",
  },

  {
    name: "Frontend Developer (React)",
    url: "https://www.hackerrank.com/certificates/f1a9da380367",
  },{
    name:"JavaScript (Intermediate)",
    url:"https://www.hackerrank.com/certificates/e6604d22f292"
  },
  {
    name: "React (Basic)",
    url: "https://www.hackerrank.com/certificates/iframe/d6a489649a33",
  },
];

const projects = [
  {
    title: "Osint Tools - SzTools",
    sourceCode: "https://github.com/SiuuEditZ/SzTools",
    demo: "https://github.com/SiuuEditZ/SzTools",
  },
  {
    title: "KonzAPI",
    sourceCode: "https://www.konzapi.my.id/",
    demo: "https://www.konzapi.my.id/",
  },
  {
    title: "SzDownloader",
    sourceCode: "https://github.com/SiuuEditZ/SzDownloader",
    demo: "https://github.com/SiuuEditZ/SzDownloader",
  },
];

export { projects, certificates, tools };
