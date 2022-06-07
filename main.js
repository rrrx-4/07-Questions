const quens = document.querySelectorAll(".question");

quens.forEach(function(que){
    const btn = que.querySelector(".question-btn");

    btn.addEventListener("click", function(){

        quens.forEach(function(q){
            if(q!=que)
            {
                q.classList.remove("show-text");
            }
        })


        que.classList.toggle("show-text");
    })
})








// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const par = e.currentTarget.parentElement.parentElement;
        
//         par.classList.toggle("show-text");
        
//     })
// })