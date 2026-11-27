export default function DonateSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden h-[400px] flex items-center">
        <div className="absolute inset-0 bg-brand-navy z-0">
          {/* You can add an image background here later */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 px-12 md:px-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Help write the next story.</h2>
          <p className="text-gray-200 max-w-md mb-8">
            By card, Instant EFT or mobile money. There is no upper limit, and every donation is recorded against the project you choose.
          </p>
          <div className="flex gap-3 mb-8">
            {["$10", "$25", "$50", "$100", "Other"].map((amount) => (
              <button key={amount} className="border border-white/30 text-white rounded-full py-2 px-4 text-sm hover:bg-white hover:text-brand-navy transition">
                {amount}
              </button>
            ))}
          </div>
          <button className="bg-brand-gold text-brand-navy font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors">
            Donate now
          </button>
        </div>
      </div>
    </section>
  );
}