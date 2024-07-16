import "./about.css";
import CradImage from "../assets/cover-img.jpg";
import { Card, Col, Row } from "react-bootstrap";
import { ArrowRightCircleFill, Dot } from "react-bootstrap-icons";
import { useState } from "react";
import ProductCard from "../assets/card/Card";
function About({ productsCategories, productOnChange }) {
  const [clicked, setClicked] = useState(1);
  function setProductsOnChange(e) {
    productOnChange(e);
  }
  return (
    <div id="about">
      <Row className="px-sm-3 px-md-auto px-lg-auto px-xl-auto p-xxl-auto pb-5 pt-4">
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
          <Row
            id="about-row"
            className="p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-2 gap-3 align-items-center"
          >
            <Col
              xxl={4}
              xl={4}
              lg={4}
              className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none"
            >
              <Card className="box-shadow-img border-0">
                <Card.Img src={CradImage}></Card.Img>
              </Card>
            </Col>
            <Col>
              <Row className="gap-3">
                <Col xxl={12} xl={11} lg={11}>
                  <h1>
                    Pravimo proizvode za njegu kože koristeći najfinije sastojke
                    iz biljke aloe vere.
                  </h1>
                </Col>
                <Col xxl={11} xl={11} lg={12} className="text-justify">
                  <p className="text-justify d-none fs-xxl-4 d-xxl-block d-xl-block d-lg-block">
                    Iskusite revitalizirajući dodir Aloe Vere sa našom pažljivo
                    odabranom selekcijom proizvoda za njegu kože i wellness. Od
                    blagih sredstava za čišćenje do duboko hranljivih krema,
                    naša sveobuhvatna linija proizvoda sa Aloe Verom osigurava
                    hidrataciju i vraća balans za blistavu, zdravu kožu.
                    Podignite svoj ritual njege kose uz naše luksuzne šampone i
                    balzame obogaćene Aloe Verom, ostavljajući vašu kosu
                    neodoljivo mekom, sjajnom i prelijepo hidratizovanom.
                    Otkrijte brojne prirodne benefite Aloe Vere i krenite na
                    holističko putovanje samonjegom, uživajući u svakodnevnoj
                    ljepoti zdravije kože i kose sa svakom upotrebom.
                  </p>
                  <p className="text-justify d-none d-xxl-block d-xl-block  d-lg-block">
                    Prigrlite prirodnu blagodat Aloe Vere sa našom kolekcijom
                    umirujućih proizvoda za njegu kože i kose. Razmazite svoju
                    kožu blagim sredstvima za čišćenje i revitalizujućim
                    maskama, dok naši šamponi i regeneratori obogaćeni Aloe
                    Verom pružaju hidrataciju i vitalnost vašoj kosi. Otkrijte
                    holističke prednosti suplemenata sa Aloe Verom, koji
                    promovišu zdravlje probavnog sistema i podržavaju funkciju
                    imunog sistema, i uživajte u obnovljenom osjećaju
                    blagostanja. Bilo da započinjete dan osvježavajućom rutinom
                    njege kože ili poboljšavate svoje opšte zdravlje sa
                    suplementima Aloe Vere, prigrlite dar prirode za nahranjenu
                    kožu, kosu i vitalnost.
                  </p>
                  {/* mobile version */}
                  <Row className="d-flex d-xxl-none d-xl-none d-lg-none gap-2">
                    <Col
                      sm={12}
                      xs={12}
                      className={
                        clicked === 1
                          ? "d-flex flex-column pt-0 gap-4"
                          : "d-flex flex-column gap-4 d-none"
                      }
                      onClick={() => setClicked(2)}
                    >
                      <p>
                        Iskusite revitalizirajući dodir Aloe Vere sa našom
                        pažljivo odabranom selekcijom proizvoda za njegu kože i
                        wellness. Od blagih sredstava za čišćenje do duboko
                        hranljivih krema, naša sveobuhvatna linija proizvoda sa
                        Aloe Verom osigurava hidrataciju i vraća balans za
                        blistavu, zdravu kožu. Podignite svoj ritual njege kose
                        uz naše luksuzne šampone i balzame obogaćene Aloe Verom,
                        ostavljajući vašu kosu neodoljivo mekom, sjajnom i
                        prelijepo hidratizovanom. Otkrijte brojne prirodne
                        benefite Aloe Vere i krenite na holističko putovanje
                        samonjegom, uživajući u svakodnevnoj ljepoti zdravije
                        kože i kose sa svakom upotrebom.
                      </p>
                    </Col>
                    <Col
                      sm={12}
                      xs={12}
                      className={
                        clicked === 2
                          ? "d-flex flex-column pt-0 gap-4"
                          : "d-flex flex-column gap-4 d-none"
                      }
                      onClick={() => setClicked(1)}
                    >
                      <p>
                        Prigrlite prirodnu blagodat Aloe Vere sa našom
                        kolekcijom umirujućih proizvoda za njegu kože i kose.
                        Razmazite svoju kožu blagim sredstvima za čišćenje i
                        revitalizujućim maskama, dok naši šamponi i regeneratori
                        obogaćeni Aloe Verom pružaju hidrataciju i vitalnost
                        vašoj kosi. Otkrijte holističke prednosti suplemenata sa
                        Aloe Verom, koji promovišu zdravlje probavnog sistema i
                        podržavaju funkciju imunog sistema, i uživajte u
                        obnovljenom osjećaju blagostanja. Bilo da započinjete
                        dan osvježavajućom rutinom njege kože ili poboljšavate
                        svoje opšte zdravlje sa suplementima Aloe Vere,
                        prigrlite dar prirode za nahranjenu kožu, kosu i
                        vitalnost.
                      </p>
                    </Col>
                    <div className="dots d-flex align-items-center justify-content-center">
                      <Dot
                        color={clicked === 1 ? "gray" : "lightgray"}
                        onClick={() => setClicked(1)}
                      />
                      <Dot
                        color={clicked === 2 ? "gray" : "lightgray"}
                        onClick={() => setClicked(2)}
                      />
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xxl={10}
          xl={10}
          lg={11}
          md={11}
          sm={11}
          xs={11}
          className="d-flex flex-lg-column flex-sm-column-reverse pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-5 pb-sm-0 pt-3 px-2 py-xxl-4 py-xl-4 px-xxl-5 px-xl-5 box-card m-auto"
        >
          <Row className="list-of-pop-products justify-content-xxl-center justify-content-xl-center justify-content-lg-center justify-content-md-start justify-content-sm-start  gap-xxl-3 gap-xl-4 gap-lg-3 gap-md-3 gap-sm-0 gap-xs-0 flex-lg-wrap flex-sm-nowrap overflow-x-auto">
            {productsCategories["napici"].slice(0, 6).map((pr, idx) => (
              <Col
                key={idx}
                xxl={3}
                xl={3}
                lg={4}
                md={5}
                sm={8}
                xs={8}
                className="popular-product-card mx-xxl-0 mx-xl-0 mx-lg-0 mx-md-0 mx-sm-0 mx-xs-0 px-xxl-auto px-xl-auto px-lg-auto px-md-auto px-sm-0 px-xs-0"
              >
                <ProductCard
                  src={pr.image_url}
                  title={pr.name}
                  description={pr.price}
                  url={pr.url}
                  setProductsOnChange={setProductsOnChange}
                />
              </Col>
            ))}
          </Row>
          <Row
            className="pt-xxl-5 pt-xl-5 pt-lg-5 pt-md-0 pt-sm-0 pb-xxl-0 pb-xl-0 pb-lg-0 pb-md-0 pb-sm-3 align-items-xxl-center justify-content-xxl-center align-items-xl-center justify-content-xl-center align-items-lg-center justify-content-lg-center  align-items-md-end justify-content-md-end  
          align-items-sm-end justify-content-sm-end"
          >
            <Col
              lg={12}
              className="text-xxl-center text-xl-center text-lg-center text-md-end text-sm-end see-all"
            >
              <a href="/products" className="text-dark p">
                Pogledaj sve <ArrowRightCircleFill className="mx-2 text-dark" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default About;
