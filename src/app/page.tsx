
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Commerce experiences",
    description:
      "High-performing Shopify storefronts designed to turn discovery into confident purchases.",
    tags: "Shopify · UX/UI · CRO",
  },
  {
    number: "02",
    title: "Performance marketing",
    description:
      "Connect paid acquisition to business outcomes with creative testing and smarter media.",
    tags: "Meta · Google · Analytics",
  },
  {
    number: "03",
    title: "Customer retention",
    description:
      "Build lasting relationships through personalised email, WhatsApp and lifecycle journeys.",
    tags: "CRM · Email · WhatsApp",
  },
  {
    number: "04",
    title: "Organic growth",
    description:
      "Strengthen search visibility and brand discovery with useful, intent-led content.",
    tags: "SEO · Content · Social",
  },
];

const brands = [
  "TARUN TAHILIANI",
  "GAURAV GUPTA",
  "RAHUL MISHRA",
  "HOUSE OF MASABA",
  "MEENA BAZAAR",
  "RIDHI MEHRA",
];

const products = [
  {
    number: "01",
    name: "Lookify",
    description: "Virtual try-on platform",
    mark: "L",
    className: "product-lookify",
  },
  {
    number: "02",
    name: "Rossify",
    description: "Explore the product with our team",
    mark: "R",
    className: "product-rossify",
  },
  {
    number: "03",
    name: "Craftify",
    description: "Explore the product with our team",
    mark: "C",
    className: "product-craftify",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="arrow-link" href={href}>
      {children} <ArrowUpRight size={16} />
    </a>
  );
}

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    service: "Performance Marketing",
  });

  const [status, setStatus] = useState("");

 

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setStatus("Submitting your details...");

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Submission failed. Please try again."
      );
    }

    setStatus(
      "Thanks! Your enquiry has been saved successfully. We’ll be in touch soon."
    );
  } catch (error) {
    setStatus(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  }
}


  return (
    <main>
      <div className="announcement">
        <Sparkles size={14} />
        <span>Growth, commerce and technology — working as one.</span>
        <a href="#approach">
          Discover our approach <ArrowRight size={14} />
        </a>
      </div>

      <header className="navbar">
        <a className="wordmark" href="#home">
          growify<span>.</span>
          <small>DIGITAL</small>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
         <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#products">Technology</a>
          <a href="#approach">About</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero section-pad" id="home">
        <div className="hero-copy">
          <SectionLabel>THE GROWTH PARTNER FOR AMBITIOUS BRANDS</SectionLabel>

          <h1>
            Make your next
            <br />
            chapter
            <br />
            <span>extraordinary.</span>
          </h1>

          <p>
            We bring commerce, customer experience and technology together
            to help ambitious fashion and lifestyle brands grow with intent.
          </p>

          <div className="hero-actions">
            <a className="button-dark" href="#contact">
              Build your growth plan <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#services">
              Explore our capabilities <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="hero-bottom">
            <div className="hero-mini-marks">
              <span>G</span>
              <span>D</span>
              <span>+</span>
            </div>
            <p>
              Built around your business.
              <br />
              Connected at every step.
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Grow with intent visual">
          <div className="hero-visual-caption">
            <span>GROW</span>
            <span>WITH</span>
            <span>INTENT.</span>
          </div>
          <div className="hero-sun" />
          <div className="hero-ring hero-ring-one" />
          <div className="hero-ring hero-ring-two" />
          <div className="hero-object">
            <div className="hero-object-top" />
            <div className="hero-object-body" />
            <div className="hero-object-base" />
          </div>
          <div className="hero-visual-footer">
            <span>01 / THE BIG PICTURE</span>
            <span>DESIGNED FOR WHAT&apos;S NEXT</span>
          </div>
        </div>
      </section>

      <div className="hero-strip">
        <span>STRATEGY</span>
        <span>•</span>
        <span>COMMERCE</span>
        <span>•</span>
        <span>GROWTH</span>
        <span>•</span>
        <span>INTELLIGENCE</span>
        <a href="#approach">SCROLL TO EXPLORE ↓</a>
      </div>

      <section className="approach section-pad" id="approach">
        <div className="approach-heading">
          <div>
            <SectionLabel>MORE THAN AN AGENCY</SectionLabel>
            <h2>
              Growth doesn&apos;t happen
              <br />
              in <span>isolated channels.</span>
            </h2>
          </div>

          <div className="approach-copy">
            <p>
              It happens when every interaction works together. From the first
              impression to the repeat purchase, we help connect the systems
              behind a better customer experience.
            </p>
            <ArrowLink href="#contact">Meet your growth partner</ArrowLink>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div>
            <SectionLabel>ONE CONNECTED GROWTH STACK</SectionLabel>
            <h2>Every piece has a purpose.</h2>
          </div>
          <p>
            Thoughtful strategy. Better execution.
            <br />A clearer path from attention to loyalty.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <a
              className="service-card"
              href="/services"
              key={service.number}
            >
              <div className="service-card-top">
                <span>{service.number}</span>
                <ArrowUpRight size={19} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-tags">{service.tags}</span>
            </a>
          ))}
        </div>

        <div className="services-bottom">
          <span>FROM FIRST CLICK TO LONG-TERM VALUE</span>
          <ArrowLink href="/services">Explore all services</ArrowLink>
        </div>
      </section>

      <section className="brands section-pad" id="brands">
        <div className="brands-heading">
          <SectionLabel>IN GOOD COMPANY</SectionLabel>
          <h2>
            Built alongside brands with a
            <br />
            point of view.
          </h2>
          <p>A selection of names featured in Growify&apos;s company catalogue.</p>
        </div>

        <div className="brand-grid">
          {brands.map((brand) => (
            <div className="brand-cell" key={brand}>
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading">
          <div>
            <SectionLabel>THE WORK IN ACTION</SectionLabel>
            <h2>Ambition, meet execution.</h2>
          </div>
          <p>Explore the opportunity behind every growth story.</p>
        </div>

        <div className="case-grid">
          <article className="case-card case-large">
            <div className="case-art case-art-one">
              <span className="case-art-kicker">
                FASHION / DIGITAL COMMERCE
              </span>
              <div className="case-art-circle" />
              <span className="case-art-word">MM.</span>
              <span className="case-art-bottom">
                A STUDY IN MODERN LUXURY
              </span>
            </div>
            <div className="case-info">
              <div>
                <span className="case-category">
                  GROWTH &amp; INTERNATIONAL EXPANSION
                </span>
                <h3>Mahima Mahajan</h3>
              </div>
              <ArrowUpRight size={21} />
            </div>
          </article>

          <article className="case-card">
            <div className="case-art case-art-two">
              <span className="case-art-kicker">
                DESIGN / CUSTOMER VALUE
              </span>
              <div className="case-art-arch" />
              <span className="case-art-word">RM.</span>
              <span className="case-art-bottom">
                CRAFTED TO BE REMEMBERED
              </span>
            </div>
            <div className="case-info">
              <div>
                <span className="case-category">
                  RETENTION &amp; CUSTOMER EXPERIENCE
                </span>
                <h3>Ridhi Mehra</h3>
              </div>
              <ArrowUpRight size={21} />
            </div>
          </article>
        </div>

        <p className="disclaimer">
          Case-study previews are illustrative. Confirm approved case-study
          scope and performance data with Growify before publication.
        </p>
      </section>

      <section className="technology section-pad" id="products">
        <div className="technology-copy">
          <SectionLabel>TECHNOLOGY WITH A JOB TO DO</SectionLabel>
          <h2>
            Better experiences.
            <br />
            <span>Smarter growth.</span>
          </h2>
          <p>
            Explore the technology portfolio alongside the growth services.
            Product capabilities and demonstrations should be confirmed with
            the Growify team before launch.
          </p>
          <ArrowLink href="#contact">Discuss a product demo</ArrowLink>
        </div>

        <div className="product-stack">
          {products.map((product) => (
            <article
              className={`product-card ${product.className}`}
              key={product.number}
            >
              <span className="product-index">
                {product.number} / PRODUCT PORTFOLIO
              </span>
              <div className="product-mark">{product.mark}</div>
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <ArrowUpRight size={21} />
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-orb" />
        <SectionLabel>YOUR NEXT CHAPTER STARTS HERE</SectionLabel>
        <h2>
          Let&apos;s make
          <br />
          growth <span>mean more.</span>
        </h2>
        <p>
          Tell us where you want to go. We&apos;ll help you think through what
          comes next.
        </p>

        <form className="lead-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input
              required
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              placeholder="Full name"
            />
          </label>

          <label>
            Work email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              placeholder="you@company.com"
            />
          </label>

          <label>
            Brand name
            <input
              name="brand"
              value={form.brand}
              onChange={(event) =>
                setForm({ ...form, brand: event.target.value })
              }
              placeholder="Your brand"
            />
          </label>

          <label>
            What can we help with?
            <select
              name="service"
              value={form.service}
              onChange={(event) =>
                setForm({ ...form, service: event.target.value })
              }
            >
              <option>Website Development &amp; Revamp</option>
              <option>Performance Marketing</option>
              <option>Email &amp; WhatsApp Marketing</option>
              <option>SEO &amp; Social Media</option>
              <option>AI &amp; Technology</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <button className="button-light lead-submit" type="submit">
            Send enquiry <ArrowUpRight size={17} />
          </button>

          <p className="lead-status" role="status" aria-live="polite">
            {status}
          </p>
        </form>

        <span className="contact-note">
          A thoughtful conversation. A clearer direction.
        </span>
      </section>

      <footer className="footer">
        <a className="wordmark footer-mark" href="#home">
          growify<span>.</span>
          <small>DIGITAL</small>
        </a>
        <p>Commerce, customer experience and technology. Connected.</p>
        <div className="footer-links">
          <a href="/services">Services</a>
          <a href="#work">Our work</a>
          <a href="#products">Technology</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="copyright">
          © 2026 Growify Digital. Concept redesign.
        </span>
      </footer>
    </main>
  );
}
