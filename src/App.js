import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import { logPageView } from "./analyticsTracker";
import Home from "./components/Home";

import {
  Header,
  DevelopedBy,
  IncubatedBy,
  // Banner,
  Logo
} from "@code4ro/taskforce-fe-components";
import LogoSvg from "./images/logo.svg";
import patriaBank from "./images/patria-bank.png";
import "./App.scss";

const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(() =>
  import("./components/TermsAndConditions")
);
const FooterWrapper = lazy(() => import("./components/Footer"));

const AppLogo = () => (
  <Link to="/">
    <img width="178" height="32" alt="Covid-19. Cine ce face?" src={LogoSvg} />
  </Link>
);

const incubatedByPartner = (
  <Logo url="https://www.patriabank.ro/" key="patria-bank">
    <img src={patriaBank} alt="Patria Bank" />
  </Logo>
);

const MenuItems = [
  <a
    href="https://stirioficiale.ro"
    target="_blank"
    rel="noopener noreferrer"
    key={"stirioficiale"}
  >
    Știri oficiale
  </a>,
  <a
    href="https://cetrebuiesafac.ro"
    target="_blank"
    rel="noopener noreferrer"
    key={"cetrebuiesafac"}
  >
    Ce trebuie să fac
  </a>,
  <a
    href="https://datelazi.ro"
    target="_blank"
    rel="noopener noreferrer"
    key={"datelazi"}
  >
    Date la zi
  </a>,
  <a
    href="https://rohelp.ro/ro/"
    target="_blank"
    rel="noopener noreferrer"
    key={"rohelp"}
  >
    RoHelp
  </a>,
  <a
    href="https://diasporahub.ro"
    target="_blank"
    rel="noopener noreferrer"
    key={"diasporahub"}
  >
    Diaspora Hub
  </a>
];

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const App = () => {
  const history = useHistory();
  useEffect(() => {
    logPageView(history);
  }, [history]);

  return (
    <>
      {/* <Banner
        title="15 RECOMANDĂRI privind conduita socială responsabilă în prevenirea răspândirii coronavirus. "
        link="https://stirioficiale.ro/15-recomandari-privind-conduita-sociala-responsabila-in-prevenirea-raspandirii-coronavirus"
      /> */}
      <Header Logo={AppLogo()} MenuItems={MenuItems} />
      <DevelopedBy showPartners={false} />
      <Suspense fallback={<div></div>}>
        <main>
          <Switch>
            <Route path="/politica-confidentialitate">
              <PrivacyPolicy />
            </Route>
            <Route path="/termeni-si-conditii">
              <TermsAndConditions />
            </Route>
            <Route exact path="/:pageSlug?/:subPageSlug?/">
              <Home />
            </Route>
          </Switch>
        </main>
        <IncubatedBy partnerLogos={incubatedByPartner} />
        <FooterWrapper />
      </Suspense>
    </>
  );
};

export default AppWrapper;
