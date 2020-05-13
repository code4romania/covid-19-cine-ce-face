import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import ContentPage from "../ContentPage";
// import ChartContainer from "../ChartContainer";

import data from "../../data/static-pages";
import {
  Hero,
  Instruments,
  // List,
  // ListItem,
  // SidebarMenu,
  // SidebarMenuItem,
  MailchimpSubscribe
} from "@code4ro/taskforce-fe-components";
import UsefulApps from "../../data/useful-apps";
import {
  renderInstrumentItem,
  remapInstrumentsData
} from "../../utils/instruments.utils";
import { mailchimpURL } from "../../config/mailchimp";

import "./styles.scss";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedSubPage, setSelectedSubPage] = useState(null);
  const { pageSlug, subPageSlug } = useParams();
  const history = useHistory();

  useEffect(() => {
    // Find the page
    const page = data.find(doc => doc.slug === (pageSlug || "/"));
    let subPage = null;

    if (page) {
      // Find the subPage
      if (subPageSlug) {
        subPage = page.content.find(page => page.slug === subPageSlug);
      } else if (page.content.length) {
        [subPage] = page.content;
      }

      setSelectedPage(page);
      setSelectedSubPage(subPage);
    } else {
      // Fallback to the first page if there is no slug
      const [firstPage] = data;
      history.push((firstPage && firstPage.slug) || "/");
    }
  }, [pageSlug, subPageSlug, history]);

  // const navigate = slug => {
  //   // Fix SecurityError of pushState on History
  //   // Edge case for the `/` slug
  //   history.push(`/${slug !== "/" ? slug : ""}`);
  // };

  const instrumentsData = remapInstrumentsData(UsefulApps);

  return (
    <>
      <div className="container">
        <Hero
          title={"Bine ai venit"}
          useFallbackIcon={true}
          subtitle={
            <React.Fragment>
              ”Cine ce face” este un proiect de informare prin care sperăm să
              ajutăm cetățenii să aibă o imagine cât mai clară și corectă asupra
              rolurilor diverșilor actori din societate în situația de pandemie
              cu care ne confruntăm. Proiectul este unul în continuă dezvoltare
              și vom completa informațiile în curând cu actorii internaționali
              și organizațiile neguvernamentale. Dacă observi orice
              neconcordanță, că lipsește un actor relevant, sau că informația
              este neclară, te rugăm să ne{" "}
              <a href="mailto:contact@code4.ro">transmiți un e-mail</a>.
            </React.Fragment>
          }
        />
      </div>

      {/* <div className="container pages-list">
        <List columns={3}>
          {data.map(doc => (
            <ListItem
              key={doc.doc_id}
              active={selectedPage && selectedPage.doc_id === doc.doc_id}
              title={doc.title}
              onClick={() => navigate(doc.slug)}
              value={doc}
            />
          ))}
        </List>
      </div> */}

      <div className="container">
        <div className="columns homepage-columns">
          <aside className="column is-4 homepage-sidebar">
            {/* <SidebarMenu>
              {data.map(doc => {
                let menuItems = null;
                if (doc.content.length > 1) {
                  // Ignore the first subpage title
                  // It's shown as page title
                  menuItems = doc.content.slice(1).map(page => (
                    <SidebarMenuItem
                      key={`subpage-header_${page.slug}`}
                      active={page.slug === subPageSlug}
                      onClick={() => navigate(`${doc.slug}/${page.slug}`)}
                    >
                      {page.title}
                    </SidebarMenuItem>
                  ));
                }

                return (
                  <div key={`page-wrapper_${doc.slug}`}>
                    <SidebarMenuItem
                      key={`page-header_${doc.slug}`}
                      active={
                        !subPageSlug &&
                        (doc.slug === pageSlug ||
                          (doc.slug === "/" && !pageSlug))
                      }
                      onClick={() => navigate(doc.slug)}
                      isTitle
                    >
                      {doc.title}
                    </SidebarMenuItem>
                    {menuItems}
                  </div>
                );
              })}
            </SidebarMenu> */}

            <div className="instruments-wrapper">
              <Hero title={"Instrumente utile"} useFallbackIcon={true} />
              <Instruments layout="column">
                {Object.keys(instrumentsData).map(category => {
                  return instrumentsData[category].map(usefulApp =>
                    renderInstrumentItem(usefulApp)
                  );
                })}
              </Instruments>
            </div>
            <div className="newsletter">
              <MailchimpSubscribe url={mailchimpURL} compact={true} />
            </div>
          </aside>
          <div className="column is-8">
            {selectedPage && (
              <ContentPage
                page={selectedPage}
                subPage={selectedSubPage}
              ></ContentPage>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
