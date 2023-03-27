
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
       

        // adding data to declared tablecd da
        columns: [
            {data: "app_no",name: "app_no"},
            {data: "client",name: "client__client_name"},
            {data: "mineral",name: "mineral__name"},
            {data: "concession_type",name: "concession_type"},
            {data: "district",name: "district__name"}
            
        ]

    });
});


