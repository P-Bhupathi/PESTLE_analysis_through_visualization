function time_vs_intensity_and_likelihood(year=2200,canvas_id) {
    //fetch(`/time_vs_intensity/${year}/`)
        //.then(response => response.json())
            //.then(time_vs_intensity => {

            var data = global_data;
            var lst = ['sector','topic','pestle','region','country','source']
            for (var i = 0; i < lst.length; i++) {
                var option= lst[i];
                if(document.getElementById(option).value != 'all'){
                    data = data.filter(item => item[option] == document.getElementById(option).value)
                }
            }
            var mappedAndFilteredData = data
                                        .filter(item => item.end_year <= year && item.end_year && item.intensity && item.likelihood) // Filter items where intensity is greater than 100
                                        .map(item => ({
                                                    end_year: item.end_year,
                                                    intensity: item.intensity,
                                                    likelihood: item.likelihood
                                        }));
            mappedAndFilteredData.sort((a, b) => a.end_year - b.end_year);
            console.log("mapped data",mappedAndFilteredData)
            var groupedData = mappedAndFilteredData.reduce((result, item) => {
                var key = item.end_year;
                if (!result[key]) {
                    result[key] = { end_year: item.end_year, intensity: 0, likelihood: 0 };
                }
                result[key].intensity += item.intensity;
                result[key].likelihood += item.likelihood;
                return result;
            }, {});
            
          
            var dataArray = Object.values(groupedData);
            
           
            console.log(dataArray);
            var ctx = document.getElementById(canvas_id);
            //Destroying chart
            let chartStatus = Chart.getChart(canvas_id); 
                if (chartStatus != undefined) {
                  chartStatus.destroy();
            }
            
            new Chart(ctx, {
                type: 'bubble',
                data: {
                    datasets: [{
                        label: 'Bubble Chart Example',
                        data: dataArray.map(item => ({
                            x: item.end_year,
                            y: item.intensity,
                            r: item.likelihood * 0.2,
                        })),
                        backgroundColor: 'rgba(75, 192, 192, 0.4)', // Bubble color
                        borderColor: 'rgba(255, 0, 0, 0.4)', // Bubble border color
                        borderWidth: 1,
                    }],
                },
                options: {
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'nearest',
                        intersect: false,
                        axis: 'x'
                    },
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                //text: 'End Year',
                            },
                            ticks: {
                                stepSize: 1,
                                callback: function (value, index, values) {
                                   
                                    return value.toString().replace(/,/g, '');
                                }
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                //text: 'Intensity',
                            },
                        },
                    },
                    animation:{
                        duration: 0,
                    }
                },
            });
            //console.log("mapped date:",mappedAndFilteredData)
       // })
    //.catch(error => console.error('Error fetching data:', error));
}