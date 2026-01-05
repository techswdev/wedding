export default function App() {
  return (
    <div style={{display :'flex', flex : '1 1 0%', flexDirection :'column', height :'100%'}}>

   
    <div className="">

   
    <div className="flex justify-center mx-auto" style={{ backgroundColor: '#333' }}>
      <div className="card-wrapper relative invitation">
        <div className="relative max-w-[44rem]">
          <div id="cardview" className="base-section relative no-scrollbar large SunBatang style3">
            <div id="card-top"></div>
            
            {/* 1. Self-closing 태그 수정 */}
            <audio loop src="https://cdn2.makedear.com/homepage/media/new/4.mp3" muted />

            <div className="absolute right-6 z-[9999] transition-all duration-1000 ease-out top-0 opacity-0 pointer-events-none">
              <button className="p-4 bg-[#fafafa] bg-opacity-80 rounded-full flex items-center justify-center drop-shadow-sm hover:bg-opacity-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-[1.25em] h-[1.25em] text-black">
                  <path d="M16 9C16.5 9.5 17 10.5 17 12C17 13.5 16.5 14.5 16 15M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" />
                </svg>
              </button>
            </div>

            {/* 2. Style 객체로 수정 */}
            <div className="gap-y-4 fixed bottom-[4em] left-1/2 -translate-x-1/2 z-[9999] flex flex-wrap items-center justify-evenly w-[44rem]" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
              <button className="py-2 px-6 flex items-center bg-white border border-[#eee] drop-shadow-sm rounded-full cursor-pointer">
                {/* SVG 내용 생략 (기존 코드 유지하되 class->className) */}
                <div>큰 글씨</div>
              </button>
            </div>

            {/* 중간 생략... (className 적용 필수) */}

            <div className="overflow-hidden bg-white">
              <section id="section-main" className="base-section relative select-none !py-0 py-16 large SunBatang style3 bg-id-0" style={{ zIndex: 0 }}>
                <div className="w-full">
                  <div className="w-full h-full break-all">
                    <div className="flex flex-col items-center w-full h-full" style={{ backgroundColor: '#ffffff' }}>
                      <div className="absolute top-0 w-full h-full overflow-hidden">
                        <img draggable="false" className="absolute top-0 left-0 w-full select-none pointer-events-none call-out" style={{ zIndex: 3, maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)' }} src="https://cdn2.makedear.com/homepage/img/effect/new1/1.png" />
                      </div>

                      {/* 메인 이미지 영역 */}
                      <div className="relative w-full">
                        <img draggable="false" className="w-full object-cover select-none pointer-events-none call-out" 
                        src="/public/top1.png" alt="main" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 달력 섹션 시작 - 짝이 맞지 않던 부분 교정 */}
              <section className="py-16">
                <table className="mx-auto w-full table-fixed">
                  <thead>
                    <tr>
                      <th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* 16일 (디데이 표시) */}
                      <td className="relative">
                        <div className="flex justify-center items-center text-white bg-pink-400 rounded-full w-8 h-8 mx-auto">16</div>
                        <div className="text-xs text-center">오후 1시</div>
                      </td>
                      {/* 끊겼던 17일 부분 보충 */}
                      <td><div className="text-center">17</div></td>
                      <td></td><td></td><td></td><td></td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>

          </div> {/* cardview end */}
        </div> {/* max-w-[44rem] end */}
      </div> {/* card-wrapper end */}
    </div> // main div end
    </div>
    </div>
  );
}