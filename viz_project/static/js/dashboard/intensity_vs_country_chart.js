function time_vs_intensity_vs_country(year=2200,canvas_id) {
    //fetch(`/time_vs_intensity/${year}/`)
        //.then(response => response.json())
            //.then(time_vs_intensity => {

            var data = global_data;
            var lst = ['sector','topic','pestle','source']
            for (var i = 0; i < lst.length; i++) {
                var option= lst[i];
                if(document.getElementById(option).value != 'all'){
                    data = data.filter(item => item[option] == document.getElementById(option).value)
                }
            }
            var mappedAndFilteredData = data
                                        .filter(item => item.end_year == year && item.intensity && item.country) // Filter items where intensity is greater than 100
                                        .map(item => ({
                                                    
                                                    country: item.country,
                                                    intensity: item.intensity // Transform the intensity (example: multiply by 2)
                                        }));
            mappedAndFilteredData.sort((a, b) => b.intensity - a.intensity);
            //console.log("mapped data",mappedAndFilteredData)
            var groupedData = mappedAndFilteredData.reduce((result, item) => {
                var key = item.country;
                if (!result[key]) {
                    result[key] = { country: item.country, intensity: 0 };
                }
                result[key].intensity += item.intensity;
                return result;
            }, {});
            
           
            var dataArray = Object.values(groupedData);
            dataArray.sort((a, b) => a.intensity - b.intensity);
           
            
            var x = dataArray.map(item => item.country);
            var y = dataArray.map(item => item.intensity);
            var ctx = document.getElementById(canvas_id);
            console.log("country",year,x,y);
            //Destroying chart
            let chartStatus = Chart.getChart(canvas_id);
                if (chartStatus != undefined) {
                  chartStatus.destroy();
            }
            new Chart(ctx, {
                type: "bar", 
                data: {
                    labels: x,
                    datasets: [{
                        label: 'Intensity in Country',
                        data: y,
                        borderWidth: 2,
                        barPercentage: 0.5,
                        backgroundColor: 'rgba(255, 0, 0, 0.3)', 
                        borderColor: 'rgba(75, 192, 192, 1)', 
                       
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'nearest',
                        intersect: false,
                        axis: 'x'
                    },
                    animation:false,
                    scale:{
                        x:{
                           
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'Country',
                            },
                        },
                        y:{
                            title:{
                                display: true,
                                text: 'Intensity',
                            },
                            min: 0, 
                            max: 100, 
                            beginAtZero: true
                        }
                    }
                }
            });
            //console.log("mapped date:",mappedAndFilteredData)
       // })
    //.catch(error => console.error('Error fetching data:', error));
}