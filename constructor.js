

window.addEventListener("load", function() {
    let table = document.getElementById('ap_table_head');
    let template = document.getElementById('figureTemplate');

    function addFigure(event) {
        event.preventDefault();

        let len = document.getElementById("len").value;
        let width = document.getElementById("width").value;

        let pattern = /^\d+$/

        console.log(pattern.test(len));

        if (!(pattern.test(len) && pattern.test(width))) {
            alert("В поля введены не числа");
        }
        else {
            let figure = {
                len,
                width
            };

            let figureList = JSON.parse(localStorage.getItem("figureList")) || [];
            figureList.push(figure);
            localStorage.setItem("figureList", JSON.stringify(figureList));
        }
        displayFigures();
    }

    function displayFigures() {
        let figureList = JSON.parse(localStorage.getItem("figureList")) || [];

        if (table.children.length !== 0) {
            while (table.firstChild) {
                if (table.children.length === 1) {
                    break;
                }
                table.removeChild(table.lastChild);
            }
        }

        for (let i = 0; i < figureList.length; i++) {

            let clonedNode = template.content.cloneNode(true);
            let td = clonedNode.querySelectorAll("td");

            let len_val = figureList[i].len;
            let width_val = figureList[i].width;

            td[0].textContent  = len_val;
            td[1].textContent  = width_val;

            table.appendChild(clonedNode);

        }
    }

    document.getElementById("figureForm").addEventListener("submit", addFigure);
    document.getElementById("figureForm").addEventListener("submit", clearOutput);
    displayFigures();

    function clearOutput() {
        document.getElementById("len").value = "";
        document.getElementById("width").value = "";
    }

    function checkString(string){
        if(typeof string === "string"){
            return isNaN(string);
        }
    }
});