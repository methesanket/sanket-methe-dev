import { useEffect } from "react";
import gsap from "gsap";
import SpaceBackground from "./SpaceBackground";

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
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(".mission-label", {
          opacity: 0,
          y: 20,
          duration: 0.6,
        })
        .from(
          ".hero-title span",
          {
            opacity: 0,
            y: 100,
            stagger: 0.12,
            duration: 1,
            ease: "power4.out",
          },
          "-=.2"
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=.4"
        )
        .from(
          ".mission-data",
          {
            opacity: 0,
            x: -20,
            duration: 0.6,
          },
          "-=.3"
        );

      gsap.to(".orbit-ring", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-ring.reverse", {
        rotation: -360,
        duration: 42,
        repeat: -1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="site">
      <SpaceBackground />

      <div className="space-overlay" />

      <nav>
        <a className="logo" href="#">
          SM<span>.</span>
        </a>

        <div className="navlinks">
          <a href="#about">01 About</a>
          <a href="#work">02 Work</a>
          <a href="#skills">03 Skills</a>
          <a href="#contact">04 Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="mission-label">
            <span className="live-dot" />
            MISSION 01 / PORTFOLIO
          </div>

          <div className="orbit-system">
            <div className="orbit-ring" />
            <div className="orbit-ring reverse" />
            <div className="planet" />
          </div>

          <div className="hero-content">
            <p className="eyebrow">
              FULL STACK DEVELOPER <span>·</span> BSC IT <span>·</span> 2026
            </p>

            <h1 className="hero-title">
              <span>SANKET</span>
              <span className="outline">METHE</span>
            </h1>

            <p className="hero-subtitle">
              Building digital experiences that feel{" "}
              <em>alive.</em>
            </p>
          </div>

          <div className="mission-data">
            <div>
              <span>STATUS</span>
              <strong>ONLINE</strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>INDIA</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>FULL STACK</strong>
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <b>↓</b>
          </a>
        </section>

        <section id="about" className="section">
          <p className="label">01 — MISSION PROFILE</p>

          <div className="aboutgrid">
            <h2>
              Turning ideas into{" "}
              <em>useful</em> digital experiences.
            </h2>

            <div>
              <p>
                I'm Sanket Methe, a BSc IT student and aspiring
                developer focused on full-stack web development,
                software testing and practical technology.
              </p>

              <p>
                I've built websites for clients and completed a Full
                Stack Development internship with Prodigy. I'm
                currently looking for opportunities where I can learn
                fast, solve problems and build things that matter.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <p className="label">02 — SELECTED MISSIONS</p>

          {projects.map((project) => (
            <article className="project" key={project.number}>
              <span className="project-number">
                {project.number}
              </span>

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
          <p className="label">03 — SYSTEM CAPABILITIES</p>

          <h2 className="big">
            Technologies I use to{" "}
            <em>build.</em>
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
          <p className="label">04 — COMMUNICATION CHANNEL</p>

          <h2>
            Ready for
            <br />
            <em>launch.</em>
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
        <span>© 2026 SANKET METHE</span>
        <span>SYSTEM ONLINE · ALL SYSTEMS NOMINAL</span>
      </footer>
    </div>
  );
}