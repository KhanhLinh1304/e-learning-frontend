import { Row, Col, Input, Select, Button, Upload } from "antd";
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
import "./createCourse.css";

const { TextArea } = Input;
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

function AddCourse() {
    const [sections, setSections] = useState([]);
    const [courseImage, setCourseImage] = useState(null);

    const handleClickSection = () => {
        setSections([
            ...sections,
            { id: sections.length + 1, title: '', lessons: [] },
        ]);
    };

    const handleClickLesson = (sectionId) => {
        setSections(sections.map(section =>
            section.id === sectionId
                ? { ...section, lessons: [...section.lessons, { id: section.lessons.length + 1 }] }
                : section
        ));
    };

    const handleSectionTitleChange = (e, sectionId) => {
        setSections(sections.map(section =>
            section.id === sectionId
                ? { ...section, title: e.target.value }
                : section
        ));
    };

    // File upload handlers
    const handleImageUpload = ({ file }) => {
        setCourseImage(URL.createObjectURL(file)); // Store the temporary URL for preview
    };

    const handleLessonVideoUpload = (file, sectionId, lessonId) => {
        setSections(sections.map(section =>
            section.id === sectionId
                ? {
                    ...section,
                    lessons: section.lessons.map(lesson =>
                        lesson.id === lessonId
                            ? { ...lesson, video: URL.createObjectURL(file) }
                            : lesson
                    )
                }
                : section
        ));
    };

    return (
        <>
            <Row justify="center" >
                <Col xxl={16} xl={16} lg={16} md={20} sm={24} xs={24}>
                    <div className="course">
                        <p>Tên Khoá Học</p>
                        <Input className="name-course" placeholder="Tên khoá học" />
                    </div>
                </Col>
            </Row>

            <Row justify="center">
                <Col xxl={16} xl={16} lg={16} md={20} sm={24} xs={24}>
                    <div className="course">
                        <p>Thể loại</p>
                        <Select
                            className="custom-category"
                            defaultValue="lucy"
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                            ]}
                        />
                    </div>
                </Col>
            </Row>

            <Row justify="center" className="course">
                <Col xxl={16} xl={16} lg={16} md={20} sm={24} xs={24}>
                    <div className="course">
                        <p>Mô tả khoá học</p>
                        <TextArea className="des-course" rows={4} placeholder="Mô tả về khoá học" maxLength={200} />
                    </div>
                </Col>
            </Row>

            <Row justify="center" className="course">
                <Col xxl={16} xl={16} lg={16} md={20} sm={24} xs={24}>
                    <div className="course">
                        <p>Định giá khoá học</p>
                        <Input className="price-course" placeholder="Định giá khoá học" />
                    </div>
                </Col>
            </Row>

            <Row justify="center" className="course">
                <Col xxl={16} xl={16} lg={16} md={20} sm={24} xs={24}>
                    <div className="course">
                        <p>Hình ảnh khoá học</p>
                        {courseImage && (
                                <div className="image-preview" style={{ marginLeft: '40px' }}>
                                    <img src={courseImage} alt="Course" style={{ width: '100px', height: '80px', borderRadius: '8px' }} />
                                </div>
                            )}
                        <Upload beforeUpload={() => false} onChange={handleImageUpload}>
                            <Button icon={<UploadOutlined />}> {courseImage ? "Chỉnh sửa" : "Thêm hình ảnh"}</Button>
                        </Upload>
                      
                    </div>
                </Col>
            </Row>

            <Row justify="center" className="course">
                <Col xxl={16} xl={16} lg={16} md={20} sm={24} xs={24}>
                    <p>Nội dung khoá học</p>
                </Col>
            </Row>

            <div className="content-course">
                {sections.map(section => (
                    <div key={section.id} className="section-course">
                        <Row justify="center">
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <p>Chương {section.id}</p>
                                <Input
                                    style={{ width: '500px' }}
                                    placeholder="Giới thiệu khoá học"
                                    value={section.title}
                                    onChange={(e) => handleSectionTitleChange(e, section.id)}
                                />
                            </Col>
                        </Row>

                        {section.lessons.map(lesson => (
                            <Row justify="center" gutter={[10,10]}key={lesson.id} >
                                <Col xxl={16} xl={16} lg={16} md={20} sm={24} xs={24}>
                                <div className="lesson-course">
                                        <p>Bài học {lesson.id}</p>
                                        <Input className="lesson-input" placeholder="Giới thiệu bài học" />
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            {lesson.video && (
                                                <div className="video-preview" style={{ marginRight: '10px' }}>
                                                    <video src={lesson.video} style={{ marginTop: '10px', width: '150px', height: '80px', borderRadius: '15px' }} />
                                                </div>
                                            )}
                                            <Upload
                                                beforeUpload={(file) => {
                                                    handleLessonVideoUpload(file, section.id, lesson.id);
                                                    return false;
                                                }}
                                            >
                                                <Button icon={<UploadOutlined />}>
                                                    {lesson.video ? "Chỉnh sửa video" : "Thêm video"}
                                                </Button>
                                            </Upload>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        ))}

                        <Row justify="center">
                            <Col xxl={11} xl={11} lg={11} md={24} sm={24} xs={24}>
                                <div className="button-add-lesson">
                                    <Button onClick={() => handleClickLesson(section.id)} icon={<PlusOutlined />}>
                                        Thêm bài học
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))}

                <Row justify="center">
                    <Col xxl={11} xl={11} lg={11} md={24} sm={24} xs={24}>
                        <div className="button-add-section">
                            <Button onClick={handleClickSection} icon={<PlusOutlined />}>Thêm chương</Button>
                        </div>
                    </Col>
                </Row>
            </div>

            <div>
                <Row justify="center">
                    <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                        <div className="button-course">
                            <div className="button-cancel">
                                <Button>Huỷ bỏ</Button>
                            </div>
                            <div className="button-create">
                                <Button>Tạo khoá học</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default AddCourse;
