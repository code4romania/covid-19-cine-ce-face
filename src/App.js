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
  Banner
} from "@code4ro/taskforce-fe-components";
import LogoSvg from "./images/logo.svg";
import "./App.scss";

const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(() =>
  import("./components/TermsAndConditions")
);
const FooterWrapper = lazy(() => import("./components/Footer"));

const Logo = () => (
  <Link to="/">
    <img width="178" height="32" alt="Covid-19. Cine-i cine?" src={LogoSvg} />
  </Link>
);

const MenuItems = [
  <a
    href="https://stirioficiale.ro"
    target="_blank"
    rel="noopener noreferrer"
    key={"stiri"}
  >
    Știri oficiale
  </a>
  /*,
  <a
    href="https://code4.ro/ro/apps/"
    target="_blank"
    rel="noopener noreferrer"
    key={"eco"}
  >
    Ecosistemul Covid-19
  </a>,
  <a
    href="https://code4.ro/ro/doneaza/"
    target="_blank"
    rel="noopener noreferrer"
    key={"don"}
  >
    Sprijină proiectul
  </a> */
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
      <Banner
        title="15 RECOMANDĂRI privind conduita socială responsabilă în prevenirea răspândirii coronavirus. "
        link="https://stirioficiale.ro/15-recomandari-privind-conduita-sociala-responsabila-in-prevenirea-raspandirii-coronavirus"
      />
      <Header Logo={Logo()} MenuItems={MenuItems} />
      <DevelopedBy showSecondLine={true} />
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
        <IncubatedBy />
        <FooterWrapper />
      </Suspense>
    </>
  );
};

export default AppWrapper;
