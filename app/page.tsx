"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex justify-between items-center navbar px-8 py-3 text-[#17324D] bg-sky-300">
        <div>
          <h1 className="heading text-4xl font-black">Ines</h1>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setActiveSection("about")}
            className={`rounded-full px-5 py-2 font-bold transition-all duration-200 ${
              activeSection === "about"
                ? "bg-white text-[#17324D] shadow-md"
                : "bg-transparent text-[#17324D] hover:bg-white/30"
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActiveSection("project")}
            className={`rounded-full px-5 py-2 font-bold transition-all duration-200 ${
              activeSection === "project"
                ? "bg-white text-[#17324D] shadow-md"
                : "bg-transparent text-[#17324D] hover:bg-white/30"
            }`}
          >
            Projects
          </button>
        </div>
      </nav>

      {/* PAGE AND CLOUD BACKGROUND */}
      <main className="portfolio min-h-screen bg-sky-300 text-[#17324D] px-8 py-16">
        <div className="cloud-layer" aria-hidden="true">
          <div className="cloud cloud-one"></div>
          <div className="cloud cloud-two"></div>
          <div className="cloud cloud-three"></div>
          <div className="cloud cloud-four"></div>
          <div className="cloud cloud-five"></div>
        </div>

        {/* ABOUT SECTION */}
        {activeSection === "about" && (
          <section
            id="about"
            className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center px-8 py-8"
          >
            <div className="relative mx-auto w-full max-w-6xl">
              <div className="relative z-10 max-w-3xl rounded-3xl bg-white/20 p-6 shadow-lg md:p-8">
                <p className="mb-4 text-lg font-bold uppercase tracking-[0.2em]">
                  Computer Science Student
                </p>

                <h1 className="text-7xl font-black leading-none tracking-tight md:text-9xl">
                  Hey!
                  <br />
                  I'm Ines.
                </h1>

                <h2 className="mt-8 max-w-xl text-2xl font-bold md:text-3xl">
                  One line at a time, one bug at a time, one step at a time.
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-relaxed">
                  I'm a Computer Science student passionate about tech. I love
                  exploring backend development, web development, and neural
                  networks.
                </p>

                <button
                  onClick={() => setActiveSection("project")}
                  className="mt-8 rounded-full bg-white px-7 py-4 font-bold text-[#17324D] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore my projects!
                </button>
              </div>

              {/* INTERESTS CARD */}
              <div className="relative ml-auto mt-8 max-w-sm -rotate-2 rounded-3xl border border-white/60 bg-white/40 p-7 shadow-xl backdrop-blur-sm md:absolute md:bottom-0 md:right-0 md:mt-0 md:translate-y-8">
                <p className="text-sm font-bold uppercase tracking-widest">
                  Currently exploring
                </p>

                <ul className="mt-4 space-y-3 text-xl font-bold">
                  <li>Computer Vision</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* PROJECTS SECTION */}
        {activeSection === "project" && (
          <section
            id="projects"
            className="relative z-10 min-h-[calc(100vh-4rem)] px-4 py-8 md:px-8 md:py-12"
          >
            <div className="mx-auto max-w-6xl">
              <p className="font-bold uppercase tracking-[0.2em]">
                A little bit of what I've built
              </p>

              <h2 className="mt-3 text-6xl font-black tracking-tight md:text-8xl">
                My projects.
              </h2>

              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* COMPUTER VISION RESEARCH */}
                <article className="rounded-3xl border border-white/60 bg-white/50 p-8 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-xl">
                  <p className="text-sm font-bold uppercase tracking-widest">
                    01 / Research
                  </p>

                  <h3 className="mt-4 text-3xl font-black">
                    Computer Vision for Nondestructive Evaluation
                  </h3>

                  <p className="mt-3 leading-relaxed">
                    Exploring computer vision and deep learning techniques
                    for detecting structural defects and analyzing physical
                    infrastructure.
                  </p>

                  <p className="mt-5 text-sm font-bold text-[#17324D]/70">
                    Computer Vision · CNNs · YOLO
                  </p>

                  <span className="mt-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold">
                    Ongoing research
                  </span>
                </article>

                {/* BANKING SYSTEM */}
                <article className="rounded-3xl border border-white/60 bg-white/50 p-8 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-xl md:mt-10">
                  <p className="text-sm font-bold uppercase tracking-widest">
                    02 / Software Engineering
                  </p>

                  <h3 className="mt-4 text-3xl font-black">
                    Banking System
                  </h3>

                  <p className="mt-3 leading-relaxed">
                    An object-oriented banking application supporting
                    checking, savings, and certificate-of-deposit accounts,
                    with transaction validation and monthly interest
                    calculations.
                  </p>

                  <p className="mt-5 text-sm font-bold text-[#17324D]/70">
                    Java - OOP - Testing
                  </p>

                </article>

                {/* ULTRASONIC MAPPING */}
                <article className="rounded-3xl border border-white/60 bg-white/50 p-8 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-xl">
                  <p className="text-sm font-bold uppercase tracking-widest">
                    03 / Hardware
                  </p>

                  <h3 className="mt-4 text-3xl font-black">
                    2D Ultrasonic Mapping System
                  </h3>

                  <p className="mt-3 leading-relaxed">
                    A mapping prototype using C++ firmware and Python data
                    processing to transform ultrasonic measurements into a
                    2D visualization.
                  </p>

                  <p className="mt-5 text-sm font-bold text-[#17324D]/70">
                    C++ - Python - UART - Matplotlib
                  </p>
                </article>

                {/* AI PANTRY FINDER */}
                <article className="rounded-3xl border border-white/60 bg-white/50 p-8 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-xl md:mt-10">
                  <p className="text-sm font-bold uppercase tracking-widest">
                    04 / Hackathon
                  </p>

                  <h3 className="mt-4 text-3xl font-black">
                    AI Pantry Finder
                  </h3>

                  <p className="mt-3 leading-relaxed">
                    A collaborative two day hackathon project featuring a Flask
                    backend, AI-powered responses, and location-based
                    recommendations.
                  </p>

                  <p className="mt-5 text-sm font-bold text-[#17324D]/70">
                    Python - Flask - REST APIs - AI
                  </p>

                  <a
                    href="https://github.com/Ines-exe/Codefest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold transition hover:bg-[#17324D] hover:text-white"
                  >
                    View on GitHub
                  </a>
                </article>

              </div>

              <p className="mt-12 text-center font-medium">
                And don't forget this website. It's a project too. <a
                    href="https://github.com/Ines-exe/Personal-Porfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-12 text-center font-medium">View it on Github
                  </a>
              </p>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
