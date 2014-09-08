#pragma strict

var target : String;
var id : int;
var orientation : Vector2;

function Start() {
	DontDestroyOnLoad(gameObject);
}

function OnCollisionEnter2D(collision : Collision2D) {
	// Don't let anyone but the player move through doors
	var player : GameObject = collision.gameObject;
	if(player.tag != 'Player') {
		return;
	}

	// Don't destroy me!
	gameObject.transform.parent = null;
	// Load next level
	Application.LoadLevel(target);
	
	// Move to next frame
	yield;
	
	// Take out door fom last frame
	Destroy(gameObject);
	
	// Move to the door's partner's position
	var doorComponents : DoorScript[] = FindObjectsOfType(DoorScript) as DoorScript[];
	var doors = GameObject.FindGameObjectsWithTag("Door");
	for(var door : DoorScript in doorComponents) {
		// Move here!
		if(door !== this && id == door.id) {
			player.transform.position.x = door.gameObject.transform.position.x + door.orientation.x;
			player.transform.position.y = door.gameObject.transform.position.y + door.orientation.y;
		}
	}
}