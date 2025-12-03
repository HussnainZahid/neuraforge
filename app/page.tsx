import Hero from '@/components/Hero';
import ServicesCarousel from '@/components/ServicesCarousel';
import TechStack from '@/components/TechStack';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import { services } from '@/utils/data';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesCarousel services={services} />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
      <CTASection />
    </main>
  );
}
