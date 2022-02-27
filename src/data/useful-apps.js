import React from "react";
import { Trans } from "@lingui/macro";

export default [
  {
    title: (
      <Trans>
        Instalează-ți extensia de Chrome pentru a depista știrile false
      </Trans>
    ),
    doc_type: "USEFUL_APP",
    doc_id: 1,
    active: true,
    display_order: 1,
    app_type: "NEWS",
    buttons: [
      {
        title: <Trans>Instalează extensie</Trans>,
        link:
          "https://chrome.google.com/webstore/detail/covid-19-stiri-oficiale/pdcpkplohipjhdfdchpmgekifmcdbnha",
      },
    ],
  },
  {
    title: (
      <Trans>
        Instalează-ți extensia de Firefox pentru a depista știrile false
      </Trans>
    ),
    doc_type: "USEFUL_APP",
    doc_id: 2,
    active: true,
    display_order: 2,
    app_type: "NEWS",
    buttons: [
      {
        title: <Trans>Instalează extensie</Trans>,
        link:
          "https://addons.mozilla.org/en-US/firefox/addon/covid-19-%C8%99tiri-oficiale/",
      },
    ],
  },
  {
    title: <Trans>Știri oficiale și informații la zi</Trans>,
    doc_type: "USEFUL_APP",
    doc_id: 3,
    active: true,
    display_order: 3,
    app_type: "NEWS",
    buttons: [
      {
        title: <Trans>Cele mai noi informații oficiale</Trans>,
        link: "https://stirioficiale.ro/",
      },
    ],
  },
  {
    title: <Trans>Ce trebuie să fac?</Trans>,
    doc_type: "USEFUL_APP",
    doc_id: 4,
    active: true,
    display_order: 4,
    app_type: "INFO",
    buttons: [
      {
        title: <Trans>Toate informațiile de care ai nevoie</Trans>,
        link: "https://cetrebuiesafac.ro",
      },
    ],
  },
  {
    title: <Trans>Date la zi</Trans>,
    doc_type: "USEFUL_APP",
    doc_id: 5,
    active: true,
    display_order: 5,
    app_type: "DATA",
    buttons: [
      {
        title: <Trans>Vezi aici date la zi</Trans>,
        link: "https://datelazi.ro/",
      },
    ],
  },
  {
    title: <Trans>Vrei să ajuți. Intră aici</Trans>,
    doc_type: "USEFUL_APP",
    doc_id: 6,
    active: true,
    display_order: 6,
    app_type: "OFFER_HELP",
    content: null,
    buttons: [
      {
        title: <Trans>Donează prin RoHelp</Trans>,
        link: "https://rohelp.ro/",
      },
    ],
  },
  {
    title: <Trans>Ești în afara țării și ai nevoie de ajutor?</Trans>,
    doc_type: "USEFUL_APP",
    doc_id: 7,
    active: true,
    display_order: 7,
    app_type: "DIASPORA",
    content: null,
    buttons: [
      {
        title: <Trans>Intră pe DiasporaHub</Trans>,
        link: "https://diasporahub.ro",
      },
    ],
  },
];
