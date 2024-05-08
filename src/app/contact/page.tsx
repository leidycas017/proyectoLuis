import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | truchas mazzarello",
  description: "truchas el retiro",
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
