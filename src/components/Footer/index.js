import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  FooterLinkHeader,
  FooterLinkItem,
  FooterLinks
} from "@code4ro/taskforce-fe-components";

const FooterWrapper = () => {
  return (
    <Footer>
      <FooterLinks>
        <FooterLinkHeader>Link-uri utile</FooterLinkHeader>
        <FooterLinkItem>
          <a href="https://code4.ro/" target="_blank" rel="noopener noreferrer">
            Code for Romania
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://github.com/code4romania/whos-who/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codul sursă în GitHub
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <Link to="/termeni-si-conditii">
            Termeni și condiții de utilizare
          </Link>
        </FooterLinkItem>
        <FooterLinkItem>
          <Link to="/politica-confidentialitate">
            Politică de confidențialitate
          </Link>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="mailto:contact@code4.ro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </FooterLinkItem>
      </FooterLinks>
    </Footer>
  );
};

export default FooterWrapper;
