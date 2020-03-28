import React, { useEffect } from "react";
import "./styles.scss";

const CHART_URL = "https://public.flourish.studio/resources/embed.js";
const CHART_DATA_SOURCE = "visualisation/1711865"; // TODO replace with real data source

const ChartContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = CHART_URL;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="chart-container flourish-embed flourish-network"
      data-src={CHART_DATA_SOURCE}
      data-height="400px"
    />
  );
};

export default ChartContainer;
