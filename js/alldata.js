$(document).ready(function () {
    let allcountry=[];
    let sate=[];
    let myRquest2 = new XMLHttpRequest();
        myRquest2.open("GET", "https://covid19.mathdro.id/api/recovered", true);
        myRquest2.send();
        let myData2 = [];
        myRquest2.onreadystatechange = function () {
            if (myRquest2.readyState == 4 && myRquest2.status == 200) {
                myData2 = JSON.parse(myRquest2.response);
                showData();
            }
        }

        function showData() {
            let temp = "";
            for (let i = 0; i < myData2.length; i++) {
                allcountry.push(myData2[i].countryRegion);
                sate.push(myData2[i].confirmed)
                temp += `

                </div>
                <tr>
                <td class="text-center"> <span class="flag-icon flag-icon-${myData2[i].iso2}"></span></td>

                <td class="text-center">	${ myData2[i].countryRegion}  </td>
                <td class="text-center">${ myData2[i].confirmed}	</td>
                <td class="text-center"> <div > ${ myData2[i].combinedKey} </div></td>
                <td class="text-center">                <div > ${ myData2[i].recovered} </div>
                </td>
            
            </tr>
                `
            }
            document.getElementById("showData").innerHTML = temp;
        }
    

})
