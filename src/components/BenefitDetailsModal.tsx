"use client";

import React from "react";

interface BenefitDescriptions {
  [key: string]: {
    title: string;
    description: string;
    details: string[];
  };
}

const benefitDescriptions: BenefitDescriptions = {
  "Logo on platform & materials": {
    title: "Logo on Platform & Materials",
    description:
      "Your brand will be prominently displayed across all Mintro learning materials and platforms.",
    details: [
      "Featured on the AI learning platform visible to thousands of students",
      "Included on course materials, certificates, and educational content",
      "Visible in press releases, marketing materials, and promotional channels",
      "Co-branding on all sponsored modules and learning tracks",
    ],
  },
  "Social media mention": {
    title: "Social Media Mention",
    description:
      "Regular promotion of your partnership across Mintro's social channels.",
    details: [
      "Mentioned in Mintro's newsletter reaching thousands of subscribers",
      "Featured in social media posts on Instagram, LinkedIn, Twitter/X, and Discord",
      "Tagged in community updates and partnership announcements",
      "Co-authored blog posts and thought leadership content",
    ],
  },
  "Certificate co-branding": {
    title: "Certificate Co-Branding",
    description:
      "Your logo appears on every on-chain certificate earned by students who complete sponsored learning tracks.",
    details: [
      "Your brand on verifiable on-chain credentials stored forever",
      "Every graduate becomes an ambassador for your brand",
      "Certificates are shareable and visible in students' Web3 portfolios",
      "Direct connection between your protocol and certified skills",
    ],
  },
  "Branded learning module": {
    title: "Branded Learning Module",
    description:
      "Custom educational content featuring your protocol, tools, and use cases.",
    details: [
      "Co-created curricula emphasizing your protocol's unique features",
      "Interactive lessons and hands-on tutorials using your platform",
      "Challenges and projects built around your technology stack",
      "Students graduate with practical experience building with your tools",
    ],
  },
  "Workshop speaking slot": {
    title: "Workshop Speaking Slot",
    description:
      "Your team leads a live workshop with students at schools and events.",
    details: [
      "Direct engagement with 30-100+ students at a time",
      "Hands-on demonstration of your protocol and development tools",
      "Q&A session to connect with emerging talent firsthand",
      "Physical or virtual workshops across Italian institutions",
    ],
  },
  "Talent pool access": {
    title: "Talent Pool Access",
    description:
      "Direct access to verified, top-performing graduates for recruitment.",
    details: [
      "Seed: Available through community connections",
      "Growth: 5 pre-screened CVs of top performers per semester",
      "Scale: Unlimited access to graduate database and on-chain verified skills",
      "Founding: Unlimited + priority access and priority interview slots",
    ],
  },
  "Dedicated learning track": {
    title: "Dedicated Learning Track",
    description:
      "A full semester-long curriculum entirely focused on your protocol and ecosystem.",
    details: [
      "Multi-week course structure with progression-based learning",
      "Your team involved in curriculum design and validation",
      "Culminates in capstone project or hackathon challenge",
      "Students graduate as experts on your platform",
    ],
  },
  "Co-branded hackathon": {
    title: "Co-Branded Hackathon",
    description: "Host a live hackathon challenge featuring your protocol.",
    details: [
      "Organized event with 50-200+ student participants",
      "Branded challenges and prize pools",
      "Your team judges projects and connects with builders",
      "Winners showcase their projects at events and on your channels",
    ],
  },
  "AI tutor integration": {
    title: "AI Tutor Integration",
    description:
      "Your protocol integrated into Mintro's AI tutor to help students learn with your tools.",
    details: [
      "AI-powered tutoring system trained on your documentation",
      "Real-time support as students build with your technology",
      "Continuous learning feedback tied to your protocol features",
      "Students get hands-on mentorship while you stay top-of-mind",
    ],
  },
  "Exclusive category lock": {
    title: "Exclusive Category Lock",
    description:
      "Your protocol becomes the exclusive featured solution in its category.",
    details: [
      "Only one sponsor per category (DeFi, NFT, L2, etc.)",
      "Competitors cannot sponsor at Scale or Founding tiers",
      "Multi-year protection of your exclusive market position",
      "Focus and differentiation in all materials",
    ],
  },
  "Advisory board seat": {
    title: "Advisory Board Seat",
    description:
      "Strategic input into Mintro Labs' roadmap and curriculum decisions.",
    details: [
      "Quarterly advisory board meetings with leadership",
      "Input on course design, partnerships, and expansion strategy",
      "Early visibility into new initiatives and partnerships",
      "Shape the future of Web3 education alongside other industry leaders",
    ],
  },
  "Custom curriculum co-design": {
    title: "Custom Curriculum Co-Design",
    description:
      "Work directly with Mintro's pedagogy team to design custom learning modules.",
    details: [
      "Your team participates in curriculum development and validation",
      "Fully customized learning paths for your specific use cases",
      "Content reflects your protocol's latest features and best practices",
      "Exclusive educational assets you can also use for your own programs",
    ],
  },
};

interface BenefitDetailsModalProps {
  isOpen: boolean;
  benefitName: string | null;
  onClose: () => void;
}

const BenefitDetailsModal: React.FC<BenefitDetailsModalProps> = ({
  isOpen,
  benefitName,
  onClose,
}) => {
  if (!isOpen || !benefitName) return null;

  const benefit = benefitDescriptions[benefitName];

  if (!benefit) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-foreground shadow-[10px_10px_0px_0px_rgba(46,46,46,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-primary border-2 border-foreground font-bold text-lg hover:shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] transition-all"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Content */}
        <div className="p-8">
          <h2
            className="font-bold text-foreground mb-3 leading-tight"
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              letterSpacing: "-1px",
            }}
          >
            {benefit.title}
          </h2>

          <div className="w-[60px] h-1 bg-secondary mb-6" />

          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            {benefit.description}
          </p>

          <div className="space-y-3">
            {benefit.details.map((detail, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-secondary text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-foreground/80 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-foreground/10">
            <p className="text-sm text-foreground/60">
              Want to learn more about sponsorship tiers? Contact our
              partnerships team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitDetailsModal;
