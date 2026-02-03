// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, tối thiểu 2 danh mục
const products = [
  new Product(1, "iPhone 14", 20000000, 10, "Electronics", true),
  new Product(2, "Samsung Galaxy S23", 18000000, 5, "Electronics", true),
  new Product(3, "Laptop Dell", 25000000, 3, "Electronics", false),
  new Product(4, "Phone Case", 500000, 50, "Accessories", true),
  new Product(5, "Screen Protector", 200000, 100, "Accessories", true),
  new Product(6, "Wireless Charger", 1500000, 0, "Accessories", false),
  new Product(7, "Headphones Sony", 8000000, 15, "Electronics", true),
  new Product(8, "USB Cable", 100000, 200, "Accessories", true)
];

console.log("========== DANH SÁCH SẢN PHẨM ==========");
console.log(products);

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
console.log("\n========== CÂU 3: Danh sách tên và giá ==========");
const productNamePrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log(productNamePrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
console.log("\n========== CÂU 4: Sản phẩm còn hàng ==========");
const inStockProducts = products.filter(p => p.quantity > 0);
console.log(inStockProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
console.log("\n========== CÂU 5: Kiểm tra giá trên 30 triệu ==========");
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log(`Có sản phẩm giá trên 30.000.000: ${hasExpensiveProduct}`);

// Câu 6: Kiểm tra xem tất cả sản phẩm danh mục "Accessories" có đang được bán (isAvailable = true) hay không
console.log("\n========== CÂU 6: Kiểm tra Accessories có đang bán ==========");
const accessoriesProducts = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.every(p => p.isAvailable === true);
console.log(`Tất cả sản phẩm Accessories đang bán: ${allAccessoriesAvailable}`);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
console.log("\n========== CÂU 7: Tổng giá trị kho hàng ==========");
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log(`Tổng giá trị kho hàng: ${totalInventoryValue.toLocaleString('vi-VN')} VND`);

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("\n========== CÂU 8: Duyệt mảng với for...of ==========");
console.log("Tên sản phẩm - Danh mục - Trạng thái:");
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9: dùng for...in để:
// - In ra tên thuộc tính
// - In ra giá trị tương ứng
console.log("\n========== CÂU 9: Duyệt với for...in ==========");
console.log("Danh sách thuộc tính và giá trị của sản phẩm đầu tiên:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
console.log("\n========== CÂU 10: Sản phẩm đang bán và còn hàng ==========");
const availableInStock = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);
console.log("Danh sách sản phẩm đang bán và còn hàng:");
console.log(availableInStock);
