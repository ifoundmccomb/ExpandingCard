import React, { useState } from "react";
import ExpandingMainContent from "./ExpandingMainContent";
/**
 * @param mainContent - The content that is always visible
 * @param hiddenContent - The content that is visible when the card or button is clicked
 * @returns {React component}
 */
const ExpandingCard = ({ mainContent, hiddenContent: HiddenContent }) => {
  const [showHidden, setShowHidden] = useState(false);

  return (
    <div className="expanding-card" onClick={() => setShowHidden(!showHidden)}>
      <ExpandingMainContent
        showHidden={showHidden}
        contentComponent={mainContent}
      />
      {showHidden && <HiddenContent />}
    </div>
  );
};

export default ExpandingCard;
