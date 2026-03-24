import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Flame, Home, Bath, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Website() {
  return (
    <div className="font-sans text-gray-800">
      {/* HERO */}
      <section className="bg-gray-900 text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Reliable Boiler & Plumbing Experts</h1>
        <p className="mb-6">Fast, affordable & Gas Safe registered engineers near you</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://go.servicem8.com/request_quote" target="_blank">
            <Button className="text-lg px-6 py-4">Get Free Quote</Button>
          </a>
          <a href="https://go.servicem8.com/request_quote?job=emergency" target="_blank">
            <Button className="bg-red-600 text-white text-lg px-6 py-4 flex items-center gap-2">
              <Zap size={18}/> Emergency Repair
            </Button>
          </a>
          <a href="tel:07502223708">
            <Button variant="outline" className="text-lg px-6 py-4 flex items-center gap-2">
              <Phone size={18}/> Call Now
            </Button>
          </a>
        </div>
        <div className="mt-6 text-sm opacity-80">
          ✔ Gas Safe Registered &nbsp; ✔ 5★ Reviews &nbsp; ✔ Same-Day Service
        </div>
      </section>

      {/* SERVICES */}
      <section className="p-10 grid md:grid-cols-3 gap-6">
        {[
          { icon: Flame, title: "Boiler Repairs", link: "repair" },
          { icon: Wrench, title: "Boiler Servicing", link: "service" },
          { icon: Home, title: "Boiler Installation", link: "install" },
          { icon: Bath, title: "Bathroom Installations", link: "bathroom" },
          { icon: Wrench, title: "General Plumbing", link: "plumbing" },
        ].map((service, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }}>
            <a href={`https://go.servicem8.com/request_quote?job=${service.link}`} target="_blank">
              <Card className="rounded-2xl shadow-md p-6 text-center cursor-pointer hover:shadow-xl">
                <service.icon className="mx-auto mb-4" />
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </Card>
            </a>
          </motion.div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <p>✔ Repair-first approach (save money)</p>
          <p>✔ Honest, upfront pricing</p>
          <p>✔ 5-star local reputation</p>
          <p>✔ Fast response times</p>
        </div>
      </section>

      {/* QUICK BOOKING STRIP */}
      <section className="bg-blue-600 text-white p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Need help fast?</h2>
        <p className="mb-4">Book instantly online in under 60 seconds</p>
        <a href="https://go.servicem8.com/request_quote" target="_blank">
          <Button className="bg-white text-blue-600 font-semibold px-6 py-3">Book Now</Button>
        </a>
      </section>

      {/* SERVICEM8 FORM */}
      <section className="p-10 text-center bg-white">
        <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
        <p className="mb-6">Fill in the form below and we’ll get back to you quickly.</p>

        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://go.servicem8.com/request_quote"
            className="w-full h-[600px] border rounded-xl"
            title="ServiceM8 Quote Form"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Fast and reliable service!", "Highly recommend!", "Great value and friendly team"].map((review, i) => (
            <Card key={i} className="p-6">
              <CardContent>★★★★★<br/>{review}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://go.servicem8.com/request_quote" target="_blank">
            <Button className="text-lg px-6 py-4">Get Free Quote</Button>
          </a>
          <a href="tel:07502223708">
            <Button variant="outline" className="text-lg px-6 py-4">Call Now</Button>
          </a>
        </div>
      </section>

      {/* STICKY MOBILE BAR */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden">
        <a href="tel:07502223708" className="w-1/2">
          <button className="w-full bg-gray-900 text-white p-4">Call</button>
        </a>
        <a href="https://go.servicem8.com/request_quote" target="_blank" className="w-1/2">
          <button className="w-full bg-blue-600 text-white p-4">Quote</button>
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white p-6 text-center text-sm">
        <p>Connor's Heating © {new Date().getFullYear()}</p>
        <p>Phone: 07502 223708</p>
      </footer>
    </div>
  );
}
