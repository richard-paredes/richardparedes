import Image from "next/image";

export const About = () => {
  return (
    <div className="p-10 border border-black border-b-4 border-r-4 bg-white">
      <h2 className="text-2xl text-[#66615e] font-bold border-b-4 self-baseline mb-10">
        about me
      </h2>
      <div className="w-full flex flex-col xl:flex-row overflow-auto sm:mx-auto md:mx-0 md:w-full">
        <div className="z-0 relative container-xs my-auto px-5">
          <Image
            alt="Richard Paredes"
            src="/images/me.png"
            width="1000"
            height="1000"
            className="border-2 border-black border-b-6 border-r-4 object-contain"
          />
        </div>
        <div className="p-4 flex flex-col container md:px-4 text-grayscaled my-5 xl:my-0">
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
            Citi, developing risk-analysis tools for Commodity traders, using
            .NET, Python, & React.
          </p>
          <p className="text-body mb-2 md:mb-5">
            Here are some technologies I&apos;ve picked up along the way:
          </p>
          <div className="flex gap-x-4 gap-y-2 underline font-semibold text-[#949392] text-xs md:text-sm flex-wrap rounded-md uppercase">
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
            <span className="pill">RedHat OpenShift</span>
          </div>
        </div>
      </div>
    </div>
  );
};
