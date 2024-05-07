import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Selección y Preparación",
    paragraph:
      "Limpiar bajo agua fría corriente para eliminar cualquier suciedad, escamas sueltas o residuos, desviscerar e inspeccionar.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Clasificación y Pesaje",
    paragraph:
      "Clasificar por tamaño y peso para facilitar el empaquetado, pesaje preciso de acuerdo con los requisitos del empaque.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Empaque y Almacenamiento",
    paragraph:
      "Empaque herméticamente cerrado, cajas en condiciones adecuadas de temperatura y humedad para preservar su frescura.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
