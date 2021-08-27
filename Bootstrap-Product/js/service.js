var services = {
    apiUrl : "http://localhost:8081/",

    request : function(reqType, url, data){
        var ajaxOption = {
            url : this.apiUrl + url,
            type : reqType,
            dataType : "json",
            contentType : "application/json; charset=utf-8",
            data : null
        }
        if(ajaxOption.type.toUpperCase() == "GET"){
            ajaxOption.data = data;
        } else if(ajaxOption.contentType == "application/json; charset=utf-8"){
            ajaxOption.data = data ? JSON.stringify(data) : null;
        }
        return $.ajax(ajaxOption);
    },

    get: function(url, data){
        return this.request("GET", url, data);
    },
    post: function(url, data){
        return this.request("POST", url, data);
    },
    put: function(url, data){
        return this.request("PUT", url, data);
    },
    delete: function(url, data){
        return this.request("DELETE", url, data);
    }
}