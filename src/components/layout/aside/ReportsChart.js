import React, { useState } from "react";

import ReactApexChart from 'react-apexcharts';


const ReportsChart = () => {

    const [options] = useState({
        series: [40, 30, 10, 20],
        options: {
            labels: ["colories", "carbohydrates", "fats", "proten"],
            dataLabels: {
                enabled: false,
            },
            chart: {
                type: 'donut',
                // width: 500,
                
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    });

    return (
        <div id="reports-chart">
            <ReactApexChart options={options.options} series={options.series} type="donut" />
        </div>
    )
}

export default ReportsChart;