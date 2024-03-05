function quantity_source(canvas_id){
    var data = global_data;
            var lst = ['sector','region','country','pestle','topic']
            for (var i = 0; i < lst.length; i++) {
                var option= lst[i];
                if(document.getElementById(option).value != 'all'){
                    data = data.filter(item => item[option] == document.getElementById(option).value)
                }
            }
            var result = data.reduce((acc, item) => {
                var source = item.source || 'Unknown';
                acc[source] = (acc[source] || 0) + 1;
                return acc;
            }, {});
            
            console.log(result);
            
            
            var ctx = document.getElementById(canvas_id);
            //Destroying chart
            var chartStatus = Chart.getChart(canvas_id); 
                if (chartStatus != undefined) {
                  chartStatus.destroy();
            }
            
            new Chart(ctx, {
                type: 'pie',
                data: {
                        labels: Object.keys(result),
                        datasets: [{
                            data: Object.values(result),
                            backgroundColor: [
                                 '#8d6e63', '#3498db', '#e74c3c', '#27ae60',
                                '#f39c12', '#9b59b6', '#1abc9c', '#d35400', '#c0392b',
                                '#2980b9', '#2ecc71', '#f1c40f', '#7f8c8d', '#16a085',
                                '#e67e22', '#34495e', '#95a5a6', '#d35400', '#f39c12',
                                '#3498db', '#2c3e50', '#e74c3c', '#1abc9c','#2a3b4c'
                              ],
                            borderWidth:0.1,
                            borderColor:'black'
                        }]
                      },
                    options: {
                        maintainAspectRatio: false,
                        
                        animation: false,
                        plugins: {
                            legend: {
                              display:false,
                              
                            }
                          }
                      
                    }
            });
}