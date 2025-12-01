export default function AboutMe({ description = ["Lorem Ipsum"] }) {
  return (
    <footer id="contact" className="py-12 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-xl font-semibold">About Me</h3>
        <div className="space-y-4 mt-4 text-gray-300 leading-relaxed">
          {description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
