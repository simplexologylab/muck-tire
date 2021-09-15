import {
  VideoCameraIcon,
  LocationMarkerIcon,
  GlobeIcon,
  CodeIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";

export default function Services() {
  const services = [
    {
      title: "Trail Media",
      description:
        "High quality media for you to use for marketing how awesome your trails are.",
      icon: <VideoCameraIcon className="h-8 w-8" />,
    },
    {
      title: "Trail Stats",
      description:
        "Sensor data reports that you can use to gauge trail difficulty and inform customers.",
      icon: <LocationMarkerIcon className="h-8 w-8" />,
    },
    {
      title: "Aerial Maps",
      description:
        "Aerial maps that you can provide to your riders to take with them out on the trails.",
      icon: <GlobeIcon className="h-8 w-8" />,
    },
    {
      title: "Website Development",
      description:
        "Don't have a website, no problem. We can help you get started or help incorporate information into your existing site.",
      icon: <CodeIcon className="h-8 w-8" />,
    },
    {
      title: "Social Media Strategy",
      description:
        "We can help you get out in front of your riders when they aren't out on your trails.",
      icon: <ThumbUpIcon className="h-8 w-8" />,
    },
  ];

  return (
    <div className="flex flex-col content-center px-10 font-mono">
      <div className="flex flex-col items-center mb-6 lg:mb-0">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-primary title-font mb-2 text-gray-900">
          Our Services
        </h2>
        <div className="h-2 w-20 m-4 bg-brand rounded"></div>
        <p className="text-center text-l sm:text-xl lg:text-2xl p-5">
          Leverage the expertise of our digital media team to increase the
          amount of tires hitting your trails. From digital media production,
          website development, social media engagement, and so much more.
        </p>
        <p className="font-secondary text-xl">Custom fit to your needs.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:m-8">
        {services.map(({ title, description, icon }) => (
          <div key={title} className="p-4">
            <div className="flex rounded-lg h-full bg-secondary p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                  {icon}
                </div>
                <h2 className="text-white text-2xl title-font font-medium">
                  {title}{" "}
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-l text-white">
                  {description}
                </p>
                {/* <a
                      href=""
                      className="mt-3 text-indigo-800 hover:text-gray-900 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
