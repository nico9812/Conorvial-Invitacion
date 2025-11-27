// Fecha del evento en horario LOCAL (Argentina si tu PC está en GMT-3)
const eventDate = new Date(2025, 11, 12, 20, 30, 0).getTime();
// Ojo: MES 11 = Diciembre (enero = 0)

function actualizarCountdown() {
    const now = Date.now();
    const diff = eventDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("cd-days").innerText = days;
    document.getElementById("cd-hours").innerText = hours;
    document.getElementById("cd-minutes").innerText = minutes;
    document.getElementById("cd-seconds").innerText = seconds;
}

setInterval(actualizarCountdown, 1000);
actualizarCountdown();

// ----------------------
// MODAL
// ----------------------

const modal = document.getElementById("modalConfirmar");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const span = document.getElementById("spanerror");

openBtn.onclick = () => {
    modal.style.display = "flex";
    span.style.display="none";
};
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal)modal.style.display = "none";
};



document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        const formData = new URLSearchParams();
        formData.append("entry.1868369155",document.getElementById("nombre").value);
        fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLScAAMXVYI_0UZ4dSso_FW9F3gmWJwnfD_NCUUCdkg0ZJqgCdw/formResponse",{
            method: "POST",
            body:formData,
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            mode:"no-cors"
        }).then(()=>{
            form.reset()
            modal.style.display = "none"
            setTimeout(cerrarmodalok, 2000);

        }).catch(error =>{
            span.style.display="block";
        });
    });

});


