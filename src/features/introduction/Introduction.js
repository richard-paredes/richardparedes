export const Introduction = () => {
  return (
    <div className="p-10 border border-black border-b-4 border-r-4 bg-white my-auto">
      <p className="text-2xl text-[#66615e] font-bold border-b-4 self-baseline mb-10">
        hello, world!
      </p>
      <h1 className="text-3xl lg:text-5xl text-grayscaled my-2 lg:my-5">
        I&apos;m <span className="font-bold text-red-900">Richard Paredes</span>
        .
      </h1>
      <p className="text-2xl lg:text-4xl">(-:</p>
      <p className="text-body my-4 lg:my-10">
        I&apos;m a software engineer situated in Houston, Texas who loves to
        build applications for people. At the moment, I&apos;m a full-stack
        software developer at{" "}
        <a href="https://www.citi.com/" target="_blank" className="hyperlink">
          Citi
        </a>
        , creating robust and scalable software for the commodities trading
        industry.
      </p>
      <p className="text-body my-4 mb-10">
        Looking for some help, or just want to chat? Feel free to reach out,
        I&apos;m always happy to make new friends.
      </p>
      <div className="text-body w-full align-self-end my-2 flex">
        <a
          href="mailto:richard.o.paredes@gmail.com"
          className="mx-2 py-2 px-2 block
          bg-[#c9c8c7]
          rounded border-2 border-b-4 border-r-3 border-l-black/25 border-t-black/25 border-r-black border-b-black 
          hover:font-semibold hover:bg-[#c9c8c7]/50"
        >
          Contact me
        </a>
      </div>
    </div>
  );
};
