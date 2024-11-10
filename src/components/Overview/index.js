import { Row, Col } from 'antd';
import courseLogo from '../images/book.png';
import instructorLogo from '../images/board-teacher.png';
import studentLogo from '../images/account.png';
import registerLogo from '../images/add.png'
import './overview.css';
function Overview() {
    return (
        <>
            <Row gutter={[10, 20]} >
                <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24} >
                    <div className="box box-course" >
                        <div className='box-logo' >
                            <img src={courseLogo} alt='' />
                        </div>
                        <div class="box-text">500+ khoá học</div>
                        <div class="box-description">
                            Có hơn 500 khoá học với phong phú các thể loại từ
                            công nghệ thông tin đến bán hàng và vô số nghành nghề khác nhau
                        </div>
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}>
                    <div className="box box-instructor">
                        <div className='box-logo' >
                            <img src={instructorLogo} alt='' />
                        </div>
                        <div class="box-text">50+ giáo viên</div>
                        <div class="box-description">
                            Với mục đích “Mỗi khoá học được tạo ra, kiến thức sẽ mãi được lưu giữ”
                            từng giáo viên trong Collab với chuyên môn cao là điểm dựa vững chắc của các học viên
                        </div>
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}>
                    <div className="box box-student">
                        <div className='box-logo' >
                            <img src={studentLogo} alt='' />
                        </div>
                        <div class="box-text">5000+ học viên</div>
                        <div class="box-description">
                            Với mục đích “Mỗi khoá học được tạo ra, kiến thức sẽ mãi được lưu giữ”
                            từng giáo viên trong Collab với chuyên môn cao là điểm dựa vững chắc của  các học viên
                        </div>
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}>
                    <div className="box box-register">
                        <div className='box-logo' >
                            <img src={registerLogo} alt='' />
                        </div>
                        <div class="box-text">10,000+ đăng ký </div>
                        <div class="box-description">
                            Hơn 10,000 lượt đăng ký khoá học, trung bình
                            hơn 100 lượt đăng ký trên một ngày.
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default Overview;