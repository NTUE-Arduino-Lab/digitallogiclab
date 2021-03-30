$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "../json/course.json",
    dataType: "json",
    success: function (data) {
      console.log(data);
      data.map((course) => {
        var card = ` <div class="mt-4 col-md-4 col-sm-6 course_cell">
                <div class="course_title color_tea">
                  ${course.title}<br />${course.entitle}
                </div>
                <div class="course_logicdiagram">
                  <a href="${course.details[0].filmurl}" class="course__link" target="_blank">
                    <img src="${course.img}" alt="" class="course__image">
                    <p class="color_tea"></p>
                  </a>
                </div>
              </div>`;
        $(".course_layout").append(card);
        $(".course_cell").on('click',function(){

        })
      });
    },
    error: function () {
      alert("請求失敗");
    },
  });
});
