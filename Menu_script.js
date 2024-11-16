let lists = document.querySelectorAll(".menu_option li");
let menuContainer = document.querySelector(".menu_container");
let menus = document.querySelectorAll(".all");

lists.forEach((list) => {
    list.addEventListener("click", () => {
        lists.forEach((lst) => {
            lst.classList.remove("active");
        });
        list.classList.add("active");
        //menu change code
        let dataFilter = list.getAttribute("data-filter").slice(1);
        menus.forEach((menu) => {
            menu.classList.remove("show");
            menu.classList.add("hide");
            setTimeout(() => {
                if (menu.classList.contains(dataFilter)) {
                    menu.classList.remove('hide');
                    menu.classList.add('show');
                }
            }, 100)
        });
    });
});