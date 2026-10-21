
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Globe2,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Website Development & Revamp",
    description:
      "Create a commerce experience that reflects your brand, makes product discovery effortless and supports conversion.",
    includes: ["Shopify storefronts", "UX/UI design", "Conversion optimisation"],
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Performance Marketing",
    description:
      "Connect paid campaigns to business goals through creative experimentation, audience strategy and measurement.",
    includes: ["Meta advertising", "Google advertising", "Campaign analysis"],
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Email & WhatsApp Marketing",
    description:
      "Turn one-time interactions into ongoing customer relationships with relevant, timely lifecycle communication.",
    includes: ["Lifecycle journeys", "Campaign planning", "Retention strategy"],
  },
  {
    number: "04",
    icon: Globe2,
    title: "SEO & Social Media",
    description:
      "Build sustainable discoverability with useful content, search optimisation and a consistent social presence.",
    includes: ["Search optimisation", "Content strategy", "Social media"],
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="announcement">
        <span>Growth, commerce and technology — working as one.</span>
        <Link href="/#contact">Let&apos;s talk ↗</Link>
      </div>

      <header className="navbar">
        <Link className="wordmark" href="/">
          growify<span>.</span><small>DIGITAL</small>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/#brands">Our work</Link>
          <Link href="/#products">Technology</Link>
        </nav>
        <Link className="nav-cta" href="/#contact">
          Let&apos;s talk <ArrowUpRight size={16} />
        </Link>
      </header>

      <section className="services-page-hero">
        <p className="section-label">
          <span /> THE GROWIFY GROWTH STACK
        </p>
        <h1>
          Every channel connected.
          <br />
          <span>Every move intentional.</span>
        </h1>
        <p className="services-page-lead">
          Growth works harder when the storefront, acquisition, customer
          conversations and retention strategy work together. Explore the
          capabilities that help bring that system to life.
        </p>
        <Link className="button-dark" href="/#contact">
          Discuss your growth goals <ArrowUpRight size={17} />
        </Link>
      </section>

      <section className="services-page-list">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="services-page-card" key={service.number}>
              <div className="services-page-card-top">
                <span>{service.number} / CAPABILITY</span>
                <Icon size={24} strokeWidth={1.4} />
              </div>

              <h2>{service.title}</h2>
              <p>{service.description}</p>

              <ul>
                {service.includes.map((item) => (
                  <li key={item}>
                    <span>—</span> {item}
                  </li>
                ))}
              </ul>

              <Link className="arrow-link" href="/#contact">
                Explore this service <ArrowDownRight size={17} />
              </Link>
            </article>
          );
        })}
      </section>

      <section className="services-page-cta">
        <p className="section-label">
          <span /> START WITH THE OPPORTUNITY
        </p>
        <h2>
          Your business is unique.
          <br />
          <span>Your growth system should be, too.</span>
        </h2>
        <p>
          Tell us about your goals and we can explore which capabilities
          fit your business.
        </p>
        <Link className="button-light" href="/#contact">
          Start a conversation <ArrowUpRight size={17} />
        </Link>
      </section>

      <footer className="footer">
        <Link className="wordmark footer-mark" href="/">
          growify<span>.</span><small>DIGITAL</small>
        </Link>
        <p>Commerce, customer experience and technology. Connected.</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/#products">Technology</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <span className="copyright">© 2026 Growify Digital. Concept redesign.</span>
      </footer>
    </main>
  );
}
