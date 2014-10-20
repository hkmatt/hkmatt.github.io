---
layout: post
title:  "Lets make shapes using d3.js!"
date:   2014-05-23 14:33:10
categories: d3.js
---

To start off I felt I needed more pjazz on the main page of my website.

In addition, its a good first step for me due to several reasons:

 * Learn to utilize d3.js - d3 will come very handy later for visualizing data and on-the-go svg graphics
 * Make my website more pretty
 * It's fun!

I wanted something that catches the eye of readers!
Here's the list of step I took to make this symbol a reality.

## Step 1: Drawing it out

To begin with I started with skeches; I guess I didn't need this step after all, but here it is:

<img src="http://i.imgur.com/l4g6V3T.jpg" class="img-responsive" alt="Responsive image">

But you get the idea. I will be going for somthing very minimal and universal.

## Step 2: Obtain d3.js and jQuery javascript libraries

For the sake of simplicity, instead of downloading the components and setting up in my file directory, I linked them all instead.
Here's what your html should look like in order to utilize d3.js.
You'll need to include two things. 

 * The d3 library, done through [script charset="utf-8" src="js/d3.min.js"] inside the `<head>` 
 * jQuery library, done through [script src="js/jquery-2.1.0.min.js"] inside the `<body>` 

{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <title>My website</title>
        <script charset="utf-8" src="js/d3.min.js"></script>
    </head>

    <body>     
        <script src="js/jquery-2.1.0.min.js"></script>
    </body>
</html>
{% endhighlight html %}

## Step 3: Creating the SVG canvas

This is how innerds of my `<body>` tag should look like:
{% highlight html %}
<body>
    <div id="wifi"></div>
    
    <script type="text/javascript">
        <!-- Your d3.js code here -->
    </script>
  
    <script src="js/jquery-2.1.0.min.js"></script>
</body>
{% endhighlight html %}

{% highlight js %}
var svg = d3.select("#wifi").append("svg")
    .attr("width", 200)
    .attr("height", 200);
{% endhighlight js %}

## Step 4: Defining and appending the shape
{% highlight js %}
var svg = d3.select("#wifi").append("svg")
    .attr("width", 200)
    .attr("height", 200);

var arc = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(100)
    .startAngle(-1/2 * Math.PI) 
    .endAngle(1/2 * Math.PI);

svg.append("path")
    .attr("d", arc)
    .attr("transform", "translate(100,100)");
{% endhighlight js %}

## Step 5: Making concentric circles
{% highlight js %}
var dataset = [0, 1, 2, 3, 4];
var arc = d3.svg.arc()
    .innerRadius(function(d) {
        return d * 30;
    })
    .outerRadius(function(d) {
        return (d * 30 + 20);
    })
    .startAngle(-1 / 4 * Math.PI)
    .endAngle(1 / 4 * Math.PI);

var svg = d3.select("#wifi").append("svg")
    .attr("width", 280)
    .attr("height", 140)
    .selectAll("g")
    .data(dataset)
    .enter()
    .append("g")
    .attr("transform", "translate(140,140)");

var arcs = svg.append("path")
    .attr("fill", "#ce96de")
    .attr("id", function(d, i) {
        return "s" + i;
    })
    .attr("d", arc);
{% endhighlight js %}
