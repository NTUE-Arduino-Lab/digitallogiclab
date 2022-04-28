$(document).ready(function () {
  //取得課程id
  let urlParams = new URLSearchParams(window.location.search);
  var courseID = parseInt(urlParams.get("id"));


  
  $.ajax({
    type: "get",
    url: "json/course.json",
    dataType: "json",
    success: function (data) {
      //生成實驗內容詳細
      $(".loading").css("display", "none");
      data[courseID].details.map((course) => {
        // course.description等等內容前面新增了判斷，會先確認json有內容
        //2022/3/11 By賴光韜
        var card = `
          <div class="coursebg_${course.courseclass}">
            <div class="container course-container">
              <div class="row">
                <!-- diagram & filmlink -->
                <div class="diagrambox-cont col-lg-4 col-md-12 col-sm-12 align-items-center ">
                ${course.filmurl.map((url) => {
                  return `
                  <a href="${url}" class="diagrambox" target="_blank">
                    <div class="diagrambox_hinttop"></div>
                    <div class="diagrambox_imgbox">
                      <img src="./${course.logicdiagram}">
                      <div class="diagrambox_hint">點我播放範例影片&nbsp;<i class="far fa-play-circle"></i></div>
                    </div>
                  </a>
               
                `;
                }).join('')}
                </div>
                <!-- detail area -->
                <div class="col-lg-8 col-md-12 col-sm-12 mt-lg-0 mt-md-4 mb-lg-0 mb-md-5 mb-sm-5 mb-xs-5 mb-5">
                  <h3 class="text-center">${course.fulltitle}</h3>
                  <hr class="divider--${course.courseclass}">
                  <div class="row" style="justify-content: center;">
                    <div class="col-lg-12 col-lg-offset-2">
                      <div class="course-content">
                      ${
                        course.description
                          ? ` <p>${course.description} </p>`
                          : ""
                      }
                      ${
                        course.purpose
                          ? `
                        <p>
                          <strong>實驗目的：</strong>${course.purpose}
                        </p>`
                          : ""
                      }
                        ${
                          course.results
                            ? `
                        <p>
                          <strong>實驗成果：</strong>${course.results}
                        </p>`
                            : ""
                        }
                        ${
                          course.ic
                            ? `
                        <p>
                          <strong>使用元件：</strong>${course.ic}
                        </p>`
                            : ""
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        $(".detail").append(card);
      });
    },
    error: function () {
      alert("請求實驗內容失敗");
    },
  });

// $('.course-content').hover(function(){
//   $(".diagrambox").css("position","relative");
//   console.log("apple");
// })

});
