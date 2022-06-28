interface Vehicle {
    name: string;
    plate: string;
    entrance: Date | string;
}

(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function calcTime(mil: number) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);

        return `${min}min and ${sec}sec`
    }

    function yard() {
        function read(): Vehicle[] {
            return localStorage.yard ? JSON.parse(localStorage.yard) : [];
        }

        function save(vehicles: Vehicle[]) {
            localStorage.setItem("yard", JSON.stringify(vehicles));
        }

        function add(vehicle: Vehicle, saved?: boolean) {
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

            row.querySelector(".delete")?.addEventListener("click", function () {
                remove(this.dataset.plate);
            })

            $("#yard")?.appendChild(row);

            if(saved) save([...read(), vehicle]);
        }

        function remove(plate: string) {

            const { entrance, name } = read().find(vehicle => vehicle.plate === plate);

            const time = calcTime(new Date().getTime() - new Date(entrance).getTime());

            if(!confirm(`${name} stayed for ${time}. Do you want to close?`)) return;

            save(read().filter(vehicle => vehicle.plate !== plate));
            render();
        }
        
        function render() {
            $("#yard")!.innerHTML = "";
            const yard = read();

            if(yard.length) {
                yard.forEach((vehicle) => add(vehicle))
            }
        }

        return { read, add, remove, save, render };
    }

    yard().render();

    $("#register")?.addEventListener("click", () => {
        const name = $("#name")?.value;
        const plate = $("#plate")?.value;

        if(!name || !plate) {
            alert("The name and plate fields are mandatory.");
            return;
        }

        yard().add({ name, plate, entrance: new Date().toISOString() }, true)
    })
})();