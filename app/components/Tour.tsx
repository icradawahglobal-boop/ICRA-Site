import Image from "next/image";

export default function Tour() {
  const tours = [
    { title: "Schaapkraal Khutbah", location: "Cape Town, South Africa", date: "9 Oct 2026", image: "/masjid-saffiyatun.jpg" },
    { title: "Courtesy Visit to the Lord Mayor", location: "Port Louis, Mauritius", date: "Oct 2026", image: "/port-louis.jpg" },
    { title: "Featured in The Star Newspaper", location: "Mauritius", date: "Nov 2026", image: "/star-newspaper.jpg" },
    { title: "Campus Dawah at Wits", location: "Johannesburg, South Africa", date: "Recent", image: "/wits-bus.jpg" },
    { title: "Duma FM Interview", location: "Gaborone, Botswana", date: "Recent", image: "/duma-fm.jpg" },
  ];

  return (
    <section id="tour" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight">Latest from the field.</h2>
          <a href="#" className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full py-2 px-5 text-sm font-semibold hover:border-brand-navy transition bg-white">
            All stories
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col border-t border-gray-200">
          {/* Table Headers */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 text-sm text-gray-400 font-medium">
            <div className="col-span-6">Story</div>
            <div className="col-span-4">Place</div>
            <div className="col-span-2">Date</div>
          </div>

          {tours.map((tour, i) => (
            <div key={i} className="group relative border-b border-gray-200 py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-white transition-colors cursor-pointer px-4 -mx-4 rounded-xl z-10">
              
              {/* Text */}
              <div className="col-span-6 font-bold text-xl md:text-2xl text-brand-navy group-hover:text-brand-gold transition-colors">
                {tour.title}
              </div>
              
              <div className="col-span-4 flex">
                <span className="border border-gray-200 rounded-full px-4 py-1 text-sm text-gray-600 bg-white">{tour.location}</span>
              </div>
              
              <div className="col-span-2 flex justify-between items-center text-sm text-gray-500">
                {tour.date}
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>

              {/* Floating Image Effect on Hover */}
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-48 h-32 rounded-lg overflow-hidden shadow-2xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20 hidden md:block">
                <Image src={tour.image} alt={tour.title} fill className="object-cover" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}