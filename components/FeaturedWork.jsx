import Image from "next/image";

export default function RecentWork({ projects = [] }) {
  return (
    <section id="work" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Featured Work</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="border rounded-lg p-4">
              {p.cover && (
                <div className="h-40 w-full relative rounded overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 text-xs text-gray-500">
                {p.tech.join(" · ")}
              </div>
              <a
                className="mt-3 inline-block text-sm text-blue-600"
                href={p.url}
              >
                View →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
