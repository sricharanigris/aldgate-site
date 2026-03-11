export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#081018",
      color: "white",
      fontFamily: "Inter, Arial, sans-serif",
      padding: "40px 20px"
    }}>
      <section style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "80px" }}>
        <div style={{
          fontSize: "12px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#E5B84C",
          marginBottom: "20px"
        }}>
          A global systems intelligence firm
        </div>

        <h1 style={{
          fontSize: "clamp(42px, 8vw, 96px)",
          lineHeight: "0.95",
          letterSpacing: "-0.05em",
          margin: 0,
          maxWidth: "900px"
        }}>
          Designing intelligent architecture for complex real-world systems.
        </h1>

        <p style={{
          marginTop: "28px",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#A7B4C0",
          maxWidth: "760px"
        }}>
          Aldgate &amp; Co combines institutional thinking, strategic intelligence,
          and technology architecture to understand how operational environments
          behave under real conditions — and how they can be structurally redesigned.
        </p>

        <div style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginTop: "28px"
        }}>
          <a
            href="#contact"
            style={{
              background: "#E5B84C",
              color: "#10161f",
              padding: "14px 22px",
              borderRadius: "999px",
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            Connect with Aldgate
          </a>

          <a
            href="#thesis"
            style={{
              border: "1px solid rgba(255,255,255,.15)",
              color: "white",
              padding: "14px 22px",
              borderRadius: "999px",
              textDecoration: "none"
            }}
          >
            Explore the thesis
          </a>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "80px auto 0" }}>
        <div style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
        }}>
          {[
            {
              title: "Institutional",
              text: "Language calibrated for strategic credibility and long-term seriousness."
            },
            {
              title: "Futuristic",
              text: "Aldgate is framed as a systems lab for the next generation of intelligence infrastructure."
            },
            {
              title: "Research-led",
              text: "The website presents a point of view on structural problems before it presents intervention."
            }
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "24px",
                background: "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.015))",
                padding: "22px"
              }}
            >
              <h3 style={{ marginTop: 0 }}>{item.title}</h3>
              <p style={{ color: "#A7B4C0", lineHeight: "1.7", marginBottom: 0 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="thesis" style={{ maxWidth: "1200px", margin: "100px auto 0" }}>
        <div style={{
          fontSize: "12px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#E5B84C",
          marginBottom: "16px"
        }}>
          Systems Thesis
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 6vw, 64px)",
          lineHeight: "1.02",
          letterSpacing: "-0.04em",
          margin: 0
        }}>
          Most industries were never designed as coherent systems.
        </h2>
        <p style={{
          marginTop: "18px",
          color: "#A7B4C0",
          lineHeight: "1.8",
          maxWidth: "820px"
        }}>
          They emerged through layered workarounds, partial digitization, fragmented incentives,
          and localized decisions. Structural friction is therefore not incidental. It is embedded
          into the architecture of the system itself.
        </p>
      </section>

      <section id="contact" style={{ maxWidth: "1200px", margin: "100px auto 0", paddingBottom: "60px" }}>
        <div style={{
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: "28px",
          padding: "28px",
          background: "linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.015))"
        }}>
          <div style={{
            fontSize: "12px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#E5B84C",
            marginBottom: "16px"
          }}>
            Contact
          </div>

          <h2 style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            lineHeight: "1.02",
            letterSpacing: "-0.03em",
            margin: 0
          }}>
            Connect with Aldgate on strategic, intelligence, and real-world systems problems.
          </h2>

          <div style={{ marginTop: "24px", color: "#A7B4C0", lineHeight: "1.8" }}>
            <div><strong style={{ color: "white" }}>Email:</strong> sricharan@aldgateandco.com</div>
            <div><strong style={{ color: "white" }}>Phone:</strong> +91 90005 55201</div>
            <div><strong style={{ color: "white" }}>City:</strong> Hyderabad, Telangana, India</div>
          </div>
        </div>
      </section>
    </main>
  );
}
