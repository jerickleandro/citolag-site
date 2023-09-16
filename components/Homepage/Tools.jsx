import React from "react";
import Retangulo from "./retangulo";

function Tools() {
  return (
    <section
      className="content-wrapper has-animation pt-0"
      data-vp-add-class="visible"
    >
      <div className="wrapper">
        <ul className="banking-tools">
          <li>
            <Retangulo
              title="Agende seus exames"
              text="Fale agora mesmo em nosso WhatsApp e realize o agendamento do seu exame."
              buttonText="Agende seu exame"
              iconPath="/img/faq.svg"
            />
          </li>
          <li>
            <Retangulo
              title="Resultado de exames"
              text="Eficiência e confiança. Obtenha seus resultados on-line atravé do login e senha fornecidos durante seu atendimento."
              buttonText="Resultados on-line"
              iconPath="/img/faq.svg"
            />
          </li>
          <li>
            <Retangulo
              title="Resultado de Biopsia"
              text="Oferecer serviços de saúde con excelência. Onde o investimento em capacitação técnica e tecnológica é a marca da empresa."
              buttonText="Saíba mais."
              iconPath="/img/faq.svg"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Tools;
