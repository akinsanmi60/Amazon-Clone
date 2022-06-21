/* eslint-disable jsx-a11y/alt-text */
import { PageHeader, Button, Input, Space, Badge } from "antd";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import "./Header.css";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import Amazon from "../../images/logo.png";
import USA from "../../images/usa.png";
import BookStore from "../../images/bookstore.png";

const { Search } = Input;
const categories = [
  "Comics",
  "Dictionaries",
  "Novels",
  "Fantasy",
  "Horror",
  "Adventure",
];

function Header() {
  const { authenticate, account } = useMoralis();
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <img src={Amazon} className="logo" />
            <img src={BookStore} className="logo" />
            <Search
              placeholder="Find A Product"
              enterButton
              className="searchBar"
            />
            <Button
              className="login"
              key="1"
              type="primary"
              onClick={() => authenticate()}
            >
              {account ? (
                <span>{account.slice(0, 5)}...</span>
              ) : (
                <span>Login</span>
              )}
            </Button>
            <Space size="large">
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size="small">
                <img src={USA} alt="region" className="flag" />▾
              </Space>
            </Space>
          </>,
        ]}
      />
      <div className="site-page-subheader-ghost-wrapper">
        <Space size="middle">
          <Space size="small" style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map(e => {
            return (
              <Link to="/categories" state={e} className="categories">
                {e}
              </Link>
            );
          })}
        </Space>
      </div>
    </div>
  );
}

export default Header;
