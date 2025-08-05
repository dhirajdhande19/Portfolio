export default function Tab({ ele, para, link, onClick }) {
  return (
    <div className="flex gap-5 mb-3 pl-2">
      {ele}
      <a
        href={link}
        onClick={onClick}
        className="bg-[#7135B2] transition-transform  duration-250 ease-in-out hover:bg-[#ab5dffe3] h-[1.7rem] w-[10rem] text-center items-center rounded-2xl"
      >
        {para}
      </a>
    </div>
  );
}
