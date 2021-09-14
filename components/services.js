export default function Services() {
  const services = [
    {
      title: "Trail Media",
      description:
        "High quality media for you to use for marketing how awesome your trails are.",
    },
    {
      title: "Trail Stats",
      description:
        "Sensor data reports that you can use to gauge trail difficulty and inform customers.",
    },
    {
      title: "Aerial Maps",
      description: "Aerial maps that you can provide to your riders to take with them out on the trails.",
    },
    {
      title: "Website Development",
      description:
        "Don't have a website, no problem. We can help you get started or help incorporate information into your existing site.",
    },
    {
      title: "Social Media Strategy",
      description:
        "We can help you get out in front of your riders when they aren't out on your trails.",
    },
  ];

  return (
    <div className="flex flex-col content-center px-10">
      <div className="flex flex-col items-center mb-6 lg:mb-0">
        <h2 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
          Services
        </h2>
        <div className="h-1 w-20 m-2 bg-tertiary rounded"></div>
        <p className="md:w-2/3">
          Leverage the expertise of our digital media team to increase the
          amount of tires hitting your trails. From digital media production,
          website development, social media engagement, and so much more; custom
          fit to your needs!
        </p>
      </div>
      <div className="flex flex-wrap m-4">
        {services.map(({ title, description }) => (
          <div key={title} className="p-4 md:w-1/2 w-auto">
            <div className="flex rounded-lg h-full bg-secondary p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  {title}{" "}
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base text-white">
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
