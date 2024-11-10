import { Button, Col, Row } from "antd";
import { useState } from "react";
import { ArrowsAltOutlined } from "@ant-design/icons";
import "./grid.css";
function AntDesign() {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            const result = {
                code: 200,
                data: []
            };
            if (result && result.code === 200) {
                setLoading(false);
            }
        }, 3000)

    }
    return (
        <>
      
            <Row gutter={[10,20]} >
                <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}>
                    <div className="box">
                        cột 1
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}>
                    <div className="box">
                    cột 1
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}>
                    <div className="box">
                    cột 1
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}>
                    <div className="box">
                    cột 1
                    </div>
                </Col>
            </Row>

          



             {/* <div style={{width: '400px', background:'orange'}}>
                <Button
                    type="dashed"
                    loading={loading}
                    onClick={handleClick}
                    block={true} >
                    Nội dung</Button>
            </div>
            <Button  
            size="large" 
            icon={ <ArrowsAltOutlined 
            rotate={45} 
            spin = {true} />}>Button</Button>  */}
        </>
    );
}
export default AntDesign;