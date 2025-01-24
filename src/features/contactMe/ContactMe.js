export const ContactMe = () => {
  return (
    <div className="rounded-lg flex flex-col my-auto text-grayscaled md:w-2/3">
      <h2 className="text-2xl text-[#66615e] font-bold border-b-4 self-baseline mb-10">
        let&apos;s talk
      </h2>
      <div className="">
        <p className="text-body mb-10">
          So, you&apos;ve got to know a bit about me. Let me get to know you! I
          enjoy talking about virtually anything, especially tech-related
          goodies. If you have a project you want me to help with, reach out to
          me and I&apos;ll get back to you as soon as possible.
        </p>
        <div className="text-body w-full align-self-end flex">
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
    </div>
  );
};
