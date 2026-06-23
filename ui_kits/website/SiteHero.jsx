// EchoIT site — hero with brand gradient panel + floating AX metric cards.
const { Button, Icon } = window.EchoITDesignSystem_36408b;

function SiteHero({ onContact }) {
  return (
    <section className="hero">
      <div className="site__wrap hero__grid">
        <div>
          <span className="hero__eyebrow"><Icon name="auto_awesome" size={16} fill /> AI TRANSFORMATION</span>
          <h1>비즈니스의 모든 순간에<br /><span className="accent">AX</span>를 더하다</h1>
          <p className="hero__sub">
            EchoIT는 30년의 SI 역량과 자체 AI 플랫폼으로 기업의 일하는 방식을 바꿉니다.
            컨설팅부터 구축·운영까지, 지능형 전환의 전 과정을 함께합니다.
          </p>
          <div className="hero__cta">
            <Button variant="filled" icon="rocket_launch" onClick={onContact}>AX 도입 문의</Button>
            <Button variant="outlined" trailingIcon="arrow_forward" href="#ax">솔루션 둘러보기</Button>
          </div>
          <div className="hero__stats">
            <div className="hero__stat"><div className="n">30년+</div><div className="l">엔터프라이즈 SI 경험</div></div>
            <div className="hero__stat"><div className="n">1,200+</div><div className="l">AX 전환 프로젝트</div></div>
            <div className="hero__stat"><div className="n">98%</div><div className="l">고객 재계약률</div></div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__panel"></div>
          <div className="hero__float hero__float--a">
            <div className="ttl"><Icon name="insights" size={20} fill /> 업무 자동화율</div>
            <div className="big">+62%</div>
            <div className="sub">도입 6개월 평균 향상</div>
          </div>
          <div className="hero__float hero__float--b">
            <div className="ttl"><Icon name="smart_toy" size={20} fill /> AI 에이전트</div>
            <div className="big">24/7</div>
            <div className="sub">무중단 지능형 운영</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.SiteHero = SiteHero;
