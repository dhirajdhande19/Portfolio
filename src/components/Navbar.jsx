import {
  Menu,
  X,
  User,
  FileUser,
  Code,
  FolderOpenDot,
  Contact,
} from "lucide-react";
import { useEffect, useState } from "react";
import Tab from "./Tab";
import MinNav from "./MiniNav";

export default function Navbar() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup (optional but good practice)
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <div>
      <div className="flex p-3 m-1 gap-3 ml-4 md:hidden lg:hidden">
        <div
          className="cursor-pointer "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
        </div>
        <h3 className="text-[#8729B5] font-bold text-2xl">Dhiraj Dhande</h3>
      </div>
      <div className="text-center items-center  hidden md:flex lg:flex m-2 p-4">
        <h2 className="text-[#8729B5] font-bold text-4xl">DD</h2>
        <div className="flex w-full justify-center">
          <MinNav />
        </div>
      </div>

      {isMenuOpen ? (
        <div className="fixed p-3 ml-4 bg-[#20113D] w-65 pt-6 rounded-2xl mb-4  z-50">
          <Tab
            ele={<User />}
            link="#about"
            para="About Me"
            onClick={closeMenu}
          />
          <Tab
            ele={<FileUser />}
            link="https://drive.google.com/file/d/1zXMWb2C2xlwHiEBkQWaqaNaz0S7vN-Pk/view?usp=sharing"
            para="Resume"
            onClick={closeMenu}
          />
          <Tab
            ele={<Code />}
            link="#skills"
            para="Tech Stack"
            onClick={closeMenu}
          />
          <Tab
            ele={<FolderOpenDot />}
            link="#projects"
            para="Projects"
            onClick={closeMenu}
          />
          <Tab
            ele={<Contact />}
            link="#contact"
            para="Contact Me!"
            onClick={closeMenu}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
