# Face Wash Fox — Landing page Combo 4

Website giới thiệu liệu trình Lumiglow + Gymming + Eye-Revive, hiển thị chi nhánh và nhận thông tin đặt lịch qua Google Apps Script / Google Sheets.

Dự án sử dụng Next.js 16, React 19, TypeScript và Tailwind CSS 4.

## 1. Chuẩn bị

- Node.js từ **20.9.0** trở lên (theo cấu hình Next.js đang cài trong dự án).
- npm và Git.
- Chạy các lệnh bên dưới trong thư mục gốc dự án, nơi có `package.json`.

Kiểm tra phiên bản:

```bash
node --version
npm --version
```

Nếu chưa có mã nguồn:

```bash
git clone https://github.com/It-fbnetwork/fwf_landingPage.git
cd fwf_landingPage
```

## 2. Cài đặt và chạy local

Cài thư viện theo `package-lock.json`:

```bash
npm ci
```

Tạo cấu hình môi trường lần đầu nếu chưa có `.env.local`:

```bash
cp .env.example .env.local
```

Nếu bản clone không có `.env.example`, tự tạo `.env.local` ở thư mục gốc với nội dung:

```dotenv
BOOKING_APPS_SCRIPT_URL=https://script.google.com/macros/s/THAY_BANG_DEPLOYMENT_ID/exec
```

Thay URL mẫu bằng URL Apps Script thực tế theo mục 4. Có thể xem giao diện khi chưa cấu hình, nhưng gửi đặt lịch sẽ báo lỗi. Không ghi đè `.env.local` nếu đã có cấu hình và không commit file này.

Chạy website:

```bash
npm run dev
```

Mở **http://localhost:3000**. Khi lưu file trong `src`, trang sẽ tự cập nhật. Nhấn **Ctrl+C** trong terminal để dừng server.

Chạy ở cổng khác, ví dụ 3001:

```bash
npm run dev -- --port 3001
```

Mở **http://localhost:3001**. Nếu cổng mặc định đang bận, xem địa chỉ thực tế được in trong terminal.

## 3. Các lệnh thường dùng

| Lệnh | Chức năng |
| --- | --- |
| `npm ci` | Cài lại thư viện đúng phiên bản trong lockfile |
| `npm run dev` | Chạy môi trường phát triển bằng Webpack |
| `npm run build` | Tạo bản production trong `.next` |
| `npm start` | Chạy bản production đã build |
| `npm run lint` | Kiểm tra quy tắc ESLint |
| `npx tsc --noEmit` | Kiểm tra TypeScript, không xuất JavaScript |
| `git diff --check` | Kiểm tra lỗi khoảng trắng trong thay đổi Git |

Kiểm tra bản production trên máy:

```bash
npm run build
npm start
```

Hoặc chạy bản production ở cổng 3001:

```bash
npm start -- --port 3001
```

Sau khi sửa code, cần build lại trước khi chạy bản production mới. Khi đưa lên hosting, cấu hình `BOOKING_APPS_SCRIPT_URL` trong môi trường server; endpoint `/api/booking` cần môi trường chạy Next.js phía server.

## 4. Cấu hình nhận đặt lịch vào Google Sheets

Mã tích hợp có sẵn tại [scripts/SENKA_BOOKING_APPS_SCRIPT.js](scripts/SENKA_BOOKING_APPS_SCRIPT.js). Tên file còn giữ tên chiến dịch cũ, nhưng API hiện dùng được cho Combo 4.

1. Tạo hoặc mở Google Sheet dùng để nhận đăng ký.
2. Mở **Extensions → Apps Script**, sao chép nội dung file script vào trình soạn thảo.
3. Thay `CONFIG.SHEET_ID` bằng ID spreadsheet trong URL `.../spreadsheets/d/ID/edit`.
4. Đặt `CONFIG.SHEET_NAME` theo tên tab muốn lưu dữ liệu. Mặc định là `Senka Booking`; script tự tạo tab nếu chưa có.
5. Triển khai dạng **Web app**, chạy bằng tài khoản của bạn (**Execute as: Me**), quyền truy cập **Anyone** để API server gửi được dữ liệu.
6. Sao chép URL triển khai kết thúc bằng `/exec` vào `BOOKING_APPS_SCRIPT_URL` trong `.env.local`.
7. Khởi động lại `npm run dev` sau khi đổi biến môi trường.

Luồng gửi dữ liệu: **Form → POST `/api/booking` → Apps Script → Google Sheet**.

Để kiểm tra: nhập thông tin thử có đánh dấu rõ là test, chọn chi nhánh rồi gửi form. Kiểm tra cả thông báo trên website và dòng dữ liệu mới trong Sheet; thông báo thành công trên website chưa thay thế việc xác nhận dữ liệu đã lưu vào Sheet.

## 5. Hướng dẫn sử dụng website

- **Fox Menu:** mở trang menu dịch vụ.
- **Liệu Trình / FAQ:** cuộn đến nội dung tương ứng, không thêm dấu `#` vào URL khi điều hướng trong trang.
- **Chi Nhánh:** mở trang cửa hàng trong tab mới.
- **Đặt Lịch Ngay:** cuộn đến form. Nhập họ tên, số điện thoại, chọn chi nhánh; có thể bổ sung email và ghi chú.
- Khi trình duyệt được cấp quyền vị trí, form có thể chọn chi nhánh gần nhất. Người dùng vẫn có thể tự chọn chi nhánh.
- Header ẩn khi cuộn xuống, hiện khi cuộn lên; trên màn hình nhỏ dùng nút mở menu.
- Popup góc trái dưới dùng **100 tên mẫu**, xuất hiện mỗi **1 giây**, giữ tối đa **3 thông báo**. Đây là dữ liệu mô phỏng, không lấy từ Google Sheet và không xác nhận đăng ký thực tế. Nút đóng tắt toàn bộ popup cho đến khi tải lại trang.

## 6. Chỉnh sửa nội dung và giao diện

| File / thư mục | Nội dung |
| --- | --- |
| `src/app/page.tsx` | Trang chính, tiêu đề, video intro, thẻ thông tin, footer |
| `src/app/layout.tsx` | Metadata: tiêu đề và mô tả trang |
| `src/app/globals.css` | CSS dùng chung |
| `src/components/HomeHeader.tsx` | Logo, menu, nút điều hướng, ẩn/hiện header |
| `src/components/SectionLink.tsx` | Cuộn đến các mục mà không thêm hash vào URL |
| `src/components/FoxSwatSection.tsx` | Giao diện liệu trình, mô tả bước, đường cong và vòng tròn |
| `src/components/home-data.ts` | Dữ liệu dịch vụ, hình từng bước và FAQ |
| `src/components/WhyChooseSection.tsx` | Nội dung lý do chọn dịch vụ |
| `src/components/BookingSection.tsx` | Form và xử lý gửi đăng ký |
| `src/components/RegistrationToast.tsx` | Tên mẫu, thời gian và số lượng popup |
| `src/data/branches.ts` | Danh sách chi nhánh và tọa độ |
| `src/app/api/booking/route.ts` | API chuyển đăng ký sang Apps Script |
| `public/` | Hình ảnh, logo và video |

File `public/399/RF.png` được tham chiếu trong JSX bằng `/399/RF.png`. Giữ đúng chữ hoa/thường của tên file khi thay ảnh hoặc video.

Khi thay giá hoặc tên liệu trình, kiểm tra đồng thời trang chính, metadata, dữ liệu dịch vụ, form, phần lý do chọn và popup để tránh nội dung không đồng nhất. Trong popup, các giá trị `1000` là chu kỳ 1 giây; `.slice(-3)` giới hạn ba thông báo.

## 7. Xử lý lỗi thường gặp

- **`node` / `npm` không tồn tại:** cài Node.js phù hợp rồi mở lại terminal.
- **Cổng đang được sử dụng:** dừng server cũ bằng Ctrl+C hoặc dùng `--port 3001`.
- **`next` không tồn tại / thiếu module:** chạy `npm ci` tại thư mục có `package.json`.
- **`BOOKING_APPS_SCRIPT_URL is not configured`:** kiểm tra `.env.local` ở thư mục gốc và khởi động lại server.
- **Gửi form lỗi 502 hoặc Sheet không nhận dữ liệu:** kiểm tra URL `/exec`, quyền triển khai, `SHEET_ID` và nhật ký thực thi Apps Script.
- **Không xác định được vị trí:** cấp quyền vị trí trên localhost/HTTPS hoặc chọn chi nhánh thủ công.
- **`npm start` báo chưa có production build:** chạy `npm run build` trước.
- **Đổi code nhưng production chưa cập nhật:** build lại và khởi động lại server hoặc triển khai bản mới.

## 8. Lưu thay đổi lên GitHub

Kiểm tra trước khi commit:

```bash
npm run lint
npx tsc --noEmit
git diff --check
git status
git diff
```

Stage đúng các file đã sửa, ví dụ khi chỉ cập nhật tài liệu:

```bash
git add README.md
git commit -m "Update project setup and usage guide"
git push origin main
```

Thay danh sách file và nội dung commit cho phù hợp. Push mã nguồn không tự bảo đảm website đã triển khai xong; cần kiểm tra tiến trình deploy của hosting đang sử dụng.
