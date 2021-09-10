import './App.css';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4themesKelly from '@amcharts/amcharts4/themes/kelly';
import {useLayoutEffect, useRef, useState} from "react";
import {getChartConfig} from "./chartConfig";
import {data} from "./data";
import SomeChart from "./SomeChart";

am4core.useTheme(am4themesKelly.default);

function App() {
    const chartRef = useRef(null);
    const [chart, setChart] = useState();

    useLayoutEffect(() => {
        const chartConfig = getChartConfig(data, () => {},() => {});
        setChart(am4core.createFromConfig(chartConfig, chartRef.current));
        return () => {
            if (chart) {
                chart.dispose();
            }
        };
    }, [chartRef.current]);

    return (
        <>
            <div className="chartdiv" style={{minWidth: '350px', height: '350px'}} ref={chartRef}/>
            <SomeChart />
        </>
    );
}

export default App;
