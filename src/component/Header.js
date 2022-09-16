import { MenuOutlined } from '@ant-design/icons';

function Header(props) {
    return (
        <div className="header">
            <div className="header-left">
                <div className="menu">
                    <MenuOutlined/>
                </div>
            </div>
            <div className="header-right">

            </div>
        </div>
    )
}
 export default Header