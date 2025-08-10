"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Mail, MapPin, ArrowRight, Check, Bot, Camera, Scissors, Linkedin, Instagram, ExternalLink, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LINKS = {
  calendly: "https://calendly.com/krrishsharma1508/a-quick-discovery-call?month=2025-08",
  showreel: "https://youtu.be/-Y7i54yzYMA?si=h4Zrt0t0_yWuj-4M",
  instagram: "https://www.instagram.com/toronto.from.my.apartment?igsh=MTJmZTNmejBmcWRleg==",
  linkedin: "https://www.linkedin.com/in/naveesh-sharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  email: "mailto:krrishsharma1508@gmail.com",
};

const SERVICES = [
  { icon: Scissors, title: "Video Editing", bullets: ["Retention reels", "Corporate videos"] },
  { icon: Camera, title: "Videography", bullets: ["Concerts for bands", "Promos", "Corporate shoots"] },
  { icon: Bot, title: "AI Automations", bullets: ["Chatbots that qualify leads", "AI cold caller that books meetings", "Automated payment reminders with pay links"] },
];

const CASE_STUDIES = [
  { name: "Ishaan — Fitness Creator", role: "Editor + Strategy", summary: "Hit 1M+ views and sold 30+ personal training plans in under a month.", metrics: ["1M+ views", "30+ plans sold < 30 days"] },
  { name: "Handld — Handyman Company", role: "Director + Videographer", summary: "Flew out-of-city to capture projects; produced high-converting brand film.", metrics: ["On-site shoot", "Brand film"] },
  { name: "Self-Run Funnels", role: "Automation Architect", summary: "Built AI-based acquisition system; generated 500+ leads for my own pipeline.", metrics: ["500+ leads", "24/7 qualification"] },
];

const PORTFOLIO = [
  { id: "cafe", url: "https://youtu.be/q0mgl4a-eQY?si=dTKMpzCpy2-ez1Au", caption: "Local cafe: 200 views & 10–15/mo customers → 20k views & 70–80 paying customers", featured: true },
  { id: "oklahoma", url: "https://youtu.be/q2DNOBcHqUU?si=qJNOBcHqUU?si=qJN", caption: "Helped them become the best in their niche (Oklahoma, USA)" },
  { id: "2_8m", url: "https://youtu.be/fWzbYYTcLSU?si=1wWwE3mD5Qh4bl6f", caption: "Shot piece currently at 2.8M views" },
  { id: "bmw", url: "https://youtu.be/CQaAI77MtBM?si=jLN4mu_QVwnG9R7C", caption: "BMW rental: conversion rate from ~12% to ~80% after new edit" },
  { id: "jayshetty", url: "https://youtu.be/-O9j0Hnw7NA?si=JkrJvv4u-yHyTkx1", caption: "Edited Jay Shetty podcast clip (~400k views)" },
];

function useThemeToggle() {
  const [dark, setDark] = React.useState(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

function SectionTitle({ label, kicker }: { label: string; kicker?: string }) {
  return (
    <div className="mb-8">
      {kicker && <p className="uppercase tracking-widest text-xs text-gray-500 mb-2">{kicker}</p>}
      <h2 className="text-2xl md:text-3xl font-semibold">{label}</h2>
    </div>
  );
}

function YouTubeThumb({ url }: { url: string }) {
  const id = React.useMemo(() => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "");
      if (u.searchParams.get("v")) return u.searchParams.get("v");
      return "";
    } catch {
      return "";
    }
  }, [url]);
  const thumb = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined;
  return (
    <a href={url} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border bg-white dark:bg-black">
      {thumb ? (
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumb} alt="YouTube thumbnail" className="w-full object-cover aspect-video" />
          <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
            <Play className="w-12 h-12 text-white" />
          </div>
        </div>
      ) : (
        <div className="aspect-video grid place-items-center text-gray-500">Open video</div>
      )}
    </a>
  );
}

export default function Page() {
  const { dark, setDark } = useThemeToggle();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/70 dark:bg-black/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FCF7F8" }} />
            <span className="font-medium">Krrish</span>
            <Badge className="ml-2 border-gray-300">your go-to freelancer</Badge>
          </div>
          <div className="flex items-center gap-2">
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg:white/10">
              <Linkedin className="w-5 h-5" />
            </a>
            <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <a href={LINKS.calendly} target="_blank" rel="noreferrer">
              <Button className="ml-2">Book a call</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b" style={{ background: "#FCF7F8" }}>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-semibold leading-tight">
              Videography & Automations that get results
            </motion.h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Krrish — your go-to freelancer. I shoot, edit, and build AI systems that turn views into booked calls and payments.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={LINKS.calendly} target="_blank" rel="noreferrer">
                <Button size="lg" className="gap-2">
                  Let's solve <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href={LINKS.showreel} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg" className="gap-2">
                  Watch reel <Play className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Toronto & GTA</div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Fast availability</div>
            </div>
          </div>
          <div>
            <a href={LINKS.showreel} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-2xl border">
              <div className="aspect-video grid place-items-center bg-black text-white relative">
                <Play className="w-16 h-16 opacity-80" />
                <span className="absolute bottom-3 right-3 text-xs opacity-70 flex items-center gap-1">
                  Open on YouTube <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle label="What I do" kicker="Services" />
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3">
                <s.icon className="w-6 h-6" />
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5" /> <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs text-gray-500">Pricing: contact for quote — share your budget and we'll see if we can make it work.</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle label="Selected wins" kicker="Case studies" />
        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">{c.name}</CardTitle>
                <p className="text-xs text-gray-500">{c.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{c.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.metrics.map((m, k) => (
                    <Badge key={k} className="border-gray-300">{m}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle label="Work" kicker="Portfolio" />
        <div className="grid md:grid-cols-3 gap-6">
          {PORTFOLIO.map((p) => (
            <div key={p.id} className={p.featured ? "md:col-span-2" : ""}>
              <YouTubeThumb url={p.url} />
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle label="What clients say" kicker="Testimonials" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "Krrish didn’t just edit—he engineered retention. Our reels finally convert.", name: "Founder, Fitness Brand (Toronto)" },
            { quote: "From chaotic ops to an AI-driven pipeline that books calls while we sleep.", name: "Agency Owner (Canada)" },
            { quote: "The shoot was efficient, the cut was tight, and results were obvious in a week.", name: "Local Cafe Owner (GTA)" },
          ].map((t, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="pt-5">
                <p className="italic">“{t.quote}”</p>
                <p className="mt-4 text-xs text-gray-500">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle label="About" kicker="Who I am" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              I’m <strong>Naveesh Sharma</strong>, but most people call me <strong>Krrish</strong>. I have ~6 years of <strong>video editing</strong> experience. I used to hate bad footage, so I learned <strong>videography</strong> (now 2 years in) to control quality end-to-end.
            </p>
            <p>
              Results came too easily—so I got bored and pivoted into <strong>AI automations</strong> to solve client acquisition at the source. I build systems that qualify leads, book calls, and nudge payments automatically.
            </p>
            <p>
              Based in <strong>Toronto, ON</strong>, serving the GTA and beyond.
            </p>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Retention-first edits</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> On-location shoots (concerts, promos, corporate)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> AI-led funnels that book calls</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle label="Let’s solve" kicker="Contact" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="order-2 md:order-1 rounded-2xl">
            <CardHeader>
              <CardTitle>Book a discovery call</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>Pick a slot that works for you. If you don’t see one, email me.</p>
              <a href={LINKS.calendly} target="_blank" rel="noreferrer">
                <Button className="gap-2">Open Calendly <ExternalLink className="w-4 h-4" /></Button>
              </a>
              <div className="pt-2 border-t mt-4 text-gray-500">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a className="underline underline-offset-2" href={LINKS.email}>krrishsharma1508@gmail.com</a></p>
                <p className="flex items-center gap-2 mt-2"><Instagram className="w-4 h-4" /> <a className="underline underline-offset-2" href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a></p>
                <p className="flex items-center gap-2 mt-2"><Linkedin className="w-4 h-4" /> <a className="underline underline-offset-2" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
              </div>
            </CardContent>
          </Card>

          <div className="order-1 md:order-2">
            <h3 className="text-lg font-medium">What happens next</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Quick discovery call (goals, budget, timeline).</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Action plan within 24 hours.</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Execution: shoot/edit or deploy automations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-medium">Krrish</div>
              <div className="text-gray-500">Toronto & GTA • Minimal portfolio</div>
            </div>
            <div className="flex items-center gap-3">
              <a href={LINKS.calendly} target="_blank" rel="noreferrer"><Button size="sm">Book a call</Button></a>
              <a href={LINKS.email}><Button variant="secondary" size="sm">Email me</Button></a>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 text-xs text-gray-500">
            <div>
              <div className="font-medium text-foreground mb-2">Privacy Policy</div>
              <p>I collect only what’s needed to respond to your inquiry (e.g., email). No resale of data. Analytics may be used to improve the site. Contact me to request deletion of your data.</p>
            </div>
            <div>
              <div className="font-medium text-foreground mb-2">Terms of Service</div>
              <p>Work begins after scope and estimate approval. Ownership of final deliverables transfers upon payment. Timelines may shift based on client asset delivery and approvals.</p>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Krrish — your go-to freelancer.</div>
        </div>
      </footer>
    </div>
  );
}
