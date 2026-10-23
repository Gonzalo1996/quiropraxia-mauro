
"use client";

import { useState } from "react";

type AnswerText = {
  text: string;
  bold?: string[];
};

type AnswerBlock =
  | {
      type: "paragraph";
      text: string;
      bold?: string[];
    }
  | {
      type: "list";
      items: AnswerText[];
    };

type FAQItem = {
  question: string;
  answer: AnswerBlock[];
};

type FAQsProps = {
  eyebrow: string;
  title: string;
  questions: FAQItem[];
  whatsappUrl: string;
};

// Permite resaltar frases específicas sin modificar el texto original.
function RichText({
  text,
  bold = [],
}: AnswerText) {
  const phrases = [...new Set(bold.filter(Boolean))].sort(
    (a, b) => b.length - a.length
  );

  if (phrases.length === 0) {
    return <>{text}</>;
  }

  const escapedPhrases = phrases.map((phrase) =>
    phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const regex = new RegExp(`(${escapedPhrases.join("|")})`, "g");
  const parts = text.split(regex);
  const boldSet = new Set(phrases);

  return (
    <>
      {parts.map((part, index) =>
        boldSet.has(part) ? (
          <strong
            key={index}
            className="font-bold text-[#003652]"
          >
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function FAQs({
  eyebrow,
  title,
  questions,
  whatsappUrl,
}: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F8F9FB] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Encabezado */}
        <div className="text-left">
          <span className="text-[12px] font-bold uppercase tracking-wide text-[#4F9F34] sm:text-[14px]">
            {eyebrow}
          </span>

          <h2 className="mt-0 text-[23px] font-bold leading-tight text-[#003652] sm:text-[28px]">
            {title}
          </h2>
        </div>

        {/* Acordeón */}
        <div className="mt-8 flex flex-col gap-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={`${item.question}-${index}`}
                className="overflow-hidden rounded-[8px] border border-[#EAEAEA] bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex min-h-[80px] w-full items-center gap-4 px-4 py-4 text-left sm:px-6"
                >
                  <span className="shrink-0 text-[18px] font-bold text-[#4F9F34]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-[15px] font-semibold leading-snug text-[#003652] sm:text-[16px]">
                    {item.question}
                  </span>

                  {/* Círculo + / - */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#4F9F34] text-white"
                        : "bg-[#F9FAFC] text-[#1A3A5B]"
                    }`}
                  >
                    {isOpen ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Respuesta animada */}
                <div
                  id={`faq-answer-${index}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="mx-4 border-t border-[#EAEAEA] px-0 pb-6 pt-4 sm:mx-6">
                      <div className="flex flex-col gap-4 text-[13px] leading-7 text-[#5A5A5A] sm:text-base">
                        {item.answer.map((block, blockIndex) => {
                          if (block.type === "paragraph") {
                            return (
                              <p key={blockIndex}>
                                <RichText
                                  text={block.text}
                                  bold={block.bold}
                                />
                              </p>
                            );
                          }

                          return (
                            <ul
                              key={blockIndex}
                              className="list-disc space-y-2 pl-6 marker:text-[#4F9F34]"
                            >
                              {block.items.map((listItem, itemIndex) => (
                                <li key={itemIndex}>
                                  <RichText
                                    text={listItem.text}
                                    bold={listItem.bold}
                                  />
                                </li>
                              ))}
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Banner final: diseño original */}
      <div className="mx-auto mt-16 flex w-full max-w-[1280px] flex-col items-start justify-between gap-7 rounded-[8px] bg-[#1A3A5B] px-6 py-10 sm:px-10 md:mt-20 md:flex-row md:items-center md:gap-10 lg:px-14">
        <div className="flex max-w-3xl flex-col text-left">
          <h2 className="text-[20px] font-bold leading-tight text-white sm:text-[24px]">
            ¿Listo para mejorar su calidad de vida?
          </h2>

          <p className="mt-3 w-full max-w-[600px] text-[14px] leading-5 text-[#EAEAEA] sm:text-[16px]">
            Reserve su primera sesión de diagnóstico y comience
            su camino hacia el bienestar sin dolor.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[50px] w-full shrink-0 items-center justify-center rounded-[8px] bg-[#4F9F34] px-7 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#40832A] sm:w-auto sm:min-w-[192px] sm:text-base"
        >
          Reservar Turno
        </a>
      </div>
    </section>
  );
}
