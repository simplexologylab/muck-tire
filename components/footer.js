export default function Footer() {
  const socials = [
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCWiZL60s0p5gPz7ldnf6iMg",
      url: "/youtube.svg",
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com",
      url: "/twitter.svg",
    },
  ];

  return (
    <div className="bg-black px-10 z-30">
      <div className="flex flex-col items-center mb-6 lg:mb-0">
        <h2 className="text-xl md:text-3xl font-primary title-font m-2 text-white">
          © {new Date().getFullYear()} Muck & Tire
        </h2>
        <div className="text-white flex flex-row">
          {socials.map(({ name, link, url }) => (
            <div key={name} className="p-2">
              <a href={link} target="_blank" rel="noreferrer">
                <img width="24" height="24" alt="Twitter Icon" src={url} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
