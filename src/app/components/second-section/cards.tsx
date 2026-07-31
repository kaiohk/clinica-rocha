import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export function Card({ title, description, icon, className = "" }: CardProps) {
  return (
    <div
      className={`bg-slate-50 border border-primary/20 hover:border-primary hover:bg-slate-200 p-5 rounded-2xl flex items-start gap-4 transition duration-300 hover:-translate-y-1.5 ${className}`}
    >
      <div className="bg-primary/10 text-primary p-3 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition duration-300">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-base text-primary tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-primary font-medium leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Cards() {
  const cardsData = [
    {
      title: "Autoconhecimento",
      description: "Descubra sua verdadeira essência interna.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "Regulação Emocional",
      description: "Conquiste o seu equilíbrio interno.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Vínculos Saudáveis",
      description: "Construa conexões humanas mais autênticas.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Clareza Mental",
      description: "Organize todos os seus pensamentos.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto rounded-3xl">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
}
