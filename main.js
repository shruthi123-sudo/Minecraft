var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img)
     {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y, left: player_x
        });
canvas.add(player_object);
        
    });

}

function new_Image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log (keyPressed);
    if(keyPressed == "84") {
        new_Image("trunk.jpg");
    }
    if(keyPressed == "68") {
        new_Image("dark_green.png");
    }
    if(keyPressed == "76") {
        new_image("light_green.png");
    }
    if(keyPressed == "71") {
        new_Image("ground.png");
    }
    if(keyPressed == "87") {
        new_Image("wall.jpg");
    }
    if(keyPressed == "89") {
        new_Image("yellow_wall.png");
    }
    if(keyPressed == "85") {
        new_Image("unique.png");
    }
    if(keyPressed == "82") {
        new_Image("roof.jpg");
    }
    if(keyPressed == "67") {
        new_Image("cloud.jpg");
    }
    if(e.shiftKey == true && keyPressed == "80") {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if(e.shiftKey == true && keyPressed == "77") {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
        }
    if(keyPressed == "38"){
        up();
    }
    if(keyPressed == "40"){
        down();
    }
    if(keyPressed == "37"){
        left();
    }
    if(keyPressed == "39"){
        right();
    }

}

function up() {
    if (player_y >0)
    {
        player_y = player_y - block_image_height;
        console.log ('block_image_height = ' + block_image_height);
        console.log ('when up arrow is pressed player_y = ' + player_y + 'player_x = ' + player_x);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down() {
    if (player_y <500)
    {
        player_y = player_y + block_image_height;
        console.log ('block_image_height = ' + block_image_height);
        console.log ('when down arrow is pressed player_y = ' + player_y + 'player_x = ' + player_x);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left() {
    if (player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log ('block_image_width = ' + block_image_width);
        console.log ('when left arrow is pressed player_x = ' + player_x + 'player_y = ' + player_x);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right() {
    if (player_x <850)
    {
        player_x = player_x + block_image_width;
        console.log ('block)image_width = ' + block_image_width);
        console.log ('when right arrow is pressed player_x = ' + player_x + 'player_y = ' + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}