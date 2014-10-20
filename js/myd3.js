var w = 500;
var h = 100;
var barPadding = 1;

//myd3.js
var myd3 = {
    circles: function (dataset, id) {
        var svg = d3.select(id)
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        var circles = svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle");

        circles.attr("cx", function (d, i) {
            return (i * 50) + 25;
        })
            .attr("cy", "50px")
            .attr("r", function (d) {
                return d;
            })
            .attr("fill", "yellow")
            .attr("stroke", "orange");
    },

    barchart: function (dataset, id) {
        var svg = d3.select(id)
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset1)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * (w / dataset.length);
            })
            .attr("y", function (d, i) {
                return h - d * 4;
            })
            .attr("width", w / dataset.length - barPadding)
            .attr("height", function (d, i) {
                return d * 4;
            })
            .attr("fill", function (d) {
                return "rgb(0, 0, " + (d * 10) + ")";
            });

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(function (d) {
                return d;
            })
            .attr("x", function (d, i) {
                return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
            })
            .attr("y", function (d) {
                return h - (d * 4) + 14;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white")
            .attr("text-anchor", "middle");
    },

    scatterplot: function (dataset, id) {
        var svg = d3.select(id)
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return d[0];
            })
            .attr("cy", function (d) {
                return d[1];
            })
            .attr("r", function (d) {
                return Math.sqrt(h - d[1])
            });

        svg.selectAll("text")
            .data(dataset2)
            .enter()
            .append("text")
            .text(function (d) {
                return d;
            })
            .attr("x", function (d) {
                return d[0];
            })
            .attr("y", function (d) {
                return d[1];
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "red");
    }
    
    scale: function (dataset, id) {
    
}
};