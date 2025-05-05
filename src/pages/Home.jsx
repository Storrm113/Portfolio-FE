export default function Home() {
  return (
    <section className="min-h-screen bg-[#fef3c7] dark:bg-black text-gray-900 dark:text-red-100 transition-colors duration-300 px-4 pt-12 pb-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-red-500 leading-tight tracking-tight font-sans">
          <span className="block">Welcome </span>
          <span className="block">to</span>
          <span className="block">Fenrir Studios, LLC</span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg leading-relaxed max-w-md mx-auto">
          We build modern, responsive, and accessible websites tailored to your business. From single-page
          designs to full-stack solutions, we’ve got you covered.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block bg-blue-500 hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-md shadow-sm transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
