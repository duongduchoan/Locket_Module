# Gói Cấu Hình Dành Riêng Cho Locket 💛 (Tác giả: duongduchoan)

Thư mục này được tinh lọc **chỉ dành riêng cho Locket**, giúp mở khóa toàn bộ tính năng Locket Gold VIP cao cấp và ổn định nhất:
- **Tải ảnh / video trực tiếp từ Thư viện (Camera Roll)** lên Locket widget chất lượng cao không giới hạn.
- **Thời lượng quay và tải video tối đa 30 giây** (không bị cắt ngắn 3 giây như bản miễn phí).
- **Tăng Bitrate video và nâng chất lượng ảnh lên mức tối đa (2K 2048px).**
- **Kho hơn 318+ caption động độc quyền** (Decorative by Hoan, Mục Bóng đá ⚽ Phút bồ CR7 Siuuu & M10, Gen Z, Meme, Tình yêu, Chữa lành...).
- **Giao diện & Icon Gold VIP** độc quyền.
- **Tối ưu hóa:** Đã loại bỏ các nút Camera AI/Cutout lỗi server, giúp camera mượt mà, không bao giờ bị văng popup bắt Upgrade lên Gold.
- **Chặn quảng cáo trong lịch sử/feed và tắt tracking Sentry.**

---

## 📂 Cấu trúc thư mục

```text
Locket_Module/
├── Locket.conf                  # File cấu hình Shadowrocket hoàn chỉnh cho Locket
├── README.md                    # Hướng dẫn sử dụng chi tiết
├── index.html                   # Giao diện web giới thiệu / cài đặt module
├── assets/
│   ├── LocketGold.mobileconfig  # Profile uBlockDNS cá nhân (chặn thu hồi & chặn tracking/ads)
│   └── locket.mobileconfig      # Profile DNS Locket VIP dự phòng
├── js/
│   ├── Locket_DuyVinh09.js      # Script can thiệp RevenueCat (kích hoạt gói Gold VIP, Pro, VIP)
│   ├── Locket_Unlocked.js       # Script can thiệp Firebase Remote Config (Camera Roll, Video 30s, 318 Captions, Ảnh 2K)
│   └── deleteHeader.js          # Script xoá triệt để cache ETag & If-None-Match
└── modules/
    └── Locket_Gold.sgmodule     # File module dành cho Shadowrocket / Surge / Loon
```

---

## 🚀 Hướng Dẫn Sử Dụng Với Shadowrocket

### Cách 1: Sử dụng Module (Khuyên dùng)
1. Mở ứng dụng **Shadowrocket** trên iPhone.
2. Vào tab **Cấu hình (Config)** -> cuộn xuống mục **Mô-đun (Modules)**.
3. Nhấn vào dấu **+** ở góc trên cùng.
4. Dán link file `Locket_Gold.sgmodule` (hoặc import file vào Shadowrocket).
5. Bật HTTPS Decryption (Giải mã HTTPS):
   - Vào tab **Cấu hình** -> Nhấn vào file cấu hình đang dùng (dấu `i`).
   - Chọn **Giải mã HTTPS (HTTPS Decryption)** -> Bật công tắc.
   - Nhấn **Tạo chứng thư mới** -> Cài đặt chứng thư vào máy -> Vào **Cài đặt iPhone** -> **Cài đặt chung** -> **Giới thiệu** -> **Cài đặt tin cậy chứng nhận** -> Bật tin cậy chứng chỉ Shadowrocket.
6. Quay lại màn hình chính Shadowrocket và bật VPN.
7. Mở app Locket và tận hưởng tính năng!

### Cách 2: Sử dụng File Cấu Hình Trực Tiếp (.conf)
1. Trong Shadowrocket, vào tab **Cấu hình**.
2. Nhấn **Thêm cấu hình** rồi chọn file `Locket.conf`.
3. Nhấn vào cấu hình vừa thêm để kích hoạt.
4. Bật VPN và mở Locket.

---

## 🛡️ Cài đặt Profile DNS Chặn Thu Hồi (assets/)
Nếu muốn chặn hệ thống thu hồi hoặc chặn quảng cáo từ server DNS:
1. Gửi file `LocketGold.mobileconfig` qua AirDrop hoặc mở trên Safari của iPhone.
2. Vào **Cài đặt** -> **Đã tải về hồ sơ** -> Nhấn **Cài đặt**.
3. Vào **Cài đặt** -> **Cài đặt chung** -> **VPN & Quản lý thiết bị** -> **DNS** -> Chọn **Locket Gold DNS**.
