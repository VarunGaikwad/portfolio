export default function ContactPage() {
  const contactLink = [
    {
      name: "LinkedIn",
      hasPathName: ["/"],
      mobileName: "LI",
      href: "https://www.linkedin.com/in/varun-gaikwad/",
    },
    {
      name: "GitHub",
      hasPathName: ["/"],
      mobileName: "GH",
      href: "https://github.com/VarunGaikwad",
    },
    {
      name: "Instagram",
      hasPathName: ["/"],
      mobileName: "IG",
      href: "https://www.instagram.com/preapexis/",
    },
    {
      name: "Facebook",
      hasPathName: ["/"],
      mobileName: "FB",
      href: "https://www.facebook.com/gaikwadvarun23",
    },
    {
      name: "Twitter",
      hasPathName: ["/"],
      mobileName: "TW",
      href: "https://twitter.com/preapexis",
    },
  ];
  return (
    <div className="py-4 flex flex-col xl:flex-row justify-around">
      <div className="flex flex-col xl:p-32">
        <span className="capitalize text-9xl font-custom tracking-widest">
          Hello.
        </span>
        <br />
        <span>Need my help? You can get in touch with me.</span>
        <br />
        <div>
          <span>Email&nbsp;:&nbsp;</span>
          <a target="_blank" href="mailto:gaikwadvarun23@gmail.com">
            gaikwadvarun23@gmail.com
          </a>
        </div>
        <br />
        <div>
          <span>On Internet&nbsp;:&nbsp;</span>
          {contactLink.map(({ name, href }, idx) => (
            <span key={idx}>
              <a target="_blank" href={href}>
                {name}
              </a>
              {idx !== contactLink.length - 1 && <span>&nbsp;/&nbsp;</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
