$(document).ready(function () {
  //取課程id
  let urlParams = new URLSearchParams(window.location.search);
  var courseID = parseInt(urlParams.get("id"));

  $.ajax({
    type: "get",
    url: "../json/course.json",
    dataType: "json",
    success: function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i]._id == courseID) {
          console.log("有進來")
          data[i].details.map((course) => {
            var card = `<div class="container course-c">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12 align-items-center">
                <a href="${course.filmurl}" class="diagrambox" target="_blank">
                  <div class="hinttop"></div>
                  <img src="./${course.logicdiagram}">
                  <div class="hint">點我播放範例影片</div>
                </a>
              </div>
              <div class="col-lg-8 col-md-12 col-sm-12 mt-lg-0 mt-md-4">
                <h3 class="text-center">${course.fulltitle}</h3>
                <hr class="divider--dark">
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
                        <strong>使用ic：</strong>${course.ic}
                      </p>
                    </div>
      
                  </div>
                </div>
              </div>
            </div>
          </div>`;
            $(".detail").append(card);
          });
        }
      }
    },
    error: function () {
      alert("請求失敗");
    },
  });
});
