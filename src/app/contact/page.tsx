import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Truchas Mazzarello",
  description: "Truchas el Retiro - Rionegro - Medellin - Truchera",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="" description="" />
    </>
  );
};

export default ContactPage;
