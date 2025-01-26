import { RightChevron } from "@/components/Icons";
import { Tabs, TabContent } from "@/components/Tabs";

export const Experience = () => {
  return (
    <div className="p-10 border border-black border-b-4 border-r-4 bg-white my-auto">
      <h2 className="text-2xl text-[#66615e] font-bold border-b-4 self-baseline mb-10">
        places i&apos;ve worked
      </h2>
      <Tabs>
        <TabContent label="Citi">
          <h2 className="text-base md:text-lg font-semibold text-grayscaled">
            Assistant Vice President (Software Engineer III) at{" "}
            <a
              href="https://www.citi.com/"
              target="_blank"
              className="hyperlink"
            >
              Citi
            </a>
          </h2>
          <h3 className="text-body text-grayscaled">December 2024 - Present</h3>
          <ul className="text-body text-grayscaled my-5">
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" /> Designed
              and developed a web-based regression tool using React, Ag-Grid,
              and Flask to identify and report discrepancies in quant library
              updates, ensuring data integrity and accuracy.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Developed desktop and web-based tools using Python and Flask for
              risk forecasting, PnL calculations, and report generation,
              providing traders with actionable insights.
            </li>
          </ul>
        </TabContent>
        <TabContent label="JPMorgan Chase">
          <h2 className="text-base md:text-lg font-semibold text-grayscaled">
            Software Engineer II at{" "}
            <a
              href="https://www.jpmorganchase.com/"
              target="_blank"
              className="hyperlink"
            >
              JPMorgan Chase & Co.
            </a>
          </h2>
          <h3 className="text-body text-grayscaled">
            April 2022 - November 2024
          </h3>
          <ul className="text-body text-grayscaled my-5">
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" /> Designed
              and developed web-based investment banking tools, enabling
              internal users to efficiently manage and track client data.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Modernized a web application from .NET Core 3.1 to .NET 8, MySQL,
              DynamoDB, SQS, S3, ASP.NET, and React. Built using microservices
              architecture, deployed with AWS ECS Fargate, and provisioned via
              Terraform.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Developed a data pipeline for ingesting and processing foreign
              exchange spot and forward rates for index calculations using AWS
              S3, AWS Glue, Python, and PostgreSQL.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Onboarded and mentored three engineers, including remote team
              members in the UK, ensuring effective collaboration across time
              zones and delivering high-quality software.
            </li>
          </ul>
        </TabContent>
        <TabContent label="HCSS">
          <h2 className="text-base md:text-lg font-semibold text-grayscaled">
            Software Developer at{" "}
            <a
              href="https://www.hcss.com/"
              target="_blank"
              className="hyperlink"
            >
              Heavy Construction System Specialists, Inc.
            </a>
          </h2>
          <h3 className="text-body text-grayscaled">Sept. 2019 - April 2022</h3>
          <ul className="text-body text-grayscaled my-5">
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" /> Designed
              and built web-based reporting tools enabling customers to track
              billing history and manage user subscriptions with ease.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Redesigned the login page in collaboration with UI/UX teams,
              replacing the legacy Razor pages and Angular codebase with React
              for improved performance and maintainability.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" /> Enhanced
              web APIs by implementing versioning, standardized responses,
              RESTful best practices, and comprehensive unit test coverage.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Conducted code reviews and managed releases and deployments using
              Microsoft Azure, ensuring code quality and stability.
            </li>
          </ul>
        </TabContent>
        <TabContent label="University of Houston">
          <h2 className="text-base md:text-lg font-semibold text-grayscaled">
            Game Developer at{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/company/uhredlabs"
              className="hyperlink"
            >
              Univeristy of Houston
            </a>
          </h2>
          <h3 className="text-body text-grayscaled">Summer 2019</h3>
          <ul className="text-body text-grayscaled my-5">
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Participated in the Pre-RED Labs entrepreneurship program,
              developing a startup concept centered on self-discovery through
              psychologically driven interactive games.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Collaborated with a partner to design interactive scenarios for
              analyzing player behavior through in-game decision-making.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Developed a 3D game prototype in Unity, implementing a dialogue
              system and character animations.
            </li>
          </ul>
        </TabContent>
        <TabContent label="University of Texas at Austin">
          <h2 className="text-base md:text-lg font-semibold text-grayscaled">
            Undergraduate Research Mentor at{" "}
            <a
              href="https://cns.utexas.edu/fri/students/next-steps/peer-mentoring-program"
              className="hyperlink"
            >
              University of Texas at Austin
            </a>
          </h2>
          <h3 className="text-body text-grayscaled">Jan. 2017 - Dec. 2018</h3>
          <ul className="text-body text-grayscaled my-5">
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Conducted research focused on exploring methods to induce novel
              antibiotic production by{" "}
              <span className="italic">Streptomyces</span>.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Performed thin-layer chromatography, organic extractions,
              Kirby-Bauer disk diffusions and many other techniques to analyze
              bacteria metabolites.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Supervised seminars to help onboard incoming freshman by teaching
              common biochemical lab techniques.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" /> Engaged
              with students in exploring and conducting independent research.
            </li>
          </ul>
        </TabContent>
      </Tabs>
    </div>
  );
};
