import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle, Star } from "lucide-react";

export default function SalonWebsite() {
  const whatsappLink = "https://wa.me/2348152724915";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-white z-50">
        <h1 className="text-xl font-bold">Tribes Salon & Spa</h1>
        <a href={whatsappLink} target="_blank">
          <Button className="rounded-2xl flex items-center gap-2">
            <MessageCircle size={18} /> Book Now
          </Button>
        </a>
      </header>

      {/* HERO */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Look Good. Feel Amazing.</h1>
        <p className="text-lg mb-6">Premium Unisex Salon & Spa in Abuja — Open 24/7</p>
        <div className="flex justify-center gap-4">
          <a href={whatsappLink} target="_blank">
            <Button className="rounded-2xl px-6 py-3">Book via WhatsApp</Button>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Hair Services", desc: "Cuts, braids, wigs, coloring & treatments" },
            { title: "Spa & Wellness", desc: "Massage, facials, body treatments" },
            { title: "Nails & Beauty", desc: "Manicure, pedicure, nail art" },
            { title: "Men’s Grooming", desc: "Haircuts, shaving, beard care" },
            { title: "Skin Care", desc: "Facials, waxing, steaming" },
            { title: "VIP Experience", desc: "Private luxury treatment rooms" },
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Pricing</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { name: "Haircut", price: "From ₦3,000" },
            { name: "Braiding", price: "From ₦8,000" },
            { name: "Facial", price: "From ₦5,000" },
            { name: "Massage", price: "From ₦10,000" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between border-b pb-2">
              <span>{item.name}</span>
              <span className="font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((t) => (
            <Card key={t} className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex mb-2">
                  {[1,2,3,4,5].map((s)=> <Star key={s} size={16} />)}
                </div>
                <p className="text-sm">Amazing service, very professional staff and a relaxing environment. Highly recommended!</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Visit Us</h2>
        <div className="space-y-4">
          <p className="flex justify-center items-center gap-2"><MapPin size={18}/> Wuye, Abuja</p>
          <p className="flex justify-center items-center gap-2"><Phone size={18}/> +234 815 272 4915</p>
          <p className="flex justify-center items-center gap-2"><Clock size={18}/> Open 24/7</p>
        </div>
        <div className="mt-6">
          <a href={whatsappLink} target="_blank">
            <Button className="rounded-2xl">Chat on WhatsApp</Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm bg-gray-100">
        <p>© {new Date().getFullYear()} Tribes Unisex Salon & Spa. All rights reserved.</p>
      </footer>
    </div>
  );
}
