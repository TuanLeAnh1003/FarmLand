import React from 'react'
import './base.css'
import './grid.css'
import './main.css'
import './responsive.css'
import {Link} from 'react-router-dom'

import QR_code from '../Assets/Images/QR_code.png'
import GGplay from '../Assets/Images/GGplay.png'
import Appstore from '../Assets/Images/Appstore.png'
import raumuong from '../Assets/Images/raumuong.jpeg'
import carot from '../Assets/Images/carot.png'
import quacam from '../Assets/Images/quacam.png'
import logo from '../Assets/Images/logo.png'
import noCart from '../Assets/Images/no-cart.png'
import bapcai from '../Assets/Images/bapcai.png'

import {useState, useEffect} from 'react'

function Header() {
    const product_items = document.querySelectorAll('.product-all')
    const [search, setSearch] = useState('')

    useEffect(() => {
        const history = document.querySelector('.header__search-history')
        product_items.forEach(productItem => {
            if (productItem.dataset.item?.includes(search) || search === '')
            {
                productItem.style.display = 'block'
            }
            else productItem.style.display = 'none'
        })
    }, [search])

    return (
        <header className="header">
            <div className="grid wide">
                <nav className="header__navbar hide-on-mobile-tablet">
                    <ul className="header__navbar-list">
                        <li className="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
                            <a className="header__navbar-item-link-back" href="/index.html">Về trang chủ</a>
                            <div className="header__qr">
                                <img src={QR_code} alt="QR code" className="header__qr-img" />
                                <div className="header__qr-apps">
                                    <a href="/" className="header__qr-link">
                                        <img src={GGplay} alt="Goggle Play" className="header__qr-download-img" />
                                    </a>
                                    <a href="/" className="header__qr-link">
                                        <img src={Appstore} alt="App Store" className="header__qr-download-img" />
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="header__navbar-item">
                            <span className="header__navbar-title--no-pointer">Kết nối</span>
                            <a href="/" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fab fa-facebook"></i>
                            </a>
                            <a href="/" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>

                    <ul className="header__navbar-list">
                        <li className="header__navbar-item header__navbar-item--has-notify">
                            <a href="/" className="header__navbar-item-link">
                                <i className="header__navbar-icon far fa-bell"></i>
                                Thông báo
                            </a>
                            <div className="header__notify">
                                <header className="header__notify-header">
                                    <h3>Thông báo mới nhận</h3>
                                </header>
                                <ul className="header__notify-list">
                                    <li className="header__notify-item">
                                        <a href="/" className="header__notify-link">
                                            <img src={raumuong} alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">RAU XANH</span>
                                                <span className="header__notify-description">Mô tả</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="header__notify-item">
                                        <a href="/" className="header__notify-link">
                                            <img src={carot} alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">CỦ</span>
                                                <span className="header__notify-description">Mô tả</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="header__notify-item">
                                        <a href="/" className="header__notify-link">
                                            <img src={quacam} alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">QUẢ TƯƠI</span>
                                                <span className="header__notify-description">Mô tả</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <footer className="header__notify-footer">
                                    <a href="/" className="header__notify-footer-btn">Xem tất cả</a>
                                </footer>
                            </div>
                        </li>
                        <li className="header__navbar-item">
                            <a href="/" className="header__navbar-item-link">
                                <i className="header__navbar-icon far fa-question-circle"></i>
                                Trợ giúp
                            </a>
                        </li>

                    </ul>
                </nav>
                <div className="header-with-search">
                    <label for="mobile-search-checkbox" className="header__mobile-search">
                        <i className="header__mobile-search-icon fas fa-search"></i>
                    </label>

                    <div className="header__logo hide-on-tablet">
                        <a href="/">
                            <img src={logo} alt="shopee-logo" className="header__logo-img" />
                        </a>              
                    </div>

                    <input type="checkbox" hidden id="mobile-search-checkbox" className="header__search-checkbox" />

                    <div className="header__search">
                        <div className="header__search-input-wrap">
                            <input type="text" id="search-item" className="header__search-input" placeholder="Nhập để tìm kiếm sản phẩm" onChange={e => setSearch(e.target.value)}/>
                            <div className="header__search-history">
                                <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
                                <ul className="header__search-history-list">
                                    <li className="header__search-history-item">
                                        <a href="/">Bắp cải</a>
                                    </li>
                                    <li className="header__search-history-item">
                                        <a href="/">Rau xà lách</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header__search-select">
                            <span className="header__search-select-label">Trong shop</span>
                            <i className="header__search-select-icon fas fa-angle-down"></i>
                            
                            <ul className="header__search-option">
                                <li className="header__search-option-item header__search-option-item--active">
                                    <span>Trong shop</span>
                                    <i className="fas fa-check"></i>
                                </li>
                                <li className="header__search-option-item">
                                    <span>Ngoài shop</span>
                                    <i className="fas fa-check"></i>
                                </li>
                            </ul>
                        </div>
                        <button className="header__search-btn">
                            <i className="header__search-btn-icon fas fa-search"></i>
                        </button>
                    </div>
                    <div className="header__cart">
                        <div className="header__cart-wrap">
                            <i className="header__cart-icon fas fa-shopping-cart"></i>
                            <span className="header__cart-notice">3</span>
                            <div className="header__cart-list">
                                <img src={noCart} alt="" className="header__cart-no-cart-img" />
                                <span className="header__cart-list-no-cart-msg">
                                    Chưa có sản phẩm
                                </span>

                                <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                <ul className="header__cart-list-item">
                                    <li className="header__cart-item">
                                        <img src={bapcai} alt="" className="header__cart-img" />
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Bắp cải</h5>
                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-item-price">20.000đ</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>

                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Rau xanh
                                                </span>
                                                <span className="header__cart-item-remove">Xóa</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header__cart-item">
                                        <img src={carot} alt="" className="header__cart-img" />
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Cà rốt</h5>
                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-item-price">3.000đ</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">5</span>
                                                </div>
                                            </div>

                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Củ, quả
                                                </span>
                                                <span className="header__cart-item-remove">Xóa</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header__cart-item">
                                        <img src={quacam} alt="" className="header__cart-img" />
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Quả cam</h5>
                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-item-price">100.000đ</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">1</span>
                                                </div>
                                            </div>

                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Củ, quả
                                                </span>
                                                <span className="header__cart-item-remove">Xóa</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header__cart-item">
                                        <div className="header__cart-item-head-2">
                                            <div className="header__cart-item-total">Tổng cộng</div>
                                            <div className="header__cart-item-price-2">155.000đ</div>
                                        </div>
                                    </li>
                                </ul>

                                <Link to="/cart" className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="header__sort-bar">
                <li className="header__sort-item">
                    <a href="/" className="header__sort-link">Liên quan</a>
                </li>
                <li className="header__sort-item header__sort-item--active">
                    <a href="/" className="header__sort-link">Mới nhất</a>
                </li>
                <li className="header__sort-item">
                    <a href="/" className="header__sort-link">Bán chạy</a>
                </li>
                <li className="header__sort-item">
                    <a href="/" className="header__sort-link">Giá</a>
                </li>
            </ul>
        </header>
    )
}

export default Header
