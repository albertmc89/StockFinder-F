import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="title-container">
        <img
          className="logo"
          src="/img/header-logo.png"
          alt="logo computer with a chart view on the display"
        />
        <h2 className="header__title">StockFinder</h2>
      </div>
    </header>
  );
};

export default Header;
