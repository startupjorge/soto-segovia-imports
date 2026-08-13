export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Get in Touch</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Contact Us</h1>
          <p className="text-sm" style={{ color: "#666" }}>We'd love to hear from you. Fill out the form below and our team will respond within 24 business hours.</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact info */}
        <div className="lg:col-span-1">
          <h2 className="text-[13px] font-bold mb-6 tracking-wider uppercase" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Contact Information</h2>
          <div className="flex flex-col gap-5">
            {[
              { label: "Email", value: "sales@sotosegoviaimports.com", href: "mailto:sales@sotosegoviaimports.com" },
              { label: "Phone", value: "(305) 555-0198", href: "tel:+13055550198" },
              { label: "Location", value: "Miami, Florida, USA", href: null },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] tracking-widest uppercase font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm hover:text-[#C9A227] transition-colors" style={{ color: "#444" }}>{item.value}</a>
                ) : (
                  <p className="text-sm" style={{ color: "#444" }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 border-l-2" style={{ borderColor: "#C9A227", background: "#F8F8F4" }}>
            <p className="text-[12px] font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Distributor Inquiries</p>
            <p className="text-[12px] leading-relaxed" style={{ color: "#666" }}>Interested in carrying our products? Select "Distributor Inquiry" in the form and we'll connect you with our sales team.</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>First Name</label>
                <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#C9A227] transition-colors" placeholder="Jorge" style={{ color: "#1A1A1A" }} />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Last Name</label>
                <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#C9A227] transition-colors" placeholder="Soto" style={{ color: "#1A1A1A" }} />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Email</label>
              <input type="email" className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#C9A227] transition-colors" placeholder="you@company.com" style={{ color: "#1A1A1A" }} />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Inquiry Type</label>
              <select className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#C9A227] transition-colors bg-white" style={{ color: "#555" }}>
                <option>General Inquiry</option>
                <option>Distributor Inquiry</option>
                <option>Corporate Gifting</option>
                <option>Personal Gifting</option>
                <option>Order Support</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Message</label>
              <textarea rows={5} className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#C9A227] transition-colors resize-none" placeholder="Tell us how we can help..." style={{ color: "#1A1A1A" }} />
            </div>
            <button type="submit" className="self-start px-10 py-3 font-bold text-[12px] text-white transition-all hover:opacity-90" style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
