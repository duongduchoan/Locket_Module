/***********************************************
> deleteHeader by duongduchoan (Locket_Module)
> Chức năng: Xoá triệt để các header cache ETag để ép server luôn trả về dữ liệu mới nhất
***********************************************/

function setHeaderValue(headers, key, value) {
    var lower = key.toLowerCase();
    if (lower in headers) {
        headers[lower] = value;
    } else {
        headers[key] = value;
    }
}

var modifiedHeaders = ($request && $request.headers) ? $request.headers : {};

// Xóa các header ETag và If-None-Match
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
setHeaderValue(modifiedHeaders, "x-revenuecat-etag", "");
setHeaderValue(modifiedHeaders, "If-None-Match", "");
setHeaderValue(modifiedHeaders, "if-none-match", "");

delete modifiedHeaders["X-RevenueCat-ETag"];
delete modifiedHeaders["x-revenuecat-etag"];
delete modifiedHeaders["If-None-Match"];
delete modifiedHeaders["if-none-match"];

$done({ headers: modifiedHeaders });
