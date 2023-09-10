import Image from "next/image";

import { Card } from "@/components/Cards";
import { GitHub } from "@/components/Icons/Logos";
import { BoxArrowUpRight } from "@/components/Icons";

export const Projects = () => {
  return (
    <div className="my-auto text-grayscaled">
      <h2 className="text-xl md:text-2xl mb-5 md:mb-10 special-text-colored">
        things i've built
      </h2>
      <div className="flex flex-col flex-wrap">
        <Card
          className="mb-12"
          heading={"Lyrical Listener"}
          description={
            "The days of manually searching for song lyrics are over. With this minimalistic web app, sing along to the lyrics of those awesome tunes on Spotify."
          }
          technologies={["React", "Chakra-UI", "ASP.NET", "Spotify API"]}
          links={[
            <a
              key={0}
              title="GitHub"
              target="_blank"
              href="https://github.com/richard-paredes/lyrical-listener"
              className="border-2 border-transparent p-1 cursor-pointer rounded-md stroke-grayscaled hover-stroke-colored my-1"
            >
              <GitHub className="w-5" />
            </a>,
            <a
              key={1}
              title="Lyrical Listener"
              target="_blank"
              href="https://lyrical-listener.azurewebsites.net/"
              className="border-2 border-transparent p-1 cursor-pointer rounded-md text-grayscaled hover-text-colored my-1"
            >
              <BoxArrowUpRight className="w-5" />
            </a>,
          ]}
          bgImageSrc={"/images/lyrical_listener.png"}
        />
        <Card
          className="my-12 mb-10 md:my-24"
          heading={"League of Legends Stats Tracker"}
          description={
            "Review some of your recent League of Legends gameplay statistics. Displays your rank status, as well as data visualizations for your last played match."
          }
          technologies={["React", "TailwindCSS", "Next.JS", "Riot Games API"]}
          links={[
            <a
              key={0}
              title="GitHub"
              target="_blank"
              href="https://github.com/richard-paredes/league-stats-tracker-v2"
              className="border-2 border-transparent p-1 cursor-pointer rounded-md stroke-grayscaled hover-stroke-colored my-1"
            >
              <GitHub className="w-5" />
            </a>,
            <a
              key={1}
              title="League Stats Tracker"
              target="_blank"
              href="https://league-stats-tracker-v2.vercel.app/"
              className="border-2 border-transparent p-1 cursor-pointer rounded-md text-grayscaled hover-text-colored my-1"
            >
              <BoxArrowUpRight className="w-5" />
            </a>,
          ]}
          bgImageSrc={"/images/league_stats_tracker.png"}
        />
        <div className="text-body text-center w-full align-self-end my-2 justify-center flex">
          <a
            href="https://github.com/richard-paredes/"
            target="_blank"
            className="btn-colored"
          >
            Check out my GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
