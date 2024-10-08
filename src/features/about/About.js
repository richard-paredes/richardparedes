import Image from "next/image";

export const About = () => {
  return (
    <div className="contents">
      <h2 className="text-xl md:text-2xl w-full mb-5 md:mb-10 special-text-colored">
        about me
      </h2>
      <div className="rounded-lg w-full flex flex-col xl:flex-row overflow-auto sm:mx-auto md:mx-0 md:w-full">
        <div className="z-0 relative w-full my-auto px-5">
          <Image
            alt="Richard Paredes"
            src="/images/me.png"
            width="1000"
            height="1000"
            className="rounded-md object-contain"
          />
        </div>
        <div className="flex flex-col container md:px-4 text-grayscaled my-5 xl:my-0">
          <p className="text-body mb-5 md:mb-10">
            Hi-ya! My name is Richard and I&apos;m passionate about developing
            web applications. My journey into software development began back
            when I was a wee lad trying to install mods for my favorite game,{" "}
            <a
              href="https://thewitcher.com/en/witcher3"
              target="_blank"
              className="hyperlink"
            >
              The Witcher 3: Wild Hunt
            </a>
            . After many manual script merge attempts and corrupted game saves,
            I realized I really enjoy digging deep and working with computers to
            make magical things happen.
          </p>
          <p className="text-body mb-5 md:mb-10">
            Since then, I&apos;ve expanded my knowledge through various avenues:
            a{" "}
            <a
              href="https://redlabs.uh.edu"
              target="_blank"
              className="hyperlink"
            >
              start-up accelerator program for students
            </a>
            ,{" "}
            <a
              href="https://cougarcs.com/"
              target="_blank"
              className="hyperlink"
            >
              student organizations
            </a>
            , and, of course,{" "}
            <a
              href="https://github.com/richard-paredes/"
              target="_blank"
              className="hyperlink"
            >
              personal projects
            </a>
            . My previous experience includes developing RESTful APIs and
            friendly interfaces for complex user management over at{" "}
            <a
              href="https://www.hcss.com/"
              target="_blank"
              className="hyperlink"
            >
              HCSS
            </a>
            . Currently, I am honing my skills as a Software Engineer II at
            JPMorgan Chase, developing investment banking tools for internal
            users, built using .NET, Python, React, and AWS.
          </p>
          <p className="text-body mb-2 md:mb-5">
            Here are some technologies I&apos;ve picked up along the way:
          </p>
          <div className="flex text-black text-xs md:text-sm dark:text-white flex-wrap rounded-md">
            <span className="pill">Git</span>
            <span className="pill">C#</span>
            <span className="pill">TypeScript</span>
            <span className="pill">Python</span>
            <span className="pill">ASP.NET</span>
            <span className="pill">Node.JS</span>
            <span className="pill">React</span>
            <span className="pill">CSS</span>
            <span className="pill">Next.JS</span>
            <span className="pill">SQL Server</span>
            <span className="pill">MySQL</span>
            <span className="pill">DynamoDB</span>
            <span className="pill">Docker</span>
            <span className="pill">Kafka</span>
            <span className="pill">DataDog</span>
            <span className="pill">Amazon Web Services</span>
            <span className="pill">Microsoft Azure</span>
          </div>
        </div>
      </div>
    </div>
  );
};
