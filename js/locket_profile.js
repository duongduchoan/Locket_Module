/***********************************************
> Locket Profile & Badge Keeper
> Tác giả: duongduchoan (Locket_Module)
> Chức năng: Kích hoạt & duy trì huy hiệu Locket Gold trên trang cá nhân (Không làm ảnh hưởng bạn bè)
***********************************************/

const url = $request ? $request.url : '';

// 1. DANH SÁCH BỎ QUA: Tuyệt đối không can thiệp vào API danh sách bạn bè, bảng tin, danh bạ
const isFriendsOrFeed = /getFriends|friends|feed|moments|posts|contacts|syncFriends|suggestions/i.test(url);

/**
 * Chỉ gán huy hiệu cho profile người dùng hiện tại
 */
function injectBadge(obj) {
    if (!obj || typeof obj !== 'object') return;

    // Gán huy hiệu Gold
    if ('badge' in obj || 'badge_tier' in obj || 'is_gold' in obj) {
        obj.badge = "locket_gold";
        obj.badge_tier = "gold";
        obj.is_gold = true;
        obj.has_badge = true;
    }

    // Quét các cấp con, bỏ qua mảng bạn bè
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && typeof obj[key] === 'object' && obj[key] !== null) {
            if (key !== 'friends' && key !== 'users' && key !== 'contacts' && key !== 'suggestions') {
                injectBadge(obj[key]);
            }
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
                    badge: "locket_gold",
                    badge_tier: "gold",
                    is_gold: true,
                    has_badge: true,
                    success: true
                },
                result: {
                    badge: "locket_gold",
                    badge_tier: "gold",
                    is_gold: true,
                    has_badge: true,
                    success: true
                }
            })
        }
    });
} else if (!isFriendsOrFeed) {
    // 2. Chỉ can thiệp các response lấy thông tin tài khoản cá nhân
    let body = $response ? $response.body : null;
    if (body) {
        try {
            let obj = JSON.parse(body);
            injectBadge(obj);
            body = JSON.stringify(obj);
        } catch (e) {
            // Giữ nguyên body nếu không parse được JSON
        }
    }
    $done({ body: body });
} else {
    // Giữ nguyên response cho bạn bè và bảng tin
    $done({});
}
