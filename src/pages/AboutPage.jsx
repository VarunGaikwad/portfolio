export default function AboutPage() {
  return (
    <div className="flex flex-col xl:flex-row py-4">
      <div className="flex-grow flex flex-col tracking-wide xl:justify-start xl:p-4">
        <span className="capitalize tracking-widest font-semibold text-8xl font-custom">
          About
        </span>
        <br />
        <span className="text-3xl font-custom">
          I&apos;m Varun Gaikwad. A designer and problem solver.
        </span>
        <br />
        <span>
          In the realm of digital design and user experience, there exists a
          fervent passion within me to craft experiences that transcend mere
          functionality, aiming instead for seamlessness and delight. With a
          keen eye for detail and an innate drive for innovation, I am drawn to
          the challenge of navigating the intricate web ecosystem, where every
          interaction holds the potential for enhancement.
        </span>
        <br />
        <span>
          My focus lies not only in the superficial aesthetics of user
          interfaces but extends deeper into the realm of design operations and
          systems. Here, I thrive in bringing order to the inherent complexity
          of digital landscapes, devising strategies and frameworks that
          streamline processes and elevate user engagement. Whether it&apos;s
          refining the visual appeal and accessibility of front-end interfaces
          or optimizing the functionality and performance of back-end systems, I
          am fueled by the pursuit of excellence in every aspect of the user
          experience journey.
        </span>
        <br />
        <span>
          In my work, I find fulfillment in the harmonious fusion of creativity
          and functionality, where every design decision is meticulously crafted
          to resonate with users on a profound level. I believe in the
          transformative power of design to not only facilitate interactions but
          to evoke emotions, foster connections, and ultimately, enrich lives.
          Through a combination of empathy, innovation, and relentless
          dedication, I strive to push the boundaries of possibility and
          redefine the standards of user experience excellence in the digital
          age.
        </span>
        <br />
        <blockquote>
          <p className="font-custom text-2xl">
            It&apos;s not that I&apos;m so smart, it&apos;s just that I stay
            with problems longer.
          </p>
        </blockquote>
        <a
          download="Varun_Gaikwad_Resume.pdf"
          href="https://github.com/VarunGaikwad/VarunGaikwad/raw/master/Varun_Gaikwad_Resume.pdf"
          className="pt-3"
        >
          <button className="bg-black p-2 rounded-full text-white font-custom tracking-wide w-36 button-width-animation">
            My Résumé
          </button>
        </a>
      </div>
    </div>
  );
}
