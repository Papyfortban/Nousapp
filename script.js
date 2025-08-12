document.addEventListener("DOMContentLoaded", () => {
    const dateEl = document.getElementById("dateDuJour");
    const today = new Date();
    dateEl.textContent = today.toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    afficherMessages();
});

function sauverMessage() {
    const texte = document.getElementById("journal").value;
    if (texte.trim() === "") return;
    
    const messages = JSON.parse(localStorage.getItem("messages") || "[]");
    messages.push({
        texte: texte,
        date: new Date().toLocaleString("fr-FR")
    });
    localStorage.setItem("messages", JSON.stringify(messages));
    document.getElementById("journal").value = "";
    afficherMessages();
}

function afficherMessages() {
    const liste = document.getElementById("listeMessages");
    const messages = JSON.parse(localStorage.getItem("messages") || "[]");
    liste.innerHTML = "";
    messages.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = `${msg.date} : ${msg.texte}`;
        liste.appendChild(li);
    });
}
