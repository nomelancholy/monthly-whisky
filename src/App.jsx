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
    text: `싱글 몰트 위스키란 스코틀랜드의 엄격한 전통에 따라 오직 단 하나의 증류소에서 100% 맥아만을 사용해 빚어내어, 그 땅의 풍토와 증류소의 고집스러운 개성이 담긴 위스키를 말합니다.`,
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
                          일품이며, 화사하고 화려한 풍미를 선호하는 곳입니다.
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
                      {item.id === "whisky-1" && (
                        <div className="whisky-extra-guide">
                          <p>
                            <strong className="whisky-highlight">증류소:</strong>{" "}
                            글렌드로낙 (Glendronach Distillery)
                          </p>
                          <p>
                            <strong className="whisky-highlight">지역:</strong>{" "}
                            하이랜드 (Highland)
                          </p>
                          <p>
                            <strong className="whisky-highlight">
                              설립 연도:
                            </strong>{" "}
                            1826년
                          </p>
                          <p>
                            <strong className="whisky-highlight">캐스크:</strong>{" "}
                            페드로 히메네즈(PX) & 올로로소(Oloroso) 셰리 캐스크
                          </p>
                          <p>
                            <strong className="whisky-highlight">특징:</strong>{" "}
                            '셰리 캐스크 숙성의 명가'답게 두 종류의 셰리 오크통을
                            절묘하게 블렌딩합니다. 달콤한 디저트 와인 같은 PX
                            캐스크와 견과류의 고소함이 특징인 올로로소 캐스크가
                            만나 독보적인 묵직함과 깊이를 완성합니다.
                          </p>
                          <p>
                            <strong className="whisky-highlight">
                              테이스팅 노트:
                            </strong>{" "}
                            입안을 가득 채우는 달콤한 건포도와 끈적한 시럽, 다크
                            초콜릿의 풍미 뒤로 시나몬과 고소한 견과류의
                            스파이시함이 조화롭게 이어집니다
                          </p>
                        </div>
                      )}
                      {item.id === "whisky-2" && (
                        <div className="whisky-extra-guide">
                          <p>
                            <strong className="whisky-highlight">증류소:</strong>{" "}
                            글렌 그란트 (Glen Grant Distillery)
                          </p>
                          <p>
                            <strong className="whisky-highlight">지역:</strong>{" "}
                            스페이사이드 (Speyside)
                          </p>
                          <p>
                            <strong className="whisky-highlight">
                              설립 연도:
                            </strong>{" "}
                            1840년
                          </p>
                          <p>
                            <strong className="whisky-highlight">캐스크:</strong>{" "}
                            엑스 버번 캐스크 (Ex-Bourbon Cask)
                          </p>
                          <p>
                            <strong className="whisky-highlight">특징:</strong>{" "}
                            가늘고 긴 모양의 독특한 증류기를 사용하여 불순물을
                            걸러내고, 스카치 위스키 중 가장 깨끗하고 화사한 원액을
                            추출하기로 유명합니다.
                          </p>
                          <p>
                            <strong className="whisky-highlight">
                              테이스팅 노트:
                            </strong>{" "}
                            잘 익은 사과와 배의 상큼한 과육, 화사한 꽃향기 뒤로
                            이어지는 부드러운 바닐라의 여운을 즐길 수 있습니다.
                          </p>
                        </div>
                      )}
                      {item.id === "whisky-3" && (
                        <div className="whisky-extra-guide">
                          <p>
                            <strong className="whisky-highlight">증류소:</strong>{" "}
                            보모어 (Bowmore Distillery)
                          </p>
                          <p>
                            <strong className="whisky-highlight">지역:</strong>{" "}
                            아일라 (Islay)
                          </p>
                          <p>
                            <strong className="whisky-highlight">
                              설립 연도:
                            </strong>{" "}
                            1779년
                          </p>
                          <p>
                            <strong className="whisky-highlight">캐스크:</strong>{" "}
                            버번 & 셰리 캐스크 (Bourbon & Sherry Mix)
                          </p>
                          <p>
                            <strong className="whisky-highlight">특징:</strong>{" "}
                            아일라섬에서 가장 오래된 역사를 가진 증류소입니다.
                            전통적인 플로어 몰팅 방식을 유지하며, 아일라 특유의
                            강렬한 피트 향을 부드럽고 우아하게 풀어낸 '피트 입문의
                            정석'으로 불립니다.
                          </p>
                          <p>
                            <strong className="whisky-highlight">
                              테이스팅 노트:
                            </strong>{" "}
                            입안 가득 퍼지는 은은한 훈연 향과 상큼한 레몬,
                            달콤한 꿀과 다크 초콜릿이 바다의 짭조름한 내음과
                            완벽한 밸런스를 이룹니다.
                          </p>
                        </div>
                      )}
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
                    <p className="guide-title">[Single Malt Scotch Whisky]</p>
                    <p>
                      <strong className="whisky-highlight">
                        글렌피딕 12년 (Glenfiddich 12y):
                      </strong>{" "}
                      1963년, 블렌디드의 시대에 맞서 세상에 처음으로 '싱글
                      몰트'의 존재를 알린 개척자입니다. 서양배의 상큼함과
                      은은한 꿀맛이 조화로운 전 세계 판매 1위 위스키입니다.
                    </p>

                    <p className="guide-title">[Sherry Cask]</p>
                    <p>
                      글렌드로낙 12년의 묵직한 달콤함이 좋았다면, 이 리스트를
                      따라가 보세요.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        글렌파클라스 105 (Glenfarclas 105 CS):
                      </strong>{" "}
                      물을 섞지 않은 원액 그대로의 강렬한 타격감과 진한 셰리
                      향의 정수.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        맥캘란 12년 셰리 오크 (Macallan 12y Sherry Oak):
                      </strong>{" "}
                      '위스키계의 롤스로이스'. 가장 정제되고 귀족적인 셰리의
                      풍미를 보여줍니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        글렌터렛 12년 (The Glenturret 12y):
                      </strong>{" "}
                      장인 정신이 깃든 묵직한 바디감과 복합적인 과일 향의
                      예술적 조화.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        로얄 브라클라 12년 (Royal Brackla 12y):
                      </strong>{" "}
                      왕실이 허락한 최초의 이름. 우아하고 화사한 셰리의
                      끝판왕입니다.
                    </p>

                    <p className="guide-title">[Bourbon Cask]</p>
                    <p>
                      글렌 그란트 12년의 깔끔함과 화사함에 매료된 분들을 위한
                      선택입니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        글렌카담 10년 (Glencadam 10y):
                      </strong>{" "}
                      색소를 넣지 않은 순수한 황금빛. 갓 구운 빵의 고소함과
                      레몬의 상큼함이 돋보입니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        부나하벤 12년 (Bunnahabhain 12y):
                      </strong>{" "}
                      피트 없는 아일라 위스키의 반전 매력. 견과류의 고소함과
                      은은한 짠맛이 매력적입니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        딘스턴 12년 (Deanston 12y):
                      </strong>{" "}
                      밀랍 같은 부드러운 질감과 꿀, 바닐라의 풍부한 단맛이
                      일품입니다.
                    </p>

                    <p className="guide-title">[Peat]</p>
                    <p>
                      보모어 12년의 스모키함이 궁금증을 자극했다면, 이제 진짜
                      '피트의 늪'으로 초대합니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        탈리스커 10년 (Talisker 10y):
                      </strong>{" "}
                      "바다가 만든 위스키". 강렬한 후추의 매콤함과 바다 내음이
                      폭발합니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        아드벡 우거다일 (Ardbeg Uigeadail):
                      </strong>{" "}
                      강렬한 피트와 달콤한 셰리의 만남. '단짠'의 완벽한 조화를
                      보여주는 괴물 같은 술입니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        라프로익 10년 (Laphroaig 10y):
                      </strong>{" "}
                      "호불호의 끝판왕". 강한 병원 소독약 냄새 뒤에 숨겨진
                      달콤한 반전 매력에 빠져보세요.
                    </p>

                    <p className="guide-title">[Double Wood Cask]</p>
                    <p>
                      버번의 화사함과 셰리의 달콤함을 동시에 잡고 싶을 때.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        발베니 12년 더블우드 (Balvenie 12y DoubleWood):
                      </strong>{" "}
                      설명이 필요 없는 입문자의 교과서. 부드러운 꿀맛과 나무
                      향의 완벽한 균형.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        아벨라워 12년 (Aberlour 12y):
                      </strong>{" "}
                      더 진하고 꾸덕한 느낌의 더블 캐스크를 원한다면 최고의
                      선택입니다.
                    </p>

                    <p className="guide-title">[Blended Whisky]</p>
                    <p>여러 증류소의 장점만을 모아 만든 설계자의 위스키.</p>
                    <p>
                      <strong className="whisky-highlight">
                        조니워커 그린라벨 (Johnnie Walker Green Label):
                      </strong>{" "}
                      4가지 싱글 몰트만 섞은 '블렌디드 몰트'. 신선함과
                      스모키함을 동시에 즐길 수 있는 최고의 가성비입니다.
                    </p>
                    <p>
                      <strong className="whisky-highlight">
                        듀워스 12년 (Dewar's 12y):
                      </strong>{" "}
                      로얄 브라클라가 숨어있는 술. 부드럽고 매끄러운 목 넘김이
                      일품인 전 세계적인 베스트셀러입니다.
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
