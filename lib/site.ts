export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nascence Group",
  description: "Placeholder.",
  callToAction: {
    label: "Schedule a Call",
    href: "/schedule-a-call",
  },
  address: {
    street: "1420 N. Cooper St, Ste. 104",
    city: "Arlington, TX 76011",
  },
  contact: {
    email: "info@thenascencegroup.com",
    phone: "(469) 447-6007",
  },
  navItems: [
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Capabilities",
      href: "/capabilities",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    linkedin: "#",
    instagram: "#",
  },
};
