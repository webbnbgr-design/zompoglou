/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  MessageSquare, 
  User, 
  Gavel, 
  FileText,
  Menu,
  X,
  ArrowRight,
  Quote
} from 'lucide-react';
import { useState, useEffect } from 'react';

const PRACTICE_AREAS = [
  {
    title: 'Αστικό Δίκαιο',
    description: 'Εξειδίκευση σε οικογενειακές διαφορές, κληρονομικά ζητήματα και υποθέσεις ακινήτων με απόλυτη εχεμύθεια.',
    icon: <Scale className="w-6 h-6 text-brand-emerald" />,
  },
  {
    title: 'Διεκπεραίωση Υποθέσεων',
    description: 'Μεθοδική και ταχεία επίλυση νομικών ζητημάτων, ελαχιστοποιώντας τη γραφειοκρατική επιβάρυνση για τον πελάτη.',
    icon: <Gavel className="w-6 h-6 text-brand-emerald" />,
  },
  {
    title: 'Νομική Συμβουλευτική',
    description: 'Προσωπική καθοδήγηση και αναλυτική επεξήγηση κάθε σταδίου της διαδικασίας για πλήρη κατανόηση της υπόθεσης.',
    icon: <FileText className="w-6 h-6 text-brand-emerald" />,
  },
];

const REVIEWS = [
  {
    text: "Άψογη επαγγελματίας, μεθοδική και πάντα διαθέσιμη να λύσει κάθε απορία.",
    author: "Κ. Παπαδόπουλος",
  },
  {
    text: "Πολύ προσιτή και επεξηγηματική. Ένιωσα ασφάλεια από την πρώτη στιγμή.",
    author: "Μ. Γεωργίου",
  },
  {
    text: "Το γραφείο στην Καλαμάτα είναι εξαιρετικό και η εξυπηρέτηση υψηλού επιπέδου.",
    author: "Α. Δημητρίου",
  },
];

const FAQS = [
  {
    question: "Ποιες είναι οι ώρες λειτουργίας του γραφείου;",
    answer: "Το γραφείο μας λειτουργεί με διευρυμένο ωράριο καθημερινά, παραμένοντας ανοιχτό έως τις 21:00 για την καλύτερη εξυπηρέτηση των εργαζομένων πελατών μας.",
  },
  {
    question: "Πώς μπορώ να προγραμματίσω ένα ραντεβού;",
    answer: "Μπορείτε να μας καλέσετε στο 27213 04470 ή να επισκεφθείτε το γραφείο μας στην οδό Αμβροσίου Φραντζή 11 στην Καλαμάτα.",
  },
  {
    question: "Παρέχετε συμβουλευτική για υποθέσεις ακινήτων;",
    answer: "Ναι, το Αστικό Δίκαιο και οι υποθέσεις ακινήτων αποτελούν βασικό τομέα δράσης του γραφείου μας, προσφέροντας πλήρη νομική κάλυψη.",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Φιλοσοφία', href: '#approach' },
    { name: 'Το Γραφείο', href: '#office' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className={`w-8 h-8 ${scrolled ? 'text-brand-emerald' : 'text-slate-800'}`} />
            <div>
              <h1 className={`font-serif text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-800'}`}>
                Βασιλική Σ. Ζομπόλου
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">Δικηγόρος - Καλαμάτα</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-brand-emerald transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand-emerald text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-emerald-light transition-all transform hover:scale-105"
            >
              Προγραμματίστε Συνάντηση
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center gap-6 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-brand-emerald text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 className="w-3 h-3" />
              Νομική Υπευθυνότητα
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 text-balance">
              Βασιλική Σ. Ζομπόλου: Νομική Υποστήριξη με <span className="text-brand-emerald">Μεθοδικότητα</span> & Συνέπεια.
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Υψηλού επιπέδου νομική εκπροσώπηση στην Καλαμάτα. Δίπλα σας σε κάθε βήμα, με ειλικρίνεια και προσωπική καθοδήγηση.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-brand-emerald text-white px-8 py-4 rounded-full font-bold hover:bg-brand-emerald-light transition-all shadow-lg hover:shadow-emerald-200/50"
              >
                Επικοινωνήστε για νομική καθοδήγηση
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-brand-emerald/10 to-emerald-900/5 overflow-hidden relative border border-brand-emerald/10 shadow-2xl">
              {/* Subtle visual grid or background can go here if needed, but keeping it clean */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Scale className="w-48 h-48 text-brand-emerald/10 rotate-12" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-emerald flex items-center justify-center text-white font-serif italic text-xl">
                    Β
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Βασιλική Σ. Ζομπόλου</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">LL.M. Δικηγόρος</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-emerald/5 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-emerald/5 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Stats/Badges */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Επαγγελματισμός', icon: <User className="w-5 h-5" /> },
            { label: 'Άμεση Διαθεσιμότητα', icon: <Clock className="w-5 h-5" /> },
            { label: 'Προσιτή Προσέγγιση', icon: <MessageSquare className="w-5 h-5" /> },
            { label: 'Μεθοδική Επίλυση', icon: <CheckCircle2 className="w-5 h-5" /> },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-500">
              <div className="text-brand-emerald opacity-60">
                {item.icon}
              </div>
              <span className="text-sm font-semibold tracking-wide uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section id="services" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Τομείς Δράσης & Υπηρεσίες</h2>
            <div className="h-1.5 w-20 bg-brand-emerald mx-auto rounded-full mb-8" />
            <p className="text-slate-600 text-lg">
              Εξειδικευμένες νομικές υπηρεσίες προσαρμοσμένες στις ανάγκες των πελατών της περιοχής, με έμφαση στην αποτελεσματικότητα.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 transition-all hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-emerald group-hover:text-white transition-colors duration-500">
                  <div className="group-hover:text-white transition-colors">
                    {area.icon}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section id="approach" className="py-24 md:py-32 bg-brand-emerald text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Η Φιλοσοφία μας: Προσωπική Επαφή & Διαφάνεια</h2>
              <div className="space-y-6 text-emerald-50/90 text-lg leading-relaxed">
                <p>
                  Στο γραφείο μας, η νομική υποστήριξη δεν είναι απλώς μια τυπική διαδικασία. Πιστεύουμε στην οικοδόμηση σχέσεων εμπιστοσύνης που βασίζονται στην ειλικρινή επικοινωνία.
                </p>
                <p>
                  Κατανοούμε ότι ο νομικός κόσμος μπορεί συχνά να φαίνεται δαιδαλώδης. Γι' αυτό, η επεξηγηματικότητα είναι κεντρικός πυλώνας της δουλειάς μας. Κάθε πελάτης φεύγει από το γραφείο έχοντας πλήρη εικόνα της υπόθεσής του.
                </p>
                <p className="font-serif italic text-2xl text-white mt-8">
                  "Ο στόχος μας είναι να νιώθετε ασφάλεια και σιγουριά, γνωρίζοντας ότι ένας έμπειρος σύμβουλος είναι πάντα δίπλα σας."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-emerald-800/30 rounded-full flex items-center justify-center relative">
                <div className="w-4/5 h-4/5 bg-emerald-700/50 rounded-full flex items-center justify-center animate-pulse" />
                <Scale className="absolute w-32 h-32 text-emerald-400 opacity-20" />
                <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 self-start">
                    <h4 className="font-bold text-xl mb-2">Διαθεσιμότητα</h4>
                    <p className="text-sm opacity-80">Πάντα δίπλα σας, ακόμα και τις απογευματινές ώρες.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 self-end mt-12">
                    <h4 className="font-bold text-xl mb-2">Κατανόηση</h4>
                    <p className="text-sm opacity-80">Αναλυτική επεξήγηση κάθε νομικού όρου.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </section>

      {/* The Office */}
      <section id="office" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-slate-100 rounded-[2rem] aspect-video relative overflow-hidden flex items-center justify-center group">
                {/* Simplified Map Visualization */}
                <div className="absolute inset-0 bg-slate-200" />
                <MapPin className="w-16 h-16 text-brand-emerald relative z-10 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg z-20">
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Τοποθεσία</p>
                  <p className="font-bold text-slate-800">Αμβροσίου Φραντζή 11, Καλαμάτα</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8">Το Γραφείο μας στην Καλαμάτα</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex shrink-0 items-center justify-center text-brand-emerald">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Κεντρική Τοποθεσία</h4>
                    <p className="text-slate-600">Βρισκόμαστε στην οδό Αμβροσίου Φραντζή 11, μια εύκολα προσβάσιμη τοποθεσία στο κέντρο της Καλαμάτας.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex shrink-0 items-center justify-center text-brand-emerald">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Διευρυμένο Ωράριο</h4>
                    <p className="text-slate-600">Αναγνωρίζοντας τις ανάγκες των εργαζομένων πελατών μας, το γραφείο μας παραμένει ανοιχτό <span className="font-bold text-brand-emerald">έως τις 21:00</span>.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex shrink-0 items-center justify-center text-brand-emerald">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Άμεση Επικοινωνία</h4>
                    <p className="text-slate-600">Καλέστε μας στο <span className="font-bold text-brand-emerald">27213 04470</span> για να προγραμματίσετε τη συνάντησή σας.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Τι λένε οι πελάτες μας</h2>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold font-sans">Κριτικές από Google</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
                <Quote className="w-10 h-10 text-brand-emerald/20 mb-6" />
                <p className="text-slate-700 italic leading-relaxed mb-6 flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold uppercase text-sm">
                    {review.author[0]}
                  </div>
                  <span className="font-bold text-slate-900">{review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Συχνές Ερωτήσεις</h2>
            <p className="text-slate-600">Λύσεις και απαντήσεις στα πρώτα ερωτήματα που μπορεί να έχετε.</p>
          </div>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl p-6 transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer list-none list-outside">
                  <h4 className="font-bold text-lg text-slate-900 pr-4">{faq.question}</h4>
                  <ChevronDown className="w-5 h-5 text-brand-emerald group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-brand-emerald rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8">Είμαστε στην διάθεσή σας</h2>
              <p className="text-emerald-100 text-xl mb-12 max-w-2xl mx-auto opacity-90">
                Προγραμματίστε σήμερα μια συνάντηση για να συζητήσουμε την υπόθεσή σας με απόλυτη εχεμύθεια και μεθοδικότητα.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="tel:2721304470" 
                  className="bg-white text-brand-emerald px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all flex items-center gap-3 shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  27213 04470
                </a>
                <a 
                  href="#contact" 
                  className="bg-emerald-700 text-white border border-emerald-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-600 transition-all flex items-center gap-3 shadow-xl"
                >
                  Προγραμματίστε Συνάντηση
                </a>
              </div>
            </div>
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-3xl -ml-20 -mb-20" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-10 h-10 text-brand-emerald" />
                <h2 className="font-serif text-2xl font-bold text-white">Βασιλική Σ. Ζομπόλου</h2>
              </div>
              <p className="max-w-sm mb-8 leading-relaxed">
                Προσφέρουμε υψηλού επιπέδου νομική εκπροσώπηση, δίνοντας έμφαση στην επεξηγηματικότητα, τη συνέπεια και την προσιτή προσέγγιση προς τον πελάτη.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Επικοινωνία</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-emerald shrink-0" />
                  27213 04470
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-emerald shrink-0 mt-1" />
                  Αμβροσίου Φραντζή 11,<br />Καλαμάτα, 24100
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Ωράριο</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-emerald shrink-0" />
                  Δευτέρα - Παρασκευή<br />Έως τις 21:00
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm">© {new Date().getFullYear()} Βασιλική Σ. Ζομπόλου. Με επιφύλαξη παντός δικαιώματος.</p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white">Προσωπικά Δεδομένα</a>
              <a href="#" className="hover:text-white">Όροι Χρήσης</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
