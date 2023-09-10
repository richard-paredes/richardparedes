export const Introduction = () => {
  return (
    <div className="rounded-lg flex flex-col my-auto text-grayscaled">
      <p className="text-xl md:text-2xl special-text-colored mb-5 md:mb-10">
        hello, world!
      </p>
      <h1 className="text-3xl md:text-5xl text-grayscaled my-2 md:my-5">
        I'm <span className="font-bold">Richard Paredes</span>.
      </h1>
      <p className="text-2xl md:text-4xl">(-:</p>
      <p className="text-body my-4 md:my-10">
        I'm a software engineer situated in Houston, Texas who loves to build
        applications for people. At the moment, I'm a full-stack web developer
        at{" "}
        <a href="https://www.hcss.com/" target="_blank" className="hyperlink">
          HCSS
        </a>
        , creating robust and scalable software for the construction industry.
      </p>
      <p className="text-body my-4 mb-10">
        Looking for some help, or just want to chat? Feel free to reach out, I'm
        always happy to make new friends.
      </p>
      <div className="text-body w-full align-self-end my-2 flex">
        <a href="mailto:richard.o.paredes@gmail.com" className="btn-colored">
          Contact me
        </a>
      </div>
    </div>
  );
};
