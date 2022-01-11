var C=document.querySelector("canvas"),
$=C.getContext("2d"),
W=(C.width=window.innerWidth),
H=(C.height=window.innerHeight);

var str="ABCDEFGHIJKLMNOPQRSTUVXYZW01",
matrix=str.split("");

var font=11,
col=W/font,
arr=[];

for(var i=0;i<col;i++) arr[i]=1;

function draw() {
    $.fillStyle="rgba(0,0,0,0.5)";
    $.fillRect(0,0,W,H);
    $.fillStyle="#0F0";
    $.font=font+"px system-ui";
        for(var i=0; i<arr.length; i++){
            var txt=matrix[Math.floor(Math.random()*matrix.length)];
            $.fillText(txt, i*font,arr[i]*font);
            if(arr[i]*font>H && Math.random()>0.975) arr[i]=0;
            arr[i]++
        }
}

setInterval(draw,110);
window.addEventListener("resize", ()=>location.reload());