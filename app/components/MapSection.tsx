"use client";
import { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";

type Location = { id: string; city: string; country: string; lat: number; lng: number; image?: string; detail: string };

// All 8 countries from the latest tour
const locations: Location[] = [
  { id: "cape-town", city: "Cape Town", country: "South Africa", lat: -33.92, lng: 18.42, image: "/masjid-saffiyatun.jpg", detail: "Schaapkraal Khutbah & Wits Campus Dawah" },
  { id: "gaborone", city: "Gaborone", country: "Botswana", lat: -24.65, lng: 25.91, image: "/duma-fm.jpg", detail: "Duma FM interview & Dawah training camp" },
  { id: "lusaka", city: "Lusaka", country: "Zambia", lat: -15.38, lng: 28.32, detail: "Street Dawah and community outreach" },
  { id: "harare", city: "Harare", country: "Zimbabwe", lat: -17.82, lng: 31.05, detail: "1st Street Table Dawah" },
  { id: "windhoek", city: "Windhoek", country: "Namibia", lat: -22.56, lng: 17.08, detail: "Community engagements and meetings" },
  { id: "maseru", city: "Maseru", country: "Lesotho", lat: -29.31, lng: 27.48, detail: "PMR FM 95.0 Interview & Maseru Islamic Institute" },
  { id: "maputo", city: "Maputo", country: "Mozambique", lat: -25.96, lng: 32.57, detail: "Regional Dawah outreach" },
  { id: "port-louis", city: "Port Louis", country: "Mauritius", lat: -20.16, lng: 57.50, image: "/port-louis.jpg", detail: "Courtesy visit to the Lord Mayor" },
];

// Convert Latitude/Longitude to 3D Sphere Coordinates
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function Globe({ activeId, setActiveId }: { activeId: string, setActiveId: (id: string) => void }) {
  const globeRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (globeRef.current) {
      // Auto-rotate the globe slowly
      globeRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={globeRef} rotation={[0, -Math.PI / 2, 0]}>
      
      {/* Earth Sphere */}
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial 
          map={new THREE.TextureLoader().load("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")} 
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>

      {/* Flight Paths */}
      {locations.map((loc, i) => {
        if (i === locations.length - 1) return null;
        const nextLoc = locations[i + 1];
        const start = latLngToVector3(loc.lat, loc.lng, 1.01);
        const end = latLngToVector3(nextLoc.lat, nextLoc.lng, 1.01);
        
        // Lift the middle of the line to create an arc
        const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(1.25);

        // Use a TubeGeometry to make the lines thick and visible
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        return (
          <mesh key={`line-${i}`}>
            <tubeGeometry args={[curve, 64, 0.003, 8, false]} />
            <meshBasicMaterial color="#c39a3e" transparent opacity={0.8} />
          </mesh>
        );
      })}

      {/* Location Pins */}
      {locations.map((loc) => {
        const pos = latLngToVector3(loc.lat, loc.lng, 1.02);
        const isActive = activeId === loc.id;

        return (
          <group key={loc.id} position={pos}>
            <mesh onClick={(e) => { e.stopPropagation(); setActiveId(loc.id); }}>
              <sphereGeometry args={[isActive ? 0.04 : 0.02, 16, 16]} />
              <meshBasicMaterial color={isActive ? "#c39a3e" : "#ffffff"} />
            </mesh>
            
            {/* Glowing pulse for active pin */}
            {isActive && (
              <mesh>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshBasicMaterial color="#c39a3e" transparent opacity={0.4} />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}

export default function MapSection() {
  const [activeId, setActiveId] = useState("cape-town");
  const active = locations.find((item) => item.id === activeId) ?? locations[0];

  return (
    <section id="live-projects" className="overflow-hidden bg-[#f8f9fa] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        
        {/* Left Side: List of Locations */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold sm:text-sm">Our latest tour</p>
          <h2 className="max-w-xl text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy">
            Eight countries.<br/>One mission.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore the places connected to ICRA&apos;s latest outreach and community engagement across Africa and the Indian Ocean.
          </p>
          
          <div className="mt-10 space-y-2">
            {locations.map((item) => (
              <button 
                key={item.id} 
                type="button" 
                onClick={() => setActiveId(item.id)} 
                className={`group flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition-all ${activeId === item.id ? "bg-white shadow-md ring-1 ring-slate-200" : "hover:bg-white/60"}`}
              >
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full transition-colors ${activeId === item.id ? "bg-brand-gold ring-4 ring-brand-gold/20" : "bg-slate-300 group-hover:bg-brand-gold"}`} />
                <span className={`text-[15px] font-semibold transition-colors ${activeId === item.id ? "text-brand-navy" : "text-slate-500 group-hover:text-brand-navy"}`}>
                  {item.city}, {item.country}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: 3D Globe */}
        <div className="relative rounded-[2rem] border border-slate-200/80 bg-[#041a33] p-5 shadow-2xl sm:p-8">
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#10345C] to-[#041a33] opacity-40 pointer-events-none rounded-[2rem]"></div>

          <div className="relative mx-auto h-[450px] w-full max-w-[600px] cursor-grab active:cursor-grabbing z-10">
            <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }}>
              {/* Brighter, multi-directional lighting so the globe pops */}
              <ambientLight intensity={2.5} />
              <directionalLight position={[5, 5, 5]} intensity={2} />
              <directionalLight position={[-5, 5, 5]} intensity={1.5} />
              <directionalLight position={[0, -5, 5]} intensity={1} />
              
              <Globe activeId={activeId} setActiveId={setActiveId} />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>

          {/* Selected Location Info Card */}
          <div className="relative z-10 mx-auto mt-4 flex max-w-[600px] items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-5">
            {active.image ? (
              <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-slate-800 shadow-sm sm:h-28 sm:w-40">
                <Image src={active.image} alt={`${active.city} outreach`} fill sizes="160px" className="object-cover" />
              </div>
            ) : (
              <div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-2xl text-brand-gold sm:h-28 sm:w-40">✦</div>
            )}
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Selected location</p>
              <h3 className="mt-1 text-lg font-bold text-white truncate">{active.city}, {active.country}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-300 line-clamp-2">{active.detail}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}