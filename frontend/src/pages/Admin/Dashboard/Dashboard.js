import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';

export const Dashboard = () => {
    const plotRef = useRef(null);

    useEffect(() => {
        const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yArray = [55, 49, 44, 24, 15];

        const data = [{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation: "v",
            marker: { color: "rgba(0,0,255,0.6)" }
        }];

        const layout = { title: "World Wide Wine Production" };

        // Store the current ref value in a variable
        const plotElement = plotRef.current;

        // Render the plot
        Plotly.newPlot(plotElement, data, layout);

        // Cleanup on unmount
        return () => Plotly.purge(plotElement);
    }, []);

    return (
        <div>
            <div ref={plotRef} style={{ width: "100%", height: "400px" }}></div>
        </div>
    );
};
