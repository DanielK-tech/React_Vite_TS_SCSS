import React from "react"; // Import React for types like ReactNode
import "../styles/ribbonBorder.scss";

// Define an interface for the component's props
interface RibbonBorderProps {
    children: React.ReactNode; // Type for children elements
    fillColor?: string; // Optional string prop
    strokeColor?: string; // Optional string prop
    strokeWidth?: number; // Optional number prop
    cutDepth?: number; // Optional number prop
}

// Type the component using React.FC (Functional Component) and the props interface
const RibbonBorder: React.FC<RibbonBorderProps> = ({
    children,
    fillColor = "#e1c671", // Výchozí zlatavá barva výplně
    strokeColor = "#b8860b", // Výchozí tmavší barva okraje
    strokeWidth = 1,
    cutDepth = 15, // Hloubka/odsazení "zástřihu" stuhy
}) => {
    // Rozměry viewBoxu pro SVG - můžeme je nechat fixní, SVG se přizpůsobí
    const viewBoxWidth = 200;
    const viewBoxHeight = 50;

    // Vytvoření cesty (path) pro SVG stuhu
    // M x y - Move to (začátek kreslení)
    // L x y - Line to (rovná čára do bodu)
    // Z - Close path (spojí konec s začátkem)
    const pathData = `
        M 0 ${cutDepth}
        L ${cutDepth} 0
        L ${viewBoxWidth - cutDepth} 0
        L ${viewBoxWidth} ${cutDepth}
        L ${viewBoxWidth} ${viewBoxHeight - cutDepth}
        L ${viewBoxWidth - cutDepth} ${viewBoxHeight}
        L ${cutDepth} ${viewBoxHeight}
        L 0 ${viewBoxHeight - cutDepth}
        Z
    `;

    return (
        <div className="ribbon-container">
            {/* SVG element bude absolutně pozicován za obsahem */}
            <svg
                className="ribbon-svg"
                viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                // Zachová poměr stran, ale roztáhne se, aby vyplnilo kontejner.
                // Může lehce deformovat tvar, pokud má kontejner jiný poměr stran.
                // Alternativy: 'xMidYMid meet' (zachová tvar, může nechávat mezery),
                // 'xMidYMid slice' (zachová tvar, může oříznout)
                preserveAspectRatio="none"
                aria-hidden="true" // Skryje SVG před čtečkami obrazovky (je to dekorace)
            >
                <path
                    d={pathData}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    // Zajišťuje, že se stroke vykreslí "dovnitř", aby nepřesahoval rozměry SVG
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
            {/* Obsah bude relativně pozicován nad SVG */}
            <div className="ribbon-content">{children}</div>
        </div>
    );
};

export default RibbonBorder;
