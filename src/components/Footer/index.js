import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  FooterLinkHeader,
  FooterLinkItem,
  FooterLinks,
} from "@code4ro/taskforce-fe-components";
import { Trans } from "@lingui/macro";

const FooterWrapper = () => {
  return (
    <Footer>
      <FooterLinks>
        <FooterLinkHeader>
          <Trans>Link-uri utile</Trans>
        </FooterLinkHeader>
        <FooterLinkItem>
          <a href="https://code4.ro/" target="_blank" rel="noopener noreferrer">
            <Trans>Code for Romania</Trans>
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://github.com/code4romania/whos-who/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Trans>Codul sursă în GitHub</Trans>
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <Link to="/termeni-si-conditii">
            <Trans>Termeni și condiții de utilizare</Trans>
          </Link>
        </FooterLinkItem>
        <FooterLinkItem>
          <Link to="/politica-confidentialitate">
            <Trans>Politică de confidențialitate</Trans>
          </Link>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="mailto:contact@code4.ro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Trans>Contact</Trans>
          </a>
        </FooterLinkItem>
      </FooterLinks>
    </Footer>
  );
};

export default FooterWrapper;
