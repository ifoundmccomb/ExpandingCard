import React from "react";
import ExpandingCard from "./ExpandingCard";
import "./styles.css";

export default function App() {
  return (
    <ExpandingCard
      mainContent={() => <div>This is the main content</div>}
      hiddenContent={() => <div>This is the hidden content</div>}
    />
  );
}
