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
      description: "Aerial maps that you can provide to your riders.",
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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full mb-8">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
              Services
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service) => (
            <div key={service.title} className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-indigo-500 p-8 flex-col">
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
                    {service.title}{" "}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    {service.description}
                  </p>
                  <ul className="p-6">
                    {service.items.map((item) => (
                      <li key={item} className="font-bold text-lg text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
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
    </section>
  );
}
