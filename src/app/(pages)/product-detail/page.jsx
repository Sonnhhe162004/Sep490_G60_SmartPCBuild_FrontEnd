"use client";
import "../../../css/style2020_zip.css"
import "../../../css/media2020.css"
import "../../../css/otherstyle2020.css"



export default function ProductDetal() {
    return (
        <>
 
        <div className="body-new-2019">
          <div className="container-2019 ">
            <div
              className="bg-white d-flex flex-wrap product-detail-top"
              style={{ borderRadius: 3 }}
            >
              <div className="product_detail-header">
                <div className="product_detail-title">
                  <h1>
                    PC HP 280 Pro Tower G9 (9H9C2PT)(i7-12700/16GB RAM/512GB
                    SSD/WL+BT/K+M/Win11)
                  </h1>
                </div>
              </div>
              <div className="product-detail-top-left d-flex flex-wrap">
                <div className="product-detail-img"></div>
              </div>
              {/*  product-detail-top-right */}
              <div className=" product-detail-top-right">
                <div className="product_detail-top-right-below">
                  <div className="product-detail-info">
                    <div
                      className="product_detail-meta"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      <div className="product_detail-sku">
                        Mã SP: <span className="sku">PCHP838</span>
                      </div>
                      <div className="product_detail-separator" />
                      Đánh giá:
                      <a
                        href="#tab5"
                        className="product_detail-star"
                        style={{ marginLeft: 5 }}
                      ></a>
                      <a href="#tab5" className="count-rate">
                        0
                      </a>
                      <div className="product_detail-separator" />
                      <a href="#comment" className="product_detail-view-counter">
                        Bình luận: <span className="counter-number">0</span>
                      </a>
                      <div className="product_detail-separator" />
                      <div className="product_detail-view-counter">
                        Lượt xem: <span className="counter-number">1244</span>
                      </div>
                    </div>
                    <div className="product-summary-item" style={{ padding: 0 }}>
                      <div className="product-summary-item-title">
                        Thông số sản phẩm
                      </div>
                      <ul
                        className="product-summary-item-ul d-flex flex-wrap mb-0"
                        id="js-tskt-item"
                      >
                        <li>CPU: Intel Core i7-12700</li>
                        <li>Ram: 16GB</li>
                        <li>Ổ cứng: 512GB SSD</li>
                        <li>Ổ quang: không có</li>
                        <li>Kết nối: Wlan + Bluetooth</li>
                        <li>Phụ kiện: phím &amp; chuột</li>
                        <li>OS: Windows 11 Home SL</li>
                      </ul>
                    </div>
                
                    <div className="box-number-quan-detail">
                      <span className="so-luong">Số lượng:</span>
                      <span className="new-cart-quantity">
                        <a
                          href="javascript:void(0);"
                          className="minor quantity-change"
                          data-value={-1}
                        >
                          –
                        </a>
                        <input
                          className="buy-quantity quantity-change"
                          defaultValue={1}
                          size={5}
                          data-stock={6}
                        />
                        <a
                          href="javascript:void(0);"
                          className="add quantity-change"
                          data-value={1}
                        >
                          +
                        </a>
                      </span>
                 
                      <a
                        className="like-product"
                        href="javascript:;"
                        title="Thích sản phẩm n� y"
                        onclick="UserAction.likeProduct('80652', 'PC HP 280 Pro Tower G9 (9H9C2PT)(i7-12700/16GB RAM/512GB SSD/WL+BT/K+M/Win11)')"
                      >
                        <i className="fas fa-heart" />
                      </a>
                    </div>
                    <div className="clear" />
                    <div
                      id="button_buy_2019"
                      className="d-flex flex-wrap justify-content-start"
                    >
                      {/* kiểm tra có giá kmai hay ko */}
                      <div className="top-buttons-th1">
                        <a
                          style={{}}
                          href="javascript:;"
                          onclick="listenBuyProDetail('80652',0,1,'','/cart?step=3')"
                          className="mua-ngay th1"
                        >
                          <span>Đặt mua ngay</span> Giao nhanh tận nơi, miễn phí
                          to�&nbsp;n quốc
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-detail-static-content">
                    <div className="static-item san-pham-chung">
                      <div className="title">YÊN TÂM MUA HÀNG</div>
                      <div className="static-nd">
                        <ul className="m-0 d-flex align-items-center flex-wrap list-unstyled pl-2">
                          <li>
                            <a
                              target="_blank"
                              style={{ color: "#212529" }}
                              href="https://hacom.vn/gioi-thieu-ve-hacom"
                            >
                              Uy tín 24 năm Top đầu trên thị trường
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              style={{ color: "#212529" }}
                              href="https://www.hacom.vn/chinh-sach-hang-chinh-hang"
                            >
                              Sản phẩm chính hãng 100%
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              style={{ color: "#212529" }}
                              href="https://www.hacom.vn/huong-dan-mua-hang-tra-gop"
                            >
                              Trả góp lãi suất 0% to�&nbsp;n bộ giỏ h�&nbsp;ng
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              style={{ color: "#212529" }}
                              href="https://www.hacom.vn/chinh-sach-bao-hanh"
                            >
                              Trả bảo h�&nbsp;nh tận nơi sử dụng
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              style={{ color: "#212529" }}
                              href="https://www.hacom.vn/chinh-sach-cho-doanh-nghiep"
                            >
                              Bảo h�&nbsp;nh tận nơi cho doanh nghiệp
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.hacom.vn/den-hacom-ve-sinh-may-tinh-mien-phi-tren-toan-he-thong"
                            >
                              Vệ sinh miễn phí trọn đời PC, Laptop
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="static-item">
                      <div className="title">MIỄN PHÍ GIAO HÀNG</div>
                      <div className="static-nd">
                        <ul className="m-0 d-flex align-items-center flex-wrap list-unstyled pl-2">
                       
                          <li>Giao h�&nbsp;ng miễn phí to�&nbsp;n quốc</li>
                          <li>
                            Nhận h�&nbsp;ng v�&nbsp; thanh toán tại nh�&nbsp; (ship
                            COD)
                          </li>
                       
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end  product-detail-top-right */}
            </div>
            <div className="clearfix space30" id="nhay_comboset" />
            <div className="d-flex flex-wrap mt-4 product-detail-bottom">
              <div className="container-2020">
                <div className="left-column">
                  <div
                    className="content_scroll_tab_2019 bg-white"
                    id="tab1"
                    style={{ borderRadius: 3 }}
                  >
                    <div className="nd title_box_scroll_content_2019 showmore">
                      <h2 className="ddnb-title spct-title">
                        Đánh giá: PC HP 280 Pro Tower G9 (9H9C2PT) i7-12700/16GB
                        RAM/512GB SSD/WL+BT/K+M/Win11
                      </h2>
                      <div id="js-product-description">
                        <p>
                          <strong>Lưu ý:�&nbsp;</strong>
                          <em>
                            B�&nbsp;i viết v�&nbsp; hình ảnh chỉ có tính chất tham
                            khảo vì cấu hình v�&nbsp; đặc tính sản phẩm có thể thay
                            đổi theo thị trường v�&nbsp; từng phiên bản. Quý khách cần
                            cấu hình cụ thể vui lòng xem bảng thông số kĩ thuật hoặc
                            hỏi kinh doanh trước khi mua.�&nbsp;
                          </em>
                        </p>
                        <h3>
                          <strong>
                            PC HP 280 PRO G9 được nhiều người đón nhận bởi tính bền bỉ
                            trong suốt quá trình sử dụng.
                          </strong>
                        </h3>
                        <p>
                          Máy tính để b�&nbsp;n HP 200 Series cung cấp cho doanh
                          nghiệp một chiếc PC giá cả phải chăng, mạnh mẽ v�&nbsp; có
                          thể mở rộng, được thiết kế để phát triển cùng doanh nghiệp
                          của bạn. Chúng l�&nbsp; sự kết hợp ho�&nbsp;n hảo giữa hiệu
                          suất, độ tin cậy v�&nbsp; bảo vệ đầu tư cho mọi môi trường.
                          Kiểu dáng tiết kiệm diện tích song vẫn đảm bảo tính bền bỉ
                          vốn có của dòng máy đồng bộ. Máy được tích hợp sẵn hệ điều
                          h�&nbsp;nh bản quyền, nâng cấp hơn về mặt bảo mật dữ liệu.
                          L�&nbsp; một trong những sản phẩm phù hợp d�&nbsp;nh cho đa
                          số các doanh nghiệp.
                        </p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-column">
                  <div className="content_scroll_tab_2019" id="tab2">
                    <div className="nd title_box_scroll_content_2019">
                      <h2 className="tskt-title spct-title">Thông số kỹ thuật</h2>
                      <div className="bang-tskt">
                        <table className="tb-product-spec">
                          <tbody>
                            <tr>
                              <td className="spec-key">Dòng CPU</td>
                              <td className="spec-value">Core i7</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Công nghệ CPU</td>
                              <td className="spec-value">�&nbsp;</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Mã CPU</td>
                              <td className="spec-value">12700</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Tốc độ CPU</td>
                              <td className="spec-value">2.10GHz</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Tần số turbo tối đa</td>
                              <td className="spec-value">Up to 4.90GHz</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Số lõi CPU</td>
                              <td className="spec-value">8 Cores</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Số luồng</td>
                              <td className="spec-value">16 Threads</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Bộ nhớ đệm</td>
                              <td className="spec-value">25Mb Cache</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Chipset</td>
                              <td className="spec-value">Intel H670</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Bộ nhớ RAM</td>
                              <td className="spec-value">16Gb</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Hỗ trợ RAM tối đa</td>
                              <td className="spec-value">64GB</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Khe cắm RAM</td>
                              <td className="spec-value">2</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Card đồ họa</td>
                              <td className="spec-value">Intel UHD Graphics 770</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Card tích hợp</td>
                              <td className="spec-value">VGA onboard</td>
                            </tr>
                            <tr>
                              <td className="spec-header" colSpan={2}>
                                Ổ CỨNG
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Dung lượng ổ cứng</td>
                              <td className="spec-value">512GB</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Loại ổ cứng</td>
                              <td className="spec-value">SSD</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Chuẩn ổ cứng</td>
                              <td className="spec-value">PCIe®NVMeTMM.2 SSD</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Ổ quang</td>
                              <td className="spec-value">NO DVD</td>
                            </tr>
                            <tr>
                              <td className="spec-header" colSpan={2}>
                                KẾT NỐI
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Kết nối không dây</td>
                              <td className="spec-value">
                                Realtek RTL8821CE 802.11a/b/g/n/ac (1x1) Wi-Fi and
                                Bluetooth 4.2 combo
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Thông số (Lan/Wireless)</td>
                              <td className="spec-value">Gigabit LAN</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Cổng giao tiếp trước</td>
                              <td className="spec-value">�&nbsp;</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Cổng giao tiếp sau</td>
                              <td className="spec-value">
                                1 cổng kết hợp tai nghe/micrô; 2 cổng Super Speed
                                USBType-C® có tốc độ truyền tín hiệu 10Gbps; 4 cổng
                                <br />
                                Super Speed USBType-A có tốc độ truyền tín hiệu 5Gbps
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Khe cắm mở rộng</td>
                              <td className="spec-value">
                                1 cổng PCI có chiều cao đầy đủ; 2M.2; 1 PCIe 3 x1; 1
                                cổng PCIe 4 x16
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-header" colSpan={2}>
                                PHẦN MỀM
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Hệ điều h�&nbsp;nh</td>
                              <td className="spec-value">Windows 11 Home</td>
                            </tr>
                            <tr>
                              <td className="spec-header" colSpan={2}>
                                THÔNG TIN KHÁC
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Bộ nguồn</td>
                              <td className="spec-value">�&nbsp;</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Phụ kiện</td>
                              <td className="spec-value">Key/mouse</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Kiểu dáng</td>
                              <td className="spec-value">Case đứng to</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Kích thước</td>
                              <td className="spec-value">15,5 x 30,3 x 33,7 cm</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Trọng lượng</td>
                              <td className="spec-value">4,7 Kg</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="popup-common popup-tskt" id="popup-tskt">
                    <div className="content-popup">
                      <div className="bang-tskt">
                        <table className="tb-product-spec">
                          <tbody>
                            <tr>
                              <td className="spec-key">Dòng CPU</td>
                              <td className="spec-value">Core i7</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Công nghệ CPU</td>
                              <td className="spec-value">�&nbsp;</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Mã CPU</td>
                              <td className="spec-value">12700</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Tốc độ CPU</td>
                              <td className="spec-value">2.10GHz</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Tần số turbo tối đa</td>
                              <td className="spec-value">Up to 4.90GHz</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Số lõi CPU</td>
                              <td className="spec-value">8 Cores</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Số luồng</td>
                              <td className="spec-value">16 Threads</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Bộ nhớ đệm</td>
                              <td className="spec-value">25Mb Cache</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Chipset</td>
                              <td className="spec-value">Intel H670</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Bộ nhớ RAM</td>
                              <td className="spec-value">16Gb</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Hỗ trợ RAM tối đa</td>
                              <td className="spec-value">64GB</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Khe cắm RAM</td>
                              <td className="spec-value">2</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Card đồ họa</td>
                              <td className="spec-value">Intel UHD Graphics 770</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Card tích hợp</td>
                              <td className="spec-value">VGA onboard</td>
                            </tr>
                            <tr>
                              <td className="spec-header" colSpan={2}>
                                Ổ CỨNG
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Dung lượng ổ cứng</td>
                              <td className="spec-value">512GB</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Loại ổ cứng</td>
                              <td className="spec-value">SSD</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Chuẩn ổ cứng</td>
                              <td className="spec-value">PCIe®NVMeTMM.2 SSD</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Ổ quang</td>
                              <td className="spec-value">NO DVD</td>
                            </tr>
                            <tr>
                              <td className="spec-header" colSpan={2}>
                                KẾT NỐI
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Kết nối không dây</td>
                              <td className="spec-value">
                                Realtek RTL8821CE 802.11a/b/g/n/ac (1x1) Wi-Fi and
                                Bluetooth 4.2 combo
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Thông số (Lan/Wireless)</td>
                              <td className="spec-value">Gigabit LAN</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Cổng giao tiếp trước</td>
                              <td className="spec-value">�&nbsp;</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Cổng giao tiếp sau</td>
                              <td className="spec-value">
                                1 cổng kết hợp tai nghe/micrô; 2 cổng Super Speed
                                USBType-C® có tốc độ truyền tín hiệu 10Gbps; 4 cổng
                                <br />
                                Super Speed USBType-A có tốc độ truyền tín hiệu 5Gbps
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Khe cắm mở rộng</td>
                              <td className="spec-value">
                                1 cổng PCI có chiều cao đầy đủ; 2M.2; 1 PCIe 3 x1; 1
                                cổng PCIe 4 x16
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-header" colSpan={2}>
                                PHẦN MỀM
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Hệ điều h�&nbsp;nh</td>
                              <td className="spec-value">Windows 11 Home</td>
                            </tr>
                            <tr>
                              <td className="spec-header" colSpan={2}>
                                THÔNG TIN KHÁC
                              </td>
                            </tr>
                            <tr>
                              <td className="spec-key">Bộ nguồn</td>
                              <td className="spec-value">�&nbsp;</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Phụ kiện</td>
                              <td className="spec-value">Key/mouse</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Kiểu dáng</td>
                              <td className="spec-value">Case đứng to</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Kích thước</td>
                              <td className="spec-value">15,5 x 30,3 x 33,7 cm</td>
                            </tr>
                            <tr>
                              <td className="spec-key">Trọng lượng</td>
                              <td className="spec-value">4,7 Kg</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*content-popup*/}
                  </div>
                  {/*popup*/}
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </>
    );
}