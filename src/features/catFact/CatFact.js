import { Heart } from "@/components/Icons";
import { getCatFact } from "@/services/catFacts";

export const CatFact = async () => {
  // const catFact = await getCatFact();
  const catFact = "";
  return (
    <div className="mb-10 lg:mb-0">
      <a
        href="https://github.com/richard-paredes/richardparedes"
        target="_blank"
        className="p-4 hover-text-colored"
      >
        Developed with lots of <Heart className={"inline text-colored "} /> by
        yours truly.
      </a>
      <div className="my-2">{catFact}</div>
    </div>
  );
};
