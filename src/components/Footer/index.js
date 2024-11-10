import { Layout, Row, Col, Button, Input } from "antd";
import logo from "../../logo.png";
import location from "../images/location.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import chPlay from "../images/chplay.png";
import appStore from "../images/apple.png";
import { Link } from "react-router-dom";
import './footer.css';
const { Footer } = Layout;

function FooterLayout() {
    return (
        <>
            <div className="footer">
                <Row justify="center">
                    <Col xxl={8} xl={8} lg={12} md={12} sm={12} xs={16}>
                        <div className="create-course">
                            <h3>Bạn có muốn tạo khoá học mới?</h3>
                            <Link  to="/course" style={{ background: 'orange', color: '#fff' }}>
                                TẠO MỚI KHOÁ HỌC
                            </Link>
                        </div>
                    </Col>
                </Row>

                <Row justify="start" className="mt-20">
                    <Col xxl={8} xl={8} lg={8} md={10} sm={10} xs={10}>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div className="button">
                            <div className="button-down button-down-store">
                                <img src={appStore} alt="" />
                                <div className="button-text">
                                    <p>Download on the</p>
                                    <h4>App Store</h4>
                                </div>
                            </div>
                            <div className="button-down button-down-play">
                                <img src={chPlay} alt="" />
                                <div className="button-text">
                                    <p>Get it on</p>
                                    <h4>Google Play</h4>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={14} xs={14} >
                        <div className="contact">
                            <img src={location} alt="" />
                            <p>KP. Phong Nhất - Phường Điện An - Thị Xã Điện Bàn - Tỉnh Quảng Nam</p>
                        </div>
                        <div className="contact">
                            <img src={phone} alt="" />
                            <p>(+84) 522 944 404 - (+84) 733 555 222</p>
                        </div>
                        <div className="contact">
                            <img src={mail} alt="" />
                            <p>linhkt@gmail.com</p>
                        </div>
                    </Col>
                </Row>

                <Row justify="start" >
                    <Col xxl={8} xl={8} lg={8} md={10} sm={10} xs={10}></Col>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={14} xs={14}>
                        <div className="contact-mail">
                            <Input placeholder="Nếu bạn cần chúng tôi tư vấn xin hãy để lại số điện thoại hoặc email để liên lạc" />
                            <Button>GỬI</Button>
                        </div>

                    </Col>
                </Row>
            </div>
        </>
    );
}
export default FooterLayout;