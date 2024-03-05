var global_data;


/////////////////////////////////////////////////////////////////////////////////////////////////////////
async function fetchDataSynchronously() {
    try {
        var response = await fetch('/all/');
        var data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}

try {
    global_data = fetchDataSynchronously();
    //console.log('Synchronous data:', global_data);
} catch (error) {
   console.error('Error in synchronous fetch:', error);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////



// fetch('/all/')
//     .then(response => response.json())
//         .then(all => {
//             global_data = all;
//             windows.global_data = global_data;
//             //console.log("global data")
//         })         
       
// .catch(error => {console.error('Error:', error);});
            

var sector = document.getElementById("sector");
var topic = document.getElementById("topic");
var pestle = document.getElementById("pestle");
var region = document.getElementById("region");
var country = document.getElementById("country");
var source = document.getElementById("source");

function load_all_options(){
    lt = ['sector','topic','pestle','region','country','source']
    var url = 10
    for (const element of lt) {
        var url = '/get_list_by/' + element;
        fetch(url)
            .then(response => response.json())
                .then(filteredOptions => {
                    //console.log("hello data",filteredOptions,sector)
                    
                    var secondSelect = document.getElementById(element);
                    
                    secondSelect.innerHTML = '';
                    var optionElement = document.createElement("option");
                    optionElement.value = "all"; 
                    optionElement.textContent = "all"; 
                    secondSelect.appendChild(optionElement);
                    
                    filteredOptions.forEach(option => {
                        var optionElement = document.createElement("option");
                        optionElement.value = option.list_data; 
                        optionElement.textContent = option.list_data; 
                        secondSelect.appendChild(optionElement);
                    })         
        })
        .catch(error => {console.error('Error:', error);});
             
    }
}

load_all_options()

function filter_applied(){
    console.log("filter applied")
    var selected_list=[]
    var lt = ['sector','topic','pestle','region','country','source']
    var unselected_list=[]
    lt.forEach(element => {
        if(document.getElementById(element).value != 'all'){
            selected_list.push(element);
        }
        else{
            unselected_list.push(element);
        }
    });
    console.log(selected_list,unselected_list)
    var data = global_data;
    for(const sitem of selected_list){
        data = data.filter(item => item[sitem] == document.getElementById(sitem).value);
    }
    for(const sitem of unselected_list){
        var opt = document.getElementById(sitem);
        var set_data = new Set();
        data.forEach(item => {
            set_data.add(item[sitem])
        })
        opt.innerHTML = '';
        var optionElement = document.createElement("option");
        optionElement.value = "all";  
        optionElement.textContent = "all";  
        opt.appendChild(optionElement);
        var updatedSet = new Set([...set_data].filter(value => value !== null && value !== ""));  //for removing null values
        updatedSet.forEach(value=>{
            var optionElement = document.createElement("option");
            optionElement.value = value;  
            optionElement.textContent = value;  
            opt.appendChild(optionElement);
        })
    }
    all_reload();

}

function all_reload(){

    time_vs_intensity(document.getElementById('dateRange1').value, 'myChart1');
    time_vs_intensity_and_likelihood(document.getElementById('dateRange2').value,'myChart2')
    time_vs_intensity_and_relevance(document.getElementById('dateRange3').value,'myChart3')
    time_vs_intensity_of_pestle(document.getElementById('dateRange4').value,'myChart4')
    time_vs_intensity_of_sector(document.getElementById('dateRange5').value,'myChart5')
    time_vs_intensity_vs_country(document.getElementById('dateRange6').value,'myChart6')
    time_vs_intensity_vs_region(document.getElementById('dateRange7').value,'myChart7')

    quantity_sector('quantityChart1')
    quantity_topic('quantityChart2')
    quantity_pestle('quantityChart3')
    quantity_region('quantityChart4')
    quantity_country('quantityChart5')
    quantity_source('quantityChart6')
    
    source_filter()

}

sector.addEventListener("change",filter_applied)
topic.addEventListener("change",filter_applied)
pestle.addEventListener("change",filter_applied)
region.addEventListener("change",filter_applied)
country.addEventListener("change",filter_applied)
source.addEventListener("change",filter_applied)





















