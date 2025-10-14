function solve() {
    document.querySelector("form").addEventListener("submit", onSubmit);
    const titleRef = document.getElementById("task");
    const descRef = document.getElementById("description");
    const dateRef = document.getElementById("date");  
    const [formSectionRef, openSectionRef, inProgressSectionRef, completeSectionRef] = document.querySelectorAll("section");
    const openRef = openSectionRef.children[1];
    const inProgressRef = inProgressSectionRef.children[1];
    const completeRef = completeSectionRef.children[1];


    function onSubmit(event){
        event.preventDefault();
        const title = titleRef.value;
        const desc = descRef.value;
        const date = dateRef.value;  
        titleRef.value = "";
        descRef.value = "";
        dateRef.value = "";
        if(!title || !desc || !date){
            return;
        }
        const article = createArticle(title, desc, date);
        openRef.appendChild(article)
    }

    function createArticle(title, desc, date){
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = title;
        const pDescription = document.createElement("p");
        pDescription.textContent = "Description: " + desc;
        const pDate = document.createElement("p");
        pDate.textContent = "Due Date: " + date;
        const container = document.createElement("div");  
        container.classList.add("flex");

        const starBtn = createBtn("green", "Start", onStart);  
        const delBtn = createBtn("red", "Delete", onDelete);  

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(container);

        container.appendChild(starBtn);
        container.appendChild(delBtn);

        return article;

    }

    function createBtn(classList, text, handler){
        const btn = document.createElement("button");
        btn.classList.add(classList);
        btn.textContent = text;
        btn.addEventListener("click", handler);
        return btn;
    }

    function onStart(event){
        const container = event.target.parentElement;  
        const article = container.parentElement;
        container.innerHTML = "";
        container.appendChild(createBtn("red", "Delete", onDelete));  
        container.appendChild(createBtn("orange", "Finish", onComplete));  

        inProgressRef.appendChild(article);

    }

    function onDelete(event){
        const container = event.target.parentElement;
        const article = container.parentElement;
        article.remove();
    }

    function onComplete(event){  
        const container = event.target.parentElement;
        const article = container.parentElement;
        container.remove();
        completeRef.appendChild(article);
    }
}