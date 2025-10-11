function lockedProfile() {
    const btns = document.querySelectorAll("button");

    btns.forEach(btn => btn.addEventListener("click", onClick));

    function onClick(e){
        const btn = e.target;
        const card = btn.parentElement;
        const radioBtn = Array.from(card.querySelectorAll("input[type='radio']")).filter(x => x.checked)[0];
        const profileState = radioBtn.value;
        const moreinfoDiv = card.querySelector("div");

        if (profileState === "lock"){
            return;
        }

        if (moreinfoDiv.style.display === "none" || moreinfoDiv.style.display === "") {
            moreinfoDiv.style.display = "block";
            btn.textContent = "Hide it";
        } else {
            moreinfoDiv.style.display = "none";
            btn.textContent = "Show more";
        }
    }
}