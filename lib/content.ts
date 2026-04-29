export type Service = {
  icon: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: "shield_person",
    title: "Professional Security Services",
    slug: "professional-security-services",
    description:
      "Security programs designed with the right architecture, controls, and rollout sequencing for enterprise environments under real operational pressure.",
    features: ["Security Architecture Advisory", "Implementation and Integration"],
  },
  {
    icon: "school",
    title: "Training Delivery",
    slug: "training-delivery",
    description:
      "Practical enablement that helps internal teams, administrators, and security stakeholders operate modern tooling with confidence.",
    features: ["Vendor Certification Programs", "Hands-On Security Workshops"],
  },
  {
    icon: "fact_check",
    title: "Security Audits",
    slug: "security-audits",
    description:
      "Structured assessments to evaluate posture, identify control gaps, and prepare teams for remediation, compliance, and executive review.",
    features: ["Vulnerability and Gap Assessment", "Compliance Readiness Reviews"],
  },
  {
    icon: "support_agent",
    title: "24x7 AMC",
    slug: "24x7-amc",
    description:
      "Always-on maintenance and operational support to keep critical security platforms healthy, tuned, and available around the clock.",
    features: ["Preventive Health Checks", "Issue Resolution and Support"],
  },
  {
    icon: "code_blocks",
    title: "Secure App and Web Development",
    slug: "secure-app-and-web-development",
    description:
      "Application delivery with secure engineering practices built in from day one, reducing risk across the full development lifecycle.",
    features: ["Secure SDLC Practices", "Application Hardening"],
  },
  {
    icon: "crisis_alert",
    title: "Incident Response",
    slug: "incident-response",
    description:
      "Rapid mobilization teams available 24/7 to contain, mitigate, and recover from breaches with minimal disruption.",
    features: ["Containment and Recovery Support", "Root Cause Investigation"],
  },
];

export type FAQItem = {
  question: string;
  answer: string;
  slug: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How quickly can Thumos Tech respond to a security incident?",
    slug: "response-time",
    answer:
      "Thumos Tech provides rapid incident mobilization with triage and containment support available 24/7, designed to minimize disruption and restore secure operations as fast as possible.",
  },
  {
    question: "What security frameworks does Thumos Tech align with?",
    slug: "security-frameworks",
    answer:
      "Our programs are aligned with industry best practices including ISO, SOC2, NIST, and cloud-native security models so you get a practical, audit-ready posture.",
  },
  {
    question: "Can you support hybrid and cloud-native environments?",
    slug: "hybrid-cloud-support",
    answer:
      "Yes. We support hybrid, multi-cloud and on-prem deployments with secure controls, monitoring, and response tailored to your architecture.",
  },
  {
    question: "Do you provide training for internal teams?",
    slug: "training-coverage",
    answer:
      "We deliver security enablement for administrators, developers, and leadership through hands-on workshops, platform-specific training, and certification preparation.",
  },
];
