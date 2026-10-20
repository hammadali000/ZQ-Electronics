import Hero from "../component/Hero";
import PromoBanner from "../component/PromoBanner";
import Categories from "../component/Categories";
import FeaturedProducts from "../component/FeaturedProducts";
import InstallmentCalculator from "../component/InstallmentCalculator";
import HowInstallmentsWork from "../component/HowInstallmentsWork";
import WhyChooseUs from "../component/WhyChooseUs";
import Testimonials from "../component/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromoBanner />
      <Categories />
      <FeaturedProducts />
      <InstallmentCalculator />
      <HowInstallmentsWork />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}