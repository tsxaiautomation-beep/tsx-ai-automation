export const COMPANY_INFO = {
  name: "TSX AI Automation",
  brandShort: "TSX AI",
  tagline: "We Build Autonomous AI Systems That Run Your Sales & Support 24/7",
  description: "We help growing businesses eliminate repetitive manual work using custom WhatsApp AI bots, automated sales pipelines, and smart CRM workflows. Based in Karachi, Pakistan, serving clients globally.",
  phone: "03363925950",
  formattedPhone: "+92 336 3925950",
  whatsappUrl: "https://wa.me/923363925950?text=Hi%20TSX%20AI%20Automation!%20I%20want%20to%20automate%20my%20business%20workflows.",
  email: "tsxaiautomation@gmail.com",
  address: "Pakistan, Karachi",
  city: "Karachi",
  country: "Pakistan",
  workingHours: "Monday - Saturday: 9:00 AM - 10:00 PM PKT (24/7 Automated System Monitoring)",
  guarantee: "100% Satisfaction Guarantee: We build and optimize until your workflows run flawlessly.",
};

export const STATS = [
  { value: "< 10s", label: "Instant Lead Reply", description: "Engages every inquiry on WhatsApp in seconds" },
  { value: "85%+", label: "Manual Work Eliminated", description: "Repetitive daily tasks handled automatically" },
  { value: "3.5x", label: "Average ROI in 90 Days", description: "Lower operational cost & more closed clients" },
  { value: "24/7", label: "Always Working", description: "Never sleeps, takes leaves, or misses leads" },
];

export const CORE_SOLUTIONS = [
  {
    id: "whatsapp-ai",
    title: "Official WhatsApp AI Bots",
    badge: "Most In-Demand",
    simpleExplanation: "An intelligent bot on your official business WhatsApp that talks to customers like a human in Roman Urdu or English.",
    whatItDoes: [
      "Replies to customers instantly in under 5 seconds (24/7)",
      "Understands Roman Urdu, English, and voice notes",
      "Sends product catalogs, prices, and location details",
      "Takes orders and checks delivery status automatically",
      "Transfers complex chats to human staff with full context"
    ],
    idealFor: "E-commerce, Retail, Real Estate, Clinics, Service Businesses"
  },
  {
    id: "sales-crm",
    title: "Inbound Lead & Sales Automation",
    badge: "High Revenue Lift",
    simpleExplanation: "Automatically captures leads from Facebook, Instagram, or Website and turns them into booked sales calls.",
    whatItDoes: [
      "Captures leads from Ads & website forms instantly",
      "Messages them on WhatsApp within 10 seconds before they go cold",
      "Qualifies their budget and requirements automatically",
      "Directly books appointments on your Google / Calendly calendar",
      "Syncs all data directly into your CRM or Google Sheets"
    ],
    idealFor: "Real Estate Brokers, Agencies, Consultants, B2B Companies"
  },
  {
    id: "business-workflows",
    title: "Workflow & Operations Automation",
    badge: "Save 40+ Hrs/Week",
    simpleExplanation: "Connects all your separate software (WhatsApp, Sheets, Shopify, CRM, ERP) so data flows with zero manual entry.",
    whatItDoes: [
      "Auto-generates and sends invoices, receipts, and order confirmations",
      "Scans PDF bills and receipts with AI OCR and enters data into accounting",
      "Automatically updates inventory between website and physical store",
      "Sends automated daily performance reports on WhatsApp or Slack",
      "Ready to connect with MongoDB Atlas or Firebase Firestore"
    ],
    idealFor: "Wholesalers, Distributors, Logistics, Manufacturing, Law Firms"
  },
  {
    id: "voice-ai",
    title: "AI Phone Calling Agents",
    badge: "Next-Gen AI",
    simpleExplanation: "Human-sounding AI voice agents that can make outbound phone calls or answer customer support calls.",
    whatItDoes: [
      "Answers customer phone calls with natural human voice",
      "Makes follow-up confirmation calls for appointments or orders",
      "Sends SMS/WhatsApp summary right after the call ends",
      "Can handle 100+ concurrent calls at the same time"
    ],
    idealFor: "Customer Support Desks, Delivery Confirmation, Clinic Reminders"
  }
];

export const SERVICES = CORE_SOLUTIONS;

export const HOW_IT_WORKS_SIMPLE = [
  {
    step: "01",
    title: "Free 30-Min Strategy Call",
    description: "We understand your daily manual bottlenecks (leads, WhatsApp chats, data entry) and show you exactly what can be automated.",
  },
  {
    step: "02",
    title: "We Build & Connect Your System",
    description: "Our engineering team in Karachi builds your custom AI bot and workflows, connecting your WhatsApp, CRM, and databases.",
  },
  {
    step: "03",
    title: "Test & Go Live in 7-14 Days",
    description: "We test everything with real scenarios, train your team, and launch it live with ongoing 24/7 monitoring and support.",
  }
];

export const SIMPLE_COMPARISON = [
  {
    feature: "Speed to Respond to Leads",
    oldWay: "3 to 6 hours (Leads lose interest or buy elsewhere)",
    tsxWay: "Under 10 seconds (Instant engagement on WhatsApp)"
  },
  {
    feature: "Working Hours",
    oldWay: "8 hours/day, staff off on weekends & late nights",
    tsxWay: "24 hours a day, 7 days a week, 365 days a year"
  },
  {
    feature: "Data Entry & CRM",
    oldWay: "Manual typing, missed entries, and human errors",
    tsxWay: "100% automated real-time sync with zero errors"
  },
  {
    feature: "Cost to Scale",
    oldWay: "Must hire more staff and pay rising monthly payroll",
    tsxWay: "Same AI handles 10x more leads with zero extra staff"
  },
  {
    feature: "Customer Retention",
    oldWay: "Frustrated customers waiting for replies",
    tsxWay: "Delighted customers getting instant answers in Urdu/English"
  }
];

export const TECH_STACK = [
  { name: "WhatsApp Cloud API", category: "Official Meta Messaging" },
  { name: "OpenAI GPT-4o", category: "Conversational Intelligence" },
  { name: "Anthropic Claude 3.5", category: "Complex Business Logic" },
  { name: "n8n Automation", category: "Automated Workflows" },
  { name: "MongoDB Atlas", category: "Document Database" },
  { name: "Google Firebase", category: "Realtime Cloud Store" },
  { name: "Make / Zapier", category: "Software Integration" },
  { name: "HubSpot / GoHighLevel", category: "Sales CRM Sync" },
];

export const CASE_STUDIES = [
  {
    client: "Apex Real Estate Holdings",
    industry: "Real Estate & Property",
    challenge: "Lead response time was 4+ hours; agents were losing high-value buyers to faster competitors.",
    solution: "Deployed TSX Autonomous WhatsApp AI Agent with instant property recommendation & calendar booking.",
    results: [
      { label: "Response Time", value: "< 6 Seconds" },
      { label: "Booked Viewings", value: "+140% Increase" },
      { label: "Hours Saved", value: "35 hrs/week" }
    ],
    badge: "140% Booking Growth"
  },
  {
    client: "Nova Luxe E-Commerce",
    industry: "Direct-to-Consumer Retail",
    challenge: "Customer support flooded with order tracking, return requests, and sizing queries during festive surges.",
    solution: "Integrated Omnichannel TSX Support Agent synced directly with Shopify and Courier APIs.",
    results: [
      { label: "Ticket Deflection", value: "78% Handled by AI" },
      { label: "CSAT Score", value: "4.9 / 5.0" },
      { label: "Resolution Time", value: "Under 1 Min" }
    ],
    badge: "78% Auto-Deflection"
  },
  {
    client: "B2B Logistics & Supply",
    industry: "Wholesale & Logistics",
    challenge: "Inbound leads required manual follow-ups, invoice data entry, and delayed email crafting.",
    solution: "Built a custom automated pipeline connecting WhatsApp, Google Sheets, and accounting software.",
    results: [
      { label: "Sales Growth", value: "3.2x Surge" },
      { label: "Cost Reduction", value: "-62% Overhead" },
      { label: "Turnaround", value: "Same-Day Booking" }
    ],
    badge: "3.2x Sales Surge"
  }
];

export const TESTIMONIALS = [
  {
    name: "Tariq Mansoor",
    role: "Managing Director",
    company: "Falcon Logistics Middle East",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "Switching from our old setup to TSX AI Automation was a night and day difference. Our logistics tracking and WhatsApp dispatch system is now 100% autonomous. The Karachi engineering team delivered world-class work.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Growth",
    company: "Vanguard Digital Media (UK)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    quote: "TSX AI's lead qualification pipeline transformed our inbound sales. We went from losing 40% of weekend leads to booking demos in under 3 minutes automatically on WhatsApp.",
    rating: 5
  },
  {
    name: "Kamran Qureshi",
    role: "Founder & CEO",
    company: "Qureshi Retail Group",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    quote: "TSX AI Automation built our entire customer care bot on WhatsApp and integrated it with our local warehouse system. Flawless execution and always accessible on call.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "How will this help my business make more money?",
    answer: "Most businesses lose 40% of potential sales simply because they reply too late. When a lead messages your ad or website, TSX AI replies on WhatsApp within 10 seconds, answers their questions in Urdu or English, and books them directly for a call or order before they check a competitor."
  },
  {
    question: "Does the WhatsApp bot understand Roman Urdu and voice notes?",
    answer: "Yes, 100%! We train our models specifically for the Pakistani and Middle Eastern market. It naturally understands Roman Urdu (e.g., 'Bhai mujhe price aur details chahiye'), English, and common industry terms."
  },
  {
    question: "Can you connect MongoDB or Firebase for our backend?",
    answer: "Yes! If your business has a custom application or needs custom data storage, we configure MongoDB Atlas, Google Firebase / Firestore, or PostgreSQL Supabase seamlessly."
  },
  {
    question: "What if a customer asks something very difficult?",
    answer: "Whenever the AI detects an unusual inquiry or if a customer requests to speak with a human, it smoothly alerts your team with the full chat history so your staff can take over immediately."
  },
  {
    question: "How much does it cost?",
    answer: "Every business has different requirements. We offer single WhatsApp automations to complete end-to-end agency setups. We start with a 100% free 30-minute consultation where we calculate your exact ROI and give you an upfront quote with zero hidden fees."
  },
  {
    question: "Where is your team located and how can I contact you?",
    answer: "Our headquarters is located in Karachi, Pakistan. You can call or WhatsApp us directly at 03363925950 or email us at tsxaiautomation@gmail.com."
  }
];
