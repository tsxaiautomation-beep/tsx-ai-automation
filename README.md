# 🚀 TSX AI Automation — Enterprise AI Agency Web Application

Welcome to the official repository for **TSX AI Automation**, an elite, next-generation AI automation agency website engineered with modern high-performance design, full mobile responsiveness, interactive calculators, live pipeline simulation, and complete full-stack backend readiness.

---

## 🌟 Brand Information & Credentials
- **Brand Name:** TSX AI Automation (`tsxaiautomation`)
- **Official Contact Number:** `03363925950` / `+92 336 3925950`
- **Official Email:** `tsxaiautomation@gmail.com`
- **Headquarters / Address:** `Pakistan, Karachi`
- **Direct WhatsApp:** [Click to Chat on WhatsApp](https://wa.me/923363925950?text=Hi%20TSX%20AI%20Automation)

---

## ⚡ What Makes This Way Better Than htmaiautomation?
1. **Futuristic Cyber & Enterprise AI Aesthetic:**
   - Deep obsidian space palette (`#07090E`), neon cyber cyan (`#00F0FF`), neural violet, and sleek glassmorphism.
   - Smooth micro-interactions, responsive typography, and glowing borders.

2. **Interactive Live Pipeline Simulator:**
   - Allows visitors to test real-world scenarios (E-Commerce Order Automation, Real Estate Lead Qualification, B2B RFP Processing).
   - Shows live multi-agent decision logs, payload previews, and execution speed.

3. **Interactive ROI & Cost-Savings Calculator:**
   - Visitors can customize team size, wasted manual hours, and currency (**USD $** or **Pakistani Rupee ₨ PKR**).
   - Dynamically calculates monthly & annual savings, hours eliminated, and payback period.

4. **Interactive Floating TSX AI Assistant:**
   - A built-in intelligent chatbot that answers questions about services, pricing, WhatsApp bot integration, and office credentials 24/7.

5. **Full Mobile Responsiveness:**
   - Engineered for 100% responsiveness across iPhone, Android, tablets, laptops, and ultra-wide screens.

6. **Dual Backend & Data Persistence Ready:**
   - Ready to connect directly with **MongoDB Atlas** or **Google Firebase / Firestore**.
   - Built-in zero-config failover: Stores all inquiries safely into `data/leads.json` so you never lose a lead even without database setup.

---

## 🛠️ Tech Stack
- **Frontend:** React 18, Vite 6, Tailwind CSS, Lucide Icons, Space Grotesk / Plus Jakarta Sans fonts.
- **Backend:** Node.js, Express, CORS, Dotenv, File-system persistent logging.
- **Database Support:** MongoDB Atlas & Firebase Firestore ready.

---

## 🚀 How To Run

### 1. Development Mode (Frontend with Hot Reload)
```bash
npm run dev
```
Runs the Vite development server on `http://localhost:3000`.

### 2. Fullstack Production Server (Frontend + Backend API)
```bash
# Build the frontend
npm run build

# Start the Node.js production server
npm start
```
Runs everything on `http://localhost:5000` (serving both API endpoints and the built frontend).

---

## 🗄️ How to Connect MongoDB or Firebase

### Option A: Connect MongoDB Atlas
1. Open `.env` (or copy from `.env.example`).
2. Add your MongoDB connection string:
   ```env
   MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/tsxaiautomation?retryWrites=true&w=majority"
   ```
3. Restart the server (`node server.js`). The backend will automatically detect MongoDB and start saving all incoming leads directly to your MongoDB database!

### Option B: Connect Google Firebase
1. See `firebase.config.js` in the project root.
2. Put your Firebase configuration variables in `.env` (`FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, etc.).

---

## 📁 Project Structure
```
c:\Users\Lenovo\Desktop\tech\
├── data/
│   └── leads.json            # Safe local fallback storage for incoming leads
├── public/
│   └── favicon.svg           # Custom TSX neon hexagon logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky glassmorphism header & mobile drawer
│   │   ├── Hero.jsx          # Hero section with live agent console & CTAs
│   │   ├── Stats.jsx         # Quantified metric badges
│   │   ├── Services.jsx      # 6 Core AI capability cards with filters
│   │   ├── InteractivePipeline.jsx # Realtime multi-agent workflow visualizer
│   │   ├── RoiCalculator.jsx # Live ROI & hours saved calculator (USD & PKR)
│   │   ├── TechStack.jsx     # Enterprise AI stack & privacy banner
│   │   ├── Process.jsx       # 4-Phase implementation roadmap
│   │   ├── CaseStudies.jsx   # Quantified client results & metrics
│   │   ├── Testimonials.jsx  # Client endorsements
│   │   ├── Faq.jsx           # Accordion FAQ
│   │   ├── ContactSection.jsx # Contact cards (03363925950, Karachi, Email) & Audit form
│   │   ├── Footer.jsx        # Full footer with quick links & legal credits
│   │   ├── AiChatWidget.jsx  # Floating interactive AI Assistant
│   │   └── LeadModal.jsx     # High-converting pop-up consultation modal
│   ├── data/
│   │   └── companyData.js    # Centralized company details & content
│   ├── App.jsx               # Main React application shell
│   ├── index.css             # Tailwind CSS & custom styling
│   └── main.jsx              # React DOM entry point
├── server.js                 # Express API backend with MongoDB/Firebase support
├── package.json              # Project dependencies & scripts
├── vite.config.js            # Vite bundler config with API proxy
├── tailwind.config.js        # Tailwind CSS configuration & custom palette
└── README.md                 # Complete documentation
```

