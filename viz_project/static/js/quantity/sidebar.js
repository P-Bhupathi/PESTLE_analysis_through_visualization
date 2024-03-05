const sidebar_dashboard = document.getElementById('dashboard')
const sidebar_quantity = document.getElementById('quantity')
const sidebar_source_url = document.getElementById('source_url')

sidebar_quantity.addEventListener("mouseenter",function(){
    if(window.getComputedStyle(sidebar_quantity).backgroundColor == 'rgb(0, 99, 237)'){
        
    }
    else if(window.getComputedStyle(sidebar_dashboard).backgroundColor == 'rgb(0, 99, 237)'
            || window.getComputedStyle(sidebar_source_url).backgroundColor == 'rgb(0, 99, 237)'){
        sidebar_quantity.style.backgroundColor = 'rgb(128, 159, 189)';
        sidebar_quantity.style.color = 'rgb(255,255,255)';
    }
})

sidebar_quantity.addEventListener("mouseleave",function(){
    if(window.getComputedStyle(sidebar_quantity).backgroundColor == 'rgb(0, 99, 237)'){

    }
    else{
        sidebar_quantity.style.backgroundColor = 'rgb(255, 255, 255)';
        sidebar_quantity.style.color = 'rgb(0,0,0)';
    }

})

sidebar_quantity.addEventListener("mousedown",function(){
    sidebar_dashboard.style.backgroundColor = 'rgb(255,255,255)'
    sidebar_dashboard.style.color = 'rgb(0,0,0)'
    sidebar_quantity.style.backgroundColor = 'rgb(0, 99, 237)'
    sidebar_quantity.style.color = 'rgb(255,255,255)'
    sidebar_source_url.style.backgroundColor = 'rgb(255,255,255)';
    sidebar_source_url.style.color = 'rgb(0,0,0)';
    document.getElementById('pestle_block').style.display = 'none'
    document.getElementById('quantity_block').style.display = 'block'
    document.getElementById('source_table').style.display='none'
    //console.log("hide")
})

//////////////////////////////////////////////////////////////////
sidebar_dashboard.addEventListener("mouseenter", function(){
    if(window.getComputedStyle(sidebar_dashboard).backgroundColor == 'rgb(0, 99, 237)'){
        
    }
    else{
        sidebar_dashboard.style.backgroundColor = 'rgb(128, 159, 189)';
        sidebar_dashboard.style.color = 'rgb(255,255,255)';
    }
});

sidebar_dashboard.addEventListener("mouseleave", function(){
    if(window.getComputedStyle(sidebar_quantity).backgroundColor == 'rgb(0, 99, 237)'
        || window.getComputedStyle(sidebar_source_url).backgroundColor == 'rgb(0, 99, 237)'){
        sidebar_dashboard.style.backgroundColor = 'rgb(255,255,255)';
        sidebar_dashboard.style.color = 'rgb(0,0,0)';
    } else {
        // 
    }
});

sidebar_dashboard.addEventListener("mousedown", function(){
    sidebar_quantity.style.backgroundColor = 'rgb(255,255,255)';
    sidebar_quantity.style.color = 'rgb(0,0,0)';
    sidebar_dashboard.style.backgroundColor = 'rgb(0, 99, 237)';
    sidebar_dashboard.style.color = 'rgb(255,255,255)';
    sidebar_source_url.style.backgroundColor = 'rgb(255,255,255)';
    sidebar_source_url.style.color = 'rgb(0,0,0)';
    document.getElementById('pestle_block').style.display = 'flex'
    document.getElementById('quantity_block').style.display = 'none'
    document.getElementById('source_table').style.display = 'none'
});


//////////////////////////////////////////////////////////////////
sidebar_source_url.addEventListener("mouseenter", function(){
    if(window.getComputedStyle(sidebar_source_url).backgroundColor == 'rgb(0, 99, 237)'){
        
    }
    else{
        sidebar_source_url.style.backgroundColor = 'rgb(128, 159, 189)';
        sidebar_source_url.style.color = 'rgb(255,255,255)';
    }
});

sidebar_source_url.addEventListener("mouseleave", function(){
    if(window.getComputedStyle(sidebar_quantity).backgroundColor == 'rgb(0, 99, 237)'
        || window.getComputedStyle(sidebar_dashboard).backgroundColor == 'rgb(0, 99, 237)'){
        sidebar_source_url.style.backgroundColor = 'rgb(255,255,255)';
        sidebar_source_url.style.color = 'rgb(0,0,0)';
    } else {
        // 
    }
});

sidebar_source_url.addEventListener("mousedown", function(){
    sidebar_quantity.style.backgroundColor = 'rgb(255,255,255)';
    sidebar_quantity.style.color = 'rgb(0,0,0)';
    sidebar_dashboard.style.backgroundColor = 'rgb(255,255,255)';
    sidebar_dashboard.style.color = 'rgb(0,0,0)';
    sidebar_source_url.style.backgroundColor = 'rgb(0, 99, 237)';
    sidebar_source_url.style.color = 'rgb(255,255,255)';
    document.getElementById('pestle_block').style.display = 'none'
    document.getElementById('quantity_block').style.display = 'none'
    document.getElementById('source_table').style.display = 'flex'
});