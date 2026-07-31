import Image from "next/image";
import Cards from "./cards";

export default function About() {
  return (
    <div className="h-screen flex flex-col items-center justify-center font-sora">
      <section className="bg-mainwhite h-full w-full flex items-center justify-center">
        <div className="w-7xl flex items-center justify-center gap-5">
          <div className="w-1/2">
            <Image src="/card" alt="" width={100} height={100} />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <span className="text-sm font-semibold font-sans tracking-widest text-auxiliary">
              SOBRE PAMELA ROCHA
            </span>
            <h1 className="text-3xl text-primary font-medium">
              Escutar com <span className="text-secondary">presença</span>.
              Acolher com <span className="text-secondary">cuidado</span>.
              Transformar com <span className="text-secondary">sentido</span>.
            </h1>
            <p className="pt-4">
              Sou Pamela dos Santos Rocha, psicóloga clínica há mais de 10 anos,
              formada pela Universidade de Mogi das Cruzes (UMC) e pós-graduada
              em Autismo e Deficiência Intelectual. Atuo com atendimento
              psicológico para crianças, adolescentes, adultos e idosos,
              oferecendo suporte especializado em demandas emocionais e
              comportamentais como ansiedade, depressão, luto e avaliação
              psicológica.
            </p>
            <p className="pt-2">
              {" "}
              Minha prática clínica engloba o acompanhamento no Transtorno do
              Espectro Autista (TEA), com formação complementar como
              Acompanhante Terapêutica (AT), supervisora e aplicadora ABA nos
              contextos escolar e clínico. Atuo de forma integrada com
              intervenções para o desenvolvimento de habilidades e autonomia,
              supervisão de casos, orientação parental, orientação profissional
              e estimulação cognitiva para a terceira idade.
            </p>
            <div>
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
