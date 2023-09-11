var lo=true
var math=[-100,-100,-100,-100,-100,-100,-100,-100,-100]
// document.getElementById("disp").innerText="HH";
who();
function who()
{
    if(lo)document.getElementById("gamer").innerText="O";
    else document.getElementById("gamer").innerText="X";
}
function sel(s)
{
    if(document.getElementById(s).innerText.length==0)
    {
        if(lo){
            document.getElementById(s).innerText='O';
            lo=false;
            math[parseInt(s)-1]=0;
            // let ans=check();
        }
        else{
            document.getElementById(s).innerText='X';
            lo=true;
            math[parseInt(s)-1]=1;
            
        }
        let ans=check();
        console.log(ans);
        if(ans!=-1){
            if(ans==0){
                alert("O won");
            }
            else{
                alert("X won");
            }
        }
        let w=fin_check();
        if(w){
            alert("Draw")
        }
        who();
    }
    else{
        alert("click empty box");
    }
}
function check(){
    let r1=math[0]+math[1]+math[2];
    let r2=math[3]+math[4]+math[5];
    let r3=math[6]+math[7]+math[8];
    let d1=math[0]+math[4]+math[8];
    let d2=math[2]+math[4]+math[6];
    let c1=math[0]+math[3]+math[6];
    let c2=math[1]+math[4]+math[7];
    let c3=math[2]+math[5]+math[8];
    if(r1==0 || r1==3)
    {
        document.getElementById("1").style.color="green";
        document.getElementById("2").style.color="green";
        document.getElementById("3").style.color="green";
        if(r1==3)return 1;
        return 0;
    }
    if(r2==0 || r2==3)
    {
        document.getElementById("4").style.color="green";
        document.getElementById("5").style.color="green";
        document.getElementById("6").style.color="green";
        if(r2==3)return 1;
        return 0;
    }
    if(r3==0 || r3==3)
    {
        document.getElementById("7").style.color="green";
        document.getElementById("8").style.color="green";
        document.getElementById("9").style.color="green";
        if(r3==3)return 1;
        return 0;
    }
    if(d1==0 || d1==3)
    {
        document.getElementById("1").style.color="green";
        document.getElementById("5").style.color="green";
        document.getElementById("9").style.color="green";
        if(d1==3)return 1;
        return 0;
    }
    if(d2==0 || d2==3)
    {
        document.getElementById("3").style.color="green";
        document.getElementById("5").style.color="green";
        document.getElementById("7").style.color="green";
        if(d2==3)return 1;
        return 0;
    }
    if(c1==0 || c1==3)
    {
        document.getElementById("1").style.color="green";
        document.getElementById("4").style.color="green";
        document.getElementById("7").style.color="green";
        if(c1==3)return 1;
        return 0;
    }
    if(c2==0 || c2==3)
    {
        document.getElementById("2").style.color="green";
        document.getElementById("5").style.color="green";
        document.getElementById("8").style.color="green";
        if(c2==3)return 1;
        return 0;
    }
    if(c3==0 || c3==3)
    {
        document.getElementById("3").style.color="green";
        document.getElementById("6").style.color="green";
        document.getElementById("9").style.color="green";
        if(c3==3)return 1;
        return 0;
    }
    return -1;
}
function fin_check()
{
    if(math[i]==-100)
            return 0;
    else {
        for(let i in math){
            return 1;
        }
    }
    
}