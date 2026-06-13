import { FaLeaf, FaUtensils, FaClock, FaUsers } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="bg-green-700 text-white py-16 px-6">
      <h2 className="text-center text-3xl font-bold mb-10">Why Choose Us</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        <div>
          <FaLeaf size={36} className="mx-auto mb-3" />
          <h3 className="font-semibold">Fresh Ingredients</h3>
        </div>
        <div>
          <FaUtensils size={36} className="mx-auto mb-3" />
          <h3 className="font-semibold">Traditional Recipes</h3>
        </div>
        <div>
          <FaClock size={36} className="mx-auto mb-3" />
          <h3 className="font-semibold">Fast Service</h3>
        </div>
        <div>
          <FaUsers size={36} className="mx-auto mb-3" />
          <h3 className="font-semibold">Family Friendly</h3>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;