import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra empresa | Truchas Mazzarello",
  description: "Truchas el retiro - Rionegro - Medellin - truchera",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="" description="" />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
