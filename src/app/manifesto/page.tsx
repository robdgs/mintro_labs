import React from "react";
import Link from "next/link";
import Container from "@/components/Container";

const ManifestoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-40 pb-20">
      {/* Fixed Back to Home Button */}
      <div className="fixed top-40 left-20 z-40">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground font-semibold px-6 py-3 border-2 border-foreground bg-primary hover:bg-secondary hover:text-white transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
      </div>

      <Container>
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Our Manifesto
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80">
              The principles guiding Mintro Labs toward reimagined education
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-16 p-8 bg-[#fafaf5] border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)]">
            <p className="text-lg leading-relaxed text-foreground">
              At Mintro Labs, we believe education should be a bridge to the
              future, not a barrier. We're here to transform learning into an
              interactive, verifiable, and gamified experience—built for the
              digital generation and powered by Web3 innovation.
            </p>
          </div>

          {/* Principles */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                1. Education Should Be an Experience
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                Learning isn't about consuming information—it's about engaging
                with it. Through Socratic questioning and hands-on challenges,
                we turn passive courses into dynamic journeys where students
                actively discover, create, and grow.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Education becomes memorable when it feels like progress, not a
                chore.
              </p>
            </section>

            <section className="pl-6 border-l-4 border-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                2. Gamification as a Tool for Growth
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                Games keep us engaged because they reward effort, encourage
                exploration, and challenge us to improve. We bring that same
                psychology to learning. Progressive modules, interactive
                challenges, and verified achievements turn education into an
                evolving experience.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                When learning feels like leveling up, motivation becomes
                intrinsic.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                3. Web3 as the Future of Credentials
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                Diplomas on paper are outdated. Blockchain-verified credentials
                are transparent, portable, and impossible to fake. Every skill,
                every achievement, every step of your learning journey is
                recorded on-chain—aligned with frameworks like ELEVATE from the
                Digital Europe Programme.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Your credentials travel with you, forever verifiable, always
                yours.
              </p>
            </section>

            <section className="pl-6 border-l-4 border-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                4. Centralized Knowledge, Decentralized Learning
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                The Web3 space is scattered—tutorials here, documentation there,
                outdated guides everywhere. We centralize all learning resources
                into one unified platform while keeping the learning experience
                personalized and accessible to everyone.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                One ecosystem. Clear pathways. No noise. Just knowledge that
                works.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                5. Collaboration Over Competition
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                Education works best when learners collaborate. Through
                team-based challenges and inter-school competitions, we foster
                teamwork, creativity, and real-world problem-solving. Learning
                isn't a solo journey—it's a shared adventure.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Together, we learn faster, deeper, and stronger.
              </p>
            </section>

            <section className="pl-6 border-l-4 border-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                6. Bringing Innovation to Classrooms
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                Partnering with ABA2020, we bring blockchain education directly
                into schools and universities across Italy. Through PCTO
                programs and European innovation grants, we ensure real impact
                where it matters—in the classroom, with students and educators.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Innovation belongs in schools, not just startups.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                7. Democratizing Web3 Education
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                Blockchain technology shouldn't be reserved for tech elites.
                We're committed to making Web3 education accessible to everyone—
                from high school students to professionals looking to upskill.
                Open knowledge. Fair access. Real opportunity.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Education is a right, not a privilege. Web3 should be too.
              </p>
            </section>
          </div>

          {/* Conclusion */}
          <div className="mt-16 p-8 bg-foreground text-background border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Commitment
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              These aren't just principles—they're the foundation of everything
              we build. Every course, every partnership, every feature is guided
              by the belief that education should be interactive, verifiable,
              and built for the digital future.
            </p>
            <p className="text-lg leading-relaxed">
              Start strong. Grow stronger. That's the Mintro Labs way.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-foreground">
              — The Mintro Labs Team
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
};

export default ManifestoPage;
