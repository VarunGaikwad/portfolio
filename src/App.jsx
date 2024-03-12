import AboutPage from "./pages/AboutPage";
import InfoPage from "./pages/InfoPage";
import ReUsePage from "./components/ReUsePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

export default function App() {
  const animationArray = ["zoom-in", "slide-out", "slide-in"],
    animateClass =
      animationArray[Math.floor(Math.random() * animationArray.length)],
    { href, search } = window.location,
    param = new URLSearchParams(search),
    page = param.get("page"),
    allNavLink = [
      {
        name: "LinkedIn",
        hasRef: "",
        mobileName: "LI",
        href: "https://www.linkedin.com/in/varun-gaikwad/",
      },
      {
        name: "GitHub",
        hasRef: "",
        mobileName: "GH",
        href: "https://github.com/VarunGaikwad",
      },
      {
        name: "Instagram",
        hasRef: "",
        mobileName: "IG",
        href: "https://www.instagram.com/preapexis/",
      },
      {
        name: "Facebook",
        hasRef: "",
        mobileName: "FB",
        href: "https://www.facebook.com/gaikwadvarun23",
      },
      {
        name: "Twitter",
        hasRef: "",
        mobileName: "TW",
        href: "https://twitter.com/preapexis",
      },
      {
        name: "Home",
        hasRef: "other",
        mobileName: "HOME",
        href: href.indexOf("github") > -1 ? "/portfolio/" : "/",
      },
    ].filter(({ hasRef }) => {
      if (page === null) {
        return hasRef === "";
      } else return hasRef !== "";
    }),
    content =
      page === null ? (
        <InfoPage />
      ) : page === "about" ? (
        <AboutPage />
      ) : page === "contact" ? (
        <ContactPage />
      ) : (
        <NotFound />
      );

  return (
    <div className={animateClass}>
      <ReUsePage navbarLink={allNavLink}>{content}</ReUsePage>
    </div>
  );
}
