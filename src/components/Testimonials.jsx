import { testimonials } from "../data";

function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Customer Reviews</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-yellow-500 mb-2">★★★★★</p>
            <p className="text-gray-700 mb-3">{t.text}</p>
            <p className="font-semibold text-gray-900">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;