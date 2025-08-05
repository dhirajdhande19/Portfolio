export default function SocialTab({ img, link }) {
  return (
    <a
      href={link}
      className="border-2 rounded-xl p-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={img} width={35} />
    </a>
  );
}
