// EchoIT site — insights cards + closing CTA band.
const { Card, Button, Icon } = window.EchoITDesignSystem_36408b;

const POSTS = [
  { tag: "AI", icon: "smart_toy", title: "생성형 AI, PoC를 넘어 운영으로 가는 5단계", date: "2026.05.28" },
  { tag: "CLOUD", icon: "cloud", title: "멀티 클라우드 FinOps로 비용을 34% 줄인 방법", date: "2026.05.12" },
  { tag: "SECURITY", icon: "shield", title: "제로 트러스트 전환, 무엇부터 시작할까", date: "2026.04.30" },
];

function SiteInsights() {
  return (
    <section className="section section--alt" id="insights">
      <div className="site__wrap">
        <div className="section__head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "none" }}>
          <div>
            <span className="section__eyebrow">Insights</span>
            <h2 className="section__title">EchoIT의 기술 인사이트</h2>
          </div>
          <Button variant="text" trailingIcon="arrow_forward" href="#insights">전체 보기</Button>
        </div>
        <div className="insights-grid">
          {POSTS.map((p) => (
            <Card key={p.title} variant="elevated" interactive className="insight-card">
              <div className="insight-card__thumb"><Icon name={p.icon} fill /></div>
              <div className="insight-card__body">
                <span className="insight-card__meta">{p.tag}</span>
                <h3>{p.title}</h3>
                <time>{p.date}</time>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteCTA({ onContact }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="site__wrap cta-band">
        <div className="cta-band__inner">
          <div>
            <h2>지금, AX 여정을 시작하세요</h2>
            <p>30분 무료 진단으로 우리 조직에 맞는 전환 우선순위를 확인해 보세요.</p>
          </div>
          <div className="cta-band__actions">
            <Button variant="filled" icon="rocket_launch" onClick={onContact}>무료 진단 신청</Button>
            <Button variant="outlined" trailingIcon="call" href="#contact">상담 예약</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.SiteInsights = SiteInsights;
window.SiteCTA = SiteCTA;
