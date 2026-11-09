/***********************************************
> Locket Gold Activator (RevenueCat)
> Tác giả: duongduchoan (Locket_Module)
> Đồng bộ: Cập nhật mới nhất theo @duyvinh09 (Bổ sung Effect Pack 20 Photos)
> Chức năng: Mở khóa gói Locket Gold VIP & Filter Pack vĩnh viễn
***********************************************/

var ua = ($request && $request.headers) ? ($request.headers["User-Agent"] || $request.headers["user-agent"] || "") : "";
var obj = {};

try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

obj.Attention = "Locket Gold VIP - Kích hoạt thành công bởi duongduchoan!";

const purchaseDate = "2004-02-03T10:10:14Z"; // 03-02-2004
const expiresDate = "2999-12-31T23:59:59Z";

function makeSub(displayName, amount, currency) {
    return {
        auto_resume_date: null,
        display_name: displayName,
        is_sandbox: false,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: "normal",
        price: {
            amount: amount,
            currency: currency
        },
        expires_date: expiresDate,
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: purchaseDate,
        purchase_date: purchaseDate,
        store: "app_store",
        store_transaction_id: "2000001108724193"
    };
}

function makeEnt(productId) {
    return {
        grace_period_expires_date: null,
        purchase_date: purchaseDate,
        original_purchase_date: purchaseDate,
        product_identifier: productId,
        expires_date: expiresDate,
        ownership_type: "PURCHASED",
        store: "app_store"
    };
}

obj.subscriber = obj.subscriber || {};
obj.subscriber.first_seen = purchaseDate;
obj.subscriber.original_purchase_date = purchaseDate;
obj.subscriber.management_url = "https://apps.apple.com/account/subscriptions";
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

// 1. Kích hoạt Locket Gold VIP (Tất cả các tier Gold / Pro / VIP)
var goldProduct = "locket_1600_1y";
obj.subscriber.subscriptions[goldProduct] = makeSub(goldProduct, 399000.0, "VND");
obj.subscriber.entitlements["Gold"] = makeEnt(goldProduct);
obj.subscriber.entitlements["pro"] = makeEnt(goldProduct);
obj.subscriber.entitlements["vip"] = makeEnt(goldProduct);

// 2. Kích hoạt Effect Pack (Bộ lọc 20 ảnh Filter Pack - Mới nhất từ Duy Vinh)
var pack20Product = "com.locket.Locket.FilterPack_20Photos_500";
obj.subscriber.subscriptions[pack20Product] = makeSub(pack20Product, 0.0, "VND");
obj.subscriber.entitlements["effect_pack_20"] = makeEnt(pack20Product);

$done({
    body: JSON.stringify(obj)
});
