$(document).ready(function () {
  //取課程id
  let urlParams = new URLSearchParams(window.location.search);
  var courseID = parseInt(urlParams.get("id")) - 1;

  $.ajax({
    type: "get",
    url: "../json/course.json",
    dataType: "json",
    success: function (data) {
      console.log(data);
      data[courseID].details.map((course) => {
        var card = `
            <div class="coursebg_${course.courseclass}">
            <div class="container course-container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12 align-items-center">
                <a href="${course.filmurl}" class="diagrambox" target="_blank">
                  <div class="hinttop"></div>
                  <div class="diagrambox_img">
                    <img src="./${course.logicdiagram}">
                    <div class="hint">點我播放範例影片&nbsp;<i class="far fa-play-circle"></i></div>
                  </div>
                  
                </a>
              </div>
              <div class="col-lg-8 col-md-12 col-sm-12 mt-lg-0 mt-md-4 mb-lg-0 mb-md-5 mb-sm-5 mb-xs-5 mb-5">
                <h3 class="text-center">${course.fulltitle}</h3>
                <hr class="divider--${course.courseclass}">
                <div class="row" style="justify-content: center;">
                  <div class="col-lg-12 col-lg-offset-2">
                    <div class="course-content">
                      <p>
                        <strong>實驗目的：</strong>${course.purpose}
                      </p>
                      <p>
                        <strong>實驗成果：</strong>${course.results}
                      </p>
                      <p>
                        <strong>使用元件：</strong>${course.ic}
                      </p>
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
      alert("請求失敗");
    },
  });
});
