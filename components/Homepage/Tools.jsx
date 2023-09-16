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
              text="Fale agora mesmo em nosso WhatsApp, e realize o agendamento seguro e rápido do seu exame médico."
              buttonText="Agende seu exame."
              iconPath="/img/faq.svg"
              externalURL="https://api.whatsapp.com/send?phone=558737613288&text=Ol%C3%A1%20seja%20bem%20vindo!%20em%20que%20podemos%20ajudar"
            />
          </li>
          <li>
            <Retangulo
              title="Resultado de exames"
              text="Eficiência e confiança. Obtenha seus resultados on-line atravé do login e senha fornecidos durante seu atendimento."
              buttonText="Resultados on-line."
              iconPath="/img/faq.svg"
              externalURL="https://lablaudo.com.br/acesso_paciente"
            />
          </li>
          <li>
            <Retangulo
              title="Resultado de Biopsia"
              text="Oferecer serviços de saúde con excelência. Onde o investimento em capacitação técnica e tecnológica é a marca da empresa."
              buttonText="Saíba mais."
              iconPath="/img/faq.svg"
              externalURL="https://www.labhoraciofittipaldi.com.br/vidalaudos/login_paciente.xhtml;jsessionid=115f228a2be66aa0ca4d65949bc1"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Tools;
