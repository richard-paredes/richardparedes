import Image from "next/image";

export const About = () => {
  return (
    <div className="p-10 border border-black border-b-4 border-r-4 bg-white">
      <h2 className="text-2xl text-[#66615e] font-bold border-b-4 self-baseline mb-10">
        about me
      </h2>
      <div className="w-full flex flex-col xl:flex-row overflow-auto sm:mx-auto lg:mx-0 lg:w-full">
        <div className="z-0 relative container-xs my-auto px-5">
          <Image
            alt="Richard Paredes"
            src="/images/me.png"
            width="1000"
            height="1000"
            className="border-2 border-black border-b-6 border-r-4 object-contain"
          />
        </div>
        <div className="p-4 flex flex-col container lg:px-4 text-grayscaled my-5 xl:my-0">
          <p className="text-body mb-5 lg:mb-10">
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
          <p className="text-body mb-5 lg:mb-10">
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
            . Currently, I am honing my skills as a Assistant Vice President at
            Citi, developing risk-analysis tools for Commodity traders, using
            Python, .NET, & React.
          </p>
          <p className="text-body mb-2 lg:mb-5">
            Here are some technologies I&apos;ve picked up along the way:
          </p>
          <div className="flex gap-x-4 gap-y-2 font-semibold text-[#949392] text-xs lg:text-sm flex-wrap rounded-md uppercase">
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              Git
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              C#
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              TypeScript
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              Python
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              ASP.NET
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              Node.JS
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              React
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              CSS
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              Next.JS
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              SQL Server
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              MySQL
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              DynamoDB
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              Docker
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              Kafka
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              DataDog
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              Amazon Web Services
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              Microsoft Azure
            </span>
            <span className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100">
              RedHat OpenShift
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
