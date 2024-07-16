import { Button, Col, Row, Image } from "react-bootstrap";
import "./home.css";
import AloeVeraImage from "../assets/cover-image1.jpg";
function Home() {
  return (
    <div id="home" className="border-bottom">
      <div className="md-bg-added">
        <Row className="home-row align-items-center">
          <Col
            xxl={5}
            xl={5}
            lg={12}
            md={12}
            sm={12}
            sx={12}
            className="px-xxl-5 px-xl-5 px-lg-5 px-md-5 px-sm-5 py-sm-5 py-xxl-0 py-xl-0"
          >
            <div>
              <div className="d-flex flex-column gap-3">
                <h1>Osećajte se prijatno u besprekornoj koži.</h1>
                <p className="text-justify d-lg-block d-md-block d-sm-none">
                  Postignite prirodnu, glatku kožu uz podlogu sa Aloe Verom koja
                  pruža dugotrajnu, nemasnu pokrivenost. Ova lagana podloga
                  besprekorno se stapa sa vašom kožom, pružajući savršen finiš
                  koji traje cijeli dan. Obogaćena umirujućim svojstvima Aloe
                  Vere, hidrira vašu kožu dok obezbjeđuje mat izgled bez sjaja.
                  Savršena za sve tipove kože, ova podloga nudi nadogradivu
                  pokrivenost koja prekriva nesavršenosti bez zapušavanja pora.
                  Iskusite savršen balans njege kože i šminke sa našom podlogom
                  sa Aloe Verom, koja vam daje blistav i zdrav sjaj.
                </p>
                <p className="text-justify d-lg-none d-md-none d-sm-block d-xs-block">
                  Postignite prirodnu, glatku kožu uz podlogu sa Aloe Verom koja
                  pruža dugotrajnu, nemasnu pokrivenost. Ova lagana podloga
                  besprekorno se stapa sa vašom kožom, pružajući savršen finiš
                  koji traje cijeli dan. Obogaćena umirujućim svojstvima Aloe
                  Vere, hidrira vašu kožu dok obezbjeđuje mat izgled bez sjaja.
                </p>
                <Button
                  className="shop-now w-50"
                  variant="success"
                  href="products"
                >
                  Kupite sad
                </Button>
              </div>
            </div>
          </Col>
          <Col xxl={7} xl={7} className="d-none d-xxl-block d-xl-block">
            <Image
              src={AloeVeraImage}
              loading="lazy"
              width={300}
              className="image w-100 img-responsive"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
