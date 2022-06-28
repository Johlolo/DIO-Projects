(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTime(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min}min and ${sec}sec`;
    }
    function yard() {
        function read() {
            return localStorage.yard ? JSON.parse(localStorage.yard) : [];
        }
        function save(vehicles) {
            localStorage.setItem("yard", JSON.stringify(vehicles));
        }
        function add(vehicle, saved) {
            var _a, _b;
            const row = document.createElement("tr");
            row.innerHTML =
                `
                <td>${vehicle.name}</td>
                <td>${vehicle.plate}</td>
                <td>${vehicle.entrance}</td>
                <td>
                    <button class="delete" data-plate="${vehicle.plate}">X</button>
                </td>
            `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remove(this.dataset.plate);
            });
            (_b = $("#yard")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (saved)
                save([...read(), vehicle]);
        }
        function remove(plate) {
            const { entrance, name } = read().find(vehicle => vehicle.plate === plate);
            const time = calcTime(new Date().getTime() - new Date(entrance).getTime());
            if (!confirm(`${name} stayed for ${time}. Do you want to close?`))
                return;
            save(read().filter(vehicle => vehicle.plate !== plate));
            render();
        }
        function render() {
            $("#yard").innerHTML = "";
            const yard = read();
            if (yard.length) {
                yard.forEach((vehicle) => add(vehicle));
            }
        }
        return { read, add, remove, save, render };
    }
    yard().render();
    (_a = $("#register")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const name = (_a = $("#name")) === null || _a === void 0 ? void 0 : _a.value;
        const plate = (_b = $("#plate")) === null || _b === void 0 ? void 0 : _b.value;
        if (!name || !plate) {
            alert("The name and plate fields are mandatory.");
            return;
        }
        yard().add({ name, plate, entrance: new Date().toISOString() }, true);
    });
})();
