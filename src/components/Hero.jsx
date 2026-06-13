function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white px-5">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome To AROGYAA</h1>
        <p className="text-xl mb-6">Authentic South Indian Cuisine - Chidambaram</p>
        <a href="#menu" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition">View Menu</a>
      </div>
    </section>
  );
}

export default Hero;