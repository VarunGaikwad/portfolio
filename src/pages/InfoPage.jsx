export default function InfoPage() {
  const otherPage = [
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];
  return (
    <div className="flex-grow flex flex-col xl:flex-row justify-around">
      <div className="flex flex-col tracking-wider space-y-10 xl:justify-end xl:p-4">
        <span className="uppercase tracking-widest font-semibold">
          Varun Gaikwad
        </span>
        <span>
          Product Designer / Frontend Developer / Fullstack Developer.
        </span>
        <span>
          Currently working full-time as a <q>Senior Technical Consultant</q> at{" "}
          <a
            href={"https://initiumdigital.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Initium Digital
          </a>
        </span>
      </div>
      <div className="flex flex-col text-8xl space-y-4 justify-center">
        {otherPage.map(({ name, href }, idx) => (
          <span
            onClick={() => {
              let param = new URLSearchParams();
              param.set("page", href);
              window.location.href += "?" + param.toString();
            }}
            className="w-max font-custom page-nav cursor-pointer"
            key={idx}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
