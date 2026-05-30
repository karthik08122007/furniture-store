import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Heart,
  Home,
  MapPin,
  Menu,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
  Truck,
  Users,
  Wrench,
  X,
} from "lucide-react";

const showroom =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=85";

const categories = [
  ["Sofas", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"],
  ["Dining Tables", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"],
  ["Beds", "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80"],
  ["Wardrobes", "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=80"],
  ["Office Furniture", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"],
  ["Living Room Furniture", "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80"],
  ["Outdoor Furniture", "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80"],
  ["Modular Furniture", "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=80"],
];

const products = [
  {
    name: "Aurelia Cloud Sofa",
    category: "Sofas",
    price: "$2,480",
    description: "Deep-seat linen sofa with kiln-dried hardwood framing.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Oslo Oak Dining Set",
    category: "Dining Tables",
    price: "$1,920",
    description: "Solid oak six-seater dining table with sculpted legs.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Marble Top Console",
    category: "Living Room Furniture",
    price: "$780",
    description: "Slim storage console with veined stone and walnut drawers.",
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Serene Upholstered Bed",
    category: "Beds",
    price: "$1,640",
    description: "Premium king bed with padded headboard and hidden storage.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Executive Work Suite",
    category: "Office Furniture",
    price: "$1,350",
    description: "Ergonomic desk, credenza, and leather task chair pairing.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Custom Modular Wardrobe",
    category: "Wardrobes",
    price: "$2,850",
    description: "Floor-to-ceiling wardrobe tailored to your room layout.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
  },
];

const features = [
  ["Premium Materials", BadgeCheck, "Seasoned woods, performance fabrics, refined hardware, and durable finishes."],
  ["Expert Craftsmanship", Wrench, "Measured joinery, precise upholstery, and supervised finishing at every step."],
  ["Custom Designs", Sparkles, "Tailored sizes, finishes, storage, and layouts for homes and commercial spaces."],
  ["Home Delivery", Truck, "Protected delivery with careful handling and scheduled arrival windows."],
  ["Installation Support", Home, "On-site assembly, placement, leveling, and room-ready handover."],
  ["Warranty Coverage", ShieldCheck, "Reliable after-sales support with clear warranty guidance."],
];

const testimonials = [
  {
    name: "Mira Patel",
    text: "The sofa still looks new after a year. The team helped us choose the right fabric and delivered exactly when promised.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Arjun Mehta",
    text: "Our custom wardrobe was measured, built, and installed beautifully. The finish feels premium and the storage is thoughtful.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Nadia Rao",
    text: "Excellent service from selection to delivery. The dining table is solid, elegant, and became the heart of our home.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=300&q=80",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=80",
];

const offers = [
  ["Seasonal Refresh", "Up to 25% off selected living room collections."],
  ["Dining Bundle", "Save on table, seating, and storage combinations."],
  ["New Arrivals", "Preview walnut bedroom sets and outdoor lounge pieces."],
  ["Design Week", "Complimentary consultation for limited showroom slots."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [inquiryProduct, setInquiryProduct] = useState(null);
  const [quickView, setQuickView] = useState(null);

  const productCategories = ["All", ...new Set(products.map((product) => product.category))];
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFilter = filter === "All" || product.category === filter;
      const matchesQuery = `${product.name} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const navLinks = ["Collections", "Products", "Custom", "Gallery", "Showroom", "Contact"];

  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory text-charcoal">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-charcoal/65 text-white backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-brass text-sm font-black text-white">ML</span>
            <span>
              <span className="block font-display text-2xl font-bold leading-5">Maison Loft</span>
              <span className="text-xs uppercase tracking-[0.24em] text-linen">Furniture Studio</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-white/85 transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
          <a href="tel:+15550192045" className="hidden items-center gap-2 bg-white px-5 py-3 text-sm font-bold text-charcoal transition hover:bg-linen sm:flex">
            <Phone size={17} />
            Call Now
          </a>
          <button className="lg:hidden" aria-label="Open navigation" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-charcoal/70 lg:hidden">
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="ml-auto h-full w-80 bg-ivory p-6 shadow-luxury">
              <button className="mb-8 ml-auto flex" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
                <X />
              </button>
              <div className="grid gap-5">
                {navLinks.map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="font-display text-3xl font-semibold">
                    {link}
                  </a>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="home" className="relative min-h-[92vh] overflow-hidden pt-24 text-white">
          <img src={showroom} alt="Luxury furniture showroom with warm seating and natural light" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/45 to-charcoal/15" />
          <div className="relative mx-auto flex min-h-[calc(92vh-6rem)] max-w-7xl items-center px-4 pb-12 sm:px-6 lg:px-8">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Sparkles size={16} /> Premium showroom experience
              </p>
              <h1 className="font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">Transform Your Home With Timeless Furniture</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
                Discover handcrafted furniture, bespoke storage, and curated room collections built with enduring materials and precise finishing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#collections" className="inline-flex items-center justify-center gap-2 bg-white px-6 py-4 font-bold text-charcoal transition hover:bg-linen">
                  Explore Collection <ArrowRight size={18} />
                </a>
                <a href="#showroom" className="inline-flex items-center justify-center gap-2 border border-white/45 px-6 py-4 font-bold text-white transition hover:bg-white hover:text-charcoal">
                  Visit Showroom <MapPin size={18} />
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {["Premium Quality", "Custom Designs", "Home Delivery"].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/12 px-4 py-3 text-sm font-bold backdrop-blur">
                    <Check size={17} className="text-brass" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="collections" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Featured Categories" title="Explore room-defining collections" text="Browse statement pieces and complete furniture families for every corner of your home." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(([name, image], index) => (
              <motion.article key={name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ delay: index * 0.04 }} className="group overflow-hidden bg-white shadow-soft">
                <div className="relative h-72 overflow-hidden">
                  <img src={image} alt={`${name} collection`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <div className="absolute bottom-0 p-5 text-white">
                    <h3 className="font-display text-3xl font-bold">{name}</h3>
                    <button className="mt-3 inline-flex items-center gap-2 text-sm font-bold">
                      View Collection <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="products" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Bestselling Products" title="Furniture customers ask for first" text="Search, filter, quick-view, save favorites, and send inquiries directly from each product." />
            <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
              <label className="flex items-center gap-3 border border-charcoal/10 bg-ivory px-4 py-3">
                <Search size={19} className="text-walnut" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sofas, beds, wardrobes..." className="w-full bg-transparent outline-none" />
              </label>
              <div className="no-scrollbar flex gap-2 overflow-x-auto">
                {productCategories.map((item) => (
                  <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap px-4 py-3 text-sm font-bold transition ${filter === item ? "bg-charcoal text-white" : "bg-ivory text-charcoal hover:bg-linen"}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.name} product={product} onInquiry={setInquiryProduct} onQuickView={setQuickView} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.28em] text-walnut">About The Store</p>
            <h2 className="font-display text-5xl font-bold leading-tight sm:text-6xl">Crafted for homes that age beautifully.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-charcoal/72">
              Maison Loft began as a family showroom focused on honest materials, exact proportions, and furniture that feels calm the moment it enters a room. Our philosophy is simple: every piece should look refined, work hard, and hold its beauty through daily living.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                ["18K+", "Customers Served"],
                ["24", "Years Experience"],
                ["42K+", "Products Delivered"],
                ["36", "Cities Served"],
              ].map(([number, label]) => (
                <div key={label} className="border border-charcoal/10 bg-white p-5 shadow-soft">
                  <strong className="font-display text-4xl text-walnut">{number}</strong>
                  <span className="mt-2 block text-sm font-bold text-charcoal/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="custom" className="bg-charcoal py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionTitle eyebrow="Custom Furniture" title="Made-to-measure comfort, storage, and rooms" text="From custom sofa dimensions to modular kitchens, our design consultants map your lifestyle before a single material is selected." dark />
              <div className="grid gap-4 sm:grid-cols-2">
                {["Custom sofa design", "Custom wardrobes", "Modular kitchens", "Interior consultation"].map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-white/12 bg-white/6 p-4">
                    <Check className="text-brass" /> <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setInquiryProduct({ name: "Design Consultation" })} className="mt-8 inline-flex items-center gap-2 bg-brass px-6 py-4 font-bold text-white transition hover:bg-walnut">
                Request Design Consultation <CalendarDays size={18} />
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1100&q=85" alt="Designer custom furniture consultation space" className="h-full min-h-96 w-full object-cover shadow-luxury" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Why Choose Us" title="The details behind a premium purchase" text="We combine design guidance, material intelligence, delivery coordination, and long-term service." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, Icon, text]) => (
              <article key={title} className="bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-luxury">
                <Icon className="mb-5 text-walnut" size={30} />
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-charcoal/68">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-linen/70 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Customer Testimonials" title="Trusted in real homes" text="Stories from customers who cared about quality, delivery, service, and durability." />
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((review) => (
                <article key={review.name} className="bg-white p-7 shadow-soft">
                  <div className="mb-5 flex gap-1 text-brass">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="leading-8 text-charcoal/74">"{review.text}"</p>
                  <div className="mt-7 flex items-center gap-3">
                    <img src={review.image} alt={review.name} className="h-12 w-12 rounded-full object-cover" />
                    <strong>{review.name}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Project Gallery" title="Completed interiors and showroom moments" text="Living rooms, bedrooms, offices, and dining installations with complete styling." />
          <div className="grid auto-rows-[230px] gap-4 md:grid-cols-4">
            {gallery.map((image, index) => (
              <img key={image} src={image} alt="Furniture project gallery" className={`h-full w-full object-cover shadow-soft ${index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""}`} />
            ))}
          </div>
        </section>

        <section id="showroom" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionTitle eyebrow="Showroom" title="Visit our flagship furniture studio" text="Experience finishes, seating comfort, storage systems, and room styling in person." />
              <div className="space-y-4 text-charcoal/76">
                <p className="flex gap-3"><MapPin className="shrink-0 text-walnut" /> 248 Artisan Avenue, Design District, New York, NY 10013</p>
                <p className="flex gap-3"><Clock className="shrink-0 text-walnut" /> Mon-Sat 10:00 AM - 8:00 PM, Sun 11:00 AM - 6:00 PM</p>
                <p className="flex gap-3"><Phone className="shrink-0 text-walnut" /> +1 (555) 019-2045</p>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=248+Artisan+Avenue+New+York+NY" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-charcoal px-6 py-4 font-bold text-white transition hover:bg-walnut">
                Get Directions <MapPin size={18} />
              </a>
            </div>
            <div className="grid gap-4">
              <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85" alt="Maison Loft showroom display" className="h-72 w-full object-cover shadow-soft" />
              <iframe title="Google Maps showroom location" className="h-72 w-full border-0 shadow-soft" loading="lazy" src="https://www.google.com/maps?q=New%20York%20Design%20District&output=embed" />
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionTitle eyebrow="Inquiry" title="Plan your next room with us" text="Tell us what you are looking for and our team will call back with product options, pricing, and showroom availability." />
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/15550192045" className="inline-flex items-center justify-center gap-2 bg-[#128c7e] px-5 py-4 font-bold text-white">
                <Send size={18} /> WhatsApp Inquiry
              </a>
              <a href="tel:+15550192045" className="inline-flex items-center justify-center gap-2 bg-charcoal px-5 py-4 font-bold text-white">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
          <InquiryForm productName={inquiryProduct?.name} />
        </section>

        <section className="bg-charcoal py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Special Offers" title="Limited showroom promotions" text="Curated opportunities for seasonal upgrades, bundles, new arrivals, and design consultation slots." dark />
            <div className="grid gap-5 md:grid-cols-4">
              {offers.map(([title, text]) => (
                <article key={title} className="border border-white/12 bg-white/7 p-6">
                  <Award className="mb-5 text-brass" />
                  <h3 className="font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-white/72">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#100f0e] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <h2 className="font-display text-4xl font-bold">Maison Loft</h2>
            <p className="mt-3 text-white/65">Premium furniture, custom interiors, and showroom guidance for beautifully lived-in homes.</p>
          </div>
          <FooterLinks title="Quick Links" items={["Collections", "Products", "Custom", "Gallery", "Showroom"]} />
          <FooterLinks title="Categories" items={categories.slice(0, 6).map(([name]) => name)} />
          <div>
            <h3 className="mb-4 font-bold">Stay Updated</h3>
            <p className="mb-4 text-sm text-white/62">New arrivals, design events, and private showroom offers.</p>
            <div className="flex bg-white">
              <input aria-label="Newsletter email" placeholder="Email address" className="min-w-0 flex-1 px-4 py-3 text-charcoal outline-none" />
              <button className="bg-brass px-4 font-bold">Join</button>
            </div>
            <p className="mt-5 text-sm text-white/62">WhatsApp: +1 (555) 019-2045</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-30 grid gap-3">
        <a aria-label="WhatsApp inquiry" href="https://wa.me/15550192045" className="grid h-14 w-14 place-items-center rounded-full bg-[#128c7e] text-white shadow-luxury">
          <Send />
        </a>
        <a aria-label="Call showroom" href="tel:+15550192045" className="grid h-14 w-14 place-items-center rounded-full bg-charcoal text-white shadow-luxury">
          <Phone />
        </a>
      </div>

      <AnimatePresence>
        {quickView && <QuickView product={quickView} onClose={() => setQuickView(null)} onInquiry={(product) => { setQuickView(null); setInquiryProduct(product); }} />}
        {inquiryProduct && <InquiryModal product={inquiryProduct} onClose={() => setInquiryProduct(null)} />}
      </AnimatePresence>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, dark = false }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="mb-10 max-w-3xl">
      <p className={`mb-3 text-sm font-extrabold uppercase tracking-[0.28em] ${dark ? "text-brass" : "text-walnut"}`}>{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
      <p className={`mt-4 text-lg leading-8 ${dark ? "text-white/70" : "text-charcoal/68"}`}>{text}</p>
    </motion.div>
  );
}

function ProductCard({ product, onInquiry, onQuickView }) {
  return (
    <article className="group overflow-hidden bg-ivory shadow-soft">
      <div className="relative h-80 overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <button aria-label={`Add ${product.name} to wishlist`} className="absolute right-4 top-4 grid h-11 w-11 place-items-center bg-white/90 text-charcoal transition hover:text-walnut">
          <Heart size={19} />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-3xl font-bold">{product.name}</h3>
          <strong className="text-walnut">{product.price}</strong>
        </div>
        <p className="mt-3 min-h-14 leading-7 text-charcoal/66">{product.description}</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button onClick={() => onInquiry(product)} className="bg-charcoal px-4 py-3 text-sm font-bold text-white transition hover:bg-walnut">
            Inquiry
          </button>
          <button onClick={() => onQuickView(product)} className="border border-charcoal/15 px-4 py-3 text-sm font-bold transition hover:bg-white">
            Quick View
          </button>
        </div>
      </div>
    </article>
  );
}

function InquiryForm({ productName = "" }) {
  return (
    <form className="grid gap-4 bg-white p-6 shadow-luxury" onSubmit={(event) => event.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Name" className="border border-charcoal/10 bg-ivory px-4 py-4 outline-none focus:border-walnut" />
        <input required placeholder="Phone Number" className="border border-charcoal/10 bg-ivory px-4 py-4 outline-none focus:border-walnut" />
      </div>
      <input type="email" placeholder="Email" className="border border-charcoal/10 bg-ivory px-4 py-4 outline-none focus:border-walnut" />
      <select defaultValue={productName || ""} className="border border-charcoal/10 bg-ivory px-4 py-4 outline-none focus:border-walnut">
        <option value="" disabled>Product Interest</option>
        {[...products.map((product) => product.name), "Custom Furniture", "Design Consultation"].map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <textarea placeholder="Message" rows="5" className="border border-charcoal/10 bg-ivory px-4 py-4 outline-none focus:border-walnut" />
      <button className="inline-flex items-center justify-center gap-2 bg-walnut px-6 py-4 font-bold text-white transition hover:bg-charcoal">
        Send Inquiry <ArrowRight size={18} />
      </button>
    </form>
  );
}

function QuickView({ product, onClose, onInquiry }) {
  return (
    <Modal onClose={onClose}>
      <div className="grid max-w-4xl bg-white md:grid-cols-2">
        <img src={product.image} alt={product.name} className="h-80 w-full object-cover md:h-full" />
        <div className="p-7">
          <button className="mb-5 ml-auto flex" onClick={onClose} aria-label="Close quick view"><X /></button>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-walnut">{product.category}</p>
          <h3 className="mt-2 font-display text-4xl font-bold">{product.name}</h3>
          <strong className="mt-4 block text-2xl text-walnut">{product.price}</strong>
          <p className="mt-4 leading-8 text-charcoal/68">{product.description} Visit the showroom to experience fabric, finish, and scale in person.</p>
          <button onClick={() => onInquiry(product)} className="mt-7 w-full bg-charcoal px-6 py-4 font-bold text-white">Send Inquiry</button>
        </div>
      </div>
    </Modal>
  );
}

function InquiryModal({ product, onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="max-w-2xl bg-ivory p-6 shadow-luxury">
        <button className="mb-4 ml-auto flex" onClick={onClose} aria-label="Close inquiry modal"><X /></button>
        <h3 className="font-display text-4xl font-bold">Inquiry for {product.name}</h3>
        <p className="mb-6 mt-2 text-charcoal/68">Share your details and our showroom team will follow up shortly.</p>
        <InquiryForm productName={product.name} />
      </div>
    </Modal>
  );
}

function Modal({ children, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-charcoal/72 p-4" onClick={onClose}>
      <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
        {children}
      </motion.div>
    </motion.div>
  );
}

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3 className="mb-4 font-bold">{title}</h3>
      <div className="grid gap-2">
        {items.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="text-sm text-white/62 transition hover:text-white">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
