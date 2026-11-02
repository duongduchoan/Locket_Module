/***********************************************
> Locket Profile & Badge Keeper
> Tác giả: duongduchoan (Locket_Module)
> Chức năng: Kích hoạt & duy trì huy hiệu Locket Gold vĩnh viễn cho riêng user @hoanhuhong
***********************************************/

const TARGET_USERNAME = "hoanhuhong".toLowerCase();
const url = $request ? $request.url : '';

/**
 * Kiểm tra xem object có phải là user đích (hoanhuhong) hay không
 */
function isTargetUser(obj) {
    if (!obj || typeof obj !== 'object') return false;
    const u = (obj.user_name || obj.username || obj.unique_name || obj.handle || '').toString().toLowerCase();
    return u === TARGET_USERNAME;
}

/**
 * Gán huy hiệu Gold CHỈ cho user hoanhuhong hoặc profile tài khoản cá nhân
 */
function processProfile(obj) {
    if (!obj || typeof obj !== 'object') return;

    // 1. Nếu là profile của chính hoanhuhong (trong danh sách, bài đăng, khoảnh khắc, thông tin cá nhân)
    if (isTargetUser(obj)) {
        obj.badge = "locket_gold";
        obj.badge_tier = "gold";
        obj.is_gold = true;
        obj.has_badge = true;
        obj.badge_visible = true;
        obj.profile_badge = "gold";
    }
    // 2. Nếu là endpoint profile cá nhân độc lập (không phải của bạn bè khác)
    else if (!obj.user_name && !obj.username && !Array.isArray(obj)) {
        if ('badge' in obj || 'badge_tier' in obj || 'is_gold' in obj) {
            obj.badge = "locket_gold";
            obj.badge_tier = "gold";
            obj.is_gold = true;
            obj.has_badge = true;
            obj.badge_visible = true;
            obj.profile_badge = "gold";
        }
    }

    // 3. Quét các object con
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && typeof obj[key] === 'object' && obj[key] !== null) {
            processProfile(obj[key]);
        }
    }
}

// 1. Khi app gửi yêu cầu đổi thông tin / bật huy hiệu (changeProfileInfo)
if (url.includes("changeProfileInfo")) {
    $done({
        response: {
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                data: {
                    user_name: TARGET_USERNAME,
                    badge: "locket_gold",
                    badge_tier: "gold",
                    is_gold: true,
                    has_badge: true,
                    badge_visible: true,
                    profile_badge: "gold",
                    success: true
                },
                result: {
                    user_name: TARGET_USERNAME,
                    badge: "locket_gold",
                    badge_tier: "gold",
                    is_gold: true,
                    has_badge: true,
                    badge_visible: true,
                    profile_badge: "gold",
                    success: true
                }
            })
        }
    });
} else {
    // 2. Chặn các response thông tin tài khoản và bài viết từ api.locketcamera.com
    let body = $response ? $response.body : null;
    if (body) {
        try {
            let obj = JSON.parse(body);
            processProfile(obj);
            body = JSON.stringify(obj);
        } catch (e) {
            // Giữ nguyên body nếu không parse được JSON
        }
    }
    $done({ body: body });
}
