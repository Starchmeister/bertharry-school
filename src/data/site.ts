export const site = {
  name: "Bertharry English Private School",
  shortName: "Bertharry",
  address: "14 Mapungubwe Street Tembisa",
  fullAddress: "14 Mapungubwe Street Temong Section Tembisa 1632",
  email: "bertharry@bertharryschools.co.za",
  phone: "+27 (011) 924 6012",
  website: "www.bertharryschools.co.za",
  facebook: "https://www.facebook.com/share/1EJtRb2tzs/?mibextid=wwXIfr",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Pre-Primary", href: "/academics/pre-primary" },
      { label: "Primary School", href: "/academics/primary" },
      { label: "High School", href: "/academics/high-school" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admissions Overview", href: "/admissions" },
      { label: "Fee Structure", href: "/admissions/fee-structure" },
      { label: "Uniforms", href: "/admissions/uniforms" },
      { label: "Textbooks", href: "/admissions/textbooks" },
    ],
  },
  {
    label: "Our Gallery",
    href: "/gallery",
    children: [
      { label: "Events", href: "/gallery/events" },
      { label: "Extra-Curricular", href: "/gallery/extracurricular" },
      { label: "Facilities", href: "/gallery/facilities" },
    ],
  },
  { label: "Apply Online", href: "/apply" },
  { label: "Contact Us", href: "/contact" },
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/about#team" },
  { label: "Our Courses", href: "/academics" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Register Now", href: "/admissions" },
  { label: "Contact Us", href: "/contact" },
];

export const downloads = [
  { label: "Fee Structure 2027", href: "/downloads/Fees Structure 2027 -1.pdf" },
  { label: "Registration Form", href: "/downloads/D6 Enrolment Form and Contract of Enrolment 24.08.2026.pdf" },
];
