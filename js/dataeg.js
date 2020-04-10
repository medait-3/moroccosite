
    let myRquesteg = new XMLHttpRequest();
    myRquesteg.open("GET", "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=MA&onlyCountries=true", true);
    myRquesteg.send();
    let myDataeg = [];
    myRquesteg.onreadystatechange = function () {
        if (myRquesteg.readyState == 4 && myRquesteg.status == 200) {
            myDataeg = JSON.parse(myRquesteg.response);
            //showData();
       
            document.getElementById("confirmed-eg").innerHTML =  myDataeg[0].confirmed;
            document.getElementById("deathseg-eg").innerHTML =  myDataeg[0].deaths;
            document.getElementById("recovered-eg").innerHTML =  myDataeg[0].recovered;
            
    var options = {
        "chart": {
          height: 300,
            "type": "pie",
        },
      "series": [
        myDataeg[0].confirmed,
        myDataeg[0].deaths,
        myDataeg[0].recovered
            
            
        ],
      legend: {
        position: 'bottom'
      },
        "labels": [
            "confirmed",
            "deaths",
            "recovered"
        
        ]
    };
    
            var chart = new ApexCharts(
                document.querySelector("#chart"),
                options
            );
    
            chart.render();
        }
    };
 

    let myRquesteg2 = new XMLHttpRequest();
    myRquesteg2.open("GET", "https://covid19.mathdro.id/api/countries/ma", true);
    myRquesteg2.send();
    let myDataeg2 = [];
    myRquesteg2.onreadystatechange = function () {
        if (myRquesteg2.readyState == 4 && myRquesteg2.status == 200) {
            myDataeg2 = JSON.parse(myRquesteg2.response);
            let x = myDataeg2.snapshots.length;
            document.getElementById("today-eg").innerHTML =  myDataeg2.snapshots[x-1].todayDeaths;

            //
        }
    };
 