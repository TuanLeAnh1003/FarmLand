import React from 'react'
import './base.css'
import './grid.css'
import './main.css'
import './responsive.css'
import {Link} from 'react-router-dom'

function HomeProductItem({name, src, oldPrice, currentPrice, dataItem}) {
    return (
        <Link to="/product" class="product-all" data-item={dataItem}>
            <a class="home-product-item" href="/product.html">
                <img class="home-product-item__img" src={src} alt="carot" />
                <h4 class="home-product-item__name">{name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">{oldPrice}</span>
                    <span class="home-product-item__price-current">{currentPrice}</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                        <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="home-product-item__sold">88 đã bán</span>
                </div>   
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">Whoo</span>
                    <span class="home-product-item__origin-name">Nhật Bản</span>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">43%</span>
                    <lable class="home-product-item__sale-off-label">GIẢM GIÁ</lable>
                </div>
            </a>
        </Link>
    )
}

export default HomeProductItem
