export type CaseStudy = {
  eyebrow: string
  eyebrowClassName: string
  iconClassName: string
  dialogBorderClassName: string
  title: string
  description: string
  image: string
  previewImages?: string[]
  tags: string[]
  detailPoints: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    eyebrow: "LUMIGLOW",
    eyebrowClassName: "border-orange-300 text-orange-500",
    iconClassName: "text-orange-500",
    dialogBorderClassName: "border-orange-300",
    title: "Làm sạch và làm sáng nền da",
    description:
      "Combo 4 bắt đầu với các bước làm sạch, xông mặt, tẩy tế bào chết và hút bã nhờn để da thông thoáng, sẵn sàng hấp thu dưỡng chất.",
    image: "/399/1027 (2).png",
    tags: ["13 bước dịch vụ", "50 phút", "Da rạng rỡ"],
    detailPoints: [
      "Làm sạch lớp trang điểm, kem chống nắng, bụi bẩn và dầu thừa trên bề mặt da.",
      "Xông mặt và tẩy tế bào chết giúp da mềm hơn, hỗ trợ quy trình xử lý bã nhờn.",
      "Hút mụn và bã nhờn bằng đầu máy Hydodermabrasion, kết hợp massage hệ bạch huyết.",
    ],
  },
  {
    eyebrow: "GYMMING",
    eyebrowClassName: "border-teal-300 text-teal-500",
    iconClassName: "text-teal-500",
    dialogBorderClassName: "border-teal-300",
    title: "Nâng cơ săn chắc bằng RF & EMS",
    description:
      "Sóng điện từ tần số cao tác động đến mô biểu bì và sinh nhiệt, hỗ trợ kích thích tăng sinh collagen và làm săn chắc vùng mặt, mắt.",
    image: "/399/RF.png",
    previewImages: [
      "/399/RF.png",
      "/399/RF chăm sóc mắt.png",
    ],
    tags: ["RF & EMS", "Săn chắc da", "Chăm sóc vùng mắt"],
    detailPoints: [
      "Đầu máy RF & EMS chuyên dụng cho toàn mặt và vùng mắt.",
      "Hỗ trợ nâng cơ, giảm nếp nhăn mắt và làm săn chắc vùng bọng mắt.",
      "Phối hợp cùng các bước làm sạch và cấp ẩm để da rạng rỡ hơn sau liệu trình.",
    ],
  },
  {
    eyebrow: "EYE-REVIVE",
    eyebrowClassName: "border-orange-300 text-orange-500",
    iconClassName: "text-orange-500",
    dialogBorderClassName: "border-orange-300",
    title: "Thư giãn và phục hồi vùng da quanh mắt",
    description:
      "Ultrasonic, điện di lạnh, mặt nạ cao cấp và ánh sáng sinh học hỗ trợ thẩm thấu dưỡng chất, khóa ẩm, làm sáng và đều màu da.",
    image: "/399/Ultrasonic.png",
    previewImages: [
      "/399/Ultrasonic.png",
      "/399/Cold handle.png",
    ],
    tags: ["Giá Foxie 769K", "Giá niêm yết 1079K", "50 phút"],
    detailPoints: [
      "Ultrasonic hỗ trợ thư giãn lỗ chân lông và thúc đẩy dưỡng chất thẩm thấu.",
      "Điện di lạnh giúp khóa ẩm, cân bằng da và se khít lỗ chân lông.",
      "Ánh sáng sinh học hỗ trợ làm sáng, đều màu da và tăng sinh collagen.",
    ],
  },
]

export const serviceSteps = [
  { time: "1p", step: "Bước 1: Tẩy trang", image: "/combo 4/0 - Tẩy trang.png" },
  { time: "1p", step: "Bước 2: Rửa mặt", image: "/combo 4/2 - Rửa mặt.png" },
  { time: "1p", step: "Bước 3: Xông mặt", image: "/combo 4/Xông mặt.png" },
  { time: "2p", step: "Bước 4: Tẩy tế bào chết", image: "/combo 4/Tẩy tế bào chết.png" },
  { time: "3p", step: "Bước 5: Ủ mụn", image: "/combo 4/Đắp ủ mụn.png" },
  { time: "5p", step: "Bước 6: Hút mụn và bã nhờn", image: "/combo 4/Hút mụn và bã nhờn.png" },
  { time: "8p", step: "Bước 7: RF Lifting & EMS cho mặt và vùng mắt", image: "/combo 4/RF chăm sóc mắt.png" },
  { time: "5p", step: "Bước 8: Đầu máy Ultrasonic", image: "/combo 4/Ultrasonic.png" },
  { time: "5p", step: "Bước 9: Điện di lạnh thẩm thấu khóa ẩm", image: "/combo 4/Cold handle.png" },
  { time: "10p", step: "Bước 10: Đắp mặt nạ cao cấp Elravie", image: "/combo 4/Đắp mặt nạ.png" },
  { time: "5p", step: "Bước 11: Chiếu ánh sáng sinh học", image: "/combo 4/Chiếu đèn.png" },
  { time: "2p", step: "Bước 12: Bôi kem dưỡng ẩm", image: "/combo 4/Bôi kem.png" },
  { time: "2p", step: "Bước 13: Bôi kem chống nắng", image: "/Các bước/Kem chống nắng.png" },
]

export const faqItems = [
  {
    question: "Combo 4 phù hợp với nhu cầu nào?",
    answer:
      "Combo 4 phù hợp với khách muốn làm sạch sâu, hỗ trợ hút bã nhờn, dưỡng sáng, cấp ẩm, thư giãn vùng mắt và chăm sóc độ săn chắc của da trong cùng một liệu trình.",
  },
  {
    question: "Liệu trình diễn ra trong bao lâu?",
    answer:
      "Tổng thời gian dịch vụ khoảng 50 phút với 13 bước, từ tẩy trang, rửa mặt, xông mặt đến RF & EMS, Ultrasonic, điện di lạnh, mặt nạ, ánh sáng sinh học và chống nắng.",
  },
  {
    question: "Giá Combo 4 là bao nhiêu?",
    answer:
      "Giá niêm yết là 1.079.000. Giá thẻ Foxie là 769.000.",
  },
  {
    question: "Combo này gồm những công nghệ nổi bật nào?",
    answer:
      "Combo sử dụng Hydodermabrasion, đầu silicon xoay 360 độ, RF Lifting & EMS, Ultrasonic Handle, điện di lạnh và ánh sáng sinh học.",
  },
  {
    question: "Combo này áp dụng ở đâu?",
    answer:
      "Bạn có thể để lại thông tin và chọn chi nhánh Face Wash Fox thuận tiện nhất trong form đặt lịch trên landing page.",
  },
]
