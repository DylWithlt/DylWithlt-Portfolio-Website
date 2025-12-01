import { MagicalBackground } from "./magical-background/MagicalBackground";

export default function Hero({
  name = "Your Name",
  role = "Frontend Developer",
  tagline,
}) {
  return (
    <MagicalBackground>
      <section className="min-h-[100vh] flex items-center" aria-label="Hero">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">{name}</h1>
          <p className="mt-3 text-xl text-gray-600">{role}</p>
          {tagline && <p className="mt-4 text-lg text-gray-500">{tagline}</p>}
          <div className="mt-6 flex gap-3">
            <a href="#work" className="px-4 py-2 rounded bg-black text-white">
              View work
            </a>
            <a href="#contact" className="px-4 py-2 rounded border">
              Contact
            </a>
          </div>
        </div>
      </section>
    </MagicalBackground>
  );
}
