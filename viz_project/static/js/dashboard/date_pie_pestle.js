// Function to update the selected date range display
function updateSelectedDateRange_pie(year,id,canvas_id) {
    //console.log(year)
    $('#'+id).val(year)
    time_vs_intensity_of_pestle(year,canvas_id)
}
window.updateSelectedDateRange_pie = updateSelectedDateRange_pie;


// Event for change date of jquery input for INTENSITY_vs_year graph 
function updateSelectedDateYear_pie(this_id,range_id,canvas_id) {
    var enteredYear = $('#'+this_id).val();
        //console.log(typeof(this.value));
        if (!/^\d+$/.test(enteredYear)) {
            // If not a valid number, remove non-numeric characters
            $('#'+this_id).val(enteredYear.replace(/[^\d]/g, ''));
        }

        var minYear = 2016;
        var maxYear = 2200;

        var yearValue = parseInt(enteredYear);

        if (yearValue < minYear) {
            $('#'+this_id).val(minYear);
        } else if (yearValue > maxYear) {
            $('#'+this_id).val(maxYear);
        }
        document.getElementById(range_id).value=$('#'+this_id).val();
        time_vs_intensity_of_pestle($('#'+this_id).val(),canvas_id);
}
window.updateSelectedDateYear_pie = updateSelectedDateYear_pie;