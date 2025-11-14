import { Github, Twitter, Linkedin, Phone, Mail } from "lucide-react";
import Link from "next/link";
export default function soSocialMedias() {
  return (
    <div className="flex justify-center space-x-6 relative z-10 w-full h-full flex-wrap">
     

      <div className="flex  items-center gap-2 text-gray-400 ">
        <Github size={28} className="text-pretty" />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SiuuEditZ"
          className="hover:text-gray-200 text-sm hover:underline   transition-colors duration-300"
        >
          Github
        </Link>
      </div>
      <div className="flex items-center gap-2 text-gray-400 ">
        <Phone size={28} />
        <Link
          href="https://wa.me/6283191757429?text=Hi"
          className="hover:text-gray-200 text-sm hover:underline  transition-colors duration-300"
        >
          6283191757429
        </Link>
      </div>
      <div className="flex items-center gap-2 text-gray-400 ">
        <Mail size={28} />
        <Link
          target="blank"
          rel="noopener noreferrer"
          href="mailto:siuueditz1@gmail.com"
          className="hover:text-gray-200 hover:underline text-sm transition-colors duration-300"
        >
          Email
        </Link>
      </div>
    </div>
  );
}
