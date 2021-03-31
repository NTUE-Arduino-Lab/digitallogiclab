$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "../json/course.json",
    dataType: "json",
    success: function (data) {
      console.log(data);
      data.map((course) => {
        var card = `<div class="mt-4 col-md-4 col-sm-6 course_cell">
                 <a href="detail.html?id=${course._id}" class="course__link">        
                  <div class="course_title ${course.colorclass}">
                    <strong>${course.title}</strong>${course.entitle}
                  </div>
                  <div class="course_logicdiagram">
                    <img src="${course.img}" alt="" class="course__image">
                  </div>
                </a>
              </div>`;
        $(".course_layout").append(card);
      });
    },
    error: function () {
      alert("請求失敗");
    },
  });
});
