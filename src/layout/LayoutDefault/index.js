import { Outlet } from "react-router-dom";
import FooterLayout from "../../components/Footer";
import HeaderLayout from "../../components/Header";
import "../../App.css"
import { Layout } from "antd";
const { Content } = Layout;

function LayoutDefault() {
    return (
        <>
            <Layout className="layout-default">
                <HeaderLayout />
                <Content className="content">
                    <Outlet />
                </Content>
                
                <FooterLayout className="footer" />
            </Layout>
        </>
    );
}
export default LayoutDefault;