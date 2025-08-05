import ProjectTab from "./ProjectTab";

export default function Projects() {
  return (
    <div id="projects" className="m-4 mb-20 mt-6">
      <div className="p-2 m-8  text-center md:mb-20">
        <h1 className="text-4xl font-bold mb-2">
          My <span className="text-[#8729B5]">Projects</span>
        </h1>
        <h3 className="">Some cool stuff i worked on</h3>
      </div>
      <div className="flex flex-col ">
        <ProjectTab
          num={"1"}
          projectName={"VoidMeet"}
          desc={
            "a real-time video chat platform built with React, Socket.IO, and WebRTC for fast and seamless peer-to-peer communication."
          }
          img={"voidmeet-img1.png"}
          techStack={[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.IO",
            "WebRTC",
            "Render",
            "Material UI",
            "Bcrypt",
            "Render",
          ]}
          githubLink={"https://github.com/dhirajdhande19/VoidMeet"}
          siteLink={"https://voidmeet.onrender.com/"}
        />
        <ProjectTab
          num={"2"}
          projectName={"Tutorly"}
          desc={
            "built during an AI-for-Good hackathon, where I developed the backend for an AI-powered tutoring platform."
          }
          img={"tutorly-img1.png"}
          techStack={[
            "EJS",
            "JavaScript",
            "Bootstrap",
            "Node.js",
            "Express",
            "MongoDB",
            "Passport.js",
            "Render",
          ]}
          githubLink={"https://github.com/dhirajdhande19/Tutorly"}
          siteLink={"https://tutorly-jyu9.onrender.com/home"}
        />
        <ProjectTab
          num={"3"}
          projectName={"Postly"}
          desc={
            "A minimal blogging platform clone built to practice core full-stack CRUD functionality."
          }
          img={"postly-img1.png"}
          techStack={[
            "EJS",
            "JavaScript",
            "Bootstrap",
            "Node.js",
            "Express",
            "MongoDB",
            "Passport.js",
            "Render",
          ]}
          githubLink={"https://github.com/dhirajdhande19/Postly"}
          siteLink={"https://postly-t64r.onrender.com/home"}
        />
      </div>
    </div>
  );
}
