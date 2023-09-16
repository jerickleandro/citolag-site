import React from "react";
import "./retangulo.css"; // Importe seu arquivo CSS para estilização
// import notebookIcon from 'img/contact.svg'; // Importe o ícone do notebook (ajuste o caminho conforme necessário)
import Image from "next/image";
import Link from "next/link";

function Retangulo({ title, text, buttonText, iconPath, externalURL }) {
  return (
    <div className="container">
      <div className="rectangle">
        <div className="circle">
          <Image src={iconPath} width={33} height={44} alt="" />
        </div>
        <p className="title" style={{ marginBottom: "0px" }}>
          {title}
        </p>
        <p className="text">{text}</p>
        <div className="button-container">
          <Link className="button" href={externalURL} passHref={true}>
            {/* <button className="button"> */}
            <span className="button-text">{buttonText}</span>
            <span
              className="arrow link-btn"
              style={{
                "margin-bottom": "17px",
                "margin-left": "-30px",
                "margin-top": "10px",
                "font-size": "250%",
                color: "white",
              }}
            ></span>
            {/* </button> */}
          </Link>
        </div>
      </div>
    </div>
    // <Image src="/img/faq.svg" width={33} height={44} alt="" />
  );
}

export default Retangulo;
