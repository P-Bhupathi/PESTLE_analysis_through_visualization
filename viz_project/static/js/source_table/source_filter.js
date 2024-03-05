const table_body = document.getElementById('table_body');

function source_filter(){
    var data = global_data;
    var lst = ['sector','region','country','pestle','topic','source']
    for (var i = 0; i < lst.length; i++) {
        var option= lst[i];
        if(document.getElementById(option).value != 'all'){
            data = data.filter(item => item[option] == document.getElementById(option).value)
        }
    }
    const desiredFields = ['source','added','published', 'url'];
    var mappedData = data.map(item => {
        const newItem = {};
        desiredFields.forEach(field => {
            newItem[field] = item[field];
        });
        return newItem;
    });
    table_body.innerHTML=''
    mappedData.forEach(item => {
        var row = table_body.insertRow();
        desiredFields.forEach(field => {
            var cell = row.insertCell();
            if (field == 'url') {
                const link = document.createElement('a');
                link.href = item[field];
                link.textContent = 'Visit Link';
                link.target = '_blank'; 
                cell.appendChild(link);
            } else {
                cell.textContent = item[field];
            }
            
        });
    });
    //console.log("-------------------------------------------")
    //console.log('TABLE DATA:',mappedData)

}
