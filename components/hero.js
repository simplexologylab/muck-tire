export default function Hero({
  title,
  tagline,
  description,
  link_text,
  link_url,
}) {
  return (
    <div className="min-h-screen flex flex-col place-content-center">
      <div className="font-primary text-4xl m-4 md:text-6xl text-center">{title}</div>
      <div className="font-mono text-xl md:text-4xl text-center mt-3">{tagline}</div>
      <div className="mt-4 flex flex-col items-center space-y-10">
        <p className="max-w-2xl text-xl md:text-2xl px-20 text-center">
          {description}
        </p>
        <a href={link_url} target="_blank" rel="noreferrer">
          {link_text}
        </a>
        <div className="p-10">
          <svg
            className="animate-bounce w-6 h-6 ..."
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
