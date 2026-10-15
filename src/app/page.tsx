import Image from "next/image";
import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Services from "@/components/sections/services";
import ServicesAndSchedule from "@/components/sections/services-and-schedule";
import BlogPreview from "@/components/sections/blog-preview";
import ContactSection from "@/components/sections/contact-section";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main> 
      <Hero /> 
      <Stats />
      <ServicesAndSchedule />
      <Services />
      <BlogPreview />
      <ContactSection/>
      <Testimonials />
    </main>
  );
}
