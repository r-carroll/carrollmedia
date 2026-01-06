import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-20 md:py-32 rounded-t-[2rem] md:rounded-t-[3rem] mt-20 overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh]">

        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="flex flex-col max-w-full">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black font-[family-name:var(--font-syne)] tracking-tighter uppercase leading-[0.85] break-words">
              Let&apos;s Work
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black font-[family-name:var(--font-syne)] tracking-tighter uppercase leading-[0.85] text-[var(--accent-primary)] break-words">
              Together
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-wrap">
            <a
              href="mailto:ryan@carrollmedia.dev"
              className="px-6 py-3 md:px-8 md:py-4 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] font-bold uppercase tracking-widest hover:opacity-80 transition-opacity duration-300 text-center text-sm md:text-base"
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 md:px-8 md:py-4 rounded-full border-2 border-[var(--bg-primary)] text-[var(--bg-primary)] font-bold uppercase tracking-widest hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)] transition-colors duration-300 text-center text-sm md:text-base"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-[var(--bg-primary)]/20 pt-12">

          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-widest text-sm opacity-50">Socials</span>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/r-carroll" target="_blank" className="hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 font-medium text-lg">
                <FaGithub /> Github
              </a>
              <a href="https://www.linkedin.com/in/carrollmedia/" target="_blank" className="hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 font-medium text-lg">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-widest text-sm opacity-50">Project</span>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/r-carroll/carrollmedia" target="_blank" className="hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 font-medium text-lg">
                <FaCode /> View Source
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-end">
            <p className="font-bold text-[var(--bg-primary)]">
              © {new Date().getFullYear()} CarrollMedia
            </p>
            <p className="opacity-60 text-sm mt-2">
              Designed & Built with Next.js 16, Tailwind, & Framer Motion
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
