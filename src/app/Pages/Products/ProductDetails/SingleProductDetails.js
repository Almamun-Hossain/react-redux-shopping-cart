import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TopNavbar from "../../../Coponents/Header/TopNavbar";
import "./ProductDetails.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../Coponents/Footer/Footer";
import { addToCarts } from "../../../Features/Cart/CartSlice";

function SingleProductDetails() {
  let { productId } = useParams();
  let [product, setProduct] = useState(null);
  let [quantity, setQuantity] = useState(1);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  //increase item quantity
  const increaseQunaity = (e) => {
    e.preventDefault();
    quantity += 1;
    setQuantity(quantity);
  };

  //decrease item quantity
  const decreaseQunaity = (e) => {
    e.preventDefault();
    quantity > 1 ? setQuantity((quantity -= 1)) : setQuantity(quantity);
  };

  //add the item to the cart
  const addToCart = (e) => {
    e.preventDefault();
    let item = {
      id: parseInt(productId),
      quantity: quantity,
      price: product.price,
    };
    dispatch(addToCarts(item));
  };

  //use effect function to find the product from all products
  useEffect(() => {
    let result = products.find((p) => p.id === parseInt(productId));
    setProduct(result);
  }, [productId, products]);

  return (
    <Fragment>
      <TopNavbar />
      <Container>
        {product && (
          <Row className="my-5">
            <Col md={6} sm={12}>
              <div className="img-container p-3">
                <Image className="single-img" src={product.image} />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="px-4">
                <h2>{product.title}</h2>
                <h4 className="py-2 fs-5">
                  Category:{" "}
                  <Link
                    to={`/category/${product.category}`}
                    className="text-capitalize text-decoration-none"
                  >
                    {product.category}
                  </Link>
                </h4>
                <h4 className="py-2">Price: ${product.price}</h4>
                <p>{product.description}</p>
                <div className="d-flex mb-3">
                  <button
                    className="btn btn-sm btn-dark fs-6 me-3 text-center"
                    onClick={decreaseQunaity}
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="number"
                    className="form-control text-center w-auto p-0 m-0"
                    value={quantity}
                    readOnly={true}
                    required={true}
                  />
                  <button
                    className="btn btn-sm btn-dark fs-6 ms-3 text-center"
                    onClick={increaseQunaity}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="">
                  <Button variant="dark" className="me-2">
                    Buy Now
                  </Button>
                  <Button
                    variant="secondary"
                    className="ms-2"
                    onClick={addToCart}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
}

export default SingleProductDetails;
