import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [err, setErr] = useState(false);

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleCaptchaChange = (value) => {
    //console.log("captcha value: ", value);
    setCaptchaVerified(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      //alert("please verify the captcha");
      setErr(true);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSent(true);
          setFormValues({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          setErr(false);
          setCaptchaVerified(false);
          setTimeout(() => {
            setSent(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="border-1 flex flex-col p-6 m-8  rounded-xl md:w-xl">
        <h2 className="text-xl mb-8  text-center">
          Ping me{" "}
          <span className="text-[#71189E] text-xl font-bold">anytime</span>
        </h2>

        <div className="flex flex-col mb-6">
          <label htmlFor="user_name" className="mb-2">
            Name
          </label>
          <input
            className="border p-3 rounded-xl bg-transparent autofill:bg-transparent focus:bg-transparent focus:outline-none focus:ring-0"
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Your name"
            value={formValues.user_name}
            onChange={(e) => {
              setFormValues({ ...formValues, user_name: e.target.value });
            }}
            required
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="user_email" className="mb-2">
            Email
          </label>
          <input
            className="border p-3 rounded-xl bg-transparent autofill:bg-transparent focus:bg-transparent focus:outline-none focus:ring-0"
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Your email"
            value={formValues.user_email}
            onChange={(e) => {
              setFormValues({ ...formValues, user_email: e.target.value });
            }}
            required
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="subject" className="mb-2">
            Subject
          </label>
          <input
            className="border p-3 rounded-xl bg-transparent autofill:bg-transparent focus:bg-transparent focus:outline-none focus:ring-0"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formValues.subject}
            onChange={(e) => {
              setFormValues({ ...formValues, subject: e.target.value });
            }}
            required
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="message" className="mb-2">
            Message
          </label>
          <textarea
            className="border p-3 rounded-xl bg-transparent autofill:bg-transparent focus:bg-transparent focus:outline-none focus:ring-0"
            name="message"
            id="message"
            placeholder="Enter your message"
            value={formValues.message}
            onChange={(e) => {
              setFormValues({ ...formValues, message: e.target.value });
            }}
            required
          />
        </div>
        <input type="hidden" name="date" value={new Date().toLocaleString()} />
        <div className="flex flex-col items-center">
          {err ? (
            <p className="text-red-600 mb-4">Please Verify Captcha 😅</p>
          ) : null}
          {/* reCAPTCHA widget */}
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
            className="mb-4"
            onExpired={() => {
              setCaptchaVerified(false);
              console.log("Captcha expired");
            }}
          />

          <button
            type="submit"
            className="border-0 p-3 rounded-4xl w-full bg-[#4A187F] hover:bg-[#7e45ba] mb-4"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-500">Message sent successfully! 😁</p>
          )}
        </div>
      </div>
    </form>
  );
}
