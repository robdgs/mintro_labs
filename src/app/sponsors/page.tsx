"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import ContactModal from "@/components/ContactModal";
import BenefitDetailsModal from "@/components/BenefitDetailsModal";
import { HiArrowLeft, HiCheck } from "react-icons/hi2";

const SponsorsPage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);
  const [selectedTierCard, setSelectedTierCard] = useState<{
    icon: string;
    name: string;
    price: string;
    period: string;
    perks: string[];
    featured?: boolean;
    founding?: boolean;
  } | null>(null);

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[140px] pb-[80px] px-5"
        style={{
          background: "#f5f5f0",
          backgroundImage:
            "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        {/* Fixed Back Button */}
        <div className="fixed top-[100px] left-4 md:top-[164px] md:left-20 z-40">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 font-bold text-foreground border-2 border-foreground bg-primary shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
            aria-label="Back to Home"
          >
            <HiArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
 
        <div className="max-w-[900px] text-center">
          <div className="inline-block px-5 py-2 mb-10">

          </div>
          <h1
            className="font-bold text-foreground mb-6 leading-[0.92]"
            style={{
              fontSize: "clamp(48px, 8vw, 100px)",
              letterSpacing: "-4px",
            }}
          >
            SPONSORS &<br />
            <span className="text-secondary">PARTNERS</span>
            <br />
          </h1>
          <p
            className="text-foreground/55 max-w-[600px] mx-auto mb-10 leading-[1.7]"
            style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
          >
            Shape the future of Web3 education, reach thousands of students,
            educators, and institutions across Italy and Europe.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
         
          </div>
        </div>
 
      </section>

      {/* ============ WHY SPONSOR ============ */}
      <section id="why" className="py-20 md:py-28 px-5" style={{
        background: "#f5f5f0",
        backgroundImage:
          "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}>
        <Container>
          <div className="mb-4">
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-1">
              Why Sponsor Mintro
            </div>
            <div className="w-[60px] h-1 bg-secondary mb-5" />
            <h2
              className="font-bold text-foreground mb-10 leading-[1.02]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-2px",
              }}
            >
              Reach tomorrow's
              <br />
              Web3 builders
              <br />
              <span className="text-secondary">where they learn.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
            {[
              {
                num: "1,500+",
                label: "Target Schools",
                desc: "Italian institutions actively buying digital education programs.",
              },
              {
                num: "$9.39B",
                label: "TAM by 2033",
                desc: "Global Web3 education market growing at speed.",
              },
              {
                num: "Gen Z",
                label: "Core Audience",
                desc: "Students 16–25 learning blockchain, DeFi, and smart contracts.",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-foreground text-[#fafaf5] border-2 border-foreground p-7 shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] text-center hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200"
              >
                <div
                  className="font-bold text-primary leading-none mb-3"
                  style={{
                    fontSize: "clamp(32px, 4vw, 52px)",
                    letterSpacing: "-2px",
                  }}
                >
                  {stat.num}
                </div>
                <div className="text-base font-bold tracking-[2px] uppercase text-[rgba(255,255,255,0.5)] mt-2">
                  {stat.label}
                </div>
                <div className="text-base text-[rgba(255,255,255,0.4)] mt-2 leading-relaxed">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6 text-base text-foreground">
            🎯 <strong>Sponsor benefit:</strong> Your brand reaches the next
            generation of Web3 users, builders, and decision-makers — inside
            classrooms, on our platform, and at live events.
          </div>
        </Container>

      </section>

      {/* ============ BENEFITS ============ */}
      <section
        id="benefits"
        className="py-20 md:py-28 px-5"
        style={{
          background: "#f5f5f0",
          backgroundImage:
            "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <Container>
          <div className="mb-8">
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-1">
              What Sponsors Get
            </div>
            <div className="w-[60px] h-1 bg-secondary mb-5" />
            <h2
              className="font-bold text-foreground mb-10 leading-[1.02]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-2px",
              }}
            >
              Brand. Reach.
              <br />
              Talent pipeline.
              <br />
              <span className="text-secondary">Real outcomes.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
            {/* Large card - Branded Learning Tracks */}
            <div className="md:col-span-2 bg-[#fafaf5] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-7 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <h3 className="font-bold text-3xl text-foreground mb-3">
                🎓 Branded Learning Tracks
              </h3>
              <p className="text-lg text-foreground/65 leading-relaxed">
                Your protocol featured in dedicated curriculum modules. Students learn by building with your tools.
              </p>
            </div>

            {/* Small card - Talent Pipeline */}
            <div className="bg-secondary border-2 border-foreground text-white shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <h3 className="font-bold text-xl mb-2">
                🔗 Talent Pipeline
              </h3>
              <p className="text-base leading-relaxed">
                First access to top performers with on-chain verified skills.
              </p>
            </div>

            {/* Platform Visibility */}
            <div className="bg-[#fafaf5] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <h3 className="font-bold text-xl text-foreground mb-2">
                📣 Platform Visibility
              </h3>
              <p className="text-base text-foreground/65 leading-relaxed">
                Logo on platform, materials, certificates, and marketing channels.
              </p>
            </div>

            {/* Event & Hackathon Access */}
            <div className="bg-[#fafaf5] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <h3 className="font-bold text-xl text-foreground mb-2">
                🏆 Event Access
              </h3>
              <p className="text-base text-foreground/65 leading-relaxed">
                Direct face time with talent at workshops, labs, and hackathons.
              </p>
            </div>

            {/* Key Insight - Full Width */}
            <div className="md:col-span-3 bg-primary border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6">
              <p className="text-lg font-bold text-foreground">
                ✨ Every sponsorship = brand reach + developer pipeline + ecosystem growth
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ TIERS ============ */}
      <section
        id="tiers"
        className="py-20 md:py-28 px-5"
        style={{
          background: "#f5f5f0",
          backgroundImage:
            "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <Container>
          <div className="mb-8">
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-1">
              Sponsorship Tiers
            </div>
            <div className="w-[60px] h-1 bg-secondary mb-5" />
            <h2
              className="font-bold text-foreground mb-10 leading-[1.02]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-2px",
              }}
            >
              Choose your
              <br />
              <span className="text-secondary">level of impact.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Seed - Regular */}
            <TierCard
              icon="🌱"
              name="Seed"
              price="€2,500"
              period="per semester"
              perks={[
                "Logo on platform & materials",
                "Social media mention",
                "Certificate co-branding",
                "Quarterly impact report",
              ]}
              onClick={() => setSelectedTierCard({
                icon: "🌱",
                name: "Seed",
                price: "€2,500",
                period: "per semester",
                perks: [
                  "Logo on platform & materials",
                  "Social media mention",
                  "Certificate co-branding",
                  "Quarterly impact report",
                ],
              })}
            />
            {/* Growth - Regular */}
            <TierCard
              icon="⚡"
              name="Growth"
              price="€5,000"
              period="per semester"
              perks={[
                "All Seed perks",
                "Branded learning module",
                "Workshop speaking slot",
                "Newsletter feature",
                "Talent pool access (5 CVs)",
              ]}
              onClick={() => setSelectedTierCard({
                icon: "⚡",
                name: "Growth",
                price: "€5,000",
                period: "per semester",
                perks: [
                  "All Seed perks",
                  "Branded learning module",
                  "Workshop speaking slot",
                  "Newsletter feature",
                  "Talent pool access (5 CVs)",
                ],
              })}
            />
            {/* Scale - Featured Tall */}
            <TierCard
              icon="🔥"
              name="Scale"
              price="€10,000"
              period="per semester"
              featured
              perks={[
                "All Growth perks",
                "Dedicated learning track",
                "Co-branded hackathon",
                "Event keynote slot",
                "Unlimited talent access",
                "AI tutor integration",
              ]}
              onClick={() => setSelectedTierCard({
                icon: "🔥",
                name: "Scale",
                price: "€10,000",
                period: "per semester",
                featured: true,
                perks: [
                  "All Growth perks",
                  "Dedicated learning track",
                  "Co-branded hackathon",
                  "Event keynote slot",
                  "Unlimited talent access",
                  "AI tutor integration",
                ],
              })}
            />
            {/* Founding - Regular */}
            <TierCard
              icon="👑"
              name="Founding"
              price="€25,000"
              period="annual partnership"
              founding
              perks={[
                "All Scale perks",
                "Exclusive category lock",
                "Advisory board seat",
                "Custom curriculum co-design",
                "First refusal on events",
                "Annual strategy session",
              ]}
              onClick={() => setSelectedTierCard({
                icon: "👑",
                name: "Founding",
                price: "€25,000",
                period: "annual partnership",
                founding: true,
                perks: [
                  "All Scale perks",
                  "Exclusive category lock",
                  "Advisory board seat",
                  "Custom curriculum co-design",
                  "First refusal on events",
                  "Annual strategy session",
                ],
              })}
            />
          </div>
        </Container>
      </section>

      {/* ============ COMPARISON TABLE ============ */}
      <section
        id="compare"
        className="py-20 md:py-28 px-5"
        style={{
          background: "#f5f5f0",
          backgroundImage:
            "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <Container>
          <div className="mb-4">
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-1">
              Tier Comparison
            </div>
            <div className="w-[60px] h-1 bg-secondary mb-5" />
            <h2
              className="font-bold text-foreground mb-10 leading-[1.02]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-2px",
              }}
            >
              Side-by-side
              <br />
              <span className="text-secondary">at a glance.</span>
            </h2>
          </div>

          <div className="overflow-x-auto border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)]">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="bg-foreground text-[#fafaf5] p-4 text-base font-bold tracking-[1px] uppercase border border-[rgba(255,255,255,0.1)] text-left min-w-[200px]">
                    Benefit
                  </th>
                  <th className="bg-foreground text-[#fafaf5] p-4 text-base font-bold tracking-[1px] uppercase border border-[rgba(255,255,255,0.1)] text-center whitespace-nowrap">
                    Seed
                    <br />
                    €2,500
                  </th>
                  <th className="bg-foreground text-[#fafaf5] p-4 text-base font-bold tracking-[1px] uppercase border border-[rgba(255,255,255,0.1)] text-center whitespace-nowrap">
                    Growth
                    <br />
                    €5,000
                  </th>
                  <th className="bg-secondary text-white p-4 text-base font-bold tracking-[1px] uppercase border border-[rgba(255,255,255,0.1)] text-center whitespace-nowrap">
                    Scale
                    <br />
                    €10,000
                  </th>
                  <th className="bg-[#b8960c] text-white p-4 text-base font-bold tracking-[1px] uppercase border border-[rgba(255,255,255,0.1)] text-center whitespace-nowrap">
                    Founding
                    <br />
                    €25,000
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Logo on platform & materials", "✓", "✓", "✓", "✓"],
                  ["Social media mention", "✓", "✓", "✓", "✓"],
                  ["Certificate co-branding", "✓", "✓", "✓", "✓"],
                  ["Branded learning module", "✓", "✓", "✓", "✓"],
                  ["Workshop speaking slot", "✓", "✓", "✓", "✓"],
                  [
                    "Talent pool access",
                    "—",
                    "5 CVs",
                    "Unlimited",
                    "Unlimited + priority",
                  ],
                  ["Dedicated learning track", "—", "—", "✓", "✓"],
                  ["Co-branded hackathon", "—", "—", "✓", "✓"],
                  ["AI tutor integration", "—", "—", "✓", "✓"],
                  ["Exclusive category lock", "—", "—", "—", "✓"],
                  ["Advisory board seat", "—", "—", "—", "✓"],
                  ["Custom curriculum co-design", "—", "—", "—", "✓"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-primary group cursor-pointer transition-colors" onClick={() => setSelectedBenefit(row[0] as string)}>
                    <td className="p-3 text-lg border border-foreground/10 text-left font-semibold bg-background group-hover:bg-primary text-secondary underline decoration-secondary decoration-2 underline-offset-2">
                      {row[0]}
                    </td>
                    {row.slice(1).map((cell, j) => (
                      <td
                        key={j}
                        className="p-3 text-lg border border-foreground/10 text-center bg-[#fafaf5] group-hover:bg-primary"
                      >
                        {cell === "✓" ? (
                          <span className="text-secondary font-bold text-2xl">
                            ✓
                          </span>
                        ) : cell === "—" ? (
                          <span className="text-foreground/20 text-xl">
                            —
                          </span>
                        ) : (
                          <span className="text-lg">{cell}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ============ PARTNERSHIPS ============ */}
      <section id="partnerships" className="py-20 md:py-28 px-5" style={{
        background: "#f5f5f0",
        backgroundImage:
          "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}>
        <Container>
          <div className="mb-4">
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-1">
              Partnership Formats
            </div>
            <div className="w-[60px] h-1 bg-secondary mb-5" />
            <h2
              className="font-bold text-foreground mb-10 leading-[1.02]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-2px",
              }}
            >
              Not just sponsorship.
              <br />
              <span className="text-secondary">Strategic partnerships.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
            {/* Institutional Partner - Large */}
            <div className="bg-[#fafaf5] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-7 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <h3 className="font-bold text-xl text-foreground mb-3">
                🏫 Institutional Partner
              </h3>
              <p className="text-base text-foreground/65 leading-relaxed">
                Embed your protocol into school and university programs. Multi-semester commitments with curriculum integration.
              </p>
            </div>

            {/* Content Partner - Featured */}
            <div className="bg-secondary border-2 border-foreground text-white shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-7 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <h3 className="font-bold text-xl mb-3">
                🛠️ Content Partner
              </h3>
              <p className="text-base leading-relaxed">
                Co-create courses and challenges. Your tech, our pedagogy — built for classrooms.
              </p>
            </div>

            {/* Ecosystem Alliance */}
            <div className="bg-[#fafaf5] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-7 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <h3 className="font-bold text-xl text-foreground mb-3">
                🌍 Ecosystem Alliance
              </h3>
              <p className="text-base text-foreground/65 leading-relaxed">
                Joint events, cross-promotion, and shared community building across Europe.
              </p>
            </div>

            {/* Insight Box - Full Width */}
            <div className="md:col-span-3 bg-primary border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6">
              <p className="text-lg font-bold text-foreground">
                🤝 Flexible structures: Every partnership is custom-fit to align with your brand strategy, developer relations goals, and growth targets.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ REACH ============ */}
      <section
        id="reach"
        className="py-20 md:py-28 px-5"
        style={{
          background: "#f5f5f0",
          backgroundImage:
            "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <Container>
          <div className="mb-8">
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-1">
              Audience & Reach
            </div>
            <div className="w-[60px] h-1 bg-secondary mb-5" />
            <h2
              className="font-bold text-foreground mb-10 leading-[1.02]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-2px",
              }}
            >
              Your brand across
              <br />
              every touchpoint.
              <br />
              <span className="text-secondary">Online & offline.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
            {/* Large card - AI Learning Platform */}
            <div className="md:col-span-2 bg-[#fafaf5] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-7 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-[48px] h-[48px] flex-shrink-0 bg-primary border-2 border-foreground flex items-center justify-center text-2xl">
                  💻
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    AI Learning Platform
                  </h3>
                  <p className="text-base text-foreground/65 leading-relaxed">
                    Logo, branded modules, AI tutor integration. Seen by every learner on every session.
                  </p>
                </div>
              </div>
            </div>

            {/* In-School Workshops */}
            <div className="bg-[#fafaf5] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <div className="flex items-start gap-3">
                <div className="w-[44px] h-[44px] flex-shrink-0 bg-primary border-2 border-foreground flex items-center justify-center text-xl">
                  🏫
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    In-School Workshops
                  </h3>
                  <p className="text-base text-foreground/65 leading-relaxed">
                    Physical presence with 30+ students. Direct interaction.
                  </p>
                </div>
              </div>
            </div>

            {/* On-Chain Certificates */}
            <div className="bg-secondary border-2 border-foreground text-white shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <div className="flex items-start gap-3">
                <div className="w-[44px] h-[44px] flex-shrink-0 bg-white/20 border-2 border-white/50 flex items-center justify-center text-xl">
                  📜
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    On-Chain Certificates
                  </h3>
                  <p className="text-base leading-relaxed opacity-90">
                    On every graduate's verifiable credential.
                  </p>
                </div>
              </div>
            </div>

            {/* Digital & Social */}
            <div className="bg-[#fafaf5] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
              <div className="flex items-start gap-3">
                <div className="w-[44px] h-[44px] flex-shrink-0 bg-foreground border-2 border-foreground flex items-center justify-center text-xl text-primary">
                  📱
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    Digital & Social
                  </h3>
                  <p className="text-base text-foreground/65 leading-relaxed">
                    Newsletter, social posts, press releases, community.
                  </p>
                </div>
              </div>
            </div>

            {/* Tags - Full Width */}
            <div className="md:col-span-3 flex gap-3 flex-wrap">
              {[
                "2,000+ learners by 2027",
                "10+ institutional partners",
                "Italy → Europe expansion",
                "Gen Z native audience",
              ].map((tag, i) => (
                <div
                  key={i}
                  className="bg-foreground text-primary border-2 border-foreground px-5 py-3 text-base font-bold shadow-[3px_3px_0px_0px_rgba(46,46,46,1)]"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ ECOSYSTEM ============ */}
      <section
        id="ecosystem"
        className="py-20 md:py-28 px-5"
        style={{
          background: "#f5f5f0",
          backgroundImage:
            "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <Container>
          <div className="mb-8">
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-1">
              Ecosystem Partners
            </div>
            <div className="w-[60px] h-1 bg-secondary mb-5" />
            <h2
              className="font-bold text-foreground mb-10 leading-[1.02]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-2px",
              }}
            >
              Join a growing
              <br />
              network of Web3
              <br />
              <span className="text-secondary">leaders.</span>
            </h2>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-7">
            {[
              "BuidlGuidl",
              "The Graph",
              "Fileverse",
              "ETH Rome",
              "Urbe.eth",
              "42 School",
              "CtrlShift",
              
              "Dev3 Pack",
            ].map((name, i) => (
              <div
                key={i}
                className="bg-[#fafaf5] border-2 border-foreground px-4 py-3 font-bold text-sm text-center shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] hover:bg-foreground hover:text-primary hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200"
              >
                {name}
              </div>
            ))}
          </div>

          {/* Stats Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
            {[
              { num: "9+", label: "Active Partners" },
              { num: "PCTO", label: "School Channel Active" },
              { num: "EU", label: "Grants Pipeline" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-[#fafaf5] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6 text-center"
              >
                <div className="font-bold text-[36px] text-secondary">
                  {s.num}
                </div>
                <div className="text-base font-bold tracking-[1.5px] uppercase text-foreground/60 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6">
            <p className="text-lg font-bold text-foreground">
              🌐 Network effect: Every new sponsor amplifies the ecosystem. More protocols = richer curriculum = more schools = more learners = stronger talent pipeline for everyone.
            </p>
          </div>
        </Container>
      </section>

      {/* ============ TIMELINE ============ */}
      <section id="timeline" className="py-20 md:py-28 px-5" style={{
        background: "#f5f5f0",
        backgroundImage:
          "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}>
        <Container>
          <div className="mb-8">
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-1">
              Sponsorship Timeline
            </div>
            <div className="w-[60px] h-1 bg-secondary mb-5" />
            <h2
              className="font-bold text-foreground mb-10 leading-[1.02]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-2px",
              }}
            >
              Move fast.
              <br />
              Lock your position.
              <br />
              <span className="text-secondary">Limited slots.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                phase: "Q2\n2026",
                phaseGreen: true,
                title: "Founding Partner Window 🔒",
                desc: "Only 3 Founding Partner slots available. Category exclusivity guaranteed. Lock in before competitors.",
                contentStyle: "",
              },
              {
                phase: "Q3\n2026",
                phaseGreen: false,
                title: "Scale Tier Launch",
                desc: "Branded learning tracks go live. First co-branded hackathons in Italian schools. 10+ institutional contracts active.",
                contentStyle: "bg-primary",
              },
              {
                phase: "Q4\n2026",
                phaseGreen: false,
                title: "Growth & Seed Open",
                desc: "Platform at scale. Open Growth and Seed tier sponsorships. First talent pipeline deliveries to sponsors.",
                contentStyle: "",
              },
              {
                phase: "2027+",
                phaseGreen: false,
                title: "European Expansion",
                desc: "2,000+ learners. Pan-European events. Sponsor brands reach students across multiple countries.",
                contentStyle: "dark",
              },
            ].map((t, i) => (
              <div
                key={i}
                className={`border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all duration-200 overflow-hidden ${
                  t.contentStyle === "dark"
                    ? "bg-foreground text-white"
                    : t.contentStyle === "bg-primary"
                      ? "bg-primary"
                      : "bg-[#fafaf5]"
                }`}
              >
                <div
                  className={`p-4 text-[18px] font-black uppercase tracking-[1px] text-center border-b-2 border-foreground whitespace-pre-line ${
                    t.phaseGreen
                      ? "bg-secondary text-white"
                      : "bg-foreground text-primary"
                  }`}
                >
                  {t.phase}
                </div>
                <div className="p-6">
                  <h3
                    className={`font-bold text-lg mb-2 ${t.contentStyle === "dark" ? "text-white" : "text-foreground"}`}
                  >
                    {t.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${t.contentStyle === "dark" ? "text-white/80" : "text-foreground/65"}`}
                  >
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-primary border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] p-6">
            <p className="text-lg font-bold text-foreground uppercase tracking-[0.5px]">
              ⏰ Founding Partner slots close Q2 2026. First movers get category exclusivity.
            </p>
          </div>
        </Container>
      </section>

      {/* ============ CTA ============ */}
      <section id="contact" className="mt-10 mb-5 lg:my-20 px-5" style={{
        background: "#f5f5f0",
        backgroundImage:
          "linear-gradient(to right, #2e2e2e12 1px, transparent 1px), linear-gradient(to bottom, #2e2e2e12 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}>
        <div className="flex flex-col items-center justify-center text-center relative z-10 mx-auto py-36 sm:py-48">
          {/* Subtle accent box */}
          <div className="border-2 border-foreground absolute inset-auto -z-10 bg-primary shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] max-w-5xl w-full px-[120px] py-40 sm:py-52"></div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-6 max-w-3xl text-foreground"
            >
              LET'S BUILD
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-secondary"
            >
              Shape Web3 Education. Build the Future.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="mx-auto text-lg text-foreground leading-relaxed"
            >
              Become a Mintro Labs sponsor or partner and reach the next generation of{" "}
              <span className="text-foreground font-medium">
                Web3 builders and developers
              </span>{" "}
              across Italy and Europe. Direct access to talent. Brand visibility.
              Impact at scale.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              onClick={() => setIsContactModalOpen(true)}
              className="mt-10 px-8 py-4 font-bold text-foreground bg-primary border-2 border-foreground hover:bg-secondary hover:text-white transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] text-lg"
            >
              Get in Touch →
            </motion.button>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <BenefitDetailsModal
        isOpen={selectedBenefit !== null}
        benefitName={selectedBenefit}
        onClose={() => setSelectedBenefit(null)}
      />

      <TierCardModal
        isOpen={selectedTierCard !== null}
        card={selectedTierCard}
        onClose={() => setSelectedTierCard(null)}
      />
    </div>
  );
};

/* ============ TIER CARD COMPONENT ============ */
function TierCard({
  icon,
  name,
  price,
  period,
  perks,
  featured,
  founding,
  badge,
  className = "",
  onClick,
}: {
  icon: string;
  name: string;
  price: string;
  period: string;
  perks: string[];
  featured?: boolean;
  founding?: boolean;
  badge?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative p-7 flex flex-col transition-all duration-300 hover:translate-y-[-6px] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] ${onClick ? "cursor-pointer" : ""} ${
        featured
          ? "bg-emerald-600"
          : "bg-white"
      } ${className}`}
    >
      {badge && (
        <div className="absolute top-[-2px] right-[-2px] bg-primary border-2 border-foreground px-3 py-1 text-[10px] font-bold tracking-[1px] text-foreground uppercase">
          {badge}
        </div>
      )}

      <div
        className={`w-[52px] h-[52px] border-2 mx-auto mb-4 flex items-center justify-center text-2xl ${
          featured
            ? "bg-white/20 border-white/50"
            : "bg-primary border-foreground"
        }`}
      >
        {icon}
      </div>

      <div
        className={`font-bold text-xl text-center mb-1 ${
          featured ? "text-white" : "text-foreground"
        }`}
      >
        {name}
      </div>

      <div
        className={`font-bold text-center leading-none my-2 ${
          featured ? "text-white" : "text-foreground"
        }`}
        style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-2px" }}
      >
        {price}
      </div>

      <div
        className={`text-[11px] font-semibold text-center mb-5 ${
          featured ? "text-white/70" : "text-foreground/60"
        }`}
      >
        {period}
      </div>

      <div
        className={`h-px mb-5 ${
          featured ? "bg-white/30" : "bg-foreground/20"
        }`}
      />

      {perks.map((perk, i) => (
        <div
          key={i}
          className={`text-base py-1 flex items-start gap-2 leading-relaxed ${
            featured ? "text-white/90" : "text-foreground/70"
          }`}
        >
          <span
            className={`font-bold flex-shrink-0 mt-[1px] ${
              featured ? "text-white" : "text-secondary"
            }`}
          >
            ✓
          </span>
          {perk}
        </div>
      ))}
    </div>
  );
}

/* ============ TIER CARD MODAL COMPONENT ============ */
interface TierCardModalProps {
  isOpen: boolean;
  card: {
    icon: string;
    name: string;
    price: string;
    period: string;
    perks: string[];
    featured?: boolean;
    founding?: boolean;
  } | null;
  onClose: () => void;
}

function TierCardModal({ isOpen, card, onClose }: TierCardModalProps) {
  if (!isOpen || !card) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5"
      onClick={onClose}
    >
      <div
        className={`rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-foreground p-8 ${
          card.featured ? "bg-emerald-600" : "bg-white"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 w-8 h-8 flex items-center justify-center border-2 border-foreground font-bold text-lg ${
            card.featured
              ? "bg-white/20 border-white/50 text-white hover:bg-white/30"
              : "bg-foreground text-primary hover:bg-foreground/80"
          } transition-all`}
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div
            className={`w-[64px] h-[64px] border-2 mx-auto mb-4 flex items-center justify-center text-4xl ${
              card.featured
                ? "bg-white/20 border-white/50"
                : "bg-primary border-foreground"
            }`}
          >
            {card.icon}
          </div>
          <h2
            className={`text-3xl font-bold mb-2 ${
              card.featured ? "text-white" : "text-foreground"
            }`}
          >
            {card.name}
          </h2>
          <div
            className={`text-2xl font-bold mb-2 ${
              card.featured ? "text-white" : "text-foreground"
            }`}
          >
            {card.price}
          </div>
          <div
            className={`text-sm font-semibold ${
              card.featured ? "text-white/70" : "text-foreground/60"
            }`}
          >
            {card.period}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px mb-6 ${
            card.featured ? "bg-white/30" : "bg-foreground/20"
          }`}
        />

        {/* Benefits List */}
        <div>
          <h3
            className={`font-bold text-xl mb-4 ${
              card.featured ? "text-white" : "text-foreground"
            }`}
          >
            All Benefits
          </h3>
          <ul className="space-y-3">
            {card.perks.map((perk, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-3 ${
                  card.featured ? "text-white/90" : "text-foreground/70"
                }`}
              >
                <span
                  className={`font-bold flex-shrink-0 mt-[2px] ${
                    card.featured ? "text-white" : "text-secondary"
                  }`}
                >
                  ✓
                </span>
                <span className="text-base leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8 pt-6 border-t-2" style={{
          borderColor: card.featured ? "rgba(255,255,255,0.2)" : "rgba(46,46,46,0.2)"
        }}>
          <button
            onClick={onClose}
            className={`w-full py-3 px-6 font-bold border-2 border-foreground transition-all ${
              card.featured
                ? "bg-white text-emerald-600 hover:bg-white/90"
                : "bg-primary text-foreground hover:bg-primary/90"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SponsorsPage;