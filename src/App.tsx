import { useEffect } from "react";
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
  useEffect(() => {
    gsap.from(".hero-kicker", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-title span", {
      y: 120,
      opacity: 0,
      stagger: 0.08,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.15,
    });
  }, []);

  return (
    <div className="site">
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
        {/* HERO */}
        <section className="hero">
          <div className="orb orb1" />
          <div className="orb orb2" />

          <p className="hero-kicker">
            FULL STACK DEVELOPER · BSC IT · 2026
          </p>

          <h1 className="hero-title">
            <span>SANKET</span>
            <span className="outline">METHE</span>
          </h1>

          <div className="hero-bottom">
            <p>
              Building digital experiences that feel <i>alive.</i>
            </p>

            <a className="circle" href="#work">
              ↓
            </a>
          </div>
        </section>

        {/* ABOUT */}
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

        {/* PROJECTS */}
        <section id="work" className="section work">
          <p className="label">02 — SELECTED WORK</p>

          {projects.map((project) => (
            <article className="project" key={project.number}>
              <span>{project.number}</span>

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

        {/* SKILLS */}
        <section id="skills" className="section">
          <p className="label">03 — TOOLKIT</p>

          <h2 className="big">
            Skills I use to <em>build.</em>
          </h2>

          <div className="skills">
            {skills.map((skill, index) => (
              <div key={skill}>
                <small>0{index + 1}</small>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <p className="label">04 — CONTACT</p>

          <h2>
            Let's build
            <br />
            <em>something.</em>
          </h2>

          <a className="email" href="mailto:sanket.methe@example.com">
            sanket.methe@example.com ↗
          </a>

          <div className="social">
            <a href="https://github.com/methesanket">GitHub</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <a href="#">Resume</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Sanket Methe</span>
        <span>Designed & built with intention.</span>
      </footer>
    </div>
  );
}