export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a1a] flex flex-col justify-between min-h-[600px] text-white relative overflow-hidden pt-20">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex-grow">
        
        {/* Newsletter Section */}
        <div className="border-b border-gray-800 pb-16 mb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">Field notes, straight to your inbox.</h3>
            <p className="text-gray-400">One short email when a project opens, closes or needs a hand. Nothing else.</p>
          </div>
          <div>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 bg-gray-900 border border-gray-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-gold"
              />
              <button type="button" className="bg-brand-gold text-brand-navy font-bold px-8 rounded-full hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="md:col-span-1">
            <h4 className="text-2xl font-extrabold mb-4">ICRA</h4>
            <p className="text-gray-400 text-sm mb-6">Dawah, educational and research organization dedicated to sharing the message of Islam across Africa and beyond.</p>
          </div>
          
          <div>
            <h5 className="font-bold mb-4">Organisation</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-gold transition">About us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition">Our Tour</a></li>
              <li><a href="#" className="hover:text-brand-gold transition">Media</a></li>
              <li><a href="#" className="hover:text-brand-gold transition">Partner with us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Contact</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>admin@icraglobal.org</li>
              <li>+254 707004577</li>
              <li>Suite 45, 4th Floor Nextgen Mall, Nairobi</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between text-xs text-gray-500 relative z-10">
          <p>&copy; 2026 Islam and Comparative Religion Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>

      {/* Giant Background Text - Now anchored safely using flexbox */}
      <div className="w-full relative z-0 pointer-events-none select-none flex justify-center mt-12">
        <h1 className="text-[15vw] leading-[0.75] font-extrabold text-white opacity-[0.03] whitespace-nowrap">
          ICRA Global
        </h1>
      </div>
      
    </footer>
  );
}