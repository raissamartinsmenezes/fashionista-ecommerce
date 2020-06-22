import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";
import SearchButton from "../SearchButton/SearchButton";
import SearchBar from "../SearchBar/SearchBar";
import NavbarSecondary from "../NavbarSecondary/NavbarSecondary";
import CartList from "../CartList/CartList";

import logo from "../../assets/images/logo.svg";

import "./Navbar.scss";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const openModalSearch = () => setShowSearch(true);
  const closeModalSearch = () => setShowSearch(false);

  const openModalCart = () => setShowCart(true);
  const closeModalCart = () => setShowCart(false);

  const currentCartProducts = localStorage.getItem("amoraCart")
    ? localStorage.getItem("amoraCart")
    : false;

  const [cartProducts, setCartProducts] = useState(
    JSON.parse(currentCartProducts)
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar__elements container">
          <span className="navbar__arrow-button">
            <BackArrowIcon />
          </span>
          <figure>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                alt="logo da Fashionista"
                className="navbar__logo"
                src={logo}
              />
            </Link>
          </figure>
          <div className="navbar__elements--desktop">
            <span className="navbar__search-button">
              <SearchButton handleClick={openModalSearch} />
              <Modal closeModal={closeModalSearch} show={showSearch}>
                <NavbarSecondary
                  text="Buscar Produtos"
                  closeModal={closeModalSearch}
                />
                <SearchBar />
              </Modal>
            </span>
            <ShoppingCart handleClick={openModalCart} />
            <Modal closeModal={closeModalCart} show={showCart}>
              <NavbarSecondary
                text="Sacola"
                total={cartProducts.products.length}
                closeModal={closeModalCart}
              />
              <CartList cartProducts={cartProducts} />
            </Modal>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
