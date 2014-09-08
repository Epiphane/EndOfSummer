#pragma strict

var speed = Vector2(0.01, 0.01);
var movement : Vector2;

function Start () {
	DontDestroyOnLoad(gameObject);
}

function Update () {
    var inputX = Input.GetAxisRaw("Horizontal");
    var inputY = Input.GetAxisRaw("Vertical");

    movement = new Vector2(speed.x * inputX, speed.y * inputY);
}

function FixedUpdate() {
	transform.Translate(movement);
}