const socket = io()
const $roomElement = document.querySelector(".room-name")

socket.on("rooms", (rooms) => {
    let html = ""
    if (rooms.length != 0) {
        rooms.forEach((room) => {
            html += `
                    <div class="room">
                        <p>${room}</p>
                    </div>
                `
        })
        $roomElement.innerHTML = html
        const $roomNameElement = document.querySelectorAll(".room p")
        $roomNameElement.forEach((room) => {
            room.addEventListener("click", () => {
                document.querySelector("#roomName").value = room.innerText
            })
        })
    }
})

