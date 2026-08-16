import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpaceBackground from "./SpaceBackground";
import BootScreen from "./BootScreen";

gsap.registerPlugin(ScrollTrigger);

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
    title: "Mirror Salon Studio",
    description:
      "A premium responsive salon website designed with modern UI, service presentation, location information and a customer-focused experience.",
    tags: ["Web Development", "UI/UX", "Responsive"],
    link: "https://pratik-salon-studio.emergent.host",
  },
  {
    number: "02",
    title: "Image Salon",
    description:
      "A modern salon website focused on visual presentation, services, contact information and a polished mobile-friendly interface.",
    tags: ["React", "UI/UX", "Web Design"],
    link: "https://imagesalon.lovable.app",
  },
  {
    number: "03",
    title: "Developer Portfolio",
    description:
      "A cinematic developer portfolio built around interactive space visuals, responsive design, GSAP motion and a NASA-inspired mission interface.",
    tags: ["TypeScript", "GSAP", "Creative UI"],
    link: "https://methesanket.github.io/sanket-methe-dev/",
  },
];

export default function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline();

      heroTimeline
        .from(".mission-label", {
          opacity: 0,
          y: 20,
          duration: 0.5,
        })
        .from(
          ".eyebrow",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=.2"
        )
        .from(
          ".hero-title span",
          {
            opacity: 0,
            y: 100,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=.2"
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=.3"
        )
        .from(
          ".mission-data",
          {
            opacity: 0,
            x: -20,
            duration: 0.5,
          },
          "-=.2"
        );

      gsap.utils.toArray<HTMLElement>(".section").forEach((section) => {
        const label = section.querySelector(".label");

        if (label) {
          gsap.from(label, {
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
            opacity: 0,
            x: -30,
            duration: 0.7,
            ease: "power2.out",
          });
        }
      });

      gsap.from(".aboutgrid", {
        scrollTrigger: {
          trigger: ".aboutgrid",
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".project").forEach((project, index) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            once: true,
          },
          opacity: 0,
          y: 70,
          duration: 0.8,
          delay: index * 0.08,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".skills div").forEach((skill, index) => {
        gsap.from(skill, {
          scrollTrigger: {
            trigger: skill,
            start: "top 90%",
            once: true,
          },
          opacity: 0,
          x: -40,
          duration: 0.6,
          delay: index * 0.04,
          ease: "power2.out",
        });
      });

      gsap.from(".contact h2", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 70%",
          once: true,
        },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".email, .social", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 65%",
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.to(".orbit-ring", {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-ring.reverse", {
        rotation: -360,
        duration: 17,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".planet", {
        scale: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <BootScreen />

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
          {/* HERO */}

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
                Building digital experiences that feel <em>alive.</em>
              </p>
            </div>

            <div className="mission-data">
              <div>
                <span>STATUS</span>
                <strong>AVAILABLE</strong>
              </div>

              <div>
                <span>EDUCATION</span>
                <strong>BSC IT</strong>
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

          {/* ABOUT */}

          <section id="about" className="section">
            <p className="label">01 — MISSION PROFILE</p>

            <div className="aboutgrid">
              <h2>
                Turning ideas into <em>useful</em> digital experiences.
              </h2>

              <div>
                <p>
                  I'm Sanket Methe, a BSc IT student at Pillai University,
                  graduating in 2026, with a focus on full-stack web
                  development, software testing, AI/ML and practical
                  technology.
                </p>

                <p>
                  I completed a Full Stack Development internship with
                  Prodigy and have built responsive websites for clients.
                  I enjoy turning ideas into functional, modern and
                  user-focused digital experiences.
                </p>

                <p>
                  I'm currently looking for opportunities where I can learn
                  quickly, solve real problems and contribute to meaningful
                  technology projects.
                </p>
              </div>
            </div>
          </section>

          {/* PROJECTS */}

          <section id="work" className="section">
            <p className="label">02 — SELECTED MISSIONS</p>

            {projects.map((project) => (
              <a
                className="project"
                key={project.number}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
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
              </a>
            ))}
          </section>

          {/* SKILLS */}

          <section id="skills" className="section">
            <p className="label">03 — SYSTEM CAPABILITIES</p>

            <h2 className="big">
              Technologies I use to <em>build.</em>
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

          {/* EXPERIENCE */}

          <section className="section">
            <p className="label">04 — EXPERIENCE</p>

            <div className="aboutgrid">
              <h2>
                Learning by <em>building.</em>
              </h2>

              <div>
                <p>
                  <strong>Full Stack Development Intern</strong>
                </p>

                <p>
                  Prodigy InfoTech — Full Stack Development Internship.
                </p>

                <p>
                  Worked on practical web development projects while
                  strengthening frontend, development workflow and
                  problem-solving skills.
                </p>

                <p>
                  <strong>Certification</strong>
                </p>

                <p>Full Stack Web Development</p>
              </div>
            </div>
          </section>

          {/* CONTACT */}

          <section id="contact" className="contact">
            <p className="label">05 — COMMUNICATION CHANNEL</p>

            <h2>
              Let's build
              <br />
              <em>something.</em>
            </h2>

            <a
              className="email"
              href="mailto:methesanket@gmail.com"
            >
              methesanket@gmail.com ↗
            </a>

            <div className="social">
              <a
                href="https://github.com/methesanket"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/Sanketmethe"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:methesanket@gmail.com">
                Email ↗
              </a>
            </div>
          </section>
        </main>

        <footer>
          <span>© 2026 SANKET METHE</span>

          <span>
            SYSTEM ONLINE · ALL SYSTEMS NOMINAL
          </span>
        </footer>
      </div>
    </>
  );
}