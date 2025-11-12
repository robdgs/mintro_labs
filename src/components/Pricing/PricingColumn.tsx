'use client';
import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, Users, BookOpen, Wrench, FlaskConical, GraduationCap } from 'lucide-react';

type IconComponent = typeof Wrench;

interface ModalContent {
  title: string;
  icon: IconComponent;
  description: string;
  duration: string;
  participants: string;
  format: string;
  benefits: string[];
  whatsIncluded: string[];
}

interface Tier {
  name: string;
  price: string;
  features: string[];
  buttonColor: string;
  highlight?: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const modalContent: Record<string, ModalContent> = {
  Workshop: {
    title: 'Workshop Details',
    icon: Wrench,
    description: 'Hands-on, interactive sessions designed to build practical skills in a collaborative environment.',
    duration: '2-4 hours',
    participants: 'Up to 30 people',
    format: 'Interactive & Practical',
    benefits: [
      'Immediate hands-on practice with real-world scenarios',
      'Direct interaction with expert instructors',
      'Collaborative problem-solving with peers',
      'Take-home resources and materials',
      'Certificate of completion',
    ],
    whatsIncluded: [
      'All necessary materials and tools',
      'Digital workbook and resources',
      'Post-workshop support (1 week)',
      'Access to community forum',
    ],
  },
  Lab: {
    title: 'Lab Session Details',
    icon: FlaskConical,
    description: 'Intensive, experimental learning sessions where you can explore, test, and innovate in a controlled environment.',
    duration: '4-8 hours',
    participants: 'Up to 15 people',
    format: 'Experimental & Exploratory',
    benefits: [
      'Deep-dive into advanced concepts and techniques',
      'Access to specialized equipment and tools',
      'One-on-one mentorship opportunities',
      'Freedom to experiment and iterate',
      'Detailed feedback on your work',
    ],
    whatsIncluded: [
      'Advanced learning materials',
      'Personal project guidance',
      'Post-lab consultation (2 weeks)',
      'Professional certificate',
    ],
  },
  Course: {
    title: 'Course Details',
    icon: GraduationCap,
    description: 'Comprehensive, structured learning programs designed to provide in-depth knowledge and mastery of the subject.',
    duration: '8-12 weeks',
    participants: 'Up to 50 people',
    format: 'Structured & Comprehensive',
    benefits: [
      'Complete curriculum with progressive learning',
      'Weekly live sessions and Q&A',
      'Assignments and practical projects',
      'Peer learning and networking opportunities',
      'Industry-recognized certification',
    ],
    whatsIncluded: [
      'Full course materials and recordings',
      'Interactive learning platform access',
      'Personal learning dashboard',
      'Ongoing instructor support',
      'Career guidance and placement assistance',
    ],
  },
};

const tiers: Tier[] = [
  {
    name: 'Workshop',
    price: 'Workshop',
    features: [      'All necessary materials and tools',
      'Digital workbook and resources',
      'Post-workshop support (1 week)',
      'Access to community forum'],
    buttonColor: 'bg-gray-100 hover:bg-gray-200 text-foreground',
  },
  {
    name: 'Lab',
    price: 'Lab',
    features: [
'Advanced learning materials',
'Personal project guidance',
'Post-lab consultation (2 weeks)',
'Onchain certificate'],
    buttonColor: 'bg-secondary hover:bg-secondary text-white',
    highlight: true,
  },
  {
    name: 'Course',
    price: 'Course',
    features: ['Full course materials and recordings',
'Personalized learning path',
'Ongoing instructor support',
'Challenges and competitions'],
    buttonColor: 'bg-gray-100 hover:bg-gray-200 text-foreground',
  },
];

function Modal({ isOpen, onClose, children }: ModalProps): JSX.Element | null {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto text-foreground">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl animate-fadeIn">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function PricingWithModals(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const openModal = (tierName: string): void => {
    setSelectedTier(tierName);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setTimeout(() => setSelectedTier(null), 300);
  };

  const currentContent: ModalContent | null = selectedTier ? modalContent[selectedTier] : null;
  const IconComponent: IconComponent | undefined = currentContent?.icon;

  return (
    <div className=" bg-white  px-2">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto text-foreground">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex-1 text-foreground"
            >
              <h2 className={`text-4xl font-bold mb-6 ${tier.highlight ? 'text-secondary' : 'text-foreground'}`}>
                {tier.price}
              </h2>
              <button
                onClick={() => openModal(tier.name)}
                className={`w-full ${tier.buttonColor} font-medium py-3 px-6 rounded-full transition-colors duration-200 mb-8`}
              >
                Learn more
              </button>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">What is included:</h3>
                {tier.name === 'Lab' && (
                  <p className="text-gray-700 mb-3">Everything in Workshop, plus:</p>
                )}
                {tier.name === 'Course' && (
                  <p className="text-gray-700 mb-3">Everything in Lab, plus:</p>
                )}
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    feature && (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="relative max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-200">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          {currentContent && IconComponent && (
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-4 rounded-2xl">
                  <IconComponent className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {currentContent.title}
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {currentContent.description}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <Calendar className="w-6 h-6 text-emerald-600 mb-2" />
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="text-gray-900 font-semibold">{currentContent.duration}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <Users className="w-6 h-6 text-emerald-600 mb-2" />
                  <div className="text-sm text-gray-500">Participants</div>
                  <div className="text-gray-900 font-semibold">{currentContent.participants}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <BookOpen className="w-6 h-6 text-emerald-600 mb-2" />
                  <div className="text-sm text-gray-500">Format</div>
                  <div className="text-gray-900 font-semibold">{currentContent.format}</div>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-500 rounded"></span>
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {currentContent.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-500 rounded"></span>
                  What's Included
                </h4>
                <ul className="space-y-3">
                  {currentContent.whatsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons 
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl transition-colors duration-200 shadow-sm">
                  Enroll Now
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-4 rounded-xl transition-colors duration-200 border border-gray-200">
                  Schedule a Call
                </button>
              </div> */}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}