import AboutPage from "./pages/AboutPage";
import InfoPage from "./pages/InfoPage";
import ReUsePage from "./components/ReUsePage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const animationArray = ["zoom-in", "slide-out", "slide-in"],
    animateClass =
      animationArray[Math.floor(Math.random() * animationArray.length)],
    { pathname } = window.location,
    allNavLink = [
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
      {
        name: "Home",
        hasPathName: ["/about", "/contact"],
        mobileName: "HOME",
        href: "/",
      },
    ].filter(({ hasPathName }) => hasPathName.indexOf(pathname) > -1),
    content =
      pathname === "/" ? (
        <InfoPage />
      ) : pathname === "/about" ? (
        <AboutPage />
      ) : pathname === "/contact" ? (
        <ContactPage />
      ) : (
        <></>
      );

  return (
    <div className={`${animateClass} h-max`}>
      <ReUsePage navbarLink={allNavLink}>{content}</ReUsePage>
    </div>
  );
}
