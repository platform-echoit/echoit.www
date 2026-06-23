// EchoIT site — clients strip + services grid.
const { Card, Icon } = window.EchoITDesignSystem_36408b;

const SERVICES = [
  { icon: "smart_toy", title: "AX 컨설팅", desc: "업무 진단부터 AI 도입 로드맵까지, 데이터 기반의 전환 전략을 설계합니다." },
  { icon: "cloud", title: "클라우드 전환", desc: "레거시 인프라를 안전하게 이전하고 멀티 클라우드 환경을 최적화합니다." },
  { icon: "hub", title: "데이터·AI 플랫폼", desc: "분산된 데이터를 통합하고 생성형 AI를 업무에 내재화하는 플랫폼을 구축합니다." },
  { icon: "shield", title: "통합 보안 관제", desc: "24/7 보안 모니터링과 컴플라이언스 대응으로 비즈니스를 지킵니다." },
];

function SiteClients() {
  return (
    <div className="clients">
      <div className="site__wrap clients__inner">
        <span className="clients__label">국내 주요 기업과 함께합니다</span>
        <div className="clients__logos">
          <span>SAMSUNG</span><span>LG CNS</span><span>HYUNDAI</span><span>KB</span><span>SK</span><span>POSCO</span>
        </div>
      </div>
    </div>
  );
}

function SiteServices() {
  return (
    <section className="section" id="services">
      <div className="site__wrap">
        <div className="section__head">
          <span className="section__eyebrow">What we do</span>
          <h2 className="section__title">전환의 전 과정을 한 팀에서</h2>
          <p className="section__desc">전략 수립부터 구축, 운영까지. EchoIT는 기업의 디지털·AI 여정을 끊김 없이 연결합니다.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <Card key={s.title} variant="outlined" interactive className="service-card">
              <div className="service-card__icon"><Icon name={s.icon} fill /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-card__link">자세히 보기 <Icon name="arrow_forward" size={16} /></span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.SiteClients = SiteClients;
window.SiteServices = SiteServices;
