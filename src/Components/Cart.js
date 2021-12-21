import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../Assets/Images/logo.png'
import bapcai from '../Assets/Images/bapcai.png'
import bidao from '../Assets/Images/bidao.jpg'
import cachua from '../Assets/Images/cachua.jpg'
import cucaitrang from '../Assets/Images/cucaitrang.jpg'

function Cart() {
    return (
        <div class="app__container">
            <div class="cart-header">
                <div class="cart-header-container">
                    <div class="cart-header-left">
                        <Link to="/">
                            <img class="cart-header-left-logo" src={logo} alt="logo" />
                        </Link>
                        <div class="app__content-item-desc-line-2"></div>
                        <span class="cart-header-left-title" >Giỏ hàng</span>
                    </div>

                    <div class="cart-header-right">
                        <input type="text" class="cart-header-right-input" placeholder="Nhập vào rau, củ, quả muốn tìm" />
                        <div class="cart-header-right-search">
                            <i class="cart-header-right-search-icon fas fa-search"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid wide cart-body">
                <div class="cart-body-item">
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left">
                            <div>
                                <input type="checkbox" />
                                <span class="cart-body-item-left-title">Sản phẩm</span>
                            </div>
                        </div>
                        <div class="cart-body-item-right">
                            <div class="cart-body-item-right-content">Đơn Giá</div>
                            <div class="cart-body-item-right-content">Số Lượng</div>
                            <div class="cart-body-item-right-content">Số Tiền</div>
                            <div class="cart-body-item-right-content">Thao Tác</div>
                        </div>
                    </div>
                </div>
                <div class="cart-body-item">
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left">
                            <div class="cart-body-item-left-wrapper">
                                <input type="checkbox" />
                                <div class="cart-body-item-left-wrapper">
                                    <img class="cart-body-item-left-wrapper-img" src={bapcai} alt="bapcai" />
                                    <span class="cart-body-item-left-wrapper-name">Bắp cải trắng túi 500g</span>
                                </div>
                            </div>
                            <div class="cart-body-item-right-classify">Phân loại hàng: Rau xanh</div>
                        </div>
                        <div class="cart-body-item-right">
                            <div class="cart-body-item-right-content">
                                <span class="cart-body-item-right-content-price">20.000đ</span>
                                <span class="cart-body-item-right-content-price-2">15.000đ</span>
                            </div>
                            <div class="cart-body-item-right-content">
                                <span class="app__content-item-desc-item-content-quantity-2">
                                    <i class="fas fa-minus"></i>
                                    <input placeholder="1" type="text" />
                                    <i class="fas fa-plus"></i>
                                </span>
                            </div>
                            <div class="cart-body-item-right-content-2">15.000đ</div>
                            <div class="cart-body-item-right-content-3">Xóa</div>
                        </div>
                    </div>
                    <div class="cart-body-item-row-2">
                        <div class="cart-body-item-row-line"></div>
                    </div>
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left">
                            <i class="fas fa-truck"></i>
                            <div class="cart-body-item-left-wrapper-name">Giảm 15.000đ phí vận chuyển đơn tối thiểu 150.000đ</div>
                        </div>
                    </div>
                </div>
                <div class="cart-body-item">
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left">
                            <div class="cart-body-item-left-wrapper">
                                <input type="checkbox" />
                                <div class="cart-body-item-left-wrapper">
                                    <img class="cart-body-item-left-wrapper-img" src={bidao} alt="bapcai" />
                                    <span class="cart-body-item-left-wrapper-name">Bí xanh túi 500g (1-2 trái)</span>
                                </div>
                            </div>
                            <div class="cart-body-item-right-classify">Phân loại hàng: Quả</div>
                        </div>
                        <div class="cart-body-item-right">
                            <div class="cart-body-item-right-content">
                                <span class="cart-body-item-right-content-price">20.000đ</span>
                                <span class="cart-body-item-right-content-price-2">15.000đ</span>
                            </div>
                            <div class="cart-body-item-right-content">
                                <span class="app__content-item-desc-item-content-quantity-2">
                                    <i class="fas fa-minus"></i>
                                    <input placeholder="1" type="text" />
                                    <i class="fas fa-plus"></i>
                                </span>
                            </div>
                            <div class="cart-body-item-right-content-2">15.000đ</div>
                            <div class="cart-body-item-right-content-3">Xóa</div>
                        </div>
                    </div>
                    <div class="cart-body-item-row-2">
                        <div class="cart-body-item-row-line"></div>
                    </div>
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left">
                            <i class="fas fa-truck"></i>
                            <div class="cart-body-item-left-wrapper-name">Giảm 15.000đ phí vận chuyển đơn tối thiểu 150.000đ</div>
                        </div>
                    </div>
                </div>
                <div class="cart-body-item">
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left">
                            <div class="cart-body-item-left-wrapper">
                                <input type="checkbox" />
                                <div class="cart-body-item-left-wrapper">
                                    <img class="cart-body-item-left-wrapper-img" src={cachua} alt="bapcai" />
                                    <span class="cart-body-item-left-wrapper-name">Cà chua beef túi lưới 500g (4-6 trái)</span>
                                </div>
                            </div>
                            <div class="cart-body-item-right-classify">Phân loại hàng: Quả</div>
                        </div>
                        <div class="cart-body-item-right">
                            <div class="cart-body-item-right-content">
                                <span class="cart-body-item-right-content-price">20.000đ</span>
                                <span class="cart-body-item-right-content-price-2">15.000đ</span>
                            </div>
                            <div class="cart-body-item-right-content">
                                <span class="app__content-item-desc-item-content-quantity-2">
                                    <i class="fas fa-minus"></i>
                                    <input placeholder="1" type="text" />
                                    <i class="fas fa-plus"></i>
                                </span>
                            </div>
                            <div class="cart-body-item-right-content-2">15.000đ</div>
                            <div class="cart-body-item-right-content-3">Xóa</div>
                        </div>
                    </div>
                    <div class="cart-body-item-row-2">
                        <div class="cart-body-item-row-line"></div>
                    </div>
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left">
                            <i class="fas fa-truck"></i>
                            <div class="cart-body-item-left-wrapper-name">Giảm 15.000đ phí vận chuyển đơn tối thiểu 150.000đ</div>
                        </div>
                    </div>
                </div>
                <div class="cart-body-item">
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left">
                            <div class="cart-body-item-left-wrapper">
                                <input type="checkbox" />
                                <div class="cart-body-item-left-wrapper">
                                    <img class="cart-body-item-left-wrapper-img" src={cucaitrang} alt="bapcai" />
                                    <span class="cart-body-item-left-wrapper-name">Củ cải trắng túi lưới 500g (4-6 củ)</span>
                                </div>
                            </div>
                            <div class="cart-body-item-right-classify">Phân loại hàng: Củ</div>
                        </div>
                        <div class="cart-body-item-right">
                            <div class="cart-body-item-right-content">
                                <span class="cart-body-item-right-content-price">20.000đ</span>
                                <span class="cart-body-item-right-content-price-2">15.000đ</span>
                            </div>
                            <div class="cart-body-item-right-content">
                                <span class="app__content-item-desc-item-content-quantity-2">
                                    <i class="fas fa-minus"></i>
                                    <input placeholder="1" type="text" />
                                    <i class="fas fa-plus"></i>
                                </span>
                            </div>
                            <div class="cart-body-item-right-content-2">15.000đ</div>
                            <div class="cart-body-item-right-content-3">Xóa</div>
                        </div>
                    </div>
                    <div class="cart-body-item-row-2">
                        <div class="cart-body-item-row-line"></div>
                    </div>
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left">
                            <i class="fas fa-truck"></i>
                            <div class="cart-body-item-left-wrapper-name">Giảm 15.000đ phí vận chuyển đơn tối thiểu 150.000đ</div>
                        </div>
                    </div>
                </div>
                <div class="cart-body-item">
                    <div class="cart-body-item-row">
                        <div class="cart-body-item-left"></div>
                        <div class="cart-body-item-right">
                            <span>Tổng sản phẩm đã thanh toán (0 sản phẩm)</span>
                            <button type="button" class="cart-body-item-right-btn">Mua Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
