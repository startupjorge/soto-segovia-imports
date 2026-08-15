export type Industry = {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  intro: string;
  why: { title: string; body: string }[];
  occasions: { title: string; body: string }[];
  products: string[];
  quote: string;
  quoteAttribution: string;
  metaTitle: string;
  metaDescription: string;
};

export const industries: Industry[] = [
  {
    slug: "startups",
    name: "Startups",
    headline: "The Corporate Gift That Actually Gets Remembered",
    subheadline: "For Startups That Know Relationships Are Everything",
    intro: "In the startup world, relationships close deals, unlock introductions, and determine who takes your call when it matters most. Premium Spanish gourmet food gifts from Soto & Segovia Imports give founders and their teams a gifting strategy that builds real equity with investors, clients, and partners — without looking like a swag drop.",
    why: [
      {
        title: "Stand Out in a Sea of Branded Merch",
        body: "Investors and advisors receive hundreds of gift boxes per year — most end up unopened or regifted. A curated box of Príncipe Azahar olive oils, artisan salts, and aged vinegars from Altea, Spain tells a completely different story. It signals taste, intention, and the kind of attention to detail that makes people confident in your company.",
      },
      {
        title: "Gifting That Works Within Compliance",
        body: "Many early-stage companies gifting enterprise clients or regulated investors need to stay within gift value thresholds. Premium Spanish food gifts are the ideal solution: high perceived value, genuinely memorable, and easy to keep within policy limits.",
      },
      {
        title: "Scales With Your Raise",
        body: "Whether you're sending gifts to five seed investors or fifty Series B LPs, we handle fulfillment, custom notes, and delivery. You focus on building the company. We handle the gifting.",
      },
    ],
    occasions: [
      { title: "Closing a Funding Round", body: "Thank your investors and advisors with something they'll actually open. A beautifully curated box of Spanish gourmet foods signals that you pay attention to the details — and that this is just the beginning." },
      { title: "Onboarding a New Enterprise Client", body: "A premium welcome gift sets the tone for the relationship from day one. Let your first impression be an extraordinary one." },
      { title: "Celebrating a Product Launch", body: "Recognize the team, thank early customers, and celebrate the milestone with a gift that feels as significant as the moment." },
      { title: "Year-End Client and Partner Gifts", body: "Stand out during the holiday gifting season with something that actually reflects your brand values: premium, curated, and international." },
      { title: "Recruiting and Retention", body: "Send a gift to candidates you're serious about, or celebrate top performers with something they won't find anywhere else." },
    ],
    products: ["Garlic Olive Oil", "Truffle Olive Oil", "Orange Wine", "Rose Salt", "Vanilla Vinegar"],
    quote: "The best gifts don't have your logo on them. They have your taste.",
    quoteAttribution: "Jorge Soto, Co-Founder · Soto & Segovia Imports",
    metaTitle: "Corporate Gifts for Startups | Soto & Segovia Imports",
    metaDescription: "Premium Spanish gourmet food gifts for startup founders, investors, and enterprise clients. Curated olive oils, artisan salts, and vinegars from Altea, Spain.",
  },
  {
    slug: "fortune-500",
    name: "Fortune 500 Companies",
    headline: "Executive Gifting at Scale. Without Sacrificing Quality.",
    subheadline: "For Global Companies That Demand the Extraordinary",
    intro: "Fortune 500 companies face a unique gifting challenge: how do you send gifts that feel personal and premium when your client list numbers in the thousands? Soto & Segovia Imports partners with enterprise procurement and executive gifting teams to deliver curated Spanish gourmet food experiences that scale — without ever feeling mass-produced.",
    why: [
      {
        title: "Premium Perceived Value at Every Budget Tier",
        body: "From a single bottle of Príncipe Azahar Truffle Olive Oil to a full curated collection of oils, salts, vinegars, and orange wine, we build gift experiences that feel exceptional at every price point. Your procurement team sets the budget. We make it extraordinary.",
      },
      {
        title: "A Gift That Travels Well Across Cultures",
        body: "Premium Spanish gourmet foods are recognized and appreciated globally. Whether your client is in New York, London, or Singapore, a beautifully packaged collection of artisan olive oils and aged vinegars from Altea, Spain transcends cultural gift-giving norms. Food is universal. Quality is universal.",
      },
      {
        title: "White-Glove Fulfillment for Enterprise Teams",
        body: "We work directly with your executive assistant team or procurement department to handle recipient lists, personalized notes, delivery scheduling, and branded packaging. You set the strategy. We execute flawlessly.",
      },
    ],
    occasions: [
      { title: "Year-End Client Appreciation", body: "Replace the forgettable holiday gift card with something that arrives beautifully packaged and gets opened immediately. Artisan Spanish foods create a genuine moment of discovery." },
      { title: "Board Member and C-Suite Gifting", body: "For your most important relationships, a curated collection of Príncipe Azahar's finest — truffle oil, vanilla vinegar, reserve orange wine — sends a message that no branded merchandise ever could." },
      { title: "Deal Closings and Milestone Celebrations", body: "When a major partnership is signed or a significant milestone is achieved, mark the moment with a gift as significant as the occasion." },
      { title: "Conference and Event Gifting", body: "Elevate your conference presence or VIP event with curated Spanish gourmet gifts that attendees will actually take home and use." },
      { title: "Client Retention Programs", body: "The data is clear: clients who feel valued stay longer. Build a quarterly or annual gifting cadence that keeps your most important relationships warm year-round." },
    ],
    products: ["Truffle Olive Oil", "Orange Wine (Mini)", "Pomegranate Vinegar", "Vanilla Vinegar", "Black Salt"],
    quote: "We sent premium Spanish gift boxes to our top 200 accounts last quarter. Three clients called us to say it was the best gift they'd ever received from a vendor.",
    quoteAttribution: "VP of Client Success · Fortune 500 Technology Company",
    metaTitle: "Corporate Gifting for Fortune 500 Companies | Soto & Segovia Imports",
    metaDescription: "Enterprise-scale corporate gifting with premium Spanish gourmet foods. Curated olive oils, salts, and vinegars from Altea, Spain. White-glove fulfillment.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    headline: "Elevate Every Guest Experience With the Flavors of Spain",
    subheadline: "For Hotels, Resorts, and Hospitality Groups That Define Luxury",
    intro: "In luxury hospitality, every detail of the guest experience is a statement about your brand. Soto & Segovia Imports partners with hotels, resorts, and hospitality groups to incorporate premium artisan Spanish gourmet foods into welcome amenities, VIP packages, restaurant programs, and corporate event gifting — creating moments of genuine discovery that guests remember long after checkout.",
    why: [
      {
        title: "Provenance Guests Can Taste",
        body: "Príncipe Azahar products come from Altea, Spain — a historic Mediterranean village with centuries of artisan food tradition. When your concierge or F&B team can tell the story of where a product comes from, it transforms an amenity into an experience. Guests don't just receive a gift; they discover a place.",
      },
      {
        title: "Products That Elevate Your Restaurant Program",
        body: "Our extra virgin olive oils, aged vinegars, and artisan salts are working ingredients, not just gift items. Integrate Príncipe Azahar products into your restaurant, spa, or bar program and create a signature that your guests can't get anywhere else.",
      },
      {
        title: "VIP Amenity Programs Built Around Your Brand",
        body: "We work with your amenity team to create bespoke curated collections — from single-product welcome amenities to full luxury gift sets for suite guests, event sponsors, and loyalty program members.",
      },
    ],
    occasions: [
      { title: "VIP Guest Welcome Amenities", body: "Replace the standard fruit basket or generic wine bottle with a beautifully curated selection of premium Spanish gourmet foods. It's unexpected, memorable, and endlessly more shareable." },
      { title: "Corporate Event Welcome Gifts", body: "When your property hosts a corporate buyout, conference, or incentive trip, provide attendees with a curated take-home gift that extends the experience beyond the event." },
      { title: "Restaurant and Bar Program Integration", body: "Feature Príncipe Azahar olive oils, vinegars, and orange wine on your menu with full provenance storytelling. Create a signature pairing experience that becomes a signature of your property." },
      { title: "Loyalty and Membership Gift Programs", body: "Reward your top-tier members with quarterly curated gifts. A rotating selection of artisan Spanish foods creates ongoing discovery and keeps your brand front of mind." },
      { title: "Spa and Wellness Gift Sets", body: "Premium gourmet foods pair beautifully with spa experiences. Our artisan salts and olive oils can be integrated into treatment programs or departure gift sets." },
    ],
    products: ["Garlic Olive Oil", "Lemon Olive Oil", "White Salt", "Orange Vinegar", "Orange Wine"],
    quote: "Our VIP guests consistently mention the Spanish gourmet amenity as a highlight of their stay. It tells a story that a standard amenity simply cannot.",
    quoteAttribution: "Director of Guest Experience · Luxury Resort Group",
    metaTitle: "Hospitality Gifting | Premium Spanish Gourmet Foods | Soto & Segovia Imports",
    metaDescription: "Luxury hospitality amenity programs featuring premium Spanish olive oils, artisan salts, and aged vinegars from Altea, Spain. For hotels, resorts, and event venues.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    headline: "Build the Relationships That Drive Your Business Forward",
    subheadline: "For Manufacturing Leaders Who Know That People Make the Difference",
    intro: "Manufacturing is a relationship business. The suppliers who prioritize you, the clients who stay with you through market cycles, the plant managers who advocate for your products — these relationships are built over time, and maintained through consistent, meaningful gestures of appreciation. Soto & Segovia Imports helps manufacturing companies gift in a way that reflects their commitment to quality and their respect for the people they work with.",
    why: [
      {
        title: "A Gift That Speaks to Quality Craftsmanship",
        body: "Manufacturing leaders understand what it means to produce something with precision and pride. Príncipe Azahar products are made the same way: hand-crafted in small batches, from carefully sourced ingredients, in a facility that has been refining its craft for generations. That shared value of quality resonates deeply.",
      },
      {
        title: "Appropriate for Every Level of the Organization",
        body: "From a single bottle of premium olive oil for a plant manager to a full curated collection for a VP of Supply Chain, our gift tiers work across the entire organization — ensuring that the right people feel valued at the right moments.",
      },
      {
        title: "Supplier and Partner Gifting That Builds Loyalty",
        body: "Your most important suppliers have choices. A premium gift at the right moment — a plant opening, an annual review, a long-term contract renewal — reminds them why the relationship matters and reinforces your position as a preferred partner.",
      },
    ],
    occasions: [
      { title: "Plant Openings and Facility Milestones", body: "Mark a new facility opening, production milestone, or safety record with a gift that the whole leadership team will remember. Premium Spanish gourmet foods are a premium statement." },
      { title: "Supplier Relationship Gifts", body: "Show your key suppliers that the relationship is valued beyond the purchase order. A curated gift of artisan oils and vinegars from Spain signals partnership, not just procurement." },
      { title: "Trade Show and Industry Event Gifts", body: "Elevate your presence at industry events with gifts that clients and prospects actually take home. Artisan food gifts travel well, carry a story, and generate conversation." },
      { title: "Year-End Client Appreciation", body: "The manufacturing sector runs on repeat business. End-of-year client gifts are an investment in the relationships that sustain your revenue." },
      { title: "Safety and Performance Milestone Celebrations", body: "Celebrate production records, safety milestones, and team achievements with something the whole team can enjoy — and remember." },
    ],
    products: ["Rosemary Olive Oil", "BBQ Salt", "Paprika Salt", "Fig Vinegar", "Wild Salt"],
    quote: "Our suppliers tell us we're the first client in 20 years to send them a gift that wasn't a branded calendar. It changed the conversation at our next review.",
    quoteAttribution: "VP of Supply Chain · Industrial Manufacturing Group",
    metaTitle: "Corporate Gifts for Manufacturing Companies | Soto & Segovia Imports",
    metaDescription: "Premium Spanish gourmet food gifts for manufacturing leaders, suppliers, and clients. Artisan olive oils, salts, and vinegars from Altea, Spain.",
  },
  {
    slug: "software",
    name: "Software",
    headline: "The Gift Your Clients Actually Open",
    subheadline: "For Software Companies Building Long-Term Customer Relationships",
    intro: "Software companies live and die by retention. Every touchpoint in the customer journey — from onboarding to renewal to expansion — is an opportunity to reinforce why your clients made the right choice. Soto & Segovia Imports helps software companies replace forgettable branded swag with premium Spanish gourmet gift experiences that create real emotional resonance and drive genuine loyalty.",
    why: [
      {
        title: "The Anti-Swag Gift Strategy",
        body: "Your clients receive more branded hoodies, mugs, and tote bags than they know what to do with. A curated collection of premium Spanish olive oils, artisan salts, and aged vinegars from Altea, Spain arrives as something genuinely different — something that gets opened, used, and talked about.",
      },
      {
        title: "Perfect for Remote and Global Teams",
        body: "Software companies often manage relationships across time zones and geographies. Premium food gifts ship internationally and are universally appreciated. Whether your champion is in San Francisco or London, a beautifully packaged collection of artisan Spanish foods arrives with the same impact.",
      },
      {
        title: "Gifting That Supports Customer Success Metrics",
        body: "Companies that implement strategic gifting programs see measurable improvements in NPS, renewal rates, and expansion revenue. A $150 gift at the right moment in a $50,000 ARR relationship is one of the highest-ROI investments your customer success team can make.",
      },
    ],
    occasions: [
      { title: "Customer Onboarding Welcome Gifts", body: "Start the relationship the right way. A premium welcome gift within the first 30 days tells your new customer that they made the right choice — and sets the tone for everything that follows." },
      { title: "Renewal and Expansion Moments", body: "The weeks before a renewal or upsell conversation are exactly the right time to reinforce the relationship. A thoughtfully timed gift shows your champion that they are valued as a person, not just as a contract." },
      { title: "NPS Recovery and Save Programs", body: "When a customer signals dissatisfaction, a genuine gesture of appreciation goes further than a SLA credit. Premium food gifts communicate care in a way that no email or call can." },
      { title: "Conference and Summit Gifts", body: "Elevate your user conference or customer summit with curated gift boxes that attendees actually take home. Create a sensory memory that extends beyond the event." },
      { title: "Year-End Customer Appreciation", body: "Close the year by investing in the relationships that drove your revenue. Premium gifts to your top 50 or top 500 accounts compound over time into loyalty that no competitor can easily displace." },
    ],
    products: ["Truffle Olive Oil", "Orange Wine (Mini)", "Rose Salt", "Lemon Vinegar", "Vanilla Vinegar"],
    quote: "We implemented a gifting program for our top 100 accounts using Soto & Segovia boxes. Our renewal rate for that cohort was 12 points higher than our baseline.",
    quoteAttribution: "Chief Customer Officer · B2B SaaS Company",
    metaTitle: "Corporate Gifts for Software Companies | Soto & Segovia Imports",
    metaDescription: "Premium Spanish gourmet food gifts for SaaS and software companies. Elevate customer success, improve retention, and replace branded swag with something memorable.",
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    headline: "Client Gifts That Reflect the Caliber of Your Advice",
    subheadline: "For Financial Advisors, Wealth Managers, and Banking Professionals",
    intro: "In financial services, trust is the product. The clients who give you their most important decisions — their investments, their estates, their futures — need to feel that you see them as people, not portfolios. Soto & Segovia Imports helps financial services professionals and institutions gift in a way that deepens personal relationships, stays within regulatory guidelines, and reflects the premium standard of service you deliver.",
    why: [
      {
        title: "Regulatory-Compliant Gift Strategy",
        body: "Financial services gifting is governed by FINRA, SEC, and institutional compliance rules that often limit cash, entertainment, and high-value gifts. Premium gourmet food gifts from Soto & Segovia Imports are ideal: high perceived value, genuinely memorable, and easy to keep within the gift value thresholds required by your compliance team.",
      },
      {
        title: "A Gift Worthy of Your Best Clients",
        body: "Ultra-high-net-worth clients and institutional investors receive generic gifts constantly. A curated collection of artisan Spanish olive oils, aged reserve vinegars, and orange wine from Altea, Spain arrives as something they haven't seen before — something that communicates that you chose it specifically for them.",
      },
      {
        title: "Relationship Building That Compounds Over Time",
        body: "The most successful advisors and wealth managers build gift programs that run year-round: a welcome gift when a new account opens, a milestone gift at key anniversaries, a thoughtful year-end collection. Each gift compounds the relationship equity that keeps clients — and their referrals — with you for life.",
      },
    ],
    occasions: [
      { title: "New Client Onboarding", body: "When a client transfers their assets or signs on with your firm, a premium welcome gift tells them immediately that they made the right choice. First impressions in financial services are worth the investment." },
      { title: "Year-End Appreciation Gifts", body: "The fourth quarter is the most competitive period in the industry for client attention. A beautifully curated gift of Spanish gourmet foods stands out in a season dominated by generic wine and fruit baskets." },
      { title: "Milestone Celebrations", body: "Retirement, a major liquidity event, a trust transfer, or a significant portfolio milestone — these are the moments when a personal gift carries the most meaning and the deepest impact." },
      { title: "Referral Appreciation", body: "When a client sends you a referral, the response should be memorable. A curated gift of premium Spanish foods says thank you in a way that no email or phone call can." },
      { title: "Advisor-Client Relationship Maintenance", body: "Quarterly touchpoints beyond the portfolio review — a seasonal gift, a curated collection for a client's birthday or anniversary — build the kind of personal relationship that makes clients loyal through market cycles." },
    ],
    products: ["Truffle Olive Oil", "Vanilla Vinegar", "Orange Wine", "Black Salt", "Pomegranate Vinegar"],
    quote: "My top 25 clients receive a curated Spanish gift box every quarter. Three of them have told me it's the reason they've never considered moving their assets elsewhere.",
    quoteAttribution: "Wealth Management Advisor · Private Banking Group",
    metaTitle: "Client Gifts for Financial Services | Soto & Segovia Imports",
    metaDescription: "Regulatory-compliant premium Spanish gourmet gifts for financial advisors, wealth managers, and banking professionals. Curated artisan foods from Altea, Spain.",
  },
  {
    slug: "venture-capital",
    name: "Venture Capital",
    headline: "The Gift That Opens Doors Before You Knock",
    subheadline: "For Venture Firms That Understand the Value of Every Relationship",
    intro: "Venture capital is the most relationship-intensive business in the world. Every founder you back, every LP you serve, every co-investor you want in your deals, every operator you recruit to your portfolio — all of these relationships are maintained through consistent, thoughtful gestures that communicate respect and appreciation. Soto & Segovia Imports helps leading venture firms gift in a way that matches the premium standard of the firms themselves.",
    why: [
      {
        title: "Differentiate in a World of Identical Gift Baskets",
        body: "The best founders and LPs receive gifts from dozens of firms. A curated collection of premium Spanish gourmet foods from Altea — hand-crafted olive oils, artisan salts, reserve vinegars — arrives as something genuinely unexpected. It communicates taste, intentionality, and a level of care that generic gifts simply do not.",
      },
      {
        title: "Portfolio Company Relationship Building",
        body: "Your portfolio companies see you as a partner, not just a check. A thoughtful gift to a founding team at a key milestone — a Series A close, a product launch, a first enterprise customer — reinforces that you are in the relationship for more than the cap table.",
      },
      {
        title: "LP Relationship Programs That Compound",
        body: "Limited partners who feel genuinely valued are more likely to re-up in your next fund, make introductions to other LPs, and advocate for your firm in competitive deal situations. A consistent gifting program — annual meeting gifts, holiday collections, milestone acknowledgments — is one of the highest-ROI investments a GP can make.",
      },
    ],
    occasions: [
      { title: "Deal Closing and Portfolio Company Milestones", body: "When a portfolio company closes a round, ships a major product, or hits a revenue milestone, send a gift that says: we noticed, we're proud, and we're with you. That gesture is remembered." },
      { title: "Annual Meeting LP Gifts", body: "The annual meeting is your most important LP touchpoint. A curated gift of premium Spanish gourmet foods sent alongside the deck or brought to the meeting creates a sensory anchor that no slide presentation can." },
      { title: "Founder Recruitment and Onboarding", body: "When you want the best founders to choose your firm over a competitor, every touchpoint matters. A premium gift during the diligence process signals that you understand what matters and that you are different." },
      { title: "Co-Investor Relationship Building", body: "The best deals come from warm intros and trusted co-investors. A thoughtful gift to a partner at another firm — no agenda, just appreciation — is the kind of gesture that generates goodwill that compounds for years." },
      { title: "Holiday and Year-End LP Gifts", body: "End the year by investing in the relationships that fuel your fund. A premium Spanish gourmet collection delivered to your LP base communicates gratitude and reinforces the premium nature of your firm." },
    ],
    products: ["Truffle Olive Oil", "Orange Wine", "Vanilla Vinegar", "Rose Salt", "Pomegranate Vinegar"],
    quote: "We sent Soto & Segovia boxes to our top 30 LPs at our annual meeting. Two of them reached out to increase their commitment in Fund IV before we even sent the official memo.",
    quoteAttribution: "General Partner · Venture Capital Firm",
    metaTitle: "Corporate Gifts for Venture Capital | Soto & Segovia Imports",
    metaDescription: "Premium Spanish gourmet gifts for venture capital firms. Strengthen LP relationships, celebrate portfolio milestones, and differentiate your firm with artisan foods from Altea, Spain.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
