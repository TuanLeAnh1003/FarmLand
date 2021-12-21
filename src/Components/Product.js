import React from 'react'
import './base.css'
import './grid.css'
import './main.css'
import './responsive.css'

import carot from '../Assets/Images/carot.png' 
import khoailang from '../Assets/Images/khoailang.png'
import khoaimo from '../Assets/Images/khoaimo.png'
import cachua from '../Assets/Images/cachua.jpg'
import bongcaitrang from '../Assets/Images/bongcaitrang.png'
import mongtoi from '../Assets/Images/mongtoi.jpg'
import raumuong from '../Assets/Images/raumuong.jpeg'
import raucaibe from '../Assets/Images/raucaibe.jpg'
import cucaitrang from '../Assets/Images/cucaitrang.jpg'
import bido from '../Assets/Images/bido.jpg'
import bidao from '../Assets/Images/bidao.jpg'
import khoqua from '../Assets/Images/khoqua.jpg'
import product from '../Assets/Images/product.jpg'

function Product({index}) {
    const nameProduct = ['CÀ RỐT ĐÀ LẠT', 'KHOAI LANG NHẬT DẺO', 'KHOAI MỠ TÍM', 'CỦ CẢI TRẮNG', 'BÔNG CẢI TRẮNG TƯƠI', 'RAU MỒNG TƠI', 
                         'RAU MUỐNG TƯƠI BABY', 'RAU CẢI BẸ XANH', 'CÀ CHUA BEEF', 'BÍ ĐỎ TRÒN CẮT MIẾNG', 'BÍ ĐAO (BÍ XANH)', 'KHỔ QUA TƯƠI]'];
    const srcProduct = [carot, khoailang, khoaimo, cucaitrang, bongcaitrang, mongtoi, raumuong, raucaibe, cachua, bido, bidao, khoqua];
    const oldPrice = ['20.000đ', '50.000đ', '40.000đ', '45.000đ', '50.000đ', '18.000đ', '18.000đ', '18.000đ', '20.000đ', '10.000đ', '20.000đ', '20.000đ']
    const currentPrice = ['14.000đ', '35.000đ', '30.000đ', '37.000đ', '35.000đ', '25.000đ', '25.000đ', '23.000đ', '14.000đ', '14.000đ', '14.000đ', '14.000đ']
    const dataItem = ['cu', 'cu', 'cu', 'cu', 'rau', 'rau', 'rau', 'rau', 'qua', 'qua', 'qua', 'qua']

    return (
        <div className="app__container">
            <div className="grid wide product-body">
                <div className="row sm-gutter app__content">
                    <div className="app__content-item">
                        <img className="product-body-item-img-main" src={srcProduct[index]} alt="carot" />
                        <div className="product-body-item-img">
                            <img className="product-body-item-img-item" src={srcProduct[index]} alt="carot" />
                            <img className="product-body-item-img-item" src={srcProduct[index]} alt="carot" />
                            <img className="product-body-item-img-item" src={srcProduct[index]} alt="carot" />
                            <img className="product-body-item-img-item" src={srcProduct[index]} alt="carot" />
                            <img className="product-body-item-img-item" src={srcProduct[index]} alt="carot" />
                        </div>
                    </div>

                    <div className="app__content-item2">
                        <p className="app__content-item-name">{nameProduct[index]}</p>
                        <div className="app__content-item-desc">
                            <div className="app__content-item-desc-rating">
                                <span className="app__content-item-desc-rating-name">4.0</span>
                                <i className="app__content-item-desc-rating-star fas fa-star"></i>
                                <i className="app__content-item-desc-rating-star fas fa-star"></i>
                                <i className="app__content-item-desc-rating-star fas fa-star"></i>
                                <i className="app__content-item-desc-rating-star fas fa-star"></i>
                                <i className="app__content-item-desc-rating-star far fa-star"></i>
                            </div>
                            <div className="app__content-item-desc-line"></div>
                            <div className="app__content-item-desc-comment">
                                <span className="app__content-item-desc-rating-name">174</span> <span className="app__content-item-desc-rating-name2"> Đánh Giá</span>
                            </div>
                            <div className="app__content-item-desc-line"></div>
                            <div className="app__content-item-desc-bought">
                                <span className="app__content-item-desc-rating-name">712</span> <span className="app__content-item-desc-rating-name2"> Đã Bán</span>
                            </div>
                        </div>

                        <div className="app__content-item-desc--2">
                            <span className="app__content-item-desc-money--1">{oldPrice[index]}</span>
                            <span className="app__content-item-desc-money--2">{currentPrice[index]}</span>
                            <div className="app__content-item-desc-disc">21% GIẢM</div>
                        </div>

                        <div className="app__content-item-desc--3">
                            <div className="app__content-item-desc-item">
                                <p className="app__content-item-desc-item-title">Mã Giảm Giá Của Cửa Hàng</p>

                                <div className="app__content-item-desc-item-content">
                                    <span className="app__content-item-desc-item-content-disc">8% GIẢM</span>
                                    <span className="app__content-item-desc-item-content-disc">8% GIẢM</span>
                                </div>
                            </div>
                            <div className="app__content-item-desc-item">
                                <p className="app__content-item-desc-item-title">Deal Sốc</p>

                                <div className="app__content-item-desc-item-content">
                                    <span className="app__content-item-desc-item-content-disc">Mua để nhận quà</span>
                                </div>
                            </div>
                            <div className="app__content-item-desc-item">
                                <p className="app__content-item-desc-item-title">Vận chuyển</p>

                                <div className="app__content-item-desc-item-content">
                                    <div className="app__content-item-desc-item-content-delivery">
                                        <i className="fas fa-truck-moving"></i>
                                        <span>Vận chuyển tới</span>
                                        <select name="delivery" id="delivery">
                                            <option value="tphcm">TP.HCM</option>
                                            <option value="tphcm">Hà Nội</option>
                                            <option value="tphcm">Thanh Hóa</option>
                                            <option value="tphcm">Huế</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="app__content-item-desc-item">
                                <p className="app__content-item-desc-item-title">Số lượng</p>

                                <div className="app__content-item-desc-item-content">
                                    <span className="app__content-item-desc-item-content-quantity">
                                        <i className="fas fa-minus"></i>
                                        <input placeholder="1" type="text" />
                                        <i className="fas fa-plus"></i>
                                    </span>
                                    <span className="app__content-item-desc-item-content-had">247 sản phẩm có sẵn</span>
                                </div>
                            </div>
                            <div className="app__content-item-desc-item">
                                <span className="app__content-item-desc-item-addCart">
                                    <i className="fas fa-cart-plus"></i>
                                    <span>Thêm vào giỏ hàng</span>
                                </span>
                                <span className="app__content-item-desc-item-buy">
                                    <i className="fas fa-money-bill-wave-alt"></i>
                                    Mua Ngay
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row sm-gutter product-body-content">
                    <div className="app__content-item-left">
                        <div className="app__content-item-left-wrapper">
                            <p className="app__content-item-title">CHI TIẾT SẢN PHẨM</p>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Danh Mục</p>
                                <span className="app__content-item-title-content">FarmLand {'>'} Product {'>'} {dataItem[index]}</span>
                            </div>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Thương hiệu</p>
                                <span className="app__content-item-title-content">{nameProduct[index]}</span>
                            </div>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Số lượng hàng khuyến mãi</p>
                                <span className="app__content-item-title-content">23</span>
                            </div>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Số lượng hàng còn lại</p>
                                <span className="app__content-item-title-content">800</span>
                            </div>
                        </div>

                        <div className="app__content-item-left-wrapper">
                            <p className="app__content-item-title">CHI TIẾT SẢN PHẨM</p>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Danh Mục</p>
                                <span className="app__content-item-title-content">FarmLand {'>'} Product {'>'} {dataItem[index]}</span>
                            </div>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Thương hiệu</p>
                                <span className="app__content-item-title-content">{nameProduct[index]}</span>
                            </div>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Số lượng hàng khuyến mãi</p>
                                <span className="app__content-item-title-content">23</span>
                            </div>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Số lượng hàng còn lại</p>
                                <span className="app__content-item-title-content">800</span>
                            </div>
                        </div>
                        <div className="app__content-item-left-wrapper">
                            <p className="app__content-item-title">CHI TIẾT SẢN PHẨM</p>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Danh Mục</p>
                                <span className="app__content-item-title-content">FarmLand {'>'} Product {'>'} {dataItem[index]}</span>
                            </div>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Thương hiệu</p>
                                <span className="app__content-item-title-content">{nameProduct[index]}</span>
                            </div>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Số lượng hàng khuyến mãi</p>
                                <span className="app__content-item-title-content">23</span>
                            </div>
                            <div className="app__content-item-left-wrapper-content">
                                <p className="app__content-item-desc-item-title">Số lượng hàng còn lại</p>
                                <span className="app__content-item-title-content">800</span>
                            </div>
                        </div>
                    </div>
                    <div className="app__content-item-right">
                        <div className="app__content-item-right-item">
                            <p className="app__content-item-desc-item-title--2">Top sản phẩm bán chạy</p>
                            <img className="app__content-item-desc-item-img" src={product} alt="product" />
                            <p className="app__content-item-desc-item-title--2--1">Thùng 30 gói phở gà Cung Đình Hà Nội 68g</p>
                            <p className="app__content-item-desc-item-title--2--2">195.000đ</p>
                        </div>
                        <div className="app__content-item-right-item">
                            <p className="app__content-item-desc-item-title--2">Top sản phẩm bán chạy</p>
                            <img className="app__content-item-desc-item-img" src={product} alt="product" />
                            <p className="app__content-item-desc-item-title--2--1">Thùng 30 gói phở gà Cung Đình Hà Nội 68g</p>
                            <p className="app__content-item-desc-item-title--2--2">195.000đ</p>
                        </div>
                        <div className="app__content-item-right-item">
                            <p className="app__content-item-desc-item-title--2">Top sản phẩm bán chạy</p>
                            <img className="app__content-item-desc-item-img" src={product} alt="product" />
                            <p className="app__content-item-desc-item-title--2--1">Thùng 30 gói phở gà Cung Đình Hà Nội 68g</p>
                            <p className="app__content-item-desc-item-title--2--2">195.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
