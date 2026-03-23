"use client";

type SocialLinksProps = {
  layout?: "row" | "grid";
  className?: string;
  compact?: boolean;
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/company/thumos-tech",
    label: "Follow us on LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6a2.5 2.5 0 0 0 2.48 2.5A2.5 2.5 0 0 0 7.5 6 2.49 2.49 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1 1.83-2.07 3.77-2.07 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4Z" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    href: "mailto:sanjeev.dhulia@thumostech.com",
    label: "Email us on Gmail",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25Zm2.3.28v10.22h1.95V9.1L12 13.2l5.75-4.1v8.15h1.95V7.03L12 12.4Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919819410442",
    label: "Chat with us on WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2a9.84 9.84 0 0 0-8.5 14.8L2 22l5.34-1.4A10 10 0 1 0 12 2Zm0 18a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.08-.2-.32A8.27 8.27 0 1 1 12 20Zm4.53-6.2c-.25-.13-1.46-.72-1.69-.8s-.39-.12-.56.12-.64.8-.78.97-.28.19-.53.06a6.73 6.73 0 0 1-1.98-1.22 7.41 7.41 0 0 1-1.38-1.72c-.14-.24-.01-.37.1-.5.12-.12.25-.3.37-.44a1.7 1.7 0 0 0 .25-.42.45.45 0 0 0-.02-.44c-.06-.13-.56-1.34-.77-1.84-.2-.47-.4-.41-.56-.42h-.47a.9.9 0 0 0-.65.3 2.77 2.77 0 0 0-.86 2.06 4.81 4.81 0 0 0 1 2.52 11.05 11.05 0 0 0 4.23 3.72 14.46 14.46 0 0 0 1.41.52 3.39 3.39 0 0 0 1.56.1 2.56 2.56 0 0 0 1.67-1.18 2.1 2.1 0 0 0 .15-1.18c-.05-.08-.22-.13-.47-.26Z" />
      </svg>
    ),
  },
];

export default function SocialLinks({
  layout = "row",
  className = "",
  compact = false,
}: SocialLinksProps) {
  const layoutClass =
    layout === "grid" ? "grid grid-cols-1 sm:grid-cols-3 gap-3" : "flex flex-wrap gap-3";

  const itemClass = compact
    ? "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-on-surface-variant hover:border-primary/45 hover:text-primary transition-colors"
    : "inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-on-surface hover:border-primary/45 hover:bg-primary/6 hover:text-primary transition-all";

  return (
    <div className={`${layoutClass} ${className}`.trim()}>
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={item.label}
          className={itemClass}
        >
          <span className="text-primary">{item.icon}</span>
          <span className="font-manrope font-semibold tracking-tight">{item.name}</span>
        </a>
      ))}
    </div>
  );
}
