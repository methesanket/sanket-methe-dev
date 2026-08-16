import { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML & CSS",
  "Python",
  "Java",
  "SQL",
  "Git & GitHub",
  "Software Testing",
  "AI / ML",
];

const projects = [
  {
    number: "01",
    title: "Client Web Experiences",
    description:
      "Responsive and modern websites built for real clients with practical integrations and polished user experiences.",
    tags: ["React", "UI/UX", "Web Development"],
  },
  {
    number: "02",
    title: "AI-Powered Daily Assistant",
    description:
      "A real-time web application concept designed to help people solve everyday problems using AI.",
    tags: ["AI", "Web App", "Real-time"],
  },
  {
    number: "03",
    title: "Developer Portfolio",
    description:
      "A cinematic developer portfolio designed around motion, interaction, depth and responsive experiences.",
    tags: ["TypeScript", "GSAP", "Three.js"],
  },
];

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-kicker", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-title span", {
        y: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.15,
      });

      gsap.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "power3.out",
      });

      gsap.from(".hero-arrow", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: "back.out(1.7)",
      });

      gsap.to(".orb1", {
        x: 80,
        y: -40,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb2", {
        x: -60,
        y: 50,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="site" ref={heroRef}>
      <div className="stars" />
      <div className="grid-glow" />

      <nav>
        <a className="logo" href="#">
          SM<span>.</span>
        </a>

        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="orb orb1" />
          <div className="orb orb2" />

          <div className="hero-line" />

          <p className="hero-kicker">
            FULL STACK DEVELOPER <span>·</span> BSC IT <span>·</span> 2026
          </p>

          <h1 className="hero-title">
            <span>SANKET</span>
            <span className="outline">METHE</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              Building digital experiences that feel <i>alive.</i>
            </p>

            <a className="circle hero-arrow" href="#work">
              ↓
            </a>
          </div>

          <div className="hero-status">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>
        </section>

        <section id="about" className="section">
          <p className="label">01 — ABOUT</p>

          <div className="aboutgrid">
            <h2>
              I turn ideas into <em>useful</em> digital experiences.
            </h2>

            <div>
              <p>
                I'm Sanket Methe, a BSc IT student and aspiring developer
                focused on full-stack web development, software testing and
                practical technology.
              </p>

              <p>
                I've built websites for clients and completed a Full Stack
                Development internship with Prodigy. I'm currently looking
                for opportunities where I can learn fast, solve problems and
                build things that matter.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="section work">
          <p className="label">02 — SELECTED WORK</p>

          {projects.map((project) => (
            <article className="project" key={project.number}>
              <span className="project-number">{project.number}</span>

              <div>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <b key={tag}>{tag}</b>
                  ))}
                </div>
              </div>

              <span className="arrow">↗</span>
            </article>
          ))}
        </section>

        <section id="skills" className="section">
          <p className="label">03 — TOOLKIT</p>

          <h2 className="big">
            Skills I use to <em>build.</em>
          </h2>

          <div className="skills">
            {skills.map((skill, index) => (
              <div key={skill}>
                <small>
                  {String(index + 1).padStart(2, "0")}
                </small>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="label">04 — CONTACT</p>

          <h2>
            Let's build
            <br />
            <em>something.</em>
          </h2>

          <a
            className="email"
            href="mailto:sanket.methe@example.com"
          >
            sanket.methe@example.com ↗
          </a>

          <div className="social">
            <a
              href="https://github.com/methesanket"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="#">Resume</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Sanket Methe</span>
        <span>DESIGNED & BUILT WITH INTENTION</span>
      </footer>
    </div>
  );
}