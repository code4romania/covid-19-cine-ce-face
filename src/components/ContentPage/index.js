import React from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import {
  Hero,
  Accordion,
  SocialsShare,
} from "@code4ro/taskforce-fe-components";
import LineSeparator from "../LineSeparator";
import { Trans } from "@lingui/macro";

function ContentPage({ page, subPage }) {
  const renderContent = () => {
    return (
      subPage &&
      subPage.content && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: subPage.content }}
        />
      )
    );
  };

  return (
    <div>
      <Hero title={(subPage && subPage.title) || page.title} />
      <SocialsShare currentPage={window.location.href} />
      {renderContent()}
      {page.form && <Form data={page} />}
      {subPage.content && (
        <div className="content">
          <LineSeparator />
          <h4>
            <Trans>Află mai multe:</Trans>
          </h4>
        </div>
      )}
      {page.accordion &&
        page.accordion.map(({ title, content: Content }, index) => (
          <Accordion
            key={`accordion_${index}`}
            title={title}
            content={
              <div
                className="content"
                // dangerouslySetInnerHTML={{
                //   __html: accordion.content,
                // }}
              >
                <Content />
              </div>
            }
          />
        ))}
    </div>
  );
}

ContentPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        page: PropTypes.string.isRequired,
      })
    ),
    first_node_id: PropTypes.number,
    form: PropTypes.arrayOf(
      PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        questionText: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
          })
        ),
      })
    ),
    accordion: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ),
  }),
  subPage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default ContentPage;
