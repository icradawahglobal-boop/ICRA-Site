export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-navy leading-tight mb-12">
          We exist to give people the chance to hear about Islam directly.
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-600">
          <p>
            In much of Sub-Saharan Africa, Muslims are a small minority and Islamic literature is hard to find. Too often, people learn about Islam from those who are not Muslim, and misunderstandings follow. 
          </p>
          <p>
            We want more Muslims to speak for themselves. We work through universities, the media, and local communities with respect for everyone we meet, equipping Dawah workers and fostering meaningful dialogue.
          </p>
        </div>
      </div>
    </section>
  );
}