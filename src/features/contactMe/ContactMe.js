export const ContactMe = () => {
  return (
    <div className="rounded-lg flex flex-col my-auto text-grayscaled md:w-2/3">
      <h2 className="text-xl md:text-2xl special-text-colored mb-5 md:mb-10">
        let's talk
      </h2>
      <div className="">
        <p className="text-body mb-10">
          So, you've got to know a bit about me. Let me get to know you! I enjoy
          talking about virtually anything, especially tech-related goodies. If
          you have a project you want me to help with, reach out to me and I'll
          get back to you as soon as possible.
        </p>
        <div className="text-body w-full align-self-end flex">
          <a href="mailto:richard.o.paredes@gmail.com" className="btn-colored">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};
