import MainLayout from "../../components/MainLayout";
import ServiceApartmentList from "../../components/ServiceApartmentList";

export default function ServiceApartmentPage() {
  return (
    <MainLayout>
      <div className="pt-10 md:pt-16">
        <ServiceApartmentList />
      </div>
    </MainLayout>
  );
}
