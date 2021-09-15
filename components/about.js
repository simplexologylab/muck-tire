export default function About() {
  return (
    <div className="relative flex flex-col place-content-center p-10 md:p-20 font-mono">
      <div className="absolute inset-0 bg-topography-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-white" />
      <div className="relative flex flex-col items-center mb-6 lg:mb-0">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-primary title-font mb-2 text-gray-900">
          About Us
        </h2>
        <div className="h-2 w-20 m-4 bg-brand rounded"></div>
        <p className="text-center text-xl sm:text-2xl lg:text-4xl font-secondary">
          We exist to enhance offroad experiences to bring{" "}
          <code className="font-primary">muck</code> (mud) and riders together;
          one <code className="font-primary">tire</code> at a time.
        </p>
        <p className="text-center text-l sm:text-xl lg:text-2xl p-5">
          Fueled by our deep interests in going offroad and technology; we want
          to connect more people to the outdoors. As our world becomes more and
          more digital, we {`don't`} see it as picking sides but rather how can we
          blend the two to enhance the experience.{" "}
        </p>
      </div>
    </div>
  );
}
