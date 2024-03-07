export default function InfoPage() {
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
    ],
    year = new Date().getFullYear(),
    otherPage = [{ name: "Work" }, { name: "About" }, { name: "Contact" }];

  return (
    <div>
      <div className="flex justify-evenly items-center">
        {socialLink.map(({ name, href, mobileName }, idx) => (
          <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
            <span className="hidden lg:inline">{name}</span>
            <span className="lg:hidden">{mobileName}</span>
          </a>
        ))}
        <div className="h-1 w-10 bg-black"></div>
        <div>©️/{year}</div>
      </div>
      <div>
        <div>
          <div>Varun Gaikwad</div>
          <div>
            <div>Product Designer / Frontend Developer.</div>
            <div>
              Currently working full-time as aSenior Technical Consultant at
              <a
                href={"https://initiumdigital.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Initium Digital
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>
            {otherPage.map(({ name }, idx) => (
              <div key={idx}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
