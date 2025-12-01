export default function Employers({ items = [] }) {
  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Previous Employers</h2>
        <ul className="mt-6 space-y-4">
          {items.map((e, i) => (
            <li key={i} className="p-4 border rounded">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">
                    {e.company} —{" "}
                    <span className="text-sm text-gray-600">{e.role}</span>
                  </div>
                  <div>
                    <a href={e.link}>{e.link}</a>
                  </div>
                  <div className="text-sm text-gray-500">
                    {e.start} — {e.end || "Present"}
                  </div>
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-1">
                {e.summary.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
