import {
  NavBar,
  About,
  Button,
  WhatsAppSVG,
  Help,
  SectionDivider,
} from "./components";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[linear-gradient(135deg,var(--color-primary),var(--color-primarybg)_50%)] font-sora">
      <NavBar />
      <div className="w-7xl flex flex-col justify-center items-center mx-auto h-screen pt-20">
        <div className="w-2/3 flex flex-col gap-5 text-center items-center justify-center">
          <h1 className="text-white text-8xl font-medium font-roboto uppercase">
            Clínica <span className="text-secondary">Rocha</span>
          </h1>
          <span className="w-4/5 text-4xl text-white leading-tight">
            Psicoterapia individualizada e{" "}
            <span className="text-secondary">intervenção especializada</span> em
            autismo para todas as fases da vida
          </span>
          <p className="w-2/3 text-white opacity-75 text-lg">
            Atendimento baseado em evidências científicas, focado no diagnóstico
            e suporte de adultos no espectro autista (TEA).
          </p>
          <p className="w-2/3 text-white opacity-75 text-lg -mt-2">
            Além disso, trabalhamos com o manejo humanizado de demandas clínicas
            como ansiedade, depressão e processos de luto.
          </p>
          <div className="flex items-center justify-center gap-10 mt-10">
            <Button
              className="w-50 bg-secondary hover:bg-secondary/80 text-center text-white font-medium py-4 px-4 rounded-full custom-transform"
              href="#contact"
              text="Vamos conversar?"
            />
            <div className="w-55 flex justify-center border-white text-white border-2 font-medium py-4 px-4 rounded-full custom-transform hover:bg-white/5">
              <a
                href="https://wa.me/5511970465837?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                className="flex items-center gap-2"
              >
                <WhatsAppSVG className="size-4" />
                <span>Entre em contato</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
      <About />
      <SectionDivider />
      <Help />
      <SectionDivider />
    </div>
  );
}
