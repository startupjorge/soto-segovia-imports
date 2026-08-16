import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Soto & Segovia Imports",
  description: "Terms of Service for Soto & Segovia Imports LLC — the terms governing your use of our website and services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the website located at https://www.sotosegoviaimports.com (the \"Website\") or any services provided by Soto & Segovia Imports LLC (\"Soto & Segovia Imports,\" \"S&S,\" \"we,\" \"us,\" or \"our\"), you agree to be bound by these Terms of Service (\"Terms\") and our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms, you may not access or use the Website or our services.",
  },
  {
    title: "Eligibility",
    body: "You must be at least 18 years of age to use the Website or purchase products from us. By using the Website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a binding agreement. If you are using the Website on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.",
  },
  {
    title: "Products and Orders",
    paragraphs: [
      "Soto & Segovia Imports imports and distributes artisan Spanish food products including olive oils, gourmet salts, vinegars, and specialty food items sourced from producers in Spain. All product descriptions, pricing, and availability are subject to change without notice.",
      "When you place an order, you are making an offer to purchase the selected products at the stated price. We reserve the right to accept or decline any order at our discretion. You will receive an order confirmation by email once your order is accepted. Title and risk of loss for any products purchased pass to you upon delivery.",
      "We make every effort to ensure that product descriptions and images are accurate. However, we do not warrant that descriptions or images are complete, reliable, current, or error-free. If a product you receive is not as described, your sole remedy is to return it in unused condition in accordance with our Refund Policy.",
    ],
  },
  {
    title: "Pricing and Payment",
    paragraphs: [
      "All prices are listed in U.S. dollars and are subject to change without notice. Applicable taxes and shipping fees will be calculated and displayed at checkout.",
      "Payment is processed through third-party payment processors. By submitting payment information, you authorize us and our payment processors to charge the total amount due for your order. We do not store credit card or payment information on our servers.",
      "In the event of a pricing error, we reserve the right to cancel orders placed at the incorrect price and notify you accordingly.",
    ],
  },
  {
    title: "Shipping and Import",
    paragraphs: [
      "Products are shipped from our U.S. warehouse or directly from Spain depending on inventory. Delivery timelines are estimates and are not guaranteed. Soto & Segovia Imports is not responsible for delays caused by shipping carriers, customs clearance, weather, or other circumstances beyond our control.",
      "All products sold through this Website are imported in compliance with applicable U.S. customs and import regulations. Customers outside the United States are responsible for ensuring that products may be legally imported into their country and for paying any applicable duties, taxes, or customs fees.",
    ],
  },
  {
    title: "Returns and Refunds",
    body: "Our return and refund practices are governed by our Refund Policy, which is available at https://www.sotosegoviaimports.com/refund-policy and is incorporated into these Terms by reference. Please review that policy before placing an order.",
  },
  {
    title: "Subscriptions and Gifting Services",
    paragraphs: [
      "Certain services offered through the Website, including subscription plans, corporate gifting programs, and VIP Membership, are subject to separate terms communicated at the time of enrollment or inquiry. These Terms apply to all such services in addition to any specific terms provided.",
      "Subscription plans may be modified or discontinued at any time with reasonable notice. We reserve the right to change pricing for subscription services upon notice to active subscribers.",
    ],
  },
  {
    title: "Intellectual Property",
    body: "All content on the Website, including text, photographs, graphics, logos, and product descriptions, is the property of Soto & Segovia Imports LLC or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on the Website without our prior written consent.",
  },
  {
    title: "User Conduct",
    paragraphs: [
      "You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit anyone else's use of the Website.",
      "You agree not to: (a) use the Website to transmit any unsolicited or unauthorized advertising or promotional material; (b) attempt to gain unauthorized access to any part of the Website or its related systems; (c) use any automated means to access the Website without our express written permission; or (d) engage in any conduct that could damage, disable, or impair the Website.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: "The Website and all products and services offered through it are provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Website will be uninterrupted or error-free, that defects will be corrected, or that the Website or the server that makes it available are free of viruses or other harmful components.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Soto & Segovia Imports LLC, its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of or inability to use the Website or our products and services, even if we have been advised of the possibility of such damages. Our total liability to you for any claim arising out of or relating to these Terms or your use of our services shall not exceed the amount you paid for the specific product or service giving rise to the claim.",
  },
  {
    title: "Indemnification",
    body: "You agree to indemnify, defend, and hold harmless Soto & Segovia Imports LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Website, your violation of these Terms, or your violation of any rights of another person or entity.",
  },
  {
    title: "Third-Party Links",
    body: "The Website may contain links to third-party websites or services. These links are provided for your convenience only. Soto & Segovia Imports LLC has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any third-party websites you visit.",
  },
  {
    title: "Governing Law",
    body: "These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or your use of the Website shall be resolved exclusively in the state or federal courts located in Miami-Dade County, Florida.",
  },
  {
    title: "Changes to These Terms",
    body: "We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.",
  },
  {
    title: "How to Contact Us",
    body: "If you have questions about these Terms of Service, please e-mail us at support@sotosegoviaimports.com.",
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <div className="max-w-[800px] mx-auto px-6 py-20">

        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Legal
        </p>
        <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Terms of Service
        </h1>
        <p className="text-[13px] mb-12" style={{ color: "#999" }}>Effective as of August 16, 2026</p>

        <p className="text-[15px] leading-relaxed mb-16" style={{ color: "#555" }}>
          Please read these Terms of Service carefully before using the Website or placing any order. These Terms constitute a legally binding agreement between you and Soto & Segovia Imports LLC. By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms.
        </p>

        <div className="flex flex-col gap-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-[13px] tracking-widest uppercase font-bold mb-4 pb-3 border-b" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A", borderColor: "#E8E3D9" }}>
                {section.title}
              </h2>

              {section.body && (
                <p className="text-[14px] leading-relaxed" style={{ color: "#555" }}>{section.body}</p>
              )}

              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-[14px] leading-relaxed mb-4" style={{ color: "#555" }}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t" style={{ borderColor: "#E8E3D9" }}>
          <p className="text-[13px] mb-2" style={{ color: "#999" }}>
            Related:{" "}
            <Link href="/privacy-policy" className="underline" style={{ color: "#C9A227" }}>Privacy Policy</Link>
            {" · "}
            <Link href="/refund-policy" className="underline" style={{ color: "#C9A227" }}>Refund Policy</Link>
          </p>
          <p className="text-[13px]" style={{ color: "#999" }}>
            Soto & Segovia Imports LLC · Headquarters in Miami, FL ·{" "}
            <a href="mailto:support@sotosegoviaimports.com" className="underline" style={{ color: "#C9A227" }}>
              support@sotosegoviaimports.com
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
