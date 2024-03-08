export default function NotFound() {
  const otherPage = [
    { name: "Home", href: "" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];
  return (
    <div className="py-4 flex flex-col xl:flex-row justify-around">
      <div className="flex flex-col tracking-wider space-y-10 p-4">
        <span className="uppercase tracking-widest font-semibold text-7xl">
          404 Not Found
        </span>
      </div>
      <div className="py-8 flex flex-col text-8xl space-y-4 justify-center">
        <span
          onClick={() => {
            window.history.go(-1);
          }}
          className="w-max font-custom page-nav cursor-pointer"
        >
          Back
        </span>
      </div>
    </div>
  );
}
