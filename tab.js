window.addEventListener("DOMContentLoaded", () => {

    let parentBtns = document.querySelector(".btn-box");
    let btns = document.querySelectorAll(".btn");
    let contentBoxes = document.querySelectorAll(".content");


    function hideContent() {
        contentBoxes.forEach((item) => {
            item.classList.remove("active");
        });
        btns.forEach((item) => {
            item.classList.remove('active');
        })
    };

    function showContent(i = 0) {
        contentBoxes[i].classList.add("active");
        btns[i].classList.add("active");
    };




    parentBtns.addEventListener("click", (event) => {
        let targetOne = event.target;

        if (targetOne && targetOne.classList.contains("btn")) {
            btns.forEach((item, index) => {
                if (targetOne == item) {
                    hideContent();
                    showContent(index);
                }
            });
        };
    });

});