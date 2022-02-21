import storeSearchterm from '../scripts/search.js';

function sidebar() {

    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";

    const heading = document.createElement("div");
    heading.className = "heading";
    heading.innerText = "Masai News";
    heading.onclick = () => window.location.href = "/index.html";

    const search = document.createElement("input");
    search.className = "search-box";
    search.placeholder = "Search";
    search.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            const searchText = (search.value || "").toLowerCase();
            storeSearchterm(searchText);
            window.location.href = "/search.html";
        }
    });

    sidebar.appendChild(heading);
    sidebar.appendChild(search);

    return sidebar;
}

export default sidebar