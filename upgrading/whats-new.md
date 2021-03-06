---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
---

This section is for users who are using the previous version of FusionCharts in their application. Here we'll talk about the new features introduced in v3.15.1.

## Set the Legend Position

You can now use the following attributes to set legend position:

- Specify the position of the legend using the `legendPosition` attribute. You can set its value to one of the following, to position the legend likewise with respect to the chart - `bottom`, `top`, `top-left`, `top-right`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, or `absolute`.

- If you set the value of `legendPosition` to `absolute`, you also need to set the coordinates for the legend using the attributes `legendXPosition` and `legendYPosition`, both of which accept absolute or percentage values.

- Set the `legendAllowDrag` attribute to 1 to make the legend draggable.

In the chart below, the legend is placed at the `top-right` of the chart:

{% embed_chart chart-configurations-legend-example-16.js %}

Click [here](/chart-guide/chart-configurations/legend#set-the-legend-position) to know more.

## Set Number of Rows/Columns in the Legend

You can now mention the number of rows and columns the legend should display, when there are a large number of legend items. To set the number of rows in the legend, use the `legendNumRows` attribute. Whereas to set the number of columns in the legend, use the `legendNumColumns`

The chart looks like as shown below:

{% embed_chart set-the-number-of-row-column-in-legend.js %}

Click [here](/chart-guide/chart-configurations/legend#set-number-of-rows-columns-in-the-legend) to know more.

## Decouple Scrollbar from Axis

FusionCharts XT suite now allows you to decouple the scrollbar from the axes. Earlier, the scrollbar was always coupled with the X-axis. Now, a new attribute `scrollPosition` has been introduced, which lets you position the scrollbar independently of the X-axis.

- In charts where the X-axis is located at the bottom or the top (as in a column chart), you can set the value of the `scrollPosition` attribute to `top` or `bottom`.

- In charts where the X-axis is located to the left or the right (as in a bar chart), you can set the value of the `scrollPosition` attribute to `left` or `right`.

The scroll column 2D chart will look as shown below:

{% embed_chart scroll-column-2d-showcasing-scroll-position.js %}

Click [here](/chart-guide/standard-charts/scroll-charts#position-scroll-bar) to know more.

## Build Mobile UI with Ionic Framework

You can now use FusionCharts with the Ionic Framework, to develop mobile user interfaces with a native look and feel. Add interactive charts to any Ionic Framework project using the bindings available for different platforms supported by FusionCharts.

Click [here](/getting-started/ionic-framework/ionic-framework-using-angular) to know more.
