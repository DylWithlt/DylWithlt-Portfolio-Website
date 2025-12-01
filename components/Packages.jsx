export default function Packages({ plans = [] }) {
  return (
    <section id="pricing" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Rates & Packages</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {plans.map((p, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <div className="mt-2 text-3xl font-bold">{p.price}</div>
              <p className="mt-3 text-sm text-gray-600">{p.description}</p>
              <ul className="mt-4 text-sm space-y-1">
                {p.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full py-2 rounded bg-black text-white">
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
