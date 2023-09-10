import { RightChevron } from "@/components/Icons";
import { Tabs, TabContent } from "@/components/Tabs";

export const Experience = () => {
  return (
    <div className="my-auto">
      <h2 className="text-xl md:text-2xl mb-5 md:mb-10 special-text-colored">
        places i&apos;ve worked
      </h2>
      <Tabs>
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
          <h3 className="text-body text-grayscaled">Sept. 2019 - Present</h3>
          <ul className="text-body text-grayscaled my-5">
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" /> Designed
              and developed web-based reporting tools, allowing customers track
              historical changes related to billing and better manage their
              users.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Collaborated with UI and UX teams to redesign the previous login
              page, and introduced React to replace the legacy Angular codebase.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" /> Elevated
              existing web APIs by incorporating versioning, standardized
              responses, unit test coverage, and RESTful standards.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Contributed in code reviews with team members and managed release
              and deployments using Microsoft Azure.
            </li>
          </ul>
        </TabContent>
        <TabContent label="UH">
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
              Participated in a entrepreneurship program, Pre-RED Labs, to
              kickstart a start-up focused on helping people with self-discovery
              through interactive games.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" /> Worked
              with a partner to flesh out interactive scenarios for use in
              analyzing players based on behaviors.
            </li>
            <li className="my-2">
              <RightChevron className="inline w-2 stroke-grayscaled" />{" "}
              Developed a primitive 3D game prototype in Unity with dialogue
              system and character animations.
            </li>
          </ul>
        </TabContent>
        <TabContent label="UT">
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
