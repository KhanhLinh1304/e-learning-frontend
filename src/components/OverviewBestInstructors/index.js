import { Row, Col } from "antd";
import instructor from "../images/instructor.png"
import "./overviewIns.css"
function OverviewBestInstructors() {
    return (
        <>
            <Row justify="start">
                <Col xxl={12} xl={12} lg={12} md={16} sm={24} xs={24}>
                    <div className="box-instructor box-left">
                        <img src={instructor} alt="" />
                        <div className="instructor-information">
                            <h5>GV.Nguyễn Năng Nguyên</h5>
                            <p>Senior Flutter tại công ty FPT Software</p>
                            <div className="instructor-des">
                                Với việc cộng tác với Collab, tôi đã có thể chia sẻ kiến thức của mình cho mọi người. Bên cạnh đó nền tảng Collab đã mang lại cho tôi lợi nhuận khá ổn vào mỗi tháng. Tôi đã kết nối với những học viên của tôi để có những buổi sharing khá là thú vị.

                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
            <Row justify="end">

                <Col xxl={12} xl={12} lg={12} md={16} sm={24} xs={24}>
                    <div className="box-instructor box-right">
                        <img src={instructor} alt="" />
                        <div className="instructor-information">
                            <h5>GV.Nguyễn Năng Nguyên</h5>
                            <p>Senior Flutter tại công ty FPT Software</p>
                            <div className="instructor-des">
                                Với việc cộng tác với Collab, tôi đã có thể chia sẻ kiến thức của mình cho mọi người. Bên cạnh đó nền tảng Collab đã mang lại cho tôi lợi nhuận khá ổn vào mỗi tháng. Tôi đã kết nối với những học viên của tôi để có những buổi sharing khá là thú vị.
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="start">
                <Col xxl={12} xl={12} lg={12} md={16} sm={24} xs={24}>
                    <div className="box-instructor box-left">
                        <img src={instructor} alt="" />
                        <div className="instructor-information">
                            <h5>GV.Nguyễn Năng Nguyên</h5>
                            <p>Senior Flutter tại công ty FPT Software</p>
                            <div className="instructor-des">
                                Với việc cộng tác với Collab, tôi đã có thể chia sẻ kiến thức của mình cho mọi người. Bên cạnh đó nền tảng Collab đã mang lại cho tôi lợi nhuận khá ổn vào mỗi tháng. Tôi đã kết nối với những học viên của tôi để có những buổi sharing khá là thú vị.
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default OverviewBestInstructors;