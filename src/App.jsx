import { useState } from "react";
import "./App.css";
import scottLandMap from "./assets/scott-land.jpeg";

const conceptItems = [
  {
    id: "concept-1",
    label: "01 / CONCEPT",
    title: "Whisky: 위스키의 정의",
    text: `위스키는 곡물을 발효시킨 후 증류하여 오크통에서 숙성시킨 술을 말합니다.
    
크게 싹 튼 보리인 맥아를 재료로 한 ‘몰트 위스키’와
옥수수, 밀, 호밀 등 그 외 곡물로 만든 ‘그레인 위스키’로

나눌 수 있습니다.
`,
    meta: [],
  },
  {
    id: "concept-2",
    label: "02 / CATEGORY",
    title: "Single Malt: 작가주의 위스키",
    text: `과거 주류 시장이 거대화되고 세계화되는 과정에서, 많은 주류사는 일정한 품질 관리(QC)와 상업적 안정성을 위해 여러 증류소의 원액을 섞은 '블렌디드 위스키'를 주력으로 생산해 왔습니다.

대표적인 블렌디드 위스키: 발렌타인, 조니워커, 시바스 리갈 등

물론 블렌디드 위스키 역시 훌륭한 완성도를 자랑하지만, '싱글몰트 위스키'는 오직 단 하나의 증류소에서 맥아(싹 틔운 보리)만을 사용해 만듭니다. 덕분에 섞이지 않은 그 증류소만의 고유한 풍토와 고집스러운 개성을 가장 순수하게 만날 수 있다는 특별함이 있습니다.`,
    meta: [],
  },
  {
    id: "concept-3",
    label: "03 / ORIGIN",
    title: "Scotch: 전통의 규격",
    text: `스카치 위스키는 스코틀랜드 영토 내에서 증류되고 최소 3년 이상 오크통에서 숙성되어야 하는 엄격한 법적 기준을 따릅니다.
하일랜드, 로우랜드, 아일레이 등 지역에 따라 피트향의 강도와 풍미의 결이 확연히 달라지는 것이 특징입니다.`,
    meta: [],
  },
  {
    id: "concept-4",
    label: "04 / STYLE",
    title: "Single Malt Scotch Whisky",
    text: `싱글 몰트 위스키란 스코틀랜드의 엄격한 전통에 따라 오직 단 하나의 증류소에서 100% 맥아만을 사용해 빚어내어, 
    그 땅의 풍토와 증류소의 고집스러운 개성이 담긴 위스키를 말합니다.`,
    meta: [],
  },
];

const whiskyItems = [
  {
    id: "whisky-1",
    label: "01 / THIS MONTH",
    title: "첫번째 위스키",
    name: "GLEN DRONACH 12",
  },
  {
    id: "whisky-2",
    label: "02 / THIS MONTH",
    title: "두번째 위스키",
    name: "GLEN GRANT 12",
  },
  {
    id: "whisky-3",
    label: "03 / THIS MONTH",
    title: "세번째 위스키",
    name: "BOWMORE 12",
  },
];

function App() {
  const [activeId, setActiveId] = useState(null);
  const [unlockedWhisky, setUnlockedWhisky] = useState({});

  const toggleItem = (id, isLocked) => {
    if (isLocked) return;
    setActiveId((prev) => (prev === id ? null : id));
  };

  const unlockWhiskyItem = (id) => {
    setUnlockedWhisky((prev) => ({ ...prev, [id]: true }));
    setActiveId(id);
  };

  return (
    <div className="app">
      <div className="stratified-bg" />

      <header>
        <p className="hero-logos">
          <a
            className="hero-partner-link"
            href="https://dayoff.today/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOT (Day Off Today)
          </a>
          <span className="hero-cross" aria-hidden="true">
            ×
          </span>
          <a
            className="hero-partner-link"
            href="https://takeknowledge-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take Knowledge
          </a>
        </p>
        <h1 className="hero-title">Monthly Whisky</h1>
        <p className="hero-tagline">Single Malt Whisky</p>
        <div className="scroll-indicator">Scroll to explore</div>
      </header>

      <main className="strata-container">
        {conceptItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div
              key={item.id}
              className={`strata-item ${isActive ? "active" : ""}`}
            >
              <button
                type="button"
                className="strata-trigger"
                onClick={() => toggleItem(item.id, false)}
              >
                <div>
                  <span className="strata-label">{item.label}</span>
                  <h2 className="strata-title">{item.title}</h2>
                </div>
                <span className="plus-icon">{isActive ? "−" : "+"}</span>
              </button>
              <div className="strata-content">
                <div
                  className={`strata-inner ${
                    item.meta.length === 0 ? "strata-inner-full" : ""
                  }`}
                >
                  <div className="strata-text">{item.text}</div>
                  {item.meta.length > 0 && (
                    <div className="strata-meta">
                      {item.meta.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  )}
                  {item.id === "concept-3" && (
                    <div className="strata-meta">
                      <img
                        src={scottLandMap}
                        alt="스코틀랜드 위스키 지역 지도"
                        className="scotch-map"
                      />
                      <div className="scotch-region-list">
                        <p>
                          <strong>
                            하이랜드 (Highland) | 넓고 깊은 대지의 맛
                          </strong>
                          <br />섬 지역을 포함한 스코틀랜드의 거대한 북쪽
                          지대입니다. 높은 지형만큼이나 증류소마다 다양하고 개성
                          넘치는 풍미를 자랑하며, 묵직하고 남성적인 힘이
                          느껴지는 위스키가 많습니다.
                        </p>
                        <p>
                          <strong>
                            로랜드 (Lowland) | 부드러운 평원의 미학
                          </strong>
                          <br />
                          지형이 낮고 온화한 남쪽 지역입니다. 전통적으로 3회
                          증류를 선호하여 가볍고 부드러운 스타일이 특징이며,
                          위스키 입문자가 가장 접근하기 쉬운 섬세한 꽃향기와
                          풀내음을 머금고 있습니다.
                        </p>
                        <p>
                          <strong>
                            스페이사이드 (Speyside) | 위스키의 심장, 달콤한
                            안식처
                          </strong>
                          <br />
                          깨끗하고 풍부한 물이 흐르는 위스키의 성지입니다.
                          누구나 사랑할 수밖에 없는 부드럽고 달콤한 과일 향이
                          일품이며, 오늘 우리가 마실 '글렌 그란트'처럼 화사하고
                          화려한 풍미를 선호하는 곳입니다.
                        </p>
                        <p>
                          <strong>
                            캠벨타운 (Campbeltown) | 잊혀지지 않는 위스키의 수도
                          </strong>
                          <br />
                          과거 전 세계 위스키의 수도로 불렸던 영광의 장소입니다.
                          현재는 단 3개의 증류소만이 남아 명맥을 잇고 있지만,
                          특유의 짭조름한 바다 내음과 오일함이 섞인 독보적인
                          매력으로 매니아들의 큰 사랑을 받습니다.
                        </p>
                        <p>
                          <strong>
                            아일라 (Islay) | 거친 파도와 이탄(Peat)의 향기
                          </strong>
                          <br />
                          강렬한 연기 향과 소독약 냄새로 대변되는{" "}
                          <strong>이탄(Peat)</strong>의 고장입니다. 거친
                          바닷바람을 맞으며 숙성되어 훈연 향과 짭짤한 해조류의
                          풍미가 조화를 이루는, 위스키의 가장 강렬한 얼굴을 만날
                          수 있는 곳입니다.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="whisky-showcase">
          {whiskyItems.map((item) => {
            const isUnlocked = unlockedWhisky[item.id];
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                className={`strata-item whisky-item ${isUnlocked ? "" : "locked"} ${isActive ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="strata-trigger"
                  onClick={() => toggleItem(item.id, !isUnlocked)}
                >
                  <div>
                    <span className="strata-label">{item.label}</span>
                    <h2 className="strata-title">{item.title}</h2>
                  </div>
                  <span className="plus-icon">{isActive ? "−" : "+"}</span>
                </button>
                {!isUnlocked && (
                  <div className="whisky-unlock">
                    <button
                      type="button"
                      className="whisky-unlock-btn"
                      onClick={() => unlockWhiskyItem(item.id)}
                    >
                      위스키 공개
                    </button>
                  </div>
                )}
                <div className="strata-content">
                  <div className="strata-inner whisky-strata-inner">
                    <div className="strata-text">
                      <p className="whisky-name-display">{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className={`strata-item ${activeId === "whisky-guide" ? "active" : ""}`}
          >
            <button
              type="button"
              className="strata-trigger"
              onClick={() => toggleItem("whisky-guide", false)}
            >
              <div>
                <span className="strata-label">04 / RECOMMENDATION</span>
                <h2 className="strata-title">그 외 도전해볼만한 위스키</h2>
              </div>
              <span className="plus-icon">
                {activeId === "whisky-guide" ? "−" : "+"}
              </span>
            </button>
            <div className="strata-content">
              <div className="strata-inner whisky-strata-inner">
                <div className="strata-text">
                  <div className="whisky-extra-guide">
                    <p className="guide-title">
                      1. 글렌 그란트 12년이 좋았다면? (청량·화사·과일)
                    </p>
                    <p>
                      가볍고 섬세한 버번 캐스크 특유의 꽃향기와 과일 맛을
                      선호하는 분들을 위한 추천입니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        글렌리벳 12년 (The Glenlivet 12y):
                      </strong>{" "}
                      싱글몰트의 정석이라 불리며, 글렌 그란트보다 조금 더
                      부드럽고 잘 익은 바나나, 파인애플 같은 열대 과일 향이
                      매력적입니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        올드 푸트니 12년 (Old Pulteney 12y):
                      </strong>{" "}
                      '바다의 위스키'라 불립니다. 글렌 그란트처럼 화사하지만
                      끝맛에서 살짝 느껴지는 짭조름한 소금기가 아주 매력적인
                      반전을 줍니다.
                    </p>

                    <p className="guide-title">
                      2. 글렌드로낙 12년이 좋았다면? (묵직·달콤·건과일)
                    </p>
                    <p>
                      꾸덕한 셰리 캐스크의 진한 풍미와 다크 초콜릿 같은 무게감을
                      좋아하는 분들을 위한 추천입니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        글렌파클라스 12년 (Glenfarclas 12y):
                      </strong>{" "}
                      글렌드로낙과 함께 셰리 3대장으로 꼽힙니다. 조금 더
                      타격감이 있고 스파이시하며, 전통적인 셰리의 풍미를
                      정직하게 보여줍니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        탐두 12년 (Tamdhu 12y):
                      </strong>{" "}
                      100% 셰리 캐스크 숙성을 고집하는 브랜드입니다.
                      글렌드로낙보다 조금 더 화사하고 베리류의 상큼함이 섞인
                      셰리 맛을 느낄 수 있습니다.
                    </p>

                    <p className="guide-title">
                      3. 보모어 12년이 좋았다면? (스모키·해조류·훈연)
                    </p>
                    <p>
                      적당한 피트(Peat) 향에 매료된 분들을 위해, 조금 더 강도가
                      높은 '진짜 피트'의 세계로 안내합니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        라가불린 16년 (Lagavulin 16y):
                      </strong>{" "}
                      피트 위스키의 귀족입니다. 보모어보다 훨씬 묵직하고 깊은 탄
                      맛과 함께, 마치 고기를 구운 듯한 육중한 감칠맛을 경험할 수
                      있습니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        탈리스커 10년 (Talisker 10y):
                      </strong>{" "}
                      "바다가 만든 위스키"라는 별명답게 후추 같은 매콤함과
                      강렬한 바다 내음이 특징입니다. 피트 입문자들이 가장
                      열광하는 술 중 하나입니다.
                    </p>

                    <p className="guide-title">
                      4. 그 외 도전해볼 만한 매력적인 리스트
                    </p>
                    <p className="guide-subtitle">
                      🌓 더블 우드/캐스크 (두 가지 맛의 조화)
                    </p>
                    <p>버번과 셰리의 장점을 모두 잡고 싶을 때 추천합니다.</p>
                    <p>
                      <strong className="whisky-highlight">
                        발베니 12년 더블우드 (Balvenie 12y DoubleWood):
                      </strong>{" "}
                      아마 입문자들이 가장 좋아할 술입니다. 부드러운 꿀맛과
                      은은한 오크 향이 조화로워 실패가 없습니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        아벨라워 12년 (Aberlour 12y):
                      </strong>{" "}
                      셰리의 달콤함이 버번의 바닐라와 아주 진하게 섞여 있어,
                      글렌피딕보다 훨씬 진한 맛을 선호하는 분들께 좋습니다.
                    </p>

                    <p className="guide-subtitle">
                      🤝 블렌디드 위스키 (최상의 밸런스)
                    </p>
                    <p>
                      여러 증류소의 원액을 섞어 만든 만큼, 맛의 빈틈이 없는
                      완성도를 자랑합니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        조니워커 그린라벨 (Johnnie Walker Green Label):
                      </strong>{" "}
                      블렌디드지만 '몰트 위스키'들만 섞어 만든 블렌디드
                      몰트입니다. 탈리스커와 링크우드 등이 섞여 있어 화사함과
                      스모키함을 동시에 느낄 수 있는 최고의 가성비 술입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>&copy; 2026 Monthly Whisky. DRINK RESPONSIBLY.</footer>
    </div>
  );
}

export default App;
