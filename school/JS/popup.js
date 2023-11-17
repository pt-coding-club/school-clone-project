function pop()
        {
	        window.open("Popup.html", "pop", "width=730,height=320,history=no,resizable=no,status=no,scrollbars=yes,menubar=no")
        }

// 오늘하루 보지 않기 버튼
$(".full-popup").on("click", ".popup-close", function () {
        handleCookie.setCookie("today", "y", 1);
        $(this).parents(".full-popup.on").removeClass("on");
      });