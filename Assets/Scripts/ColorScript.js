#pragma strict

var r : float = 1;
var g : float = 1;
var b : float = 1;
var a : float = 1;

function Start () {
	var renderers : SpriteRenderer[] = gameObject.GetComponentsInChildren.<SpriteRenderer>() as SpriteRenderer[];
	for(var renderer : SpriteRenderer in renderers) {
		renderer.material.color = new Color(r, g, b, a);
	}
	
}

function Update () {

}