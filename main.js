var canvas=new fabric.Canvas("myCanvas");
playerX=10;
playerY=10;
block_width=30;
block_height=30;
var player_img="";
var block_img="";
function player(){
    fabric.Image.fromURL("player.png", function(a){
        player_img=a;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_img);
    });
}
function newimg(b){
    fabric.Image.fromURL(b, function(a){
        block_img=a;
        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_img);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(R){
    w=R.keyCode;
    console.log(w);
    if(R.shiftKey == true && w == '80'){
        console.log("Shift and P is pressed");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("spa").innerHTML=block_width;
        document.getElementById("spn").innerHTML=block_height;
    }
    if(R.shiftKey == true && w == '77'){

        console.log("Shift and M is pressed");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("spa").innerHTML=block_width;
        document.getElementById("spn").innerHTML=block_height;
    }
    if(w =='37'){
        console.log("left is pressed");
        left();
    }
    if(w =='38'){
        console.log("up is pressed");
        up();
    }
    if(w =='39'){
        console.log("right is pressed");
        right();
    }
    if(w =='40'){
        console.log("down is pressed");
        down();
    }
    if(w =='87'){
        console.log("W is pressed");
        newimg('wall.jpg');
    }
    if(w =='71'){
        console.log("G is pressed");
        newimg('groung.png');
    }
    if(w =='76'){
        console.log("L is pressed");
        newimg('light_green.png');
    }
    if(w =='84'){
        console.log("T is pressed");
        newimg('trunk.jpg');
    }
    if(w =='82'){
        console.log("R is pressed");
        newimg('roof.jpg');
    }
    if(w =='89'){
        console.log("Y is pressed");
        newimg('yellow_wall.png');
    }
    if(w =='68'){
        console.log("D is pressed");
        newimg('dark_green.png');
    }
    if(w =='85'){
        console.log("U is pressed");
        newimg('unique.png');
    }
    if(w =='67'){
        console.log("c is pressed");
        newimg('cloud.jpg');
    }
}
function up(){
    if(playerY >=0){
        playerY=playerY-block_height;
        console.log("Block image height:"+block_height);
        console.log("player x is:"+playerX+",player y is:"+playerY);
        canvas.remove(player_img);
        player();
    }
}
function down(){
    if(playerY <=500){
        playerY=playerY+block_height;
        console.log("Block image height:"+block_height);
        console.log("player x is:"+playerX+",player y is:"+playerY);
        canvas.remove(player_img);
        player();
    }
}
function left(){
    if(playerX >=0){
        playerX=playerX-block_width;
        console.log("Block image width:"+block_width);
        console.log("player x is:"+playerX+",player y is :"+playerY);
        canvas.remove(player_img);
        player(); 
    }
}
function right(){
    if(playerX <=800){
        playerX=playerX+block_width;
        console.log("Block image width:"+block_width);
        console.log("player x is:"+playerX+",player y is:"+playerY);
        canvas.remove(player_img);
        player(); 
    }
}