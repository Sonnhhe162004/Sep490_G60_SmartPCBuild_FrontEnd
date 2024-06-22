export default function Cart() {
    return (
        <div className="p-4">
        <h2 className="text-xl font-bold mb-4 ml-4">Giỏ hàng</h2>
        <div className="flex items-center mb-4 ml-4">
          <input type="checkbox" className="mr-2" />
          <span>Tất cả (3 sản phẩm)</span>
        </div>
        <div class="flex">
            <div class="w-3/4 border-r pr-4 pb-4 mb-4">
                <div class="flex items-center mb-4">
                <input type="checkbox" class="mr-2" />
                <img src= "https://maytinh.sharekhoahoc.vn/wp-content/uploads/2021/12/8530d87af9fc1bf1a3617728d8954b16_63b594ba72d04e3bb9688047fa42ab2f_master-400x400.jpg" alt="Product Image" class="w-24 h-24 mr-4" />
                <div class="flex-1">
                    <div class="font-bold">CPU AMD Ryzen 5 5600GT (3.6GHz Upto 4.6GHz / 19MB / 6 Cores, 12 Threads / 65W / Socket AM4)</div>
                    <div class="text-sm text-zinc-500">Mã SP: CPUA287</div>
                    <button class="mt-2 text-sm text-blue-500 border border-blue-500 px-2 py-1 rounded">Lưu lại mua sau</button>
                </div>
                <div class="text-right">
                    <div class="text-lg font-bold text-red-500">3.799.000₫</div>
                    <div class="text-sm line-through text-zinc-500">4.999.000₫</div>
                </div>
                <div class="flex items-center ml-4">
                    <button class="border px-2">-</button>
                    <input type="text" value="1" class="w-12 text-center border-t border-b" />
                    <button class="border px-2">+</button>
                </div>
                <div class="text-lg font-bold text-red-500 ml-4">3.799.000₫</div>
                <button class="ml-4 text-zinc-500">
                    <img undefinedhidden="true" alt="delete" src="https://placehold.co/20x20" />
                </button>
                </div>
                <div class="flex items-center mb-4">
                <input type="checkbox" class="mr-2" />
                <img src= "https://maytinh.sharekhoahoc.vn/wp-content/uploads/2021/12/8530d87af9fc1bf1a3617728d8954b16_63b594ba72d04e3bb9688047fa42ab2f_master-400x400.jpg" alt="Product Image" class="w-24 h-24 mr-4" />
                <div class="flex-1">
                    <div class="font-bold">Tai nghe chơi game Asus TUF GAMING H3 Red Den Đỏ</div>
                    <div class="text-sm text-zinc-500">Mã SP: TNAS030</div>
                    <button class="mt-2 text-sm text-blue-500 border border-blue-500 px-2 py-1 rounded">Lưu lại mua sau</button>
                </div>
                <div class="text-right">
                    <div class="text-lg font-bold text-red-500">849.000₫</div>
                    <div class="text-sm line-through text-zinc-500">1.099.000₫</div>
                </div>
                <div class="flex items-center ml-4">
                    <button class="border px-2">-</button>
                    <input type="text" value="1" class="w-12 text-center border-t border-b" />
                    <button class="border px-2">+</button>
                </div>
                <div class="text-lg font-bold text-red-500 ml-4">849.000₫</div>
                <button class="ml-4 text-zinc-500">
                    <img undefinedhidden="true" alt="delete" src="https://placehold.co/20x20" />
                </button>
                </div>
                <div class="flex items-center mb-4">
                <input type="checkbox" class="mr-2" />
                <img src= "https://maytinh.sharekhoahoc.vn/wp-content/uploads/2021/12/8530d87af9fc1bf1a3617728d8954b16_63b594ba72d04e3bb9688047fa42ab2f_master-400x400.jpg" alt="Product Image" class="w-24 h-24 mr-4" />
                <div class="flex-1">
                    <div class="font-bold">Bàn phím cơ Logitech Pro X 60 Lightspeed Wireless Black (Wireless 2.4Ghz/Bluetooth/USB/GX Optical Tactile/RGB)</div>
                    <div class="text-sm text-zinc-500">Mã SP: KBLO149</div>
                    <div class="flex space-x-2 mt-2">
                    <button class="text-sm text-blue-500 border border-blue-500 px-2 py-1 rounded">Khuyến mãi</button>
                    <button class="text-sm text-blue-500 border border-blue-500 px-2 py-1 rounded">Lưu lại mua sau</button>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-lg font-bold text-red-500">4.299.000₫</div>
                    <div class="text-sm line-through text-zinc-500">5.299.000₫</div>
                </div>
                <div class="flex items-center ml-4">
                    <button class="border px-2">-</button>
                    <input type="text" value="1" class="w-12 text-center border-t border-b" />
                    <button class="border px-2">+</button>
                </div>
                <div class="text-lg font-bold text-red-500 ml-4">4.299.000₫</div>
                <button class="ml-4 text-zinc-500">
                    <img undefinedhidden="true" alt="delete" src="https://placehold.co/20x20" />
                </button>
                </div>
            </div>
            <div class="w-1/4 pl-4">
                <div class="flex items-center mb-4">
                <div className="flex w-100">
                    <input type="text" placeholder="Mã giảm giá/ quà tặng" class="w-3/4 border p-2 w-full" />
                    <button class="bg-blue-500 text-white w-1/4 px-4 py-0 ml-2">Áp dụng</button>
                </div>
                </div>
                <div class="border-t pt-4">
                <div class="flex justify-between mb-2">
                    <span>Tạm tính</span>
                    <span>8.947.000₫</span>
                </div>
                <div class="flex justify-between mb-2">
                    <span>Giảm giá</span>
                    <span>0₫</span>
                </div>
                <div class="flex justify-between font-bold text-red-500 mb-4">
                    <span>Thành tiền</span>
                    <span>8.947.000₫</span>
                </div>
                <div class="text-sm text-zinc-500 mb-4">(Đã bao gồm VAT nếu có)</div>
                <button class="bg-blue-500 text-white w-full py-2">Tiến hành đặt hàng</button>
                </div>
            </div>
        </div>
      </div>
    )
}