export default function About({ tagline, description }) {
  return (
    <div className="relative min-h-screen flex flex-col place-content-center px-10">
      <div className="absolute inset-0 bg-topography-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-white" />
      <div className="relative flex flex-col items-center mb-6 lg:mb-0">
        <h2 className="sm:text-4xl text-5xl font-primary title-font mb-2 text-gray-900">
          {tagline}
        </h2>
        <div className="h-1 w-20 m-2 bg-tertiary rounded"></div>
        <p className="md:w-2/3">
          {description}
        </p>
      </div>
    </div>
  );
}
