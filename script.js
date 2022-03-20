document.addEventListener('DOMContentLoaded', function () {

    // Use buttons to toggle between views
    console.log(document.getElementsByClassName("rate"));
    console.log(document.querySelectorAll(".rate"));
    let btton = document.querySelectorAll(".rate");
    for(let i=0;i<5;i++){
        btton[i].onclick
    }

    btton.forEach(function (button){
        button.onclick= function(){
            let value= button.dataset.value;
            console.log(value);
            btton.forEach(function(btn){
                btn.classList.remove('click')
            })
            this.classList.add('click')
            document.querySelector(".submit").addEventListener('click',()=> submit(value))
            console.log(button)
        }    
    })

    
});


function submit(value){
    document.getElementById('rating_box').style.display = 'none';
    document.getElementById('thanks-box').style.display = 'block';

    console.log(value);
    document.querySelector("#message").innerHTML =`You selected ${value} out of 5`
}