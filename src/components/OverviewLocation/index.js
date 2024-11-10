import { Col, Row } from "antd";
import map from "../images/map.png"
import './overviewLoacation.css'
function OverviewLocation() {
    return (
        <>
            <div>
                <div className="title-location">
                 HỆ THỐNG CỦA CHÚNG TÔI ĐÃ CÓ MẶT Ở 3 THÀNH PHỐ 

                </div>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} >
                        <div class="address">
                            <h5> HÀ NỘI</h5>
                            <p>Chúng tôi đã có hơn 2000 học viên và 30 giáo viên ở 20 lĩnh vực tại mảnh đất thủ đô</p>
                        </div>
                        <div class="address">
                            <h5> ĐÀ NẴNG</h5>
                            <p>Chúng tôi đã có hơn 1000 học viên và 5 giáo viên ở 8 lĩnh vực tại thành phố đáng sống</p>
                        </div>
                        <div class="address">
                            <h5> HỒ CHÍ MINH </h5>
                            <p>Chúng tôi đã có hơn 2000 học viên và 30 giáo viên ở 20 lĩnh vực tại mảnh đất thủ đô</p>
                        </div>
                    </Col>
                    <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <img className="map" src={map} alt="" />
                       
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default OverviewLocation;