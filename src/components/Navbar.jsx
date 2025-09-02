import React from "react";
import { navLinks } from "../../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  // navTween.fromTo("nav", { backgroundColor: "transparent" }, {});
  return (
    <nav>
      <div className="w-[80%] mx-auto">
        <a href="#home" className="flex items-center gap-2">
          <p className="flex justify-items gap-2">Velvet Pour</p>
          <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
