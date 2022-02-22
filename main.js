let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else if (styles.contains("reset")) {
            count = 0;
        }
        
        if (count < 0){
            value.style.color = "rgb(175, 173, 64)";
        }
        if (count > 0){
            value.style.color = "rgb(58, 141, 37)"
        }
        if (count == 0){
            value.style.color = "rgb(230, 144, 53)"
        }
        value.textContent = count;
    });
});