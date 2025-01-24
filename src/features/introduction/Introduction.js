export const Introduction = () => {
  return (
    <div className="rounded-lg flex flex-col my-auto text-grayscaled">
      <p className="text-2xl text-[#66615e] font-bold border-b-4 self-baseline mb-10">
        hello, world!
      </p>
      <h1 className="text-3xl md:text-5xl text-grayscaled my-2 md:my-5">
        I&apos;m <span className="font-bold text-red-900">Richard Paredes</span>
        .
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
