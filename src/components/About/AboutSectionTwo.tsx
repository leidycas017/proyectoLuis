import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[900px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three transition-transform hover:scale-105"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three hover:scale-105 dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mb-9 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              POLÍTICAS DE CALIDAD
            </h3>
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Cumplimiento de Normativas:
                </h3>
                <p className="text-base leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Nos comprometemos a cumplir con todas las normativas y
                  regulaciones pertinentes en materia de seguridad alimentaria,
                  manejo ambiental y bienestar animal, nuestra operación se
                  realiza de manera ética y responsable en todo momento.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Responsabilidad Ambiental:
                </h3>
                <p className="text-base leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Nos comprometemos a minimizar el impacto ambiental en todas
                  nuestras operaciones, adoptamos prácticas sostenibles y nos
                  esforzamos por conservar los recursos naturales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
