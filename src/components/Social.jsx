import SocialTab from "./SocialTab";

export default function Social() {
  return (
    <div className="p-6 border rounded-xl m-8">
      <div className="text-center mb-4">
        <h2>
          Find <span className="text-[#71189E] font-semibold text-xl">me</span>{" "}
          on
        </h2>
      </div>
      <div className="p-4 flex justify-evenly flex-wrap gap-5 mb-4">
        {
          // linkdin, github, leetcode, instagram these logos have been downloaded from IconScount -> https://iconscout.com/
        }
        <SocialTab
          img={"linkedin-social.svg"}
          link={"https://www.linkedin.com/in/dhiraj-dhande-1a7262237/"}
        />
        <SocialTab
          img={"github-social.svg"}
          link={"https://github.com/dhirajdhande19"}
        />
        <SocialTab
          img={"leetcode-social.svg"}
          link={"https://leetcode.com/u/dhirajdhande19/"}
        />
        <SocialTab img={"instagram-social.svg"} />
      </div>
      <div>
        <h3 className="text-center">
          Let's make the internet a little cooler{" "}
          <span className="text-[#71189E] font-semibold">together</span> 🚀
        </h3>
        <p className="text-center mt-6">
          Email: <span className="text-[#71189E]">dhirajdhande2@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
