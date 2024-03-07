export default function NewHome() {
  const socialLink = [
    {
      name: "LinkedIn",
      mobileName: "LI",
      href: "https://www.linkedin.com/in/varun-gaikwad/",
    },
    {
      name: "GitHub",
      mobileName: "GH",
      href: "https://github.com/VarunGaikwad",
    },
    {
      name: "Instagram",
      mobileName: "IG",
      href: "https://www.instagram.com/preapexis/",
    },
    {
      name: "Facebook",
      mobileName: "FB",
      href: "https://www.facebook.com/gaikwadvarun23",
    },
  ];
  const year = new Date().getFullYear();
  const otherPage = [{ name: "Work" }, { name: "About" }, { name: "Contact" }];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-page text-white">
      {/* Navbar */}
      <div className="w-full md:w-1/12 flex md:flex-col md:py-4 px-5 items-center justify-between select-none">
        {socialLink.map(({ name, href, mobileName }, idx) => (
          <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
            <div className="text-vert cursor-pointer hover:line-through py-2">
              <span className="hidden md:inline">{name}</span>
              <span className="inline md:hidden">{mobileName}</span>
            </div>
          </a>
        ))}
        <div className="md:w-px md:h-24 w-24 h-px bg-white text-vert my-2"></div>
        <div className="flex md:flex-col-reverse md:mt-auto py-2">
          <span className="copyright">©️/</span>
          <span className="text-vert">{year}</span>
        </div>
      </div>
      {/* Main */}
      <div className="h-full w-full flex flex-col lg:flex-row justify-evenly">
        <div className="w-full lg:w-2/5 flex flex-col justify-between py-10 lg:py-0 px-5 lg:px-10 tracking-wide">
          <div></div>
          <div></div>
          <div className="text-lg">
            <div className="uppercase font-semibold tracking-widest">
              Varun Gaikwad
            </div>
            <div className="pt-5 space-y-5">
              <div>Product Designer / Frontend Developer.</div>
              <div>
                Currently working full-time as a
                <q className="font-medium">Senior Technical Consultant</q> at
                <a
                  href={"https://initiumdigital.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cursor-pointer hover:line-through">
                    Initium Digital
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col justify-center px-5 lg:px-10">
          <div className="w-max">
            {otherPage.map(({ name }, idx) => (
              <div
                key={idx}
                className="uppercase text-6xl md:text-9xl cursor-pointer pb-5 lg:pb-10 font-custom"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
