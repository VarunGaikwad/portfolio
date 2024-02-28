import Menu from "../components/Menu";
import triangle from "../assets/triangle.svg";

export default function About() {
  const myLinks = [
    { name: "Instagram", link: "https://www.instagram.com/preapexis/" },
    { name: "Linkedin", link: "https://www.linkedin.com/in/varun-gaikwad/" },
    { name: "Email", link: "mailto:gaikwadvarun23@gmail.com" },
    {
      name: "Resume",
      link: "https://raw.githubusercontent.com/VarunGaikwad/VarunGaikwad/master/Varun_Gaikwad_Resume.pdf",
    },
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row mx-4 md:mx-8 lg:mx-16 pt-4 md:pt-8">
        <div className="md:w-2/3 md:pr-4">
          <div className="mb-4 flex items-center">
            <div className="w-6 h-6 bg-blue-500 rounded-md mr-4"></div>
            <div className="text-base md:text-lg lg:text-3xl font-semibold">
              I&apos;m Varun Gaikwad, a full-stack web developer.
            </div>
          </div>
          <div className="text-sm md:text-base lg:text-xl">
            Hey there, I&apos;m Varun Gaikwad, a full-stack web developer
            specializing in both front end [🖼️] and back end [➿] development. I
            have a passion for creating seamless and delightful user experiences
            across the entire web ecosystem. I particularly enjoy working on
            design operations and systems that help bring order to complexity,
            whether it&apos;s refining the user interface on the front end or
            optimizing the functionality and performance on the back end.
          </div>
          <div className="mt-4 text-sm md:text-base lg:text-xl">
            When I&apos;m not developing, you can find me enjoying Chess,
            Badminton or Pokémon. Thanks for stopping by my portfolio!
          </div>
        </div>
        <div className="md:w-1/3 md:pl-4">
          <div className="flex flex-row space-x-8 md:flex-col md:space-x-0">
            <Menu
              title="What I like"
              menu={[
                { name: "Chess ♟️" },
                { name: "Badminton 🏸" },
                { name: "Age of Empire IV 🏰" },
                { name: "Pokémon Ϟ(๑⚈ ․̫ ⚈๑)⋆" },
              ]}
            />
            <Menu
              title="What I'm Learning"
              menu={[
                { name: "Cooking 🍳" },
                { name: "日本語 🈂️" },
                { name: "Rust 🦀" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12 mx-4 md:mx-8 lg:mx-16 ">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img width={24} height={24} src={triangle} className="mr-4" />
            <div className="text-base md:text-lg lg:text-3xl font-semibold">
              Contact
            </div>
          </div>
          <div className="ml-10 flex flex-row pt-2">
            {myLinks.map(({ name, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                download={name.endsWith(".pdf") ? name : undefined}
                rel="noopener noreferrer"
              >
                <div className="mr-4 text-sm md:text-base lg:text-xl hover:text-blue-500 cursor-pointer transition duration-300">
                  {name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
