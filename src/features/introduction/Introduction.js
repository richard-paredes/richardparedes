export const Introduction = () => {
  return (
    <div className="rounded-lg flex flex-col my-auto text-grayscaled">
      <p className="text-xl md:text-2xl special-text-colored mb-5 md:mb-10">
        hello, world!
      </p>
      <h1 className="text-3xl md:text-5xl text-grayscaled my-2 md:my-5">
        I&apos;m <span className="font-bold">Richard Paredes</span>.
      </h1>
      <p className="text-2xl md:text-4xl">(-:</p>
      <p className="text-body my-4 md:my-10">
        I&apos;m a software engineer situated in Houston, Texas who loves to
        build applications for people. At the moment, I&apos;m a full-stack
        software developer at{" "}
        <a
          href="https://www.jpmorganchase.com/"
          target="_blank"
          className="hyperlink"
        >
          JPMorgan Chase & Co.
        </a>
        , creating robust and scalable software for the investment banking
        industry.
      </p>
      <p className="text-body my-4 mb-10">
        Looking for some help, or just want to chat? Feel free to reach out,
        I&apos;m always happy to make new friends.
      </p>
      <div className="text-body w-full align-self-end my-2 flex">
        <a href="mailto:richard.o.paredes@gmail.com" className="btn-colored">
          Contact me
        </a>
      </div>
    </div>
  );
};
