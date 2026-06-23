// EchoIT site — sticky header with desktop nav, mobile menu, theme toggle.
const { Button, IconButton } = window.EchoITDesignSystem_36408b;

const NAV = [
  { href: "#services", label: "사업영역" },
  { href: "#ax", label: "AX 솔루션" },
  { href: "#impact", label: "성과" },
  { href: "#insights", label: "인사이트" },
];

function SiteHeader({ onContact, dark, onToggleTheme }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const logo = dark ? "../../assets/logos/echoit-logo-white.svg" : "../../assets/logos/echoit-logo-color.svg";
  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site__wrap site-header__inner">
        <img className="site-header__logo" src={logo} alt="EchoIT" />
        <nav className="site-nav">
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <div className="site-header__actions">
          <IconButton icon={dark ? "light_mode" : "dark_mode"} label="테마 전환" onClick={onToggleTheme} />
          <span className="desktop-only"><Button variant="filled" icon="bolt" onClick={onContact}>AX 도입 문의</Button></span>
          <span className="site-header__menu-btn">
            <IconButton icon={menuOpen ? "close" : "menu"} label="메뉴" onClick={() => setMenuOpen((v) => !v)} />
          </span>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</a>)}
        <div style={{ padding: 12, marginTop: 8 }}>
          <Button variant="filled" icon="bolt" onClick={() => { setMenuOpen(false); onContact(); }} style={{ width: "100%" }}>AX 도입 문의</Button>
        </div>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
