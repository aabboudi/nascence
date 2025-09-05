export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nascence Group",
  description: "Placeholder.",
  address: {
    main: {
      street: "1420 N. Cooper St, Ste. 104",
      city: "Arlington, TX 76011",
    },
    branch: {
      street: "2423 Maryland Ave, Ste. 301",
      city: "Baltimore, MD 21218",
    }
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
    linkedin: "https://www.linkedin.com/company/nascence-group/",
    facebook: "https://facebook.com/Thenascencegroup/",
  },
};
