
import FAQs from "@/components/sections/FAQs";
import PageHero from "@/components/sections/PageHero";

export default function FAQsPage() {
  return (
    <main>
    <PageHero
        image="/images/div.st-hero.png"
        imageAlt="Equipo de Quiropraxia Mauro"
        eyebrow="RESOLVEMOS TUS DUDAS"
        title="Preguntas"
        titleHighlight="frecuentes"
        description="Ofrecemos una atención personalizada, adaptada a tus necesidades y objetivos. Cada tratamiento se ajusta a tu condición y a tu estilo de vida, para que recuperes el movimiento y te sientas mejor."
    />
    <FAQs
        eyebrow="RESOLVIENDO SUS DUDAS"
        title="Sobre la Quiropraxia y su Salud"
        whatsappUrl="https://wa.me/5492996342500?text=Hola%2C%20quisiera%20hacer%20una%20consulta."
        questions={[
          {
            question: "¿Los ajustes quiroprácticos duelen?",
            answer: [
              {
                type: "paragraph",
                text: "Cada persona puede experimentar un ajuste de manera diferente. Algunas sienten alivio inmediato, mayor movilidad o relajación, mientras que otras pueden experimentar una molestia pasajera.",
              },
              {
                type: "paragraph",
                text: "Existen diferentes técnicas de ajuste:",
              },
              {
                type: "list",
                items: [
                  {
                    text: "Manuales: realizados con las manos, mediante movimientos específicos y controlados.",
                    bold: ["Manuales"],
                  },
                  {
                    text: "Con Drop: utilizando una camilla especial con secciones móviles.",
                    bold: ["Con Drop"],
                  },
                  {
                    text: "Con Ajustador: mediante un instrumento que proporciona impulsos suaves y precisos.",
                    bold: ["Con Ajustador"],
                  },
                ],
              },
              {
                type: "paragraph",
                text: "En Quiropraxia Mauro Cantero seleccionamos la técnica según la evaluación y las necesidades de cada persona, buscando que cada ajuste sea lo más específico y efectivo posible.",
                //bold: ["según cada caso"], SE PUEDE AGREGAR QUE PALABRAS EN NEGRA
              },
            ],
          },
          {
            question: "¿Necesito llevar radiografías o resonancias?",
            answer: [
              {
                type: "paragraph",
                text: "Si tenés radiografías o resonancias previas de tu columna, te recomendamos traerlas a la primera visita.",
              },
              {
                type: "paragraph",
                text: "En Quiropraxia Mauro Cantero, los estudios de imágenes pueden complementar nuestra evaluación y aportar información importante para orientar la atención.",
              },
              {
                type: "paragraph",
                text: "En algunos casos, podemos solicitar estudios antes de realizar los primeros ajustes, mientras que en otros, la necesidad de nuevas imágenes se determina después de la primera visita.",
              },
              {
                type: "paragraph",
                text: "Cada persona es diferente. Por eso, evaluamos cuándo es necesario contar con estudios complementarios, priorizando siempre tu seguridad.",
              },
              {
                type: "paragraph",
                text: "¿Tenés dudas sobre tu caso? Escribinos por WhatsApp y te orientamos antes de tu primera visita.",
                bold:["¿Tenés dudas sobre tu caso? Escribinos por WhatsApp y te orientamos antes de tu primera visita."]
              },
            ],
          },
          {
            question: "¿La quiropraxia trabaja solamente sobre la columna vertebral?",
            answer: [
              {
                type: "paragraph",
                text: "La columna vertebral es el principal enfoque de nuestra atención, pero también evaluamos otras articulaciones del cuerpo, como hombros, codos, rodillas, tobillos y mandíbula.",
              },
              {
                type: "paragraph",
                text: "En Quiropraxia Mauro Cantero comenzamos evaluando y trabajando sobre la columna, teniendo en cuenta su relación con el movimiento y el funcionamiento del cuerpo.",
              },
              {
                type: "paragraph",
                text: "Si presentás molestias en otra articulación, evaluamos su posible origen y cómo evoluciona después de los ajustes vertebrales.",
              },
              {
                type: "paragraph",
                text: "En algunos casos, puede ser necesario realizar un ajuste específico de esa articulación; en otros, preferimos observar la evolución y volver a evaluarla en una próxima visita.",
              },
              {
                type: "paragraph",
                text: "Cada ajuste se realiza cuando la evaluación indica que es apropiado, respetando las necesidades y los tiempos de cada persona.",
                bold:["Cada ajuste se realiza cuando la evaluación indica que es apropiado, respetando las necesidades y los tiempos de cada persona."]
              },
            ],
          },
          {
            question: "¿La quiropraxia es solamente para personas con dolor?",
            answer: [
              {
                type: "paragraph",
                text: "No. Si bien muchas personas llegan a nuestro consultorio buscando aliviar dolores o molestias, la atención quiropráctica no se limita a quienes presentan síntomas.",
              },
              {
                type: "paragraph",
                text: "También recibimos personas que desean cuidar su columna vertebral, mejorar su movilidad y prestar mayor atención a su bienestar.",
              },
              {
                type: "paragraph",
                text: "En Quiropraxia Mauro Cantero, cada persona recibe una evaluación personalizada, teniendo en cuenta su condición, sus necesidades y sus objetivos.",
              },
              {
                type: "paragraph",
                text: "No necesitás tener dolor para empezar a cuidar tu columna.",
                bold:["No necesitás tener dolor para empezar a cuidar tu columna."]
              },
            ],
          },
          {
            question: "¿Necesito una derivación médica para asistir a quiropraxia?",
            answer: [
              {
                type: "paragraph",
                text: "No. Podés solicitar tu primera visita sin necesidad de una derivación médica.",
              },
              {
                type: "paragraph",
                text: "En Quiropraxia Mauro Cantero realizamos una evaluación individual para determinar si la atención quiropráctica es apropiada para vos.",
              },
              {
                type: "paragraph",
                text: "En situaciones particulares, como lesiones recientes, caídas o cuadros agudos, podemos recomendar una evaluación médica y, si corresponde, estudios complementarios antes de realizar ajustes.",
              },
              {
                type: "paragraph",
                text: "Tu seguridad es siempre nuestra prioridad.",
                bold:["Tu seguridad es siempre nuestra prioridad."]
              },
            ],
          },
          {
            question: "¿Puedo asistir si tengo dolor de columna?",
            answer: [
              {
                type: "paragraph",
                text: "Sí. Muchas personas llegan a nuestro consultorio por dolores cervicales, dorsales o lumbares que afectan sus actividades cotidianas.",
              },
              {
                type: "paragraph",
                text: "Durante la primera visita evaluamos tu columna, su movilidad y tus antecedentes para determinar si la atención quiropráctica es apropiada para vos.",
              },
              {
                type: "paragraph",
                text: "A través de ajustes específicos y un seguimiento personalizado, buscamos mejorar la movilidad, aliviar las molestias y acompañarte en el cuidado de tu columna.",
              },
              {
                type: "paragraph",
                text: "Nuestro enfoque va más allá del alivio del dolor: también buscamos ayudarte a cuidar tu movimiento y bienestar a largo plazo.",
              },
            ],
          },
          {
            question: "¿Puedo recibir atención quiropráctica si tengo una hernia de disco, rectificación o una cirugía de columna?",
            answer: [
              {
                type: "paragraph",
                text: "Sí, en muchos casos es posible recibir atención quiropráctica, incluso si tenés una hernia de disco, rectificación de columna, cambios degenerativos o antecedentes de cirugía.",
              },
              {
                type: "paragraph",
                text: "En Quiropraxia Mauro Cantero evaluamos cada situación de manera individual, teniendo en cuenta tus síntomas, antecedentes y estudios de imágenes, si contás con ellos.",
              },
              {
                type: "paragraph",
                text: "No todas las zonas de la columna requieren el mismo tipo de intervención. Por eso, seleccionamos las técnicas y las regiones que pueden abordarse de manera apropiada, evitando aquellas donde un ajuste podría estar contraindicado.",
              },
              {
                type: "paragraph",
                text: "Nuestro objetivo es ofrecerte una atención personalizada, adaptada a las características y necesidades de tu columna.",
                bold: ["Nuestro objetivo es ofrecerte una atención personalizada, adaptada a las características y necesidades de tu columna."]
              },
              {
                type: "paragraph",
                text: "¿Tenés alguna de estas condiciones y dudas sobre tu caso? Escribinos por WhatsApp y te orientamos antes de tu primera visita.",
                bold: ["¿Tenés alguna de estas condiciones y dudas sobre tu caso? Escribinos por WhatsApp y te orientamos antes de tu primera visita."]
              },
            ],
          },
          {
            question: "¿Qué puedo sentir después de un ajuste quiropráctico?",
            answer: [
              {
                type: "paragraph",
                text: "Cada persona puede responder de manera diferente a un ajuste quiropráctico. Algunas personas experimentan alivio, mayor libertad de movimiento, relajación o una sensación de bienestar. Otras pueden presentar sensibilidad muscular, cansancio o molestias transitorias durante las horas posteriores. Estas sensaciones pueden variar de una persona a otra y no necesariamente se presentan después de cada ajuste.",
              },
              {
                type: "paragraph",
                text: "En Quiropraxia Mauro Cantero acompañamos tu evolución. Si experimentás molestias después de un ajuste, podés comunicarte con nuestro consultorio.",
                bold:["podés comunicarte con nuestro consultorio."]
              },
              {
                type: "paragraph",
                text: "Mauro podrá orientarte con recomendaciones sencillas o, si es necesario, volver a evaluarte para determinar cómo continuar con tu atención.",
              },
            ],
          },
          {
            question: "¿Cuántas visitas voy a necesitar?",
            answer: [
              {
                type: "paragraph",
                text: "El cuidado quiropráctico es un proceso que requiere tiempo, constancia y seguimiento.",
              },
              {
                type: "paragraph",
                text: "Así como ocurre con el ejercicio físico, los cambios en la movilidad y la adaptación del cuerpo pueden desarrollarse progresivamente.",
              },
              {
                type: "paragraph",
                text: "En Quiropraxia Mauro Cantero trabajamos con una etapa inicial de ajustes regulares, acompañada de evaluaciones que nos permiten observar tu evolución y adaptar la atención según tus necesidades.",
              },
              {
                type: "paragraph",
                text: "La cantidad y frecuencia de las visitas dependerán de tu evaluación inicial, tus objetivos y tu respuesta a los ajustes.",
              },
              {
                type: "paragraph",
                text: "Durante tu primera visita te explicaremos cómo será tu proceso de atención personalizado.",
              },
            ],
          },
        ]}
      />
    </main>
  );
}
