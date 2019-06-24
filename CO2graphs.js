var year = ["1990", "2000", "2009", "2010", "2011", "2012", "2013", "2014"];

var co2Amount = ["3.324719", "4.249225", "4.454463", "4.570283", "4.533582", "4.705532", "4.623131", "4.616375"];

var trace1 = {
    x: year,
    y: co2Amount,
    type: "scatter"
};

var data = [trace1];

var layout = {
    title: "CO2 Over Time",
    xaxis: { title: "Year" },
    yaxis: { title: "CO2 emissions (metric tons per capita)" }
};

Plotly.newPlot("scatter-plot", data, layout);
