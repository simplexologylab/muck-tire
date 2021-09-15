import { MailIcon, HomeIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Contact({ title, tagline, description }) {
  const contacts = [
    {
      title: "Home Garage",
      link_text: "Caldwell, Ohio",
      link_url: "https://maps.google.com",
      icon: <HomeIcon className="h-12 w-12 text-brand" />,
    },
    {
      title: "Our Email",
      link_text: "info@muckandtire.com",
      link_url: "mailto: info@muckandtire.com",
      icon: <MailIcon className="h-12 w-12 text-brand" />,
    },
    {
      title: "Phone Number",
      link_text: "(740) 509-2514",
      link_url: "tel:740-509-2514",
      icon: <PhoneIcon className="h-12 w-12 text-brand" />,
    },
  ];
  return (
    <div className="bg-brand flex flex-col place-content-center p-20 font-mono">
      <div className="flex flex-col items-center mb-6 lg:mb-0">
        <h2 className="sm:text-4xl text-5xl font-primary title-font mb-2 text-gray-900">
          Contact Us
        </h2>
        <div className="h-1 w-20 m-2 bg-tertiary rounded"></div>
        {/* <p className="md:w-2/3">
          Contact us to learn more about how we may be able to help.{" "}
        </p> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4">
        {contacts.map(({ title, link_text, link_url, icon }) => (
          <a
            className="bg-tertiary flex rounded-md"
            href={link_url}
            target="_blank"
            rel="noreferrer"
            key={link_url}
          >
            <span className="flex relative items-center p-4">
              {icon}
            </span>
            <div className="bg-tertiary flex flex-col justify-center rounded py-4">
              <div className="text-xl text-white">{title}</div>
              <div className="text-l text-white">{link_text}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
