$(document).ready(function () {
 

  
        let myRquest = new XMLHttpRequest();
        myRquest.open("GET", "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief", true);
        myRquest.send();
        let myData = [];
        myRquest.onreadystatechange = function () {
            if (myRquest.readyState == 4 && myRquest.status == 200) {
                myData = JSON.parse(myRquest.response);
                //showData();
           
                document.getElementById("confirmed").innerHTML =  myData.confirmed;
                document.getElementById("deaths").innerHTML =  myData.deaths;
                document.getElementById("recovered").innerHTML =  myData.recovered;
                var options = {
                    "chart": {
                      height: 300,
                        "type": "pie",
                    },
                  "series": [
                    myData.confirmed,
                    myData.deaths,
                    myData.recovered
                        
                        
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
                
                        var chart2 = new ApexCharts(
                            document.querySelector("#chart2"),
                            options
                        );
                
                        chart2.render();
            }
        }


})
