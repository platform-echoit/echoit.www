// EchoIT site — footer.
const { IconButton } = window.EchoITDesignSystem_36408b;

function SiteFooter() {
  const cols = [
    { h: "사업영역", items: ["AX 컨설팅", "클라우드 전환", "데이터·AI 플랫폼", "보안 관제"] },
    { h: "회사", items: ["회사소개", "인재채용", "뉴스룸", "오시는 길"] },
    { h: "리소스", items: ["인사이트", "고객 사례", "기술 블로그", "자료실"] },
  ];
  return (
    <footer className="site-footer" id="contact">
      <div className="site__wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="../../assets/logos/echoit-logo-color.svg" alt="EchoIT" />
            <p>EchoIT는 AI 트랜스포메이션 파트너로서 기업의 지속 가능한 성장을 함께 만듭니다.</p>
            <div style={{ display: "flex", gap: 6, marginTop: 16 }}>
              <IconButton icon="public" variant="tonal" label="웹사이트" />
              <IconButton icon="mail" variant="tonal" label="이메일" />
              <IconButton icon="rss_feed" variant="tonal" label="블로그" />
            </div>
          </div>
          {cols.map((c) => (
            <div className="footer-col" key={c.h}>
              <h5>{c.h}</h5>
              {c.items.map((i) => <a key={i} href="#">{i}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 EchoIT Co., Ltd. All rights reserved.</span>
          <span>서울특별시 영등포구 · 02-1234-5678 · contact@echoit.kr</span>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
