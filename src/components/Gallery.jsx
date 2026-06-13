import { galleryImages } from "../data";

function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6 bg-white">
      <h2 className="text-3xl text-center font-bold mb-10">Gallery</h2>

      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Food"
            className="rounded-lg h-60 w-full object-cover hover:opacity-90 transition"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;