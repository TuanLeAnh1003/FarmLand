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

import HomeProductItem from './HomeProductItem'

import {useState, useEffect} from 'react'

function Body({parentClickProduct}) {
    const product_items = document.querySelectorAll('.product-all')
    const [category, setCategory] = useState('')

    useEffect(() => {
        product_items?.forEach(productItem => {
            if (category === productItem.dataset.item || category === 'all')
            {
                productItem.style.display = 'block'
            }
            else productItem.style.display = 'none'
        })
    }, [category])

    const handleClickCate = (e) => {
        const activeItem = document.querySelector('.category-item__link.category-item__active')

        activeItem.classList.remove('category-item__active')
        e.target.classList.add('category-item__active')
    }

    const handleClickProduct = (index) => {
        console.log(index);
        parentClickProduct(index)
    }

    const nameProduct = ['CÀ RỐT ĐÀ LẠT', 'KHOAI LANG NHẬT DẺO', 'KHOAI MỠ TÍM', 'CỦ CẢI TRẮNG', 'BÔNG CẢI TRẮNG TƯƠI', 'RAU MỒNG TƠI', 
                         'RAU MUỐNG TƯƠI BABY', 'RAU CẢI BẸ XANH', 'CÀ CHUA BEEF', 'BÍ ĐỎ TRÒN CẮT MIẾNG', 'BÍ ĐAO (BÍ XANH)', 'KHỔ QUA TƯƠI]'];
    const srcProduct = [carot, khoailang, khoaimo, cucaitrang, bongcaitrang, mongtoi, raumuong, raucaibe, cachua, bido, bidao, khoqua];
    const oldPrice = ['20.000đ', '50.000đ', '40.000đ', '45.000đ', '50.000đ', '18.000đ', '18.000đ', '18.000đ', '20.000đ', '10.000đ', '20.000đ', '20.000đ']
    const currentPrice = ['14.000đ', '35.000đ', '30.000đ', '37.000đ', '35.000đ', '25.000đ', '25.000đ', '23.000đ', '14.000đ', '14.000đ', '14.000đ', '14.000đ']
    const dataItem = ['cu', 'cu', 'cu', 'cu', 'rau', 'rau', 'rau', 'rau', 'qua', 'qua', 'qua', 'qua']

    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content ">
                    <div className="col l-2 m-0 c-0">
                        <nav className="category">
                            <h3 className="category__heading">Danh mục</h3>
            
                            <ul className="category-list">
                                <li className="category-item" data-filter="all" onClick={e => {handleClickCate(e);setCategory(e.target.parentNode.dataset.filter)}}> 
                                    <div className="category-item__link category-item__active">Tất cả danh mục</div>
                                </li>
                                <li className="category-item" data-filter="rau" onClick={e => {handleClickCate(e);setCategory(e.target.parentNode.dataset.filter)}}> 
                                    <div className="category-item__link">Rau xanh</div>
                                </li>
                                <li className="category-item" data-filter="cu" onClick={e => {handleClickCate(e);setCategory(e.target.parentNode.dataset.filter)}}> 
                                    <div className="category-item__link">Củ</div>
                                </li>
                                <li className="category-item" data-filter="qua" onClick={e => {handleClickCate(e);setCategory(e.target.parentNode.dataset.filter)}}> 
                                    <div className="category-item__link">Quả tươi</div>
                                </li>                
                            </ul>
                        </nav>
                    </div>
    
                    <div className="col l-10 m-12 c-12">
                        <div className="home-filter hide-on-mobile-tablet">
                            <span className="home-filter__label">Sắp xếp theo</span>
                            <button className="home-filter__btn btn">Phổ biến</button>
                            <button className="home-filter__btn btn">Mới nhất</button>
                            <button className="home-filter__btn btn">Bán chạy</button>

                            <div className="select-input">
                                <span className="select-input__label">Giá</span>
                                <i className="select-input__icon fas fa-angle-down"></i>
                                <ul className="select-input__list">
                                    <li className="select-input__item">
                                        <a href="/" className="select-input__link">Giá: Thấp đến cao</a>
                                    </li>
                                    <li className="select-input__item">
                                        <a href="/" className="select-input__link">Giá: Cao đến thấp</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="home-filter__page">
                                <span className="home-filter__page-num">
                                    <span className="home-filter__page-current">1</span>/14
                                </span>
                                
                                <div className="home-filter__page-control">
                                    <a href="/" className="home-filter__page-btn home-filter__page-btn--disabled">
                                        <i className="home-filter__page-icon fas fa-angle-left"></i>
                                    </a>
                                    <a href="/" className="home-filter__page-btn">
                                        <i className="home-filter__page-icon fas fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <nav className="mobile-category">
                            <ul className="mobile-category__list">
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Rau xanh</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Rau xanh</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Rau xanh</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Rau xanh</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Củ</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Củ</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Củ</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Củ</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Quả</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Quả</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Quả</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href="/" className="mobile-category__link">Quả</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="home-product">
                            <div className="row sm-gutter">
                                <ul className="home-product-list">
                                    {
                                        Array(12).fill().map((_, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleClickProduct(index)}
                                            >
                                                <HomeProductItem 
                                                    name={nameProduct[index]}
                                                    src={srcProduct[index]}
                                                    oldPrice={oldPrice[index]}
                                                    currentPrice={currentPrice[index]}
                                                    dataItem={dataItem[index]}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <ul className="pagination home-product__pagination">
                            <li className="pagination-item">
                                <a href="/" className="pagination-item__link">
                                    <i className="pagination-item__i fas fa-angle-left"></i>
                                </a>
                            </li>

                            <li className="pagination-item pagination-item--active">
                                <a href="/" className="pagination-item__link">1</a>
                            </li>
                            <li className="pagination-item">
                                <a href="/" className="pagination-item__link">2</a>
                            </li>
                            <li className="pagination-item">
                                <a href="/" className="pagination-item__link">3</a>
                            </li>
                            <li className="pagination-item">
                                <a href="/" className="pagination-item__link">4</a>
                            </li>
                            <li className="pagination-item">
                                <a href="/" className="pagination-item__link">5</a>
                            </li>
                            <li className="pagination-item">
                                <a href="/" className="pagination-item__link">...</a>
                            </li>
                            <li className="pagination-item">
                                <a href="/" className="pagination-item__link">14</a>
                            </li>

                            <li className="pagination-item">
                                <a href="/" className="pagination-item__link">
                                    <i className="pagination-item__i fas fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
