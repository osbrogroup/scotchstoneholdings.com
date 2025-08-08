import MainLayout from "../components/MainLayout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ServiceHighlights from "../components/ServiceHighlights/ServiceHighlights";
import CompanyIntro from "../components/CompanyIntro";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import OurServices from "../components/OurServices";
import FeaturedProperty from "../components/FeaturedProperty";
import ServiceApartmentCard from "../components/ServiceApartmentCard";

export default function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <CompanyIntro />
      <FeaturedProperty />
      <ServiceApartmentCard />
      <OurServices />
      <ServiceHighlights />
      <Testimonials />
      {/* Mission and Vision Section */}
      <section className="bg-zinc-900 text-white py-16 px-4 mt-10 border-t-2 border-orange-500">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-6 drop-shadow-lg">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
            To empower individuals and organizations by providing secure, high-value
            real estate investment opportunities and delivering exceptional service
            that transforms communities and builds lasting wealth.
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-6 drop-shadow-lg">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
            To be the leading force in Africa’s real estate sector, setting the
            standard for innovation, integrity, and sustainable development while
            making property ownership accessible to all.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4 mt-10">
            Our Core Values
          </h2>
          <ul className="flex flex-wrap justify-center gap-6 text-base md:text-lg text-white/80 font-semibold">
            <li className="bg-orange-600/20 px-6 py-3 rounded-xl shadow">
              Integrity
            </li>
            <li className="bg-orange-600/20 px-6 py-3 rounded-xl shadow">
              Innovation
            </li>
            <li className="bg-orange-600/20 px-6 py-3 rounded-xl shadow">
              Excellence
            </li>
            <li className="bg-orange-600/20 px-6 py-3 rounded-xl shadow">
              Customer Focus
            </li>
            <li className="bg-orange-600/20 px-6 py-3 rounded-xl shadow">
              Sustainability
            </li>
            <li className="bg-orange-600/20 px-6 py-3 rounded-xl shadow">
              Community
            </li>
          </ul>
        </div>
      </section>
      <CallToAction />
    </MainLayout>
  );
}
