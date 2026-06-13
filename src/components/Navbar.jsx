function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-5 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold">AROGYAA</h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-yellow-300">About</a>
        <a href="#menu" className="hover:text-yellow-300">Menu</a>
        <a href="#gallery" className="hover:text-yellow-300">Gallery</a>
        <a href="#contact" className="hover:text-yellow-300">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;