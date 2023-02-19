import React from 'react';
import './index.css'; //css문서에 export가 없으면 from 을 제외한다.
import axios from "axios";
import { Link } from 'react-router-dom';

//html로 작성했던 태그들을 모두 불러옴.
function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(function () {
        axios
            .get("https://2792173f-aaf7-4cd1-b4d2-31b9726b249e.mock.pstmn.io/products")
            .then(function (result) {
                const products = result.data.products;
                setProducts(products);
            })
            .catch(function (error) {
                console.log("에러발생 : ", error);
            });
    }, []);

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png" />
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {products.map(function (product, index) {
                        return (
                            <div className="product-card">
                                <Link className="product-link" to={`/products/${index}`}>
                                    <div>
                                        <img className="product-image" src={product.imageUrl} />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}원</span>
                                        <span className="product-seller">
                                            <img className="product-avatar" src="images/icons/avatar.png" />
                                            <span>그랩</span>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                    }

                </div>
            </div>
            <div id="footer"></div>
        </div>
    );

}

export default MainPage;