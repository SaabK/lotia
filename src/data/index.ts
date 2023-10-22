import shoppingIcon from "../assets/shopping.svg";
import loginIcon from "../assets/login.svg";
import uploadIcon from "../assets/upload.svg";

export const features = [
  {
    icon: shoppingIcon,
    title: "Checkout and sales are handled for you",
    description:
      "You don’t have to figure out a bunch of tools or website embeds. Just connect a payment provider and your Podia site takes care of payments for you.",
  },
  {
    icon: loginIcon,
    title: "Your customers log in, and your products are there for them",
    description:
      "Your Podia site handles access to products for you. Everything is in one place. When your customers buy a product, they get a log in. After that, they can see all the products they’ve bought from you.",
  },
  {
    icon: uploadIcon,
    title: "Upload your product. Make your sales page. Done.",
    description:
      "You could sell a digital product by this afternoon. Podia handles hosting, sales pages, checkout, and delivery. All you need is something to sell.",
  },
];

import coursesImage from "../assets/digital_products-courses.png";
import coachingImage from "../assets/digital_products-coaching.png";
import downloadsImage from "../assets/digital_products-downloads.png";
import webinarsImage from "../assets/digital_products-webinars.png";

export const products = [
  {
    name: "ONLINE COURSES",
    heading: "Beautiful online courses you can build in moments",
    description:
      "Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you.",
    cta: "Learn more about courses",
    review: {
      text: "I've wanted to offer e-courses for a while but always felt overwhelmed with how to set it up. Podia has made it super easy.",
      author: "Joy Cho, Oh Joy! Academy",
    },
    image: coursesImage,
  },
  {
    name: "DIGITAL DOWNLOADS",
    heading: "Ebooks, templates, and any file type you can think of",
    description:
      "Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type.",
    cta: "Learn more about downloads",
    review: {
      text: "We didn’t have to stress about technical details or custom coding. Using Podia made selling our first eBook quick, efficient, and fun.",
      author: "Matt & Steph, Plant-based food bloggers",
    },
    image: downloadsImage,
  },
  {
    name: "COACHING",
    heading:
      "One-on-one coaching and consultations, with billing managed for you",
    description:
      "Sometimes your students want one-on-one attention. Podia makes it easy for you to charge for coaching sessions and consultations",
    cta: "Learn more about coaching",
    review: {
      text: "Podia just works. It’s easy to use and includes everything you need to sell digital products. I’ve tried all the alternatives, and Podia is hard to beat.",
      author: "Shawn Leamon, Divorce and Your Money",
    },
    image: coachingImage,
  },
  {
    name: "WEBINARS",
    heading:
      "Webinars and workshops with registration and payment in one place",
    description:
      "How can you charge for your webinars and workshops? Do it from your Podia site. Set up a paid webinar product and your customers can register straight from your website.",
    cta: "Learn more about webinars",
    review: null,
    image: webinarsImage,
  },
];

export const links = [
  {
    name: "Platform",
    links: [
      "Pricing",
      "Sign up free",
      "Community",
      "Website builder",
      "Digital products",
      "Email marketing",
    ],
  },
  {
    name: "Support",
    links: [
      "Contact us",
      "Help center",
      "Hire a Lotia pro",
      "Creator community",
      "Lotia 101",
    ],
  },
  {
    name: "Features",
    links: [
      "Online courses",
      "Downloads",
      "Webinars",
      "Coaching",
      "All features",
    ],
  },
  {
    name: "Compare",
    links: [
      "Kajabi",
      "Teachable",
      "Thinkific",
      "Patreon",
      "Gumroad",
      "Lotia Alternatives",
    ],
  },
  {
    name: "Resources",
    links: [
      "Examples",
      "Demo",
      "Creator stories",
      "Blog",
      "Free tools",
      "All resources",
    ],
  },
  {
    name: "Lotia",
    links: [
      "Jobs",
      "About",
      "Branding",
      "Reviews",
      "Refer-a-creator",
      "Affliates",
    ],
  },
  {
    name: "Social",
    links: ["Twitter", "Facebook", "Instagram", "YouTube"],
  },
];
