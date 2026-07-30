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
    eyebrow: "SẠCH SÂU",
    eyebrowClassName: "border-sky-300 text-sky-500",
    iconClassName: "text-sky-500",
    dialogBorderClassName: "border-sky-300",
    title: "Làm sạch da dịu nhẹ trong 40 phút",
    description:
      "Senka Facial Combo kết hợp tẩy trang, rửa mặt, xông mặt, tẩy tế bào chết, ủ mụn, hút mụn và bã nhờn để da thông thoáng nhưng vẫn dễ chịu.",
    image: "/Senka/Liệu trình Senka-03.png",
    tags: ["11 bước dịch vụ", "40 phút", "Mọi loại da"],
    detailPoints: [
      "Phù hợp da dầu, da khô, da hỗn hợp, da thường và làn da cần làm sạch định kỳ.",
      "Quy trình làm sạch đi từ bề mặt đến bã nhờn, hỗ trợ da sẵn sàng hấp thu tinh chất cấp ẩm.",
      "Các bước chính: tẩy trang, rửa mặt, xông mặt, tẩy tế bào chết, ủ mụn, hút mụn và bã nhờn.",
    ],
  },
  {
    eyebrow: "CẤP ẨM",
    eyebrowClassName: "border-cyan-300 text-cyan-500",
    iconClassName: "text-cyan-500",
    dialogBorderClassName: "border-cyan-300",
    title: "Cấp ẩm với Deep Moist 3X HA",
    description:
      "Tinh chất cấp ẩm ứng dụng công nghệ 3X HA thế hệ mới, hỗ trợ tăng độ ẩm tức thì, khóa ẩm và giảm cảm giác khô căng.",
    image: "/Senka/Liệu trình Senka-01.png",
    previewImages: [
      "/Senka/Liệu trình Senka-01.png",
      "/Senka/Liệu trình Senka-03.png",
    ],
    tags: ["Deep Moist 3X HA", "Da mềm mại", "Giảm khô căng"],
    detailPoints: [
      "Đầu máy Ultrasonic đưa tinh chất cấp ẩm Deep Moist 3X HA vào bước chăm sóc trọng tâm.",
      "Mặt nạ cấp ẩm kết hợp điện di lạnh giúp da dịu hơn sau làm sạch.",
      "Công thức có Collagen, tơ tằm trắng, mật ong và cám gạo, hỗ trợ da săn chắc và đàn hồi.",
    ],
  },
  {
    eyebrow: "ƯU ĐÃI",
    eyebrowClassName: "border-orange-300 text-orange-500",
    iconClassName: "text-orange-500",
    dialogBorderClassName: "border-orange-300",
    title: "Trải nghiệm lần đầu chỉ 399.000",
    description:
      "Giá niêm yết 749.000. Khách sử dụng Senka Facial Combo được tặng sữa rửa mặt Senka 50g trong thời gian quà tặng còn số lượng.",
    image: "/Senka/Liệu trình Senka-02.png",
    previewImages: [
      "/Senka/Liệu trình Senka-02.png",
      "/Senka/Liệu trình Senka-05.png",
    ],
    tags: ["Giá trải nghiệm 399.000", "Tặng Senka 50g", "12 chi nhánh áp dụng"],
    detailPoints: [
      "Quà tặng: Senka Perfect Whip FA 50g hoặc Senka Perfect Whip Collagen In FA 50g.",
      "Áp dụng cho tất cả khách hàng sử dụng Senka Facial Combo tại các chi nhánh Senka Pick.",
      "Quà tặng có giới hạn số lượng và được áp dụng theo tình trạng thực tế tại cửa hàng.",
    ],
  },
]

export const serviceSteps = [
  { time: "1p", step: "Bước 1: Tẩy trang", image: "/399/1027 (2).png" },
  { time: "1p", step: "Bước 2: Rửa mặt", image: "/399/Rửa mặt.png" },
  { time: "1p", step: "Bước 3: Xông mặt", image: "/399/Chiếu đèn.png" },
  { time: "2p", step: "Bước 4: Tẩy tế bào chết", image: "/399/Tẩy tế bào chết.png" },
  { time: "3p", step: "Bước 5: Ủ mụn", image: "/399/RF.png" },
  { time: "5p", step: "Bước 6: Hút mụn và bã nhờn", image: "/399/Hút mụn và bã nhờn.png" },
  { time: "10p", step: "Bước 7: Đầu máy Ultrasonic với tinh chất cấp ẩm Deep Moist 3X HA", image: "/399/Ultrasonic.png" },
  { time: "10p", step: "Bước 8: Đắp mặt nạ cấp ẩm", image: "/399/Đắp mặt nạ.png" },
  { time: "5p", step: "Bước 9: Điện di lạnh trên mặt nạ", image: "/399/Cold handle.png" },
  { time: "1p", step: "Bước 10: Kem dưỡng", image: "/399/RF chăm sóc mắt.png" },
  { time: "1p", step: "Bước 11: Kem chống nắng", image: "/399/RF.png" },
]

export const faqItems = [
  {
    question: "Senka Facial Combo phù hợp với loại da nào?",
    answer:
      "Combo phù hợp với da dầu, da khô, da hỗn hợp, da thường, da thiếu nước, da bắt đầu có dấu hiệu lão hóa nhẹ và cả da nhạy cảm cần công thức dịu nhẹ.",
  },
  {
    question: "Liệu trình diễn ra trong bao lâu?",
    answer:
      "Tổng thời gian dịch vụ khoảng 40 phút với 11 bước, từ làm sạch đến cấp ẩm, điện di lạnh, kem dưỡng và kem chống nắng.",
  },
  {
    question: "Giá trải nghiệm lần đầu là bao nhiêu?",
    answer:
      "Giá trải nghiệm lần đầu là 399.000. Giá niêm yết của combo là 749.000.",
  },
  {
    question: "Khuyến mãi tặng sản phẩm Senka áp dụng như thế nào?",
    answer:
      "Khách sử dụng Senka Facial Combo được tặng Senka Perfect Whip FA 50g hoặc Senka Perfect Whip Collagen In FA 50g. Quà tặng có giới hạn số lượng.",
  },
  {
    question: "Combo này áp dụng ở đâu?",
    answer:
      "Chương trình áp dụng tại 12 chi nhánh Senka Pick được liệt kê ở form đặt lịch trên landing page.",
  },
]
