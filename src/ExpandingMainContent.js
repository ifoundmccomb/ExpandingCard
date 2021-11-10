import React from "react"

/**
 * @param {Boolean} showHidden - A flag to indicate when to show the hidden content
 * @param {React component} contentComponent - The content
 * @returns {React component} a component with a show / hide toggle button
 */

const ToggleButton = ({ showHidden=false }) => <button>{showHidden ? '-' : '+'}</button>

const ExpandingMainContent = ({showHidden, contentComponent: ContentComponent}) => (
    <div>
        <ToggleButton/>
        <ContentComponent/>
    </div>
)

export default ExpandingMainContent