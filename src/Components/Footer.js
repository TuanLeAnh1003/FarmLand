import React from 'react'
import './base.css'
import './grid.css'
import './main.css'
import './responsive.css'

import QR_code from '../Assets/Images/QR_code.png'
import GGplay from '../Assets/Images/GGplay.png'
import Appstore from '../Assets/Images/Appstore.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="grid wide footer__content">
                <div className="row">
                    <div className="col l-2-4 m-4 c-6 product-all">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Trợ giúp</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">FarmLand</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6 product-all">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Giới thiệu</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Điều khoản</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6 product-all">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Rau xanh</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Củ</a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">Quả tươi</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6 product-all">
                        <h3 className="footer__heading">Theo dõi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">
                                    <i className="footer-item__icon fab fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">
                                    <i className="footer-item__icon fab fa-instagram-square"></i>
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/" className="footer-item__link">
                                    <i className="footer-item__icon fab fa-linkedin"></i>
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-8 c-12">
                        <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                        <div className="footer__download">
                            <img src={QR_code} alt="Download QR" className="footer__download-qr" />
                            <div className="footer__download-apps">
                                <a href="/" className="footer__download-app-link">
                                    <img src={GGplay} alt="Google play" className="footer__download-app-img" />
                                </a>
                                <a href="/" className="footer__download-app-link">
                                    <img src={Appstore} alt="App store" className="footer__download-app-img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer__bottom">
                <div className="grid wide">
                    <p className="footer__text">2020 - Bản quyền thuộc về LAT</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
