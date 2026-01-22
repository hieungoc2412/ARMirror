// Products Data List
const productsData = [
    {
        id: 1,
        name: "Gương Tròn Baroque",
        title: "Gương Tròn Baroque Cổ Điển",
        category: "guong-tron",
        categoryName: "Gương trang trí",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/Model1.jpg",
        glb: "DemoImage/glb/Model1.glb",
        thumbnails: [
            "DemoImage/image/Model1.jpg",
            "DemoImage/image/Model1.jpg",
            "DemoImage/image/Model1.jpg"
        ],
        colors: [
            { name: "Vàng đồng", value: "gold", hex: "#D4AF37", active: true },
            { name: "Bạc", value: "silver", hex: "#C0C0C0" },
            { name: "Đen", value: "black", hex: "#333333" }
        ],
        sizes: [
            { value: "40cm", label: "Ø 40cm", priceAdd: 0 },
            { value: "50cm", label: "Ø 50cm", priceAdd: 0, active: true },
            { value: "60cm", label: "Ø 60cm", priceAdd: 0 },
            { value: "80cm", label: "Ø 80cm", priceAdd: 0 }
        ],
        description: "Gương tròn Baroque phong cách cổ điển Châu Âu, được chế tác tinh xảo với họa tiết phức tạp, mang đến vẻ đẹp sang trọng và đẳng cấp. Khung gương được làm từ hợp kim cao cấp, phủ lớp sơn vàng đồng sáng bóng, tạo nên điểm nhấn hoàn hảo cho không gian nội thất. Sản phẩm kết hợp giữa nghệ thuật truyền thống và công nghệ AR hiện đại, cho phép bạn trải nghiệm và hình dung sản phẩm trong không gian thực tế trước khi quyết định."
    },
    {
        id: 2,
        name: "Gương Vuông Minimalist",
        title: "Gương Vuông Phong Cách Tối Giản",
        category: "guong-vuong",
        categoryName: "Gương vuông",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/Model2.jpg",
        glb: "DemoImage/glb/Model2.glb",
        thumbnails: [
            "DemoImage/image/Model2.jpg",
            "DemoImage/image/Model2.jpg",
            "DemoImage/image/Model2.jpg"
        ],
        colors: [
            { name: "Trắng", value: "white", hex: "#FFFFFF", active: true },
            { name: "Đen", value: "black", hex: "#333333" },
            { name: "Gỗ tự nhiên", value: "wood", hex: "#8B4513" }
        ],
        sizes: [
            { value: "40x40", label: "40x40 cm", priceAdd: 0, active: true },
            { value: "50x50", label: "50x50 cm", priceAdd: 0 },
            { value: "60x60", label: "60x60 cm", priceAdd: 0 },
            { value: "80x80", label: "80x80 cm", priceAdd: 0 }
        ],
        description: "Gương vuông hiện đại với thiết kế tối giản, phù hợp với không gian nội thất hiện đại. Khung gương được làm từ chất liệu nhôm cao cấp, mang đến vẻ đẹp thanh lịch và sang trọng. Thiết kế clean và minimalist này tạo điểm nhấn tinh tế, không làm lấn át không gian mà lại nâng tầm thẩm mỹ tổng thể. Hoàn hảo cho những ai yêu thích phong cách Scandinavian và contemporary."
    },
    {
        id: 3,
        name: "Gương Tròn LED",
        title: "Gương Tròn Đèn LED Thông Minh",
        category: "guong-tron",
        categoryName: "Gương tròn",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/Model3.jpg",
        glb: "DemoImage/glb/Model3.glb",
        thumbnails: [
            "DemoImage/image/Model3.jpg",
            "DemoImage/image/Model3.jpg",
            "DemoImage/image/Model3.jpg"
        ],
        colors: [
            { name: "Viền bạc", value: "silver", hex: "#C0C0C0", active: true },
            { name: "Viền vàng", value: "gold", hex: "#D4AF37" }
        ],
        sizes: [
            { value: "50cm", label: "Ø 50cm", priceAdd: 0 },
            { value: "60cm", label: "Ø 60cm", priceAdd: 0, active: true },
            { value: "80cm", label: "Ø 80cm", priceAdd: 0 },
            { value: "100cm", label: "Ø 100cm", priceAdd: 0 }
        ],
        description: "Gương tròn với đèn LED tích hợp, có 3 chế độ ánh sáng (trắng, vàng, trung tính). Tính năng chống sương mù, cảm ứng chạm điều chỉnh độ sáng. Phù hợp cho phòng tắm và phòng trang điểm. Công nghệ LED hiện đại mang đến ánh sáng tự nhiên, giúp bạn luôn tự tin với vẻ ngoài hoàn hảo. Thiết kế không dây, an toàn và tiện lợi cho mọi không gian."
    },
    {
        id: 4,
        name: "Gương Oval Vintage",
        title: "Gương Oval Phong Cách Cổ Điển",
        category: "guong-oval",
        categoryName: "Gương oval",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/Model4.jpg",
        glb: "DemoImage/glb/Model4.glb",
        thumbnails: [
            "DemoImage/image/Model4.jpg",
            "DemoImage/image/Model4.jpg",
            "DemoImage/image/Model4.jpg"
        ],
        colors: [
            { name: "Vàng cổ", value: "antique-gold", hex: "#CFB53B", active: true },
            { name: "Đồng đỏ", value: "bronze", hex: "#CD7F32" },
            { name: "Bạc cổ", value: "antique-silver", hex: "#A8A8A8" }
        ],
        sizes: [
            { value: "40x60", label: "40x60 cm", priceAdd: 0 },
            { value: "50x70", label: "50x70 cm", priceAdd: 0, active: true },
            { value: "60x80", label: "60x80 cm", priceAdd: 0 },
            { value: "70x100", label: "70x100 cm", priceAdd: 0 }
        ],
        description: "Gương oval phong cách vintage với khung hoa văn tinh xảo, mang đến vẻ đẹp hoài cổ và sang trọng. Thích hợp cho phòng khách, phòng ngủ hoặc hành lang. Hình dáng oval mềm mại tạo cảm giác ấm cúng và thân thiện, trong khi các chi tiết cổ điển trên khung gương thể hiện sự tinh tế và đẳng cấp. Sản phẩm là sự kết hợp hoàn hảo giữa nét đẹp xưa và công nghệ AR hiện đại."
    },
    {
        id: 5,
        name: "Gương Toàn Thân",
        title: "Gương Đứng Toàn Thân Khung Gỗ",
        category: "guong-dung",
        categoryName: "Gương trang trí",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/Model5.jpg",
        glb: "DemoImage/glb/Model5.glb",
        thumbnails: [
            "DemoImage/image/Model5.jpg",
            "DemoImage/image/Model5.jpg",
            "DemoImage/image/Model5.jpg"
        ],
        colors: [
            { name: "Gỗ sồi", value: "oak", hex: "#806517", active: true },
            { name: "Gỗ óc chó", value: "walnut", hex: "#5C4033" },
            { name: "Trắng", value: "white", hex: "#FFFFFF" },
            { name: "Đen", value: "black", hex: "#333333" }
        ],
        sizes: [
            { value: "50x150", label: "50x150 cm", priceAdd: 0, active: true },
            { value: "60x170", label: "60x170 cm", priceAdd: 0 },
            { value: "70x180", label: "70x180 cm", priceAdd: 0 }
        ],
        description: "Gương đứng toàn thân với khung gỗ tự nhiên cao cấp, thiết kế đơn giản nhưng sang trọng. Có thể đặt sàn hoặc treo tường, phù hợp cho phòng ngủ và phòng thay đồ. Khung gỗ được xử lý tinh tế, giữ nguyên vẻ đẹp tự nhiên của gỗ, tạo cảm giác ấm áp và gần gũi. Kích thước lớn cho phép bạn nhìn toàn bộ trang phục, là vật dụng không thể thiếu cho tủ quần áo hiện đại."
    },
    {
        id: 6,
        name: "Gương Nghệ Thuật Sunburst",
        title: "Gương Trang Trí Nghệ Thuật Sunburst",
        category: "guong-trang-tri",
        categoryName: "Gương trang trí",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/Model6.jpg",
        glb: "DemoImage/glb/Model6.glb",
        thumbnails: [
            "DemoImage/image/Model6.jpg",
            "DemoImage/image/Model6.jpg",
            "DemoImage/image/Model6.jpg"
        ],
        colors: [
            { name: "Vàng", value: "gold", hex: "#FFD700", active: true },
            { name: "Bạc", value: "silver", hex: "#C0C0C0" },
            { name: "Đồng", value: "copper", hex: "#B87333" }
        ],
        sizes: [
            { value: "60cm", label: "Ø 60cm", priceAdd: 0, active: true },
            { value: "80cm", label: "Ø 80cm", priceAdd: 0 },
            { value: "100cm", label: "Ø 100cm", priceAdd: 0 }
        ],
        description: "Gương trang trí nghệ thuật kiểu Sunburst với các tia sáng tỏa ra từ trung tâm, tạo điểm nhấn ấn tượng cho không gian. Thích hợp làm điểm nhấn cho phòng khách hoặc phòng ăn. Thiết kế độc đáo này lấy cảm hứng từ ánh mặt trời, mang đến năng lượng tích cực và sự ấm áp cho ngôi nhà. Mỗi chi tiết được chế tác thủ công tỉ mỉ, thể hiện sự tinh tế và đẳng cấp trong từng đường nét."
    },
    {
        id: 7,
        name: "AR Round Basic",
        title: "AR Round Basic - Gương Tròn Cơ Bản",
        category: "guong-tron",
        categoryName: "Gương tròn",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/RM01.jpg",
        glb: null,
        thumbnails: [
            "DemoImage/image/RM01.jpg",
            "DemoImage/image/RM01.jpg",
            "DemoImage/image/RM01.jpg"
        ],
        colors: [
            { name: "Gỗ tự nhiên", value: "wood", hex: "#8B4513", active: true },
            { name: "Trắng", value: "white", hex: "#FFFFFF" },
            { name: "Đen", value: "black", hex: "#333333" }
        ],
        sizes: [
            { value: "60cm", label: "Ø 60cm", priceAdd: 0, active: true },
            { value: "70cm", label: "Ø 70cm", priceAdd: 0 },
            { value: "80cm", label: "Ø 80cm", priceAdd: 0 }
        ],
        description: "Gương tròn cơ bản với thiết kế tinh giản, phù hợp cho mọi không gian sống. Khung gỗ tự nhiên cao cấp mang đến vẻ đẹp ấm áp và gần gũi. Sản phẩm được chế tác tỉ mỉ, đảm bảo độ bền và tính thẩm mỹ cao. Hoàn hảo cho những ai yêu thích phong cách tối giản nhưng vẫn muốn có điểm nhấn cho không gian nội thất."
    },
    {
        id: 8,
        name: "AR Round Standard",
        title: "AR Round Standard - Gương Tròn Tiêu Chuẩn",
        category: "guong-tron",
        categoryName: "Gương tròn",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/RM02.jpg",
        glb: null,
        thumbnails: [
            "DemoImage/image/RM02.jpg",
            "DemoImage/image/RM02.jpg",
            "DemoImage/image/RM02.jpg"
        ],
        colors: [
            { name: "Gỗ cao cấp", value: "premium-wood", hex: "#654321", active: true },
            { name: "Vàng đồng", value: "gold", hex: "#D4AF37" },
            { name: "Bạc", value: "silver", hex: "#C0C0C0" }
        ],
        sizes: [
            { value: "60cm", label: "Ø 60cm", priceAdd: 0, active: true },
            { value: "70cm", label: "Ø 70cm", priceAdd: 0 },
            { value: "80cm", label: "Ø 80cm", priceAdd: 0 }
        ],
        description: "Gương tròn tiêu chuẩn với chất liệu và hoàn thiện nâng cấp, mang đến vẻ đẹp sang trọng hơn so với phiên bản cơ bản. Khung được làm từ gỗ cao cấp với lớp phủ bảo vệ chuyên nghiệp, đảm bảo độ bền theo thời gian. Thiết kế cân đối và hài hòa, tạo điểm nhấn tinh tế cho phòng khách, phòng ngủ hoặc hành lang."
    },
    {
        id: 9,
        name: "AR Round Premium",
        title: "AR Round Premium - Gương Tròn Cao Cấp",
        category: "guong-tron",
        categoryName: "Gương tròn",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/RM03.jpg",
        glb: null,
        thumbnails: [
            "DemoImage/image/RM03.jpg",
            "DemoImage/image/RM03.jpg",
            "DemoImage/image/RM03.jpg"
        ],
        colors: [
            { name: "Gỗ nghệ thuật", value: "art-wood", hex: "#5C4033", active: true },
            { name: "Vàng kim loại", value: "metallic-gold", hex: "#FFD700" },
            { name: "Bạc cao cấp", value: "premium-silver", hex: "#E8E8E8" }
        ],
        sizes: [
            { value: "60cm", label: "Ø 60cm", priceAdd: 0, active: true },
            { value: "70cm", label: "Ø 70cm", priceAdd: 0 },
            { value: "80cm", label: "Ø 80cm", priceAdd: 0 }
        ],
        description: "Gương tròn cao cấp với thiết kế và chất liệu đỉnh cao, dành cho những không gian sang trọng và đẳng cấp. Khung gỗ nghệ thuật được chế tác thủ công tỉ mỉ, mỗi chi tiết đều thể hiện sự tinh xảo và chuyên nghiệp. Sản phẩm không chỉ là vật dụng trang trí mà còn là tác phẩm nghệ thuật, nâng tầm giá trị cho không gian sống của bạn."
    },
    {
        id: 10,
        name: "AR Square Basic",
        title: "AR Square Basic - Gương Vuông Cơ Bản",
        category: "guong-vuong",
        categoryName: "Gương vuông",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/SQ01.jpg",
        glb: null,
        thumbnails: [
            "DemoImage/image/SQ01.jpg",
            "DemoImage/image/SQ01.jpg",
            "DemoImage/image/SQ01.jpg"
        ],
        colors: [
            { name: "Gỗ tự nhiên", value: "wood", hex: "#8B4513", active: true },
            { name: "Trắng", value: "white", hex: "#FFFFFF" },
            { name: "Đen", value: "black", hex: "#333333" }
        ],
        sizes: [
            { value: "60x80", label: "60×80 cm", priceAdd: 0, active: true },
            { value: "70x100", label: "70×100 cm", priceAdd: 0 }
        ],
        description: "Gương vuông cơ bản với thiết kế hiện đại và tối giản, phù hợp cho không gian sống đương đại. Khung gỗ tự nhiên mang đến vẻ đẹp ấm áp, trong khi hình dáng vuông vức tạo cảm giác ổn định và cân đối. Sản phẩm lý tưởng cho phòng khách, phòng ngủ hoặc văn phòng làm việc, tạo điểm nhấn tinh tế mà không làm lấn át không gian."
    },
    {
        id: 11,
        name: "AR Square Standard",
        title: "AR Square Standard - Gương Vuông Tiêu Chuẩn",
        category: "guong-vuong",
        categoryName: "Gương vuông",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/SQ02.jpg",
        glb: null,
        thumbnails: [
            "DemoImage/image/SQ02.jpg",
            "DemoImage/image/SQ02.jpg",
            "DemoImage/image/SQ02.jpg"
        ],
        colors: [
            { name: "Gỗ cao cấp", value: "premium-wood", hex: "#654321", active: true },
            { name: "Vàng đồng", value: "gold", hex: "#D4AF37" },
            { name: "Bạc", value: "silver", hex: "#C0C0C0" }
        ],
        sizes: [
            { value: "60x80", label: "60×80 cm", priceAdd: 0, active: true },
            { value: "70x100", label: "70×100 cm", priceAdd: 0 }
        ],
        description: "Gương vuông tiêu chuẩn với chất liệu và hoàn thiện nâng cấp, mang đến vẻ đẹp sang trọng và chuyên nghiệp. Khung gỗ cao cấp được xử lý kỹ lưỡng, đảm bảo độ bền và tính thẩm mỹ cao. Thiết kế vuông vức tạo cảm giác chắc chắn và ổn định, phù hợp cho những không gian cần sự trang trọng và đẳng cấp."
    },
    {
        id: 12,
        name: "AR Rectangle Standard",
        title: "AR Rectangle Standard - Gương Chữ Nhật Tiêu Chuẩn",
        category: "guong-vuong",
        categoryName: "Gương vuông",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/SQ03.jpg",
        glb: null,
        thumbnails: [
            "DemoImage/image/SQ03.jpg",
            "DemoImage/image/SQ03.jpg",
            "DemoImage/image/SQ03.jpg"
        ],
        colors: [
            { name: "Gỗ cao cấp", value: "premium-wood", hex: "#654321", active: true },
            { name: "Vàng đồng", value: "gold", hex: "#D4AF37" },
            { name: "Bạc", value: "silver", hex: "#C0C0C0" }
        ],
        sizes: [
            { value: "60x80", label: "60×80 cm", priceAdd: 0, active: true },
            { value: "70x100", label: "70×100 cm", priceAdd: 0 }
        ],
        description: "Gương chữ nhật tiêu chuẩn với tỷ lệ vàng hoàn hảo, tạo cảm giác hài hòa và cân đối cho không gian. Khung gỗ cao cấp được chế tác tinh xảo, mỗi góc cạnh đều được xử lý tỉ mỉ. Hình dáng chữ nhật dọc tạo hiệu ứng kéo dài không gian, lý tưởng cho hành lang, cầu thang hoặc những khu vực cần tạo chiều sâu thị giác."
    },
    {
        id: 13,
        name: "AR Standing Basic",
        title: "AR Standing Basic - Gương Đứng Cơ Bản",
        category: "guong-dung",
        categoryName: "Gương đứng",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/ST01.jpg",
        glb: null,
        thumbnails: [
            "DemoImage/image/ST01.jpg",
            "DemoImage/image/ST01.jpg",
            "DemoImage/image/ST01.jpg"
        ],
        colors: [
            { name: "Gỗ tự nhiên", value: "wood", hex: "#8B4513", active: true },
            { name: "Trắng", value: "white", hex: "#FFFFFF" },
            { name: "Đen", value: "black", hex: "#333333" }
        ],
        sizes: [
            { value: "50x160", label: "50×160 cm", priceAdd: 0, active: true },
            { value: "60x170", label: "60×170 cm", priceAdd: 0 }
        ],
        description: "Gương đứng cơ bản với thiết kế tối giản và hiện đại, phù hợp cho phòng ngủ và phòng thay đồ. Khung gỗ tự nhiên cao cấp mang đến vẻ đẹp ấm áp, trong khi kích thước lớn cho phép bạn nhìn toàn bộ trang phục. Sản phẩm có thể đặt sàn hoặc treo tường, linh hoạt trong việc bố trí không gian. Thiết kế chắc chắn và ổn định, đảm bảo an toàn khi sử dụng."
    },
    {
        id: 14,
        name: "AR Standing Standard",
        title: "AR Standing Standard - Gương Đứng Tiêu Chuẩn",
        category: "guong-dung",
        categoryName: "Gương đứng",
        price: "Liên hệ",
        priceDisplay: "Liên hệ",
        image: "DemoImage/image/ST02.jpg",
        glb: null,
        thumbnails: [
            "DemoImage/image/ST02.jpg",
            "DemoImage/image/ST02.jpg",
            "DemoImage/image/ST02.jpg"
        ],
        colors: [
            { name: "Gỗ cao cấp", value: "premium-wood", hex: "#654321", active: true },
            { name: "Vàng đồng", value: "gold", hex: "#D4AF37" },
            { name: "Bạc", value: "silver", hex: "#C0C0C0" }
        ],
        sizes: [
            { value: "50x160", label: "50×160 cm", priceAdd: 0, active: true },
            { value: "60x170", label: "60×170 cm", priceAdd: 0 }
        ],
        description: "Gương đứng tiêu chuẩn với chất liệu và hoàn thiện nâng cấp, mang đến vẻ đẹp sang trọng và đẳng cấp. Khung gỗ cao cấp được chế tác thủ công tỉ mỉ, mỗi chi tiết đều thể hiện sự tinh xảo. Kích thước lớn cho phép bạn nhìn toàn bộ trang phục một cách rõ ràng và chính xác. Sản phẩm là vật dụng không thể thiếu cho tủ quần áo hiện đại, giúp bạn tự tin với mọi trang phục."
    }
];

// Categories list
const categoriesData = [
    { id: "all", name: "Tất cả", icon: "🪞" },
    { id: "guong-tron", name: "Gương tròn", icon: "⭕" },
    { id: "guong-vuong", name: "Gương vuông", icon: "⬜" },
    { id: "guong-oval", name: "Gương oval", icon: "🥚" },
    { id: "guong-dung", name: "Gương đứng", icon: "🚪" },
    { id: "guong-trang-tri", name: "Gương trang trí", icon: "✨" }
];

// Price ranges removed - all products use "Liên hệ"

// All available colors
const allColors = [
    { value: "gold", name: "Vàng", hex: "#D4AF37" },
    { value: "silver", name: "Bạc", hex: "#C0C0C0" },
    { value: "black", name: "Đen", hex: "#333333" },
    { value: "white", name: "Trắng", hex: "#FFFFFF" },
    { value: "wood", name: "Gỗ", hex: "#8B4513" },
    { value: "bronze", name: "Đồng", hex: "#CD7F32" },
    { value: "copper", name: "Đồng đỏ", hex: "#B87333" },
    { value: "oak", name: "Gỗ sồi", hex: "#806517" },
    { value: "walnut", name: "Gỗ óc chó", hex: "#5C4033" }
];

// All available sizes (simplified for filter)
const allSizes = [
    { value: "small", name: "Nhỏ (≤50cm)", maxDimension: 50 },
    { value: "medium", name: "Vừa (51-80cm)", minDimension: 51, maxDimension: 80 },
    { value: "large", name: "Lớn (>80cm)", minDimension: 81 }
];

// Function to get product by ID
function getProductById(id) {
    return productsData.find(product => product.id === parseInt(id));
}

// Function to get all products
function getAllProducts() {
    return productsData;
}

// Function to get categories
function getCategories() {
    return categoriesData;
}

// Function to get price ranges - removed (no price filtering)
function getPriceRanges() {
    return [];
}

// Function to get all colors
function getColors() {
    return allColors;
}

// Function to get all sizes
function getSizes() {
    return allSizes;
}

// Function to filter products
function filterProducts(filters) {
    let filtered = [...productsData];
    
    // Filter by search term
    if (filters.search && filters.search.trim()) {
        const searchTerm = filters.search.toLowerCase().trim();
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filter by category
    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(product => product.category === filters.category);
    }
    
    // Price range filter removed - all products use "Liên hệ"
    
    // Filter by color
    if (filters.color && filters.color !== 'all') {
        filtered = filtered.filter(product => 
            product.colors.some(c => {
                // Exact match
                if (c.value === filters.color) return true;
                // Partial match for variants (e.g., "wood" matches "premium-wood", "art-wood")
                if (c.value.includes(filters.color) || filters.color.includes(c.value)) return true;
                return false;
            })
        );
    }
    
    // Filter by size
    if (filters.size && filters.size !== 'all') {
        const sizeFilter = allSizes.find(s => s.value === filters.size);
        if (sizeFilter) {
            filtered = filtered.filter(product => {
                // Check if any size matches the filter
                return product.sizes.some(size => {
                    // Extract dimension from label (e.g., "Ø 50cm" -> 50, "40x60 cm" -> 60)
                    const matches = size.label.match(/(\d+)/g);
                    if (matches) {
                        const maxDim = Math.max(...matches.map(Number));
                        if (sizeFilter.value === 'small') {
                            return maxDim <= 50;
                        } else if (sizeFilter.value === 'medium') {
                            return maxDim >= 51 && maxDim <= 80;
                        } else if (sizeFilter.value === 'large') {
                            return maxDim > 80;
                        }
                    }
                    return false;
                });
            });
        }
    }
    
    return filtered;
}

// Function to format price - removed (all products use "Liên hệ")
function formatPrice(price) {
    return "Liên hệ";
}
