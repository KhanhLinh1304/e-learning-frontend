import { Col, Input, Row, Select, Checkbox, DatePicker, Button } from "antd";
import "./course.css";
import { Link } from "react-router-dom";
import star from "../images/star.png";
import product from "../images/product.png";
import student from "../images/student.png";
import stars from "../images/stars.png";
import star0 from "../images/star0.png"
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
};
function Course() {
    return (
        <>
            <div className="box-create-course">
                <p>Bạn có muốn tạo một khoá học mới?</p>
                <Link to="/createCourse">TẠO MỚI KHOÁ HỌC</Link>
            </div>
            <div className="box-search">
                <Row gutter={[10, 10]}>
                    <Col xxl={10} xl={10} lg={10} md={10} sm={24} xs={24} >
                        <Input className="custom-outline" placeholder="Ten khoa hoc" />
                    </Col>
                    <Col xxl={10} xl={10} lg={10} md={10} sm={24} xs={24} >
                        <Select
                            className="custom-outline"
                            defaultValue="lucy"
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                }
                            ]}
                        />
                    </Col>
                </Row>
                <Row justify="start" className="mt-10" >
                    <Col xxl={10} xl={10} lg={10} md={16} sm={16} xs={24} >
                        <div className="feedback-star">
                            <div className="box-star">
                                <p>Tat ca</p>
                            </div>
                            <div className="box-star">
                                <p>5</p>
                                <img src={star} alt=""/>
                            </div>
                            <div className="box-star">
                                <p>4</p>
                                <img src={star} alt=""/>
                            </div>
                            <div className="box-star" >
                                <p>3</p>
                                <img src={star} alt="" />
                            </div>
                            <div className="box-star">
                                <p>2</p>
                                <img src={star} alt="" />
                            </div>
                            <div className="box-star">
                                <p>1</p>
                                <img src={star} alt="" />
                            </div>
                        </div>


                    </Col>
                </Row>
                <Row className="mt-10">
                    <Col >
                        <Checkbox onChange={onChange}>Đã phát hành</Checkbox>
                        <Checkbox onChange={onChange}>Đang chờ duyệt</Checkbox>
                        <Checkbox onChange={onChange}>Bản nháp</Checkbox>
                    </Col>
                </Row>
                <Row className="mt-10">
                    <Col xxl={8} xl={8} lg={8} md={16} sm={16} xs={24} > 
                        <DatePicker className="date-input custom-outline" onChange={onChangeDate} placeholder="Tạo từ ngày" />
                    </Col>
                    <Col xxl={8} xl={8} lg={8} md={16} sm={16} xs={24} >
                        <DatePicker className="date-input custom-outline" onChange={onChangeDate} placeholder="Đến ngày" />
                    </Col>
                </Row>
                <div className="mt-10">
                    <Button className="button-reset" size="large">Đặt Lại</Button>
                    <Button className="button-search" size="large">Tìm kiếm</Button>
                </div>
            </div>
            <div className="number-course"> <h4>Khoá học 41-43 / tổng 43 khoá học</h4></div>
            <div className="list-course">
                <Row justify="start">
                    <Col xxl={6} xl={6} lg={6} md={8} sm={8} xs={8} >
                        
                            <img className="course-image" src={product} alt="" />
                        
                    </Col>
                    <Col xxl={15} xl={15} lg={15} md={24} sm={24} xs={24}>
                    <div className="information">
                        <div className="description-course">
                            <p className="title-course">Dạy lập trình hướng đối tượng từ A-Z cho người mới bắt đầu</p>
                            <p className="category-course">Công Nghệ Thông Tin</p>
                        </div>
                        <div className="inner-student">
                            <img src={student} alt="" />
                            <p>40 học viên</p>
                        </div>
                        <div className="feedback">
                            <span>4.0</span>
                            <img className="image-feedback" src={stars} alt="" />
                            <img className="image-feedback" src={stars} alt="" />
                            <img className="image-feedback" src={stars} alt="" />
                            <img className="image-feedback" src={stars} alt="" />
                            <img className="image-feedback" src={star0} alt="" />
                        </div>

                        </div>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={8} xs={8}>
                        <div className="launch">
                            Đã phát hành
                        </div>
                    </Col>
                </Row>

            </div>

        </>
    );
}
export default Course