import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";

const projectsData = [
  {
    title: "Full-Scale Intune Integration",
    description:
      "Managing the move to mobile: Seamlessly integrated Intune to keep our team productive on the go and our data locked down.",
    tags: [
      "Microsoft Intune",
      "Endpoint Security",
      "Conditional Access",
      "Mobile Device Management",
    ],
    image: "/images/intune.png",
  },
  {
    title: "Hybrid Identity & Cloud Infrastructure",
    description:
      "Architected Azure-on-prem integration and managed Kubernetes/VM clusters for enterprise operations.",
    tags: ["Azure", "AD-Connector", "Kubernetes", "SFTP"],
    image: "/images/azure.png",
  },
  {
    title: "Automated Governance & Security Audit",
    description:
      "Engineered PowerShell automation for security audits, SIEM integration, and compliance enforcement.",
    tags: ["PowerShell", "SIEM", "Automation", "Security"],
    image: "/images/security.png",
  },
];

const skillsData = [
  { name: "Azure", icon: "fab fa-microsoft" },
  { name: "Entra ID", icon: "fas fa-fingerprint" },
  { name: "Active Directory", icon: "fas fa-sitemap" },
  { name: "GCP Administration", icon: "fab fa-google" },
  { name: "Intune", icon: "fas fa-tablet-alt" },
  { name: "SharePoint", icon: "fas fa-project-diagram" },
  { name: "Exchange Online", icon: "fas fa-envelope-open-text" },
  { name: "Powershell", icon: "fab fa-terminal" },
  { name: "HTML/CSS", icon: "fab fa-html5" },
  { name: "Git", icon: "fab fa-git-alt" },
];

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-300">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight text-white">
            Shivansh Rai
          </div>
          <button
            type="button"
            className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:text-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-sm font-medium tracking-tight transition ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`md:hidden ${
            menuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden border-t border-white/10 bg-slate-950/90 transition-all duration-300`}
        >
          <ul className="flex flex-col gap-3 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium tracking-tight transition ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <motion.section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.6)), url('/images/bgim.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        animate="show"
        variants={fadeInUp}
      >
        <div className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">
            Cloud Admininstrator | Security Enthusiast
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Shivansh
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-300 md:text-lg">
            I build Secure and reliable cloud solutions for applicable
            organization-wide and for small groups as well.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-slate-100 active:scale-95"
            >
              My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:border-white/60 active:scale-95"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/rshivansh10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition hover:scale-[1.02] hover:border-white/40 hover:text-white active:scale-95"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full border border-blue-500/40 px-5 py-3 text-sm font-semibold text-blue-200 transition hover:scale-[1.02] hover:border-blue-400 hover:text-white active:scale-95"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          About Me
        </h2>
        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
          <div className="flex justify-center">
            <img
              src="/images/profile.png"
              alt="Shivansh Rai"
              className="h-64 w-64 rounded-3xl border border-white/10 object-cover shadow-[0_20px_60px_rgba(15,23,42,0.6)]"
            />
          </div>
          <div className="space-y-6 text-base text-slate-300">
            <p>
              I'm an IT specialist experienced in server operations, Active
              Directory, and Azure, with a strong focus on automation, security,
              and compliance. I leverage my programming background to build
              reliable infrastructure and solve complex technical challenges.
            </p>
            <p>
              When I'm not on the clock, I'm usually labbing new cloud
              architectures or automating my home infrastructure to find the
              perfect balance of performance and cost.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Featured Projects
          </h2>
          <span className="text-sm text-slate-500">
            Grid view optimized for focus
          </span>
        </div>
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-[0_25px_50px_rgba(37,99,235,0.12)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/80 ring-1 ring-white/10">
                  <img
                    src={project.image}
                    alt={`${project.title} logo`}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="skills"
        className="mx-auto max-w-6xl px-6 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Skills &amp; Technologies
        </h2>
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-6 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="mb-3 text-2xl text-blue-300">
                <i className={skill.icon} aria-hidden="true"></i>
              </div>
              <p className="text-sm font-semibold text-white">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-300">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/rshivansh10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition hover:scale-[1.02] hover:border-white/40 hover:text-white active:scale-95"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shivansh-rai-7200a2248/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition hover:scale-[1.02] hover:border-white/40 hover:text-white active:scale-95"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="http://x.com/rshivansh10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition hover:scale-[1.02] hover:border-white/40 hover:text-white active:scale-95"
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </a>
            <a
              href="mailto:mrshivanshrai0@gmail.com"
              className="flex items-center gap-2 rounded-full border border-blue-500/40 px-5 py-3 text-sm font-semibold text-blue-200 transition hover:scale-[1.02] hover:border-blue-400 hover:text-white active:scale-95"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        &copy; 2026 rshivansh10. All rights reserved.
      </footer>
    </div>
  );
}
