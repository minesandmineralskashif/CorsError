
$(document).ready(function() 
{
 $('#table4').dataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: `https://gisportal.mnm.punjab.gov.pk/mmd/applications`,
            headers: 
            { "Authorization": "Token 8a88146a6df8be5ad797825b99914dd3daeaf36e"}
        },
           
        data: function (data) {
            return datatableDataHandler(data);
        },   
            dataFilter: function (data) {
            return datatableDataFilterHandler(data);
        },
        columns: [
            {  data: "app_no",name: "app_no"},
            {  data: "client", name: "client__client_name"},
            {  data: "mineral", name: "mineral__name"},
            {  data: "concession_type", name: "concession_type"},
            {  data: "district", name: "district__name"}
            
        ]
    },
    
);
    function datatableDataHandler(data) {
        data.page = data.draw;
        delete data.draw;
        data.limit = data.length;
        data.page_size = data.limit;
        delete data.length;
        data.search = data.search.value;
        data.offset = data.start;
        delete data.start;
        let col_name = data.columns[data.order[0].column].name;
        if (data.order[0].dir === "desc") {
            col_name = "-" + data.columns[data.order[0].column].name;
        }
        data.ordering = col_name;
        return data;
    }
    
    // jquery datatable dataFilter handler
    function datatableDataFilterHandler(data) {
        // django rest response with jquery datatable
        var json = jQuery.parseJSON(data);
        json.recordsTotal = json.count;
        json.recordsFiltered = json.count;
        json.data = json.results;
        delete json.results;
        return JSON.stringify(json); // return JSON string
    }
    
    

});







