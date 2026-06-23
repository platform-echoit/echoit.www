// EchoIT site — AX solution showcase with tabs + animated mock panel, then impact stats.
const { Tabs, Chip, Icon } = window.EchoITDesignSystem_36408b;

const AX_TABS = {
  agent: {
    label: "AI 에이전트", icon: "smart_toy",
    features: [
      { icon: "support_agent", h: "지능형 상담 자동화", p: "고객 문의의 78%를 AI 에이전트가 즉시 응대하고, 복잡한 건만 상담사에게 전달합니다." },
      { icon: "description", h: "문서 지능화 (RAG)", p: "사내 문서를 학습한 검색·요약 어시스턴트로 지식 탐색 시간을 절반으로 줄입니다." },
      { icon: "bolt", h: "워크플로 자동화", p: "반복 업무를 에이전트가 처리해 핵심 업무에 집중할 수 있게 합니다." },
    ],
    bars: [82, 64, 47, 90],
  },
  data: {
    label: "데이터 플랫폼", icon: "hub",
    features: [
      { icon: "insights", h: "통합 데이터 레이크", p: "흩어진 데이터를 한곳에 모아 실시간 분석과 AI 학습의 기반을 만듭니다." },
      { icon: "query_stats", h: "셀프서비스 BI", p: "현업이 직접 묻고 답을 얻는 자연어 분석 환경을 제공합니다." },
      { icon: "verified", h: "데이터 거버넌스", p: "품질·보안·접근권한을 일관되게 관리해 신뢰할 수 있는 데이터를 보장합니다." },
    ],
    bars: [55, 88, 72, 40],
  },
  cloud: {
    label: "클라우드", icon: "cloud",
    features: [
      { icon: "swap_horiz", h: "무중단 마이그레이션", p: "서비스 중단 없이 레거시 시스템을 클라우드로 이전합니다." },
      { icon: "tune", h: "비용 최적화 (FinOps)", p: "사용량을 분석해 평균 34%의 클라우드 비용을 절감합니다." },
      { icon: "dns", h: "멀티 클라우드 운영", p: "AWS·Azure·GCP를 단일 콘솔에서 통합 운영합니다." },
    ],
    bars: [70, 50, 95, 60],
  },
};

function SiteAX() {
  const [tab, setTab] = React.useState("agent");
  const data = AX_TABS[tab];
  return (
    <section className="section section--alt" id="ax">
      <div className="site__wrap">
        <div className="section__head">
          <span className="section__eyebrow">AX Platform</span>
          <h2 className="section__title">EchoIT.AX — 일하는 방식을 바꾸는 지능</h2>
          <p className="section__desc">검증된 AI 빌딩블록을 조합해 기업 환경에 맞는 전환을 빠르게 실현합니다.</p>
        </div>
        <div style={{ maxWidth: 460, marginBottom: 8 }}>
          <Tabs value={tab} onChange={setTab} tabs={Object.entries(AX_TABS).map(([v, t]) => ({ value: v, label: t.label, icon: t.icon }))} />
        </div>
        <div className="ax__grid">
          <div className="ax__panel">
            <div className="ax__mock">
              <div className="ax__mock-row" style={{ justifyContent: "space-between" }}>
                <div className="ax__mock-row"><Icon name={data.icon} fill style={{ color: "var(--md-sys-color-primary)" }} /><strong style={{ font: "600 15px/1 var(--md-sys-typescale-font-plain)" }}>{data.label} 대시보드</strong></div>
                <Chip type="assist" icon="circle" label="실시간" />
              </div>
              {data.bars.map((w, i) => (
                <div className="ax__mock-row" key={i}>
                  <div style={{ width: 64, font: "500 12px/1 var(--md-sys-typescale-font-mono)", color: "var(--md-sys-color-on-surface-variant)" }}>{["분석","처리","응답","정확"][i]}</div>
                  <div style={{ flex: 1, height: 10, borderRadius: 99, background: "var(--md-sys-color-surface-container-high)" }}>
                    <div className="ax__mock-bar" style={{ width: w + "%" }}></div>
                  </div>
                  <div style={{ width: 40, textAlign: "right", font: "600 12px/1 var(--md-sys-typescale-font-mono)", color: "var(--md-sys-color-primary)" }}>{w}%</div>
                </div>
              ))}
              <div style={{ marginTop: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Chip type="assist" icon="bolt" label="자동화 활성" selected />
                <Chip type="assist" icon="shield" label="보안 정상" />
                <Chip type="assist" icon="schedule" label="SLA 99.9%" />
              </div>
            </div>
          </div>
          <div>
            <div className="ax__features">
              {data.features.map((f) => (
                <div className="ax__feature" key={f.h}>
                  <Icon name={f.icon} fill />
                  <div><h4>{f.h}</h4><p>{f.p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteImpact() {
  const items = [
    { n: "62%", l: "평균 업무 자동화율 향상" },
    { n: "34%", l: "클라우드 운영비 절감" },
    { n: "1,200+", l: "누적 AX 전환 프로젝트" },
    { n: "99.9%", l: "관제 서비스 가동률" },
  ];
  return (
    <section className="section" id="impact">
      <div className="site__wrap">
        <div className="section__head" style={{ marginBottom: 56 }}>
          <span className="section__eyebrow">Impact</span>
          <h2 className="section__title">숫자로 증명하는 전환의 결과</h2>
        </div>
        <div className="impact">
          {items.map((it) => (
            <div className="impact__item" key={it.l}>
              <div className="impact__n">{it.n}</div>
              <div className="impact__l">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.SiteAX = SiteAX;
window.SiteImpact = SiteImpact;
