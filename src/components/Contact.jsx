function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <div className="text-center space-y-2 text-gray-700 mb-8">
        <p>📍 North Street, Opposite Nataraja Temple, Chidambaram</p>
        <p>📞 +91 1234567891</p>
        <p>🕒 Open Daily: 7 AM - 10 PM</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <iframe
          title="location"
          className="w-full h-80 rounded-lg border"
          src="https://maps.google.com/maps?q=chidambaram&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </section>
  );
}

export default Contact;