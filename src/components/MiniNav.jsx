export default function MinNav() {
  return (
    <div className="flex gap-6 border-1 p-3 pl-5 pr-5 rounded-4xl">
      <a className="hover:text-[#cbcbcb]" href="#about">
        About
      </a>
      <a
        className="hover:text-[#cbcbcb]"
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1zXMWb2C2xlwHiEBkQWaqaNaz0S7vN-Pk/view?usp=sharing"
      >
        Resume
      </a>
      <a className="hover:text-[#cbcbcb]" href="#skills">
        Skills
      </a>
      <a className="hover:text-[#cbcbcb]" href="#projects">
        Projects
      </a>
      <a className="hover:text-[#cbcbcb]" href="#contact">
        Contact
      </a>
    </div>
  );
}
