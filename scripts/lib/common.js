function serverURL() {
    return "http://localhost:9988/api?"; // here to change DB
}


function doAJAXCall(partialLink, dataToSend, callback, callbackFailed) {

    var url = serverURL() + partialLink;

    var data = dataToSend;
    $.ajax({
        url: url,
        type: 'GET',
        data: data,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            callback(arr);
            return "Success";
        },
        error: function (arr) {
            callbackFailed(arr);
            return "Failed";
        }
    });

}

function doAJAX(action , data , entity , callback ){
    var sentString = "action=" + action + "&data=" + data + "&entity=" + entity;
    var url = serverURL() + sentString;
    // $.ajax({
    //     url: url,
    //     type: 'GET',
    //     data: null,
    //     success: function (arr) {
    //         callback(arr);
    //         return "Success";
    //     },
    //     error: function (arr) {
    //         callbackFailed(arr);
    //         return "Failed";
    //     }
    // });
    $.get(url    , callback);
}
