import { Chart } from "chart.js";

const jisin = document.getElementById("jisinChart");
new Chart(jisin, {
  type: "bar",

  data: {
    labels: [
      "1910年代",
      "1920年代",
      "1930年代",
      "1940年代",
      "1950年代",
      "1960年代",
      "1970年代",
      "1980年代",
      "1990年代",
      "2000年代",
      "2010年代",
      "2020年代",
    ],
    datasets: [
      {
        label: "地震発生回数",
        data: [3, 143, 133, 112, 69, 288, 139, 188, 334, 814, 955, 178],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      // pluginsの中に
      legend: {
        display: false,
      },
    },
  },
});

///////////
const jisinline = document.getElementById("jisinlineChart");
new Chart(jisinline, {
  type: "line",

  data: {
    labels: ["1910", "20", "30", "40", "50", "60", "70", "80", "90", "2000", "10", "20年代"],
    datasets: [
      {
        label: "地震発生回数",
        data: [3, 143, 133, 112, 69, 288, 139, 188, 334, 814, 955, 178],

        borderColor: ["blue"],
        borderWidth: 2,
        pointRadius: 2, //プロットした点の大きさ
        pointHoverBorderWidth: 20, //プロットした点を選択した時に大きく表示するサイズ
      },
    ],
  },
  options: {
    plugins: {
      // pluginsの中に
      legend: {
        display: false,
      },
    },
  },
});

///////////////

const ctx = document.getElementById("myChart");

new Chart(ctx, {
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
});
