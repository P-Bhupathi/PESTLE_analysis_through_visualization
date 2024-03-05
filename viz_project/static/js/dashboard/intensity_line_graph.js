function waitForGlobalData() {
    return new Promise((resolve) => {
        const checkAvailability = () => {
            if (global_data) {
                resolve(global_data);
            } else {
                setTimeout(checkAvailability, 100); // Check again after 100 milliseconds
            }
        };

        checkAvailability(); // Start the initial check
    });
}

// Example usage
waitForGlobalData().then((data) => {
    console.log('Global data is available:', data);
    global_data=data;
    time_vs_intensity(2200, 'myChart1')
    time_vs_intensity_and_likelihood(2200,'myChart2')
    time_vs_intensity_and_relevance(2200,'myChart3')
    time_vs_intensity_of_pestle(2200,'myChart4')
    time_vs_intensity_of_sector(2200,'myChart5')
    time_vs_intensity_vs_country(2200,'myChart6')
    time_vs_intensity_vs_region(2200,'myChart7')

    quantity_sector('quantityChart1')
    quantity_topic('quantityChart2')
    quantity_pestle('quantityChart3')
    quantity_region('quantityChart4')
    quantity_country('quantityChart5')
    quantity_source('quantityChart6')

    source_filter()

});



function time_vs_intensity(year=2200,canvas_id) {
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
                                        .filter(item => item.end_year <= year && item.end_year && item.intensity) // Filter items where intensity is greater than 100
                                        .map(item => ({
                                                    end_year: item.end_year,
                                                    intensity: item.intensity // Transform the intensity (example: multiply by 2)
                                        }));
            mappedAndFilteredData.sort((a, b) => a.end_year - b.end_year);
            console.log("mapped data",mappedAndFilteredData)
            var groupedData = mappedAndFilteredData.reduce((result, item) => {
                var key = item.end_year;
                if (!result[key]) {
                    result[key] = { end_year: item.end_year, intensity: 0 };
                }
                result[key].intensity += item.intensity;
                return result;
            }, {});
            
            
            var dataArray = Object.values(groupedData);
            
            
            console.log(dataArray);
            var x = dataArray.map(item => item.end_year);
            var y = dataArray.map(item => item.intensity);
            var ctx = document.getElementById(canvas_id);
            //Destroying chart
            let chartStatus = Chart.getChart(canvas_id); 
                if (chartStatus != undefined) {
                  chartStatus.destroy();
            }
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        label: 'Sum of Intensities at end year',
                        data: y,
                        borderWidth: 1.3,
                        showline:true,
                        pointRadius: 2,
                        tension : 0.4,
                        fill:true
                    }]
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
                                text: 'End Year',
                            },
                            ticks: {
                                stepSize: 1, 
                                callback: function (value, index, values) {
                                   
                                    return value.toString().replace(/,/g, '');
                                }
                            }
                        },
                        y: {
                        beginAtZero: true
                        }
                    },
                    animation: {
                        duration: 0, 
                    },
                }
            });
            //console.log("mapped date:",mappedAndFilteredData)
       // })
    //.catch(error => console.error('Error fetching data:', error));
}