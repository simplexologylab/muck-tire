export default function Hero({
  title,
  tagline,
  description,
  link_text,
  link_url,
}) {
  return (
    <div className="relative min-h-screen flex flex-col place-content-center ">
      <div className="absolute inset-0 bg-topography-pattern animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-t from-white" />
      <div className="relative font-primary text-5xl m-4 md:text-8xl text-center">
        {title}
      </div>
      <div className="relative font-mono text-2xl md:text-4xl text-center mt-3">
        {tagline}
      </div>
      <div className="relative font-mono mt-4 flex flex-col items-center space-y-10">
        <p className="max-w-2xl text-xl md:text-2xl px-20 text-center">
          {description}
        </p>
        <a
          className="relative bg-white font-primary drop-shadow-xl border-brand border-4 hover:bg-black hover:text-white transform hover:scale-125 "
          href={link_url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="  flex flex-col gap-4  p-4 ">
            <p className="text-xl">{link_text}</p>
            <img
              width="36"
              height="36"
              alt="Youtube Icon"
              src={"/youtube.svg"}
            />
          </div>
        </a>
        <div className="p-10">
          <svg
            className="animate-bounce w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
