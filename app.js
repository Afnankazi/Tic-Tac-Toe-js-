let button = $(".box");
let val = "O"

button.click(function(){
    if(val==="O"){
        animatePress(this.id)
        this.innerHTML = "X";
        console.log(this.id);
       
        if(isWin(winpattern,"X")){
            setTimeout(()=>{
            $(".cointainer").removeClass("hidden");
            $("p").text("Congratulations X Won !");
            },100);
            
            console.log("x won");
            disableAllButtons();
        }
        val="X";
    }else{
        animatePress(this.id)
        this.innerHTML="O";
        console.log(this.id);
        if(isWin(winpattern,"O")){
            setTimeout(()=>{
                $(".cointainer").removeClass("hidden");
                $("p").text("Congratulations O Won !");
                },100);
            console.log("o won");
             disableAllButtons();
        }
        val="O";
    }
    $(this).prop("disabled", true);
})
const winpattern  = [
    [0,1,2],[3,4,5],[6,7,8],
    [1,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],[0,3,6]
];
let count = 0;
function isWin(winpattern,condition){
    for(let i =0;i<winpattern.length;i++){
        for(let j = 0;j<3;j++){
            if(condition===button[winpattern[i][j]].innerHTML){
                count++;
            } 
        }
        if(count===3)return true;
        count=0;
    }
    return false;

}
function disableAllButtons() {
    const buttons = document.querySelectorAll(".box");
    buttons.forEach((button) => (button.disabled = true));
  }
$("#reset").click(function() {
    location.reload();
    animatePress(this.id);
    console.log("true");

});
$("#re").click(function() {
    location.reload();
    animatePress(this.id);
    console.log("true");

});

function animatePress(currentbutton) {
    $("#" + currentbutton).addClass("pressed");
    setTimeout(function () {
      $("#" + currentbutton).removeClass("pressed");
    }, 100);
  }
  

