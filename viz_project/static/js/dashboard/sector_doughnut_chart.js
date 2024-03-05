function time_vs_intensity_of_sector(year=2200,canvas_id) {
    //fetch(`/time_vs_intensity/${year}/`)
        //.then(response => response.json())
            //.then(time_vs_intensity => {

            var data = global_data;
            var lst = ['topic','pestle','region','country','source']
            for (var i = 0; i < lst.length; i++) {
                var option= lst[i];
                if(document.getElementById(option).value != 'all'){
                    data = data.filter(item => item[option] == document.getElementById(option).value)
                }
            }
            var mappedAndFilteredData = data
                                        .filter(item => item.end_year == year && item.end_year && item.intensity && item.sector) // Filter items where intensity is greater than 100
                                        .map(item => ({
                                                    
                                                    intensity: item.intensity,
                                                    sector: item.sector
                                        }));
            //mappedAndFilteredData.sort((a, b) => a.end_year - b.end_year);
            //console.log("mapped data pie:",mappedAndFilteredData)
            var groupedData = mappedAndFilteredData.reduce((result, item) => {
                var key = item.sector;
                if (!result[key]) {
                    result[key] = { sector: item.sector, intensity: 0};
                }
                result[key].intensity += item.intensity;
                return result;
            }, {});
            
            // Convert the object to an array of objects
            var dataArray = Object.values(groupedData);
            
            
            //console.log(dataArray);
            var ctx = document.getElementById(canvas_id);
            //Destroying chart
            var chartStatus = Chart.getChart(canvas_id);
                if (chartStatus != undefined) {
                  chartStatus.destroy();
            }

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                        labels: dataArray.map(item=>item.sector),
                        datasets: [{
                            data: dataArray.map(item=>item.intensity),
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#00cc99', '#FF6666', '#99FF99']
                        }]
                      },
                    options: {
                        maintainAspectRatio: false,
                        animation: false,
                        plugins: {
                            legend: {
                              position: 'right',
                            }
                          }
                      
                    }
            });
            //console.log("mapped date:",mappedAndFilteredData)
       // })
    //.catch(error => console.error('Error fetching data:', error));
}