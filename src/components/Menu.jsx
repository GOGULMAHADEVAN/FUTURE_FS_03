import { menuItems } from "../data";

function Menu() {
  return (
    <section id="menu" className="bg-gray-100 py-16 px-6">
      <h2 className="text-center text-3xl font-bold mb-10">Our Menu</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {menuItems.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={dish.img} alt={dish.name} className="w-full h-36 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{dish.name}</h3>
                <span className="text-green-700 font-bold">{dish.price}</span>
              </div>
              <p className="text-sm text-gray-600">{dish.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;