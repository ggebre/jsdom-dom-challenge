
document.addEventListener("DOMContentLoaded", () => {

    let counter = document.getElementById('counter');
    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('minus');
    let heartButton = document.getElementById('heart');
    let pauseButton = document.getElementById('pause');
    let likesList = document.getElementsByClassName('likes');
    let form = document.getElementById('comment-form');
    let input = document.getElementById('comment-input');
    let commentList = document.getElementById('list');
    let count = 0;

    let interval = timer();

    plusButton.addEventListener('click', () => {
        count += 1;
        counter.textContent = `${count}`;
    });
    minusButton.addEventListener('click', () => {
        count -= 1;
        counter.textContent = `${count}`;
    });

    heartButton.addEventListener('click', () => {
         likesList[0].innerHTML += `<li> ${count} </li>`;
        
    });
    
    pauseButton.addEventListener('click', () => {
        if (pauseButton.innerText == "pause") {
            clearInterval(interval);
            counter.textContent = `${count}`;
            disableButtons(true, 'resume');
        } else {
            disableButtons (false, 'pause');   
            interval = timer();
        }    
    });

    form.addEventListener('submit', comment, false);
    
    function comment (event) {
        commentList.innerHTML += `<li> ${input.value}</li>`;
        event.preventDefault();
    }

    function timer() {
        return setInterval(() => { 
            count += 1;
            counter.textContent = `${count}`;
        }, 1000);   
    }
    function disableButtons (value, text) {
        pauseButton.innerText = text;
        minusButton.disabled = value;
        plusButton.disabled = value;
        heartButton.disabled = value;   
    }
    
});
