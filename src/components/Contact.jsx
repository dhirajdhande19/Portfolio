import Form from "./Form";
import Social from "./Social";

export default function Contact() {
  return (
    <div id="contact">
      <div className="text-center mb-20">
        <h1 className="font-bold text-4xl mb-2">
          Let's <span className="text-[#8729B5]">Connect !</span>
        </h1>
        <h3>Open to projects, collabs, and cool convos.</h3>
      </div>
      <div className="flex flex-wrap items-center justify-evenly">
        <Form />
        <Social />
      </div>
      <div></div>
    </div>
  );
}
