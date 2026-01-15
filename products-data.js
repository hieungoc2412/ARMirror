// Products Data List
const productsData = [
    {
        id: 1,
        name: "GƯƠNG 1",
        title: "Vintage baroque style mirror",
        price: "xxx.000 đ",
        image: "DemoImage/image/Model1.jpg",
        glb: "DemoImage/glb/Model1.glb",
        thumbnails: [
            "DemoImage/image/Model1.jpg",
            "productImage/15f429f06284eedab795.jpg",
            "productImage/a51ac20c897805265c69.jpg"
        ],
        colors: [
            { name: "Bạc sáng", value: "silver", active: true }
        ],
        sizes: [
            { value: "30x50", label: '30"x50"' },
            { value: "30-30", label: '30"-30"' },
            { value: "32-60", label: '32"-60"' },
            { value: "36-60", label: '36"x60"' },
            { value: "36-50", label: '36"x50"', active: true },
            { value: "36-36", label: '36"x36"' }
        ],
        description: "Gương Baroque phong cách cổ điển Châu Âu, được chế tác tinh xảo với họa tiết phức tạp, mang đến vẻ đẹp sang trọng và đẳng cấp. Khung gương được làm từ hợp kim cao cấp, phủ lớp sơn bạc sáng bóng, tạo nên điểm nhấn hoàn hảo cho không gian nội thất. Thiết kế cổ điển với những đường nét uốn lượn mềm mại, phù hợp với nhiều phong cách trang trí từ cổ điển đến hiện đại. Sản phẩm có nhiều kích thước để bạn lựa chọn, phù hợp với mọi không gian từ phòng khách, phòng ngủ đến hành lang."
    },
    {
        id: 2,
        name: "GƯƠNG 2",
        title: "Modern minimalist mirror",
        price: "xxx.000 đ",
        image: "DemoImage/image/Model2.jpg",
        glb: "DemoImage/glb/Model2.glb",
        thumbnails: [
            "DemoImage/image/Model2.jpg",
            "productImage/a51ac20c897805265c69.jpg",
            "productImage/e9d657e91c9d90c3c98c.jpg"
        ],
        colors: [
            { name: "Bạc sáng", value: "silver", active: true }
        ],
        sizes: [
            { value: "30x50", label: '30"x50"' },
            { value: "30-30", label: '30"-30"' },
            { value: "32-60", label: '32"-60"' },
            { value: "36-60", label: '36"x60"' },
            { value: "36-50", label: '36"x50"', active: true },
            { value: "36-36", label: '36"x36"' }
        ],
        description: "Gương hiện đại với thiết kế tối giản, phù hợp với không gian nội thất hiện đại. Khung gương được làm từ chất liệu cao cấp, mang đến vẻ đẹp thanh lịch và sang trọng."
    },
    {
        id: 3,
        name: "GƯƠNG 3",
        title: "Classic elegant mirror",
        price: "xxx.000 đ",
        image: "DemoImage/image/Model3.jpg",
        glb: "DemoImage/glb/Model3.glb",
        thumbnails: [
            "DemoImage/image/Model3.jpg",
            "productImage/e9d657e91c9d90c3c98c.jpg",
            "productImage/f0da71ed3a99b6c7ef88.jpg"
        ],
        colors: [
            { name: "Bạc sáng", value: "silver", active: true }
        ],
        sizes: [
            { value: "30x50", label: '30"x50"' },
            { value: "30-30", label: '30"-30"' },
            { value: "32-60", label: '32"-60"' },
            { value: "36-60", label: '36"x60"' },
            { value: "36-50", label: '36"x50"', active: true },
            { value: "36-36", label: '36"x36"' }
        ],
        description: "Gương cổ điển với thiết kế thanh lịch, phù hợp với không gian sang trọng. Khung gương được chế tác tinh xảo với các chi tiết trang trí tinh tế."
    },
    {
        id: 4,
        name: "GƯƠNG 4",
        title: "Contemporary design mirror",
        price: "xxx.000 đ",
        image: "DemoImage/image/Model4.jpg",
        glb: "DemoImage/glb/Model4.glb",
        thumbnails: [
            "DemoImage/image/Model4.jpg",
            "productImage/f0da71ed3a99b6c7ef88.jpg",
            "productImage/15f429f06284eedab795.jpg"
        ],
        colors: [
            { name: "Bạc sáng", value: "silver", active: true }
        ],
        sizes: [
            { value: "30x50", label: '30"x50"' },
            { value: "30-30", label: '30"-30"' },
            { value: "32-60", label: '32"-60"' },
            { value: "36-60", label: '36"x60"' },
            { value: "36-50", label: '36"x50"', active: true },
            { value: "36-36", label: '36"x36"' }
        ],
        description: "Gương đương đại với thiết kế độc đáo, kết hợp giữa truyền thống và hiện đại. Sản phẩm phù hợp với nhiều phong cách trang trí khác nhau."
    },
    {
        id: 5,
        name: "GƯƠNG 5",
        title: "Luxury decorative mirror",
        price: "xxx.000 đ",
        image: "DemoImage/image/Model5.jpg",
        glb: "DemoImage/glb/Model5.glb",
        thumbnails: [
            "DemoImage/image/Model5.jpg",
            "productImage/15f429f06284eedab795.jpg",
            "productImage/a51ac20c897805265c69.jpg"
        ],
        colors: [
            { name: "Bạc sáng", value: "silver", active: true }
        ],
        sizes: [
            { value: "30x50", label: '30"x50"' },
            { value: "30-30", label: '30"-30"' },
            { value: "32-60", label: '32"-60"' },
            { value: "36-60", label: '36"x60"' },
            { value: "36-50", label: '36"x50"', active: true },
            { value: "36-36", label: '36"x36"' }
        ],
        description: "Gương trang trí cao cấp với thiết kế sang trọng, phù hợp với không gian nội thất đẳng cấp. Khung gương được làm từ chất liệu cao cấp với các chi tiết trang trí tinh xảo."
    },
    {
        id: 6,
        name: "GƯƠNG 6",
        title: "Artistic style mirror",
        price: "xxx.000 đ",
        image: "DemoImage/image/Model6.jpg",
        glb: "DemoImage/glb/Model6.glb",
        thumbnails: [
            "DemoImage/image/Model6.jpg",
            "productImage/e9d657e91c9d90c3c98c.jpg",
            "productImage/f0da71ed3a99b6c7ef88.jpg"
        ],
        colors: [
            { name: "Bạc sáng", value: "silver", active: true }
        ],
        sizes: [
            { value: "30x50", label: '30"x50"' },
            { value: "30-30", label: '30"-30"' },
            { value: "32-60", label: '32"-60"' },
            { value: "36-60", label: '36"x60"' },
            { value: "36-50", label: '36"x50"', active: true },
            { value: "36-36", label: '36"x36"' }
        ],
        description: "Gương nghệ thuật với thiết kế độc đáo và sáng tạo, phù hợp với những người yêu thích nghệ thuật và thiết kế độc đáo. Sản phẩm mang đến điểm nhấn đặc biệt cho không gian sống."
    }
];

// Function to get product by ID
function getProductById(id) {
    return productsData.find(product => product.id === parseInt(id));
}

// Function to get all products
function getAllProducts() {
    return productsData;
}
