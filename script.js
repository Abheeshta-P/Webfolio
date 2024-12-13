
  $(document).ready(function () {
    $(".project-title").hover(
      function () {
        const screenshotUrl = $(this).data("ss");
        $("#modal-image").attr("src", screenshotUrl);
        $("#screenshot-modal").fadeIn();
      },
    );

    $("#close-modal").on("click", function () {
      $("#screenshot-modal").fadeOut();
    });
  });

