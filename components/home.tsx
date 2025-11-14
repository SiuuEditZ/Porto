
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { certificates, projects, tools } from "@/lib/data";
import SocialMedias from "./social-medias";

export default function Home() {
  return (
  <div className="bg-black text-white p-5 flex flex-col items-center min-h-screen">
      <div
        className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black -z-10"
        style={{
          transition: "background-position 0.3s ease-out",
        }}
      >
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTExIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]
          opacity-20"
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center pb-20">
        <div className="mb-12">
          <Image
            src="https://res.cloudinary.com/dx6rg2y7c/image/upload/v1763118466/download_4_h5dxfh.jpg"
            alt="Profile Picture"
            width={240}
            height={220}
            className="rounded-full mx-auto mb-2 border-2 border-gray-700 shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-2 tracking-tight text-gray-300">
            Christophorus Alan Angelo
          </h1>
          <i className="text-xl text-gray-400">
            A student studying to become a Full Stack Developer
          </i>
          <p className="text-xl text-gray-400">
            <i>Building, Improving, Evolving.</i>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-5">
          {/* Projects */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Projects
            </h2>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={index} className="text-sm">
                  <div className="flex justify-center space-x-4 mt-1">
                    <Link
                      target="blank"
                      href={project.demo}
                      className="inline-flex items-center text-gray-300 hover:text-gray-100 transition-colors duration-300"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      <span>{project.title}</span>
                    </Link>
                    <Link
                      target="blank"
                      href={project.sourceCode}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <Github size={14} className="mr-1" />
                      <span>Refrence</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificates */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Certificates
            </h2>
            <ul className="space-y-1 flex flex-col ">
              {certificates.map((cert, index) => (
                <li key={index} className="text-sm">
                  <Link
                    target="blank"
                    href={cert.url}
                    className="inline-flex text-gray-300 hover:text-gray-100 transition-colors duration-300"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    <span>{cert.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Stack */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              My stack
            </h2>
            <ul className="space-y-2 flex flex-col items-center justify-center ">
              {tools.map((tool, index) => (
                <li key={index}>
                  <Link
                    target="blank"
                    href={tool.url}
                    className="flex space-x-1 text-sm text-gray-300 hover:text-gray-100 transition-colors duration-300"
                  >
                    {tool.icon}
                    <span className="inline-flex items-center text-gray-300">
                      {tool.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <SocialMedias />
    </div>
  );
}
