/*
To do:
CSS media queries for smaller font sizes on mobile
Audit data / check sources
Write article, add links
*/

const barColor = "#0cc9e1";
const barColor2 = "#6c07b3";
const barColor3 = "#ff6c11";
const positiveBarColor = "#3b00cd";
const negativeBarColor = "#ff00c1";

// Your JSON data
const data = [
    {"Income Quintile":"Quintile 1","Less than 35 years":32144,"35 to 44 years":39230,"45 to 54 years":39715,"55 to 64 years":24610,"65 years and over":28735,"All":31604},
    {"Income Quintile":"Quintile 2","Less than 35 years":75128,"35 to 44 years":79366,"45 to 54 years":62668,"55 to 64 years":55594,"65 years and over":44502,"All":59447},
    {"Income Quintile":"Quintile 3","Less than 35 years":89104,"35 to 44 years":93589,"45 to 54 years":98250,"55 to 64 years":70228,"65 years and over":58049,"All":78998},
    {"Income Quintile":"Quintile 4","Less than 35 years":119463,"35 to 44 years":137538,"45 to 54 years":135803,"55 to 64 years":106872,"65 years and over":79024,"All":114315},
    {"Income Quintile":"Quintile 5","Less than 35 years":182418,"35 to 44 years":187629,"45 to 54 years":262002,"55 to 64 years":193320,"65 years and over":167492,"All":197667},
    {"Income Quintile":"All Quintiles","Less than 35 years":97767,"35 to 44 years":112274,"45 to 54 years":130133,"55 to 64 years":101450,"65 years and over":65738,"All":96406}
];

const data2 = [
  {"Income Quintile": "Quintile 1","Less than 35 years": 62761,"35 to 44 years": 63254,"45 to 54 years": 76767,"55 to 64 years": 71238,"65 years and over": 52572,"All": 61968},
  {"Income Quintile": "Quintile 2","Less than 35 years": 81310,"35 to 44 years": 97176,"45 to 54 years": 86855,"55 to 64 years": 84889,"65 years and over": 55746,"All": 75118},
  {"Income Quintile": "Quintile 3","Less than 35 years": 88214,"35 to 44 years": 99908,"45 to 54 years": 126342,"55 to 64 years": 93812,"65 years and over": 68078,"All": 91266},
  {"Income Quintile": "Quintile 4","Less than 35 years": 88615,"35 to 44 years": 112438,"45 to 54 years": 135533,"55 to 64 years": 114766,"65 years and over": 72967,"All": 103168},
  {"Income Quintile": "Quintile 5","Less than 35 years": 128919,"35 to 44 years": 131586,"45 to 54 years": 183861,"55 to 64 years": 146632,"65 years and over": 96602,"All": 137015},
  {"Income Quintile": "All Quintiles","Less than 35 years": 88914,"35 to 44 years": 103075,"45 to 54 years": 127283,"55 to 64 years": 107382,"65 years and over": 65742,"All": 93707}
];

const data3 = [
  {"Income Quintile": "Quintile 1","Less than 35 years": -30617,"35 to 44 years": -24024,"45 to 54 years": -37052,"55 to 64 years": -46628,"65 years and over": -23837,"All": -30364},
  {"Income Quintile": "Quintile 2","Less than 35 years": -6182,"35 to 44 years": -17810,"45 to 54 years": -24187,"55 to 64 years": -29295,"65 years and over": -11244,"All": -15671},
  {"Income Quintile": "Quintile 3","Less than 35 years": 890,"35 to 44 years": -6319,"45 to 54 years": -28092,"55 to 64 years": -23584,"65 years and over": -10029,"All": -12268},
  {"Income Quintile": "Quintile 4","Less than 35 years": 30848,"35 to 44 years": 25100,"45 to 54 years": 270,"55 to 64 years": -7894,"65 years and over": 6057,"All": 11147},
  {"Income Quintile": "Quintile 5","Less than 35 years": 53499,"35 to 44 years": 56043,"45 to 54 years": 78141,"55 to 64 years": 46688,"65 years and over": 70890,"All": 60652},
  {"Income Quintile": "All Quintiles","Less than 35 years": 8853,"35 to 44 years": 9199,"45 to 54 years": 2850,"55 to 64 years": -5932,"65 years and over": -4,"All": 2699}
];

const data4 = [
  {"Income Quintile": "Quintile 1","Less than 35 years": -0.952,"35 to 44 years": -0.612,"45 to 54 years": -0.933,"55 to 64 years": -1.895,"65 years and over": -0.83,"All": -0.961},
  {"Income Quintile": "Quintile 2","Less than 35 years": -0.082,"35 to 44 years": -0.224,"45 to 54 years": -0.386,"55 to 64 years": -0.527,"65 years and over": -0.253,"All": -0.264},
  {"Income Quintile": "Quintile 3","Less than 35 years": 0.01,"35 to 44 years": -0.068,"45 to 54 years": -0.286,"55 to 64 years": -0.336,"65 years and over": -0.173,"All": -0.155},
  {"Income Quintile": "Quintile 4","Less than 35 years": 0.258,"35 to 44 years": 0.182,"45 to 54 years": 0.002,"55 to 64 years": -0.074,"65 years and over": 0.077,"All": 0.098},
  {"Income Quintile": "Quintile 5","Less than 35 years": 0.293,"35 to 44 years": 0.299,"45 to 54 years": 0.298,"55 to 64 years": 0.242,"65 years and over": 0.423,"All": 0.307},
  {"Income Quintile": "All Quintiles","Less than 35 years": 0.091,"35 to 44 years": 0.082,"45 to 54 years": 0.022,"55 to 64 years": -0.058,"65 years and over": 0,"All": 0.028}
];

const lineData = [
  {"Income Quintile":1,"1999":-16145,"2000":-18244,"2001":-14648,"2002":-17438,"2003":-16789,"2004":-19757,"2005":-23384,"2006":-25646,"2007":-25831,"2008":-27025,"2009":-25065,"2010":-26410,"2011":-25088,"2012":-25248,"2013":-27897,"2014":-29155,"2015":-30231,"2016":-30457,"2017":-31469,"2018":-31591,"2019":-34629,"2020":-19904,"2021":-26618,"2022":-29811,"2023":-30364},
  {"Income Quintile":2,"1999":-11264,"2000":-11132,"2001":-9216,"2002":-11016,"2003":-12375,"2004":-13774,"2005":-14254,"2006":-13648,"2007":-14769,"2008":-15560,"2009":-13338,"2010":-12735,"2011":-14334,"2012":-12602,"2013":-12481,"2014":-12961,"2015":-13223,"2016":-10783,"2017":-12001,"2018":-14416,"2019":-16150,"2020":-648,"2021":-8484,"2022":-13551,"2023":-15671},
  {"Income Quintile":3,"1999":-7759,"2000":-8771,"2001":-9447,"2002":-10411,"2003":-9917,"2004":-9788,"2005":-11062,"2006":-9619,"2007":-10233,"2008":-8013,"2009":-6678,"2010":-5904,"2011":-7386,"2012":-7797,"2013":-6516,"2014":-9343,"2015":-4874,"2016":-5404,"2017":-6401,"2018":-8617,"2019":-8597,"2020":2920,"2021":-4318,"2022":-11092,"2023":-12268},
  {"Income Quintile":4,"1999":744,"2000":-1548,"2001":-795,"2002":407,"2003":-4504,"2004":-624,"2005":-2734,"2006":-2305,"2007":-2673,"2008":-994,"2009":1566,"2010":2789,"2011":1720,"2012":3857,"2013":3275,"2014":4168,"2015":3509,"2016":946,"2017":1935,"2018":2047,"2019":4236,"2020":19351,"2021":17757,"2022":11318,"2023":11147},
  {"Income Quintile":5,"1999":29254,"2000":33306,"2001":34176,"2002":32758,"2003":32676,"2004":33534,"2005":33869,"2006":40634,"2007":39879,"2008":43382,"2009":45067,"2010":42932,"2011":42771,"2012":43242,"2013":47489,"2014":45307,"2015":48125,"2016":37056,"2017":40033,"2018":38984,"2019":47596,"2020":57147,"2021":59734,"2022":56161,"2023":60652}
];

// Get age groups for dropdown
const ageGroups = Object.keys(data[0]).filter(key => key !== "Income Quintile");

// Populate dropdown
const select = document.getElementById("age-group-select");
ageGroups.forEach(group => {
    const option = document.createElement("option");
    option.value = group;
    option.text = group;
    select.appendChild(option);
});

// Event listener for dropdown
select.addEventListener("change", function() {
  updateChart(this.value);
});

// Set up chart dimensions
const margin = {top: 30, right: 10, bottom: 20, left: 50};
const width = Math.min(window.innerWidth*0.95,800) - margin.left - margin.right;
const height = Math.max((window.innerHeight*0.95) * 0.20,140) - margin.top - margin.bottom;

// Create SVG
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
const svg2 = d3.select("#chart2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
const svg3 = d3.select("#chart2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
const svg4 = d3.select("#chart2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Set up scales
const x = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
const y = d3.scaleLinear()
    .range([height, 0]);

const x2 = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
const y2 = d3.scaleLinear()
    .range([height, 0]);

const x3 = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
const y3 = d3.scaleLinear()
    .range([height, 0]);

const x4 = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
const y4 = d3.scaleLinear()
    .range([height, 0]);

// Add axes
const xAxis = svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class","axis")
const yAxis = svg.append("g").attr("class","axis")

const xAxis2 = svg2.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class","axis")
const yAxis2 = svg2.append("g").attr("class","axis")

const xAxis3 = svg3.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class","axis")
const yAxis3 = svg3.append("g").attr("class","axis")

const xAxis4 = svg4.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class","axis")
const yAxis4 = svg4.append("g").attr("class","axis")

//Add y=0 lines
svg.append("line")
  .attr("class","zeroLine")
  .attr("x1", 0)
  .attr("y1", y(0))
  .attr("x2", width)
  .attr("y2", y(0));
svg2.append("line")
  .attr("class","zeroLine")
  .attr("x1", 0)
  .attr("y1", y2(0))
  .attr("x2", width)
  .attr("y2", y2(0));
svg3.append("line")
  .attr("class","zeroLine")
  .attr("x1", 0)
  .attr("y1", y3(0))
  .attr("x2", width)
  .attr("y2", y3(0));
svg4.append("line")
  .attr("class","zeroLine")
  .attr("x1", 0)
  .attr("y1", y4(0))
  .attr("x2", width)
  .attr("y2", y4(0));

//Add chart titles
svg.append("text")
  .attr("class", "chartTitle")
  .attr("y", 0-margin.top)
  .attr("x", 10)
  .attr("dy", "1.2em")
  .style("text-anchor", "left")
  .text("After-Tax Income")
  .append("tspan")
  .attr("x", 10)
  .attr("dy", "1.2em")
  .text("($ per household, annual average)")
  .attr("class", "chartSubtitle");
svg2.append("text")
  .attr("class", "chartTitle")
  .attr("y", 0-margin.top)
  .attr("x", 10)
  .attr("dy", "1.2em")
  .style("text-anchor", "left")
  .text("Spending")
  .append("tspan")
  .attr("x", 10)
  .attr("dy", "1.2em")
  .text("($ per household, annual average)")
  .attr("class", "chartSubtitle");
svg3.append("text")
  .attr("class", "chartTitle")
  .attr("y", 0-margin.top)
  .attr("x", 10)
  .attr("dy", "1.2em")
  .style("text-anchor", "left")
  .text("Cash Flow")
  .append("tspan")
  .attr("x", 10)
  .attr("dy", "1.2em")
  .text("(after-tax income minus spending)")
  .attr("class", "chartSubtitle");
svg4.append("text")
  .attr("class", "chartTitle")
  .attr("y", 0-margin.top)
  .attr("x", 10)
  .attr("dy", "1.2em")
  .style("text-anchor", "left")
  .text("Savings Rate")
  .append("tspan")
  .attr("x", 10)
  .attr("dy", "1.2em")
  .text("(cash flow as a % of after-tax income)")
  .attr("class", "chartSubtitle");

//Add tooltip
const tooltip = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", 0);

// Function to update chart
function updateChart(ageGroup) {
    // Filter and map data (including "All" quintile)
    const chartData = data.map(d => ({quintile: d["Income Quintile"], value: d[ageGroup]}));
    const chartData2 = data2.map(d => ({quintile: d["Income Quintile"], value: d[ageGroup]}));
    const chartData3 = data3.map(d => ({quintile: d["Income Quintile"], value: d[ageGroup]}));
    const chartData4 = data4.map(d => ({quintile: d["Income Quintile"], value: d[ageGroup]}));

    // Update scales
    x.domain(chartData.map(d => d.quintile));
    y.domain([0, Math.max(200000, d3.max(chartData, d => d.value))]);
    x2.domain(chartData2.map(d => d.quintile));
    y2.domain([0, Math.max(150000, d3.max(chartData2, d => d.value))]);
    x3.domain(chartData3.map(d => d.quintile));
    y3.domain([Math.min(-50000,d3.min(chartData3, d => d.value)), Math.max(60000,d3.max(chartData3, d => d.value))]);
    x4.domain(chartData4.map(d => d.quintile));
    y4.domain([Math.min(-1,d3.min(chartData4, d => d.value)), Math.max(0.5,d3.max(chartData4, d => d.value))]);

    // y.tickFormat(d3.format("$,.0f"));
    // yAxis4.tickFormat(d3.format(".0%"));

    // Update axes
    xAxis.call(d3.axisBottom(x));
    yAxis.call(d3.axisLeft(y).tickFormat(d3.format("($,.0f")));
    xAxis2.call(d3.axisBottom(x2));
    yAxis2.call(d3.axisLeft(y2).tickFormat(d3.format("($,.0f")));
    xAxis3.call(d3.axisBottom(x3));
    yAxis3.call(d3.axisLeft(y3).tickFormat(d3.format("($,.0f")));
    xAxis4.call(d3.axisBottom(x4));
    yAxis4.call(d3.axisLeft(y4).tickFormat(d3.format("(.0%")));

    // Update bars
    const bars = svg.selectAll(".bar")
        .data(chartData);
    const bars2 = svg2.selectAll(".bar")
        .data(chartData2);
    const bars3 = svg3.selectAll(".bar")
        .data(chartData3);
    const bars4 = svg4.selectAll(".bar")
        .data(chartData4);

    bars.enter()
        .append("rect")
        .attr("class", "bar")
        .merge(bars)
        .transition()
        .duration(500)
        .attr("x", d => x(d.quintile))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.value))
        .attr("height", d => height - y(d.value))
        .attr("fill", barColor);
    bars2.enter()
        .append("rect")
        .attr("class", "bar")
        .merge(bars2)
        .transition()
        .duration(500)
        .attr("x", d => x2(d.quintile))
        .attr("width", x2.bandwidth())
        .attr("y", d => y2(d.value))
        .attr("height", d => height - y2(d.value))
        .attr("fill", barColor2);
    bars3.enter()
        .append("rect")
        .attr("class", "bar")
        .merge(bars3)
        .transition()
        .duration(500)
        .attr("x", d => x3(d.quintile))
        .attr("width", x3.bandwidth())
        .attr("y", function(d){
          if(d.value >= 0){
            return y3(d.value);
          } else {
            return y3(0);
          }
        })
        .attr("height", function(d){
          if(d.value>=0){
            return y3(0) - y3(d.value);
          } else {
            return y3(d.value) - y3(0);
          }
        })
        .attr("fill", function(d){
          if(d.value >= 0){
            return positiveBarColor;
          } else {
            return negativeBarColor;
          }
        });
    bars4.enter()
        .append("rect")
        .attr("class", "bar")
        .merge(bars4)
        .transition()
        .duration(500)
        .attr("x", d => x4(d.quintile))
        .attr("width", x4.bandwidth())
        .attr("y", function(d){
          if(d.value >= 0){
            return y4(d.value);
          } else {
            return y4(0);
          }
        })
        .attr("height", function(d){
          if(d.value>=0){
            //return height - y3(d.value);
            return y4(0) - y4(d.value);
            //return y3(d.value) - y3(0);
          } else {
            return y4(d.value) - y4(0);
          }
        }) 
        .attr("fill", function(d){
          if(d.value >= 0){
            return positiveBarColor;
          } else {
            return negativeBarColor;
          }
        });

    bars.exit().remove();
    bars2.exit().remove();
    bars3.exit().remove();
    bars4.exit().remove();

    //draw horizontal lines at y=0
    svg.selectAll(".zeroLine")
      .attr("x1", 0)
      .attr("y1", y(0))
      .attr("x2", width)
      .attr("y2", y(0));
    svg2.selectAll(".zeroLine")
      .attr("x1", 0)
      .attr("y1", y2(0))
      .attr("x2", width)
      .attr("y2", y2(0));
    svg3.selectAll(".zeroLine")
      .attr("x1", 0)
      .attr("y1", y3(0))
      .attr("x2", width)
      .attr("y2", y3(0));
    svg4.selectAll(".zeroLine")
      .attr("x1", 0)
      .attr("y1", y4(0))
      .attr("x2", width)
      .attr("y2", y4(0));

    // Update bar labels
    const labels = svg.selectAll(".bar-label")
        .data(chartData);
    const labels2 = svg2.selectAll(".bar-label")
        .data(chartData2);
    const labels3 = svg3.selectAll(".bar-label")
        .data(chartData3);
    const labels4 = svg4.selectAll(".bar-label")
        .data(chartData4);

    labels.enter()
        .append("text")
        .attr("class", "bar-label")
        .merge(labels)
        .transition()
        .duration(500)
        .attr("x", d => x(d.quintile) + x.bandwidth() / 2)
        .attr("y", d => y(d.value) - 5)
        .text(d => "$"+d3.format(",")(Math.round(d.value)));
    labels2.enter()
        .append("text")
        .attr("class", "bar-label")
        .merge(labels2)
        .transition()
        .duration(500)
        .attr("x", d => x2(d.quintile) + x2.bandwidth() / 2)
        .attr("y", d => y2(d.value) - 5)
        .text(d => "$"+d3.format(",")(Math.round(d.value)));
    labels3.enter()
        .append("text")
        .attr("class", "bar-label")
        .merge(labels3)
        .transition()
        .duration(500)
        .attr("x", d => x3(d.quintile) + x3.bandwidth() / 2)
        .attr("y", function(d){
          if(d.value >=0){
            return y3(d.value) - 5;
          } else {
            return y3(d.value) + 15;
          }
        })
        .text(function(d){
          if(d.value >=0) {
            return "$"+d3.format(",")(Math.round(d.value));
          } else {
            return "($"+d3.format(",")(Math.abs(Math.round(d.value)))+")";
          }
        })
    labels4.enter()
        .append("text")
        .attr("class", "bar-label")
        .merge(labels4)
        .transition()
        .duration(500)
        .attr("x", d => x4(d.quintile) + x4.bandwidth() / 2)
        .attr("y", function(d){
          if(d.value >=0){
            return y4(d.value) - 5;
          } else {
            return y4(d.value) + 15;
          }
        })
        .text(function(d){
          if(d.value >=0) {
            return (Math.round(d.value*100))+"%";
          } else {
            return "("+(Math.abs(Math.round(d.value*100)))+"%)";
          }
        })

    labels.exit().remove();
    labels2.exit().remove();
    labels3.exit().remove();
    labels4.exit().remove();

    //Add hover interactivity
    svg.selectAll(".bar")
    .on("mouseover", function(event, d) {
        d3.select(this)
          .style("stroke","#e2007f")
          .style("stroke-width", "3px");
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(`<b>${d.quintile}</b><br/>After-Tax Income: ${d3.format("($,")(Math.round(d.value))}`)
            .style("left", (event.pageX + 0) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
        d3.select(this)
          .style("stroke-width", "0px");
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
    });
    
    svg2.selectAll(".bar")
    .on("mouseover", function(event, d) {
        d3.select(this)
          .style("stroke","#e2007f")
          .style("stroke-width", "3px");
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(`<b>${d.quintile}</b><br/>Spending: ${d3.format("($,")(Math.round(d.value))}`)
            .style("left", (event.pageX + 0) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
        d3.select(this)
          .style("stroke-width", "0px");
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
    });
    
    svg3.selectAll(".bar")
    .on("mouseover", function(event, d) {
        d3.select(this)
          .style("stroke","#e2007f")
          .style("stroke-width", "3px");
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(`<b>${d.quintile}</b><br/>Cash Flow: ${d3.format("($,")(Math.round(d.value))}`)
            .style("left", (event.pageX + 0) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
        d3.select(this)
          .style("stroke-width", "0px");
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
    });

    svg4.selectAll(".bar")
    .on("mouseover", function(event, d) {
        d3.select(this)
          .style("stroke","#e2007f")
          .style("stroke-width", "3px");
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(`<b>${d.quintile}</b><br/>Savings Rate: ${d3.format("(.0%")(d.value)}`)
            .style("left", (event.pageX + 0) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
        d3.select(this)
          .style("stroke-width", "0px");
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
    });
}

function createLineChart(){

        // Set up dimensions and margins
        const margin = {top: 40, right: 40*window.innerWidth/1000, bottom: 50, left: 80*window.innerWidth/1000};
        const width = Math.min(1000,window.innerWidth*0.95) - margin.left - margin.right;
        const height = Math.min(1000,window.innerHeight*0.8) - margin.top - margin.bottom;

        // Create SVG
        const svg = d3.select("#lineChart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Extract years and create scales
        const years = Object.keys(lineData[0]).filter(key => key !== "Income Quintile");
        const xScale = d3.scaleLinear()
            .domain([d3.min(years), d3.max(years)])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([-40000, 65000])
            .range([height, 0]);

        // Create axes
        const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
        const yAxis = d3.axisLeft(yScale).tickFormat(d3.format("($,.0f"));

        svg.append("g")
          .attr("transform", `translate(0,${height})`)
          .attr("class","lineChartAxis")
          .call(xAxis);

        svg.append("g")
          .attr("class","lineChartAxis")
          .call(yAxis);

        // Add grid lines
        svg.append("g")
            .attr("class", "grid")
            .call(d3.axisLeft(yScale)
                .tickSize(-width)
                .tickFormat("")
            );

        // Add horizontal line at y=0
        svg.append("line")
            .attr("x1", 0)
            .attr("y1", yScale(0))
            .attr("x2", width)
            .attr("y2", yScale(0))
            .attr("stroke", "black")
            .attr("stroke-width", 2);

        // Create line generator
        const line = d3.line()
            .x((d) => xScale(d.year))
            .y((d) => yScale(d.value));

        // Color scale for lines
        // const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
        const lineColors = [negativeBarColor,barColor,barColor2,barColor3,positiveBarColor];

        // Create tooltip
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // Draw lines
        lineData.forEach((quintile, index) => {
            const quintileData = years.map(year => ({year: +year, value: quintile[year], quintile: quintile["Income Quintile"]}));
            
            svg.append("path")
                .datum(quintileData)
                .attr("fill", "none")
                // .attr("stroke", colorScale(index))
                .attr("stroke",lineColors[index])
                .attr("stroke-width", 2)
                .attr("d", line);

            // Add data points
            svg.selectAll(`.dot-${index}`)
                .data(quintileData)
                .enter().append("circle")
                .attr("class", `dot-${index}`)
                .attr("cx", d => xScale(d.year))
                .attr("cy", d => yScale(d.value))
                .attr("r", Math.max(3,width*0.006))
                // .attr("fill", colorScale(index))
                .attr("fill",lineColors[index])
                .on("mouseover", (event, d) => {
                    tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    tooltip.html(`Quintile: ${d.quintile}<br/>Year: ${d.year}<br/><b>${d3.format("($,")(Math.round(d.value))}</b>`)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 28) + "px");
                })
                .on("mouseout", () => {
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });

            // Add data labels for quintile 1 and 5 (1999 and 2023)
            if (index === 0 || index === 4) {
                const labelYears = ["1999", "2023"];
                svg.selectAll(`.label-${index}`)
                    .data(quintileData.filter(d => labelYears.includes(d.year.toString())))
                    .enter().append("text")
                    .attr("class", `label-${index}`)
                    .attr("fill", () => lineColors[index])
                    .attr("x", d => xScale(d.year))
                    // .attr("y", d => yScale(d.value) - 10)
                    .attr("y", function(d){
                      if(d.value >= 0){
                        return yScale(d.value) - 20;
                      } else {
                        return yScale(d.value) + 30;
                      }
                    })
                    .attr("text-anchor", "middle")
                    .text(d => d3.format("($,")(Math.round(d.value)));
                    
            }
        });

        // Add legend at the top
        const legend = svg.append("g")
            .attr("class","lineChartLegend")
            .attr("text-anchor", "start")
            .attr("transform", `translate(0, ${-margin.top+5})`);

        const legendItems = legend.selectAll("g")
            .data(lineData)
            .enter().append("g")
            .attr("transform", (d, i) => `translate(${i * Math.min(width/5,125) -margin.left + 10}, 0)`);

        legendItems.append("rect")
            .attr("x", 0)
            .attr("width", 19)
            .attr("height", 19)
            // .attr("fill", (d, i) => colorScale(i))
            .attr("fill", (d, i) => lineColors[i]);

        legendItems.append("text")
            .attr("x", 21)
            .attr("y", 9.5)
            .attr("dy", "0.32em")
            .text(d => `Quintile ${d["Income Quintile"]}`);

        // Add axis labels
        svg.append("text")
            .attr("transform", `translate(${width / 2}, ${height + margin.bottom - 10})`)
            .style("text-anchor", "middle")
            .text("Year");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Annual Cash Flow");

}

// Initial chart render
select.value = "All";
updateChart(ageGroups[5]);
createLineChart();