function attachEventsListeners() {
    const btnRef = document.querySelectorAll("input[type='button']");
    
    Array.from(btnRef).forEach(btn => btn.addEventListener("click", onClick));

    function onClick(e){
        const targetRef = e.currentTarget;
        const parentRef = targetRef.parentElement; 
        const childrenRef = parentRef.children;
        const inputRef = childrenRef[1];

        const currentValue = Number(inputRef.value);
        const unit = inputRef.id;

        switch(unit){
            case "days": propagateNewValue(currentValue); break; 
            case "hours": propagateNewValue(currentValue / 24); break;
            case "minutes": propagateNewValue(currentValue / 24 / 60); break;
            case "seconds": propagateNewValue(currentValue / 24 / 60 / 60); break;
        }

        function propagateNewValue(days){
            const inputsRef = document.querySelectorAll("input[type='text']");

            inputsRef[0].value = days; 
            inputsRef[1].value = days * 24; 
            inputsRef[2].value = days * 24 * 60; 
            inputsRef[3].value = days * 24 * 60 * 60; 
        }
    }
}