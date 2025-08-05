export default function LogoTab({ src, alt, name }) {
  return (
    <div className="w-30 h-25 flex flex-col justify-between items-center text-center bg-[#4A187F] rounded-2xl p-2">
      <img src={src} alt={name} width={65} />
      <p>{name}</p>
    </div>
  );
}
