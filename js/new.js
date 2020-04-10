// World Map
google.charts.load("current", {
    packages: ["geochart"]
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  
  function drawRegionsMap() {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((res) => {
        // Set number of cases
        let cases = [];
  
        res.Countries.forEach((country) => {
          cases.push([country.CountryCode, country.TotalConfirmed]);
        });
  
        var data = google.visualization.arrayToDataTable([
          ["Country", "Number of cases"],
          ...cases
        ]);
  
        var options = {
          colorAxis: { colors: ["#3498db", "#ACDBFB", "#80F1CB", "#46AEF8"] }
        };
  
        var chart = new google.visualization.GeoChart(
          document.querySelector(".world-map")
        );
  
        chart.draw(data, options);
      });
  }
  
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback();
  
  
 