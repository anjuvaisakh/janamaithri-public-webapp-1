async function getTable(tableName){
    try {
        await $.ajax(await{
            type: "GET",
            url: BASE_URL + '/sync/'+tableName,
            success: function(data) {
                console.log(data);
                //window.localStorage.setItem(tableName, JSON.stringify(data[tableName]));
                //window.localStorage.setItem(tableName + '__last_update_on', latestTableVersion);
            }
        });
    }catch(e) {
        console.log(e);
    }
}