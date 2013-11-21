      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart(title, anArray, aColor) {

        var data = google.visualization.arrayToDataTable(anArray);

        // Set chart options
        var options = {'title':title, colors: [aColor],
                       'width':900,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});