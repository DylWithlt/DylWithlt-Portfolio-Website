export default function ContactLinks({
  email = "you@example.com",
  links = [],
}) {
  return (
    <footer id="contact" className="py-12 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-xl font-semibold">Contact</h3>
        <div className="mt-4 flex gap-4">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
