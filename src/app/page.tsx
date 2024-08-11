import CompanyOverview from "@/components/companyoverview";
import Hero from "@/components/hero";
import Services from "./services/page";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <Services />
    </>
  );
};

export default HomePage;