// Example: How to Apply Scroll Effects to Additional Sections

import { FadeInUp, SlideLeft, SlideRight, ScaleIn, StaggerContainer, StaggerItem } from "@/components/ScrollSection";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div style={{
      border: "1px solid #e2e8f0",
      borderRadius: 12,
      background: "white",
      padding: "20px 24px",
    }}>
      <div style={{
        fontSize: 15,
        fontWeight: 600,
        color: "#006064",
        marginBottom: 10,
      }}>
        {question}
      </div>
      <p style={{
        fontSize: 14,
        lineHeight: 1.7,
        color: "#00838f",
        margin: 0,
      }}>
        {answer}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXAMPLE 1: FAQ Section with Staggered Cards
// ─────────────────────────────────────────────────────────────────────────────

export function FAQSectionWithEffects() {
  const faqs = [
    {
      question: "How fast can you deliver?",
      answer: "We deliver your MVP in 14 days guaranteed, or we keep building for free."
    },
    {
      question: "What if I'm not happy with the result?",
      answer: "Our Ship-It Guarantee means we deliver a live product you can demo and use."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer post-launch support and feature additions."
    },
  ];

  return (
    <section style={{ padding: "80px 48px", background: "white" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        
        {/* Heading with scroll effect */}
        <FadeInUp>
          <h2 style={{ fontSize: 36, color: "#006064", textAlign: "center", marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
        </FadeInUp>

        {/* FAQ items with staggered animation */}
        <StaggerContainer staggerDelay={0.2}>
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// EXAMPLE 2: Features Grid with Individual Item Animations
// ─────────────────────────────────────────────────────────────────────────────

export function FeaturesGridWithEffects() {
  const features = [
    { icon: "⚡", title: "14-Day Delivery", desc: "From idea to live product in two weeks" },
    { icon: "🛡️", title: "Ship Guarantee", desc: "Or we keep building free until launch" },
    { icon: "📦", title: "Full Codebase", desc: "Complete source code & documentation" },
    { icon: "👥", title: "Dedicated Team", desc: "Experienced full-stack developers" },
  ];

  return (
    <section style={{ padding: "80px 48px", background: "#f0f9ff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Title */}
        <FadeInUp>
          <h2 style={{ fontSize: 36, color: "#006064", textAlign: "center", marginBottom: 60 }}>
            Why Choose Elden Dev
          </h2>
        </FadeInUp>

        {/* Features grid with individual animations */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 24,
        }}>
          {features.map((feature, i) => (
            <ScaleIn key={i} delay={i * 0.15}>
              <div style={{
                padding: 32,
                background: "white",
                borderRadius: 16,
                border: "1px solid #b2ebf2",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{feature.icon}</div>
                <h3 style={{ fontSize: 18, color: "#006064", marginBottom: 12 }}>{feature.title}</h3>
                <p style={{ fontSize: 14, color: "#00838f", margin: 0 }}>{feature.desc}</p>
              </div>
            </ScaleIn>
          ))}
        </div>

      </div>
    </section>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// EXAMPLE 3: Stats Section with Split Layout
// ─────────────────────────────────────────────────────────────────────────────

export function StatsSectionWithEffects() {
  return (
    <section style={{ padding: "80px 48px", background: "#e0f7fa" }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 60,
        alignItems: "center",
      }}>

        {/* Left: Text content sliding in from left */}
        <SlideLeft>
          <h2 style={{ fontSize: 36, color: "#006064", marginBottom: 24 }}>
            50+ Founders Have Launched
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {["$150K seed raised", "12-day avg delivery", "8x client ROI"].map((stat, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div style={{
                  padding: 16,
                  background: "white",
                  borderRadius: 12,
                  borderLeft: "4px solid #00acc1",
                }}>
                  <strong style={{ color: "#00838f" }}>{stat}</strong>
                </div>
              </FadeInUp>
            ))}
          </div>
        </SlideLeft>

        {/* Right: Image/Visual content sliding in from right */}
        <SlideRight>
          <div style={{
            background: "white",
            borderRadius: 20,
            padding: 40,
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,172,193,0.1)",
          }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>📊</div>
            <p style={{ color: "#00838f", fontSize: 14 }}>Real metrics from our founders</p>
          </div>
        </SlideRight>

      </div>
    </section>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// EXAMPLE 4: Process Steps with Staggered Animation
// ─────────────────────────────────────────────────────────────────────────────

export function ProcessStepsWithEffects() {
  const steps = [
    { num: "01", title: "Blueprint", desc: "We define your MVP scope and feature set" },
    { num: "02", title: "Build", desc: "Daily development with live previews" },
    { num: "03", title: "Launch", desc: "Go live and start validation" },
  ];

  return (
    <section style={{ padding: "80px 48px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Heading */}
        <FadeInUp>
          <h2 style={{ fontSize: 36, color: "#006064", textAlign: "center", marginBottom: 60 }}>
            Our Process
          </h2>
        </FadeInUp>

        {/* Steps with staggered fade-in */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
        }}>
          <StaggerContainer staggerDelay={0.2}>
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div style={{
                  padding: 32,
                  background: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
                  borderRadius: 16,
                  textAlign: "center",
                  border: "1px solid #80deea",
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: "#00acc1", marginBottom: 16 }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: 20, color: "#006064", marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "#00838f", margin: 0 }}>{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// EXAMPLE 5: CTA Section with Sequential Animations
// ─────────────────────────────────────────────────────────────────────────────

export function CTASectionWithEffects() {
  return (
    <section style={{ padding: "100px 48px", background: "#006064", color: "white", textAlign: "center" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        {/* Title slides up */}
        <FadeInUp>
          <h2 style={{ fontSize: 40, marginBottom: 24 }}>
            Ready to Launch Your MVP?
          </h2>
        </FadeInUp>

        {/* Description fades in with delay */}
        <FadeInUp delay={0.2}>
          <p style={{ fontSize: 18, marginBottom: 40, opacity: 0.9 }}>
            Join 50+ founders who shipped in 14 days. Let&apos;s build something great.
          </p>
        </FadeInUp>

        {/* Buttons scale in */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <ScaleIn delay={0.4}>
            <button style={{
              padding: "14px 32px",
              background: "#00acc1",
              color: "#006064",
              border: "none",
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}>
              Get Started →
            </button>
          </ScaleIn>

          <ScaleIn delay={0.5}>
            <button style={{
              padding: "14px 32px",
              background: "transparent",
              color: "white",
              border: "2px solid #00acc1",
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}>
              Schedule Call
            </button>
          </ScaleIn>
        </div>

      </div>
    </section>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// How to use these examples in your page.tsx:
// ─────────────────────────────────────────────────────────────────────────────

/*
import {
  FAQSectionWithEffects,
  FeaturesGridWithEffects,
  StatsSectionWithEffects,
  ProcessStepsWithEffects,
  CTASectionWithEffects,
} from "@/components/ExampleScrollEffects";

export default function HeroSection() {
  return (
    <>
      <HeroBadge />
      <section>
        ... existing hero content ...
      </section>

      <FAQSectionWithEffects />
      <FeaturesGridWithEffects />
      <StatsSectionWithEffects />
      <ProcessStepsWithEffects />
      <CTASectionWithEffects />
    </>
  );
}
*/
