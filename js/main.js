"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auto_1 = __importDefault(require("chart.js/auto"));
// Define chart configuration
const chartConfig = {
    type: "bar",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};
let chart;
// Function to generate chart
const generateChart = (config) => {
    if (chart) {
        chart.destroy();
    }
    const ctx = document.getElementById("myChart");
    chart = new auto_1.default(ctx, config);
    return chart;
};
// Generate the initial chart
generateChart(chartConfig);
// Re-generate the chart on window resize
addEventListener("resize", () => {
    console.log("resize");
    generateChart(chartConfig);
});
