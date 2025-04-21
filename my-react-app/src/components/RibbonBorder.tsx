import React from "react";
import "../styles/ribbonBorder.scss";

interface RibbonBorderProps {
  children: React.ReactNode;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  horseshoeWidth?: number;
  horseshoeHeight?: number;
}

const RibbonBorder: React.FC<RibbonBorderProps> = ({
  children,
  fillColor = "#e1c671", // Gold fill color
  strokeColor = "#b8860b", // Darker gold stroke color
  strokeWidth = 2,
  horseshoeWidth = 20, // Controls the width of the horseshoe opening
  horseshoeHeight = 5, // Controls how tall the horseshoe prongs are
}) => {
  // SVG dimensions
  const viewBoxWidth = 500;
  const viewBoxHeight = 100;

  // Calculate horseshoe points
  const leftEdge = horseshoeWidth;
  const rightEdge = viewBoxWidth - horseshoeWidth;
  const topEdge = horseshoeHeight;
  const bottomCurveY = viewBoxHeight - horseshoeHeight;

  // Create the horseshoe path
  // The path creates an outer horseshoe shape with nail holes
  const pathData = `
    M ${leftEdge} ${topEdge}
    L ${leftEdge} ${topEdge + horseshoeHeight}
    C ${leftEdge} ${viewBoxHeight}, ${rightEdge} ${viewBoxHeight}, ${rightEdge} ${
    topEdge + horseshoeHeight
  }
    L ${rightEdge} ${topEdge}
    
    /* Inner curve to create the hollow part */
    M ${leftEdge + horseshoeWidth / 2} ${topEdge + horseshoeHeight / 2}
    L ${leftEdge + horseshoeWidth / 2} ${topEdge + horseshoeHeight}
    C ${leftEdge + horseshoeWidth / 2} ${viewBoxHeight - horseshoeHeight / 2}, 
      ${rightEdge - horseshoeWidth / 2} ${viewBoxHeight - horseshoeHeight / 2}, 
      ${rightEdge - horseshoeWidth / 2} ${topEdge + horseshoeHeight}
    L ${rightEdge - horseshoeWidth / 2} ${topEdge + horseshoeHeight / 2}
  `;

  // Create nail holes
  const nailHoles = [];
  for (let i = 0; i < 6; i++) {
    const x = leftEdge + 10 + ((rightEdge - leftEdge - 20) * i) / 5;
    const y = bottomCurveY - 10;
    nailHoles.push(<circle key={i} cx={x} cy={y} r={3} fill={strokeColor} />);
  }

  return (
    <div className="ribbon-container">
      <svg
        className="ribbon-svg"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={pathData}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`
            M ${leftEdge} ${topEdge}
            L ${leftEdge} ${topEdge + horseshoeHeight}
            C ${leftEdge} ${viewBoxHeight}, ${rightEdge} ${viewBoxHeight}, ${rightEdge} ${
            topEdge + horseshoeHeight
          }
            L ${rightEdge} ${topEdge}
          `}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
        {nailHoles}
      </svg>
      <div className="ribbon-content">{children}</div>
    </div>
  );
};

export default RibbonBorder;
