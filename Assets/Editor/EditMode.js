﻿#pragma strict

@script ExecuteInEditMode()
 
class autoSnap extends UnityEditor.EditorWindow
{
    var prevPosition    : Vector3;
    var doSnap  : boolean = true;
    var snapValue: float = 1;
    @MenuItem("Edit/Auto Snap %_l")
 
    static function Init () 
    {
        var window : autoSnap = EditorWindow.GetWindow(autoSnap) as autoSnap;
    }
 
    function OnGUI()
    {
        doSnap = EditorGUILayout.Toggle("Autosnap", doSnap);
        snapValue = EditorGUILayout.FloatField("Snap Value", snapValue);
    }
 
    function Update()
    {
        if(Selection.transforms.Length > 0 && !EditorApplication.isPlaying)
        if(doSnap && Selection.transforms[0].position != prevPosition)
            snap();
    }
 
    function snap()
    {
        try
        {
            for(var i = 0; i < Selection.transforms.Length; i++)
            {               
                var t : Vector3 = Selection.transforms[i].transform.position;       
                t.x = round(t.x);
                t.y = round(t.y);
 
 				Selection.transforms[i].transform.position = t;
            }
            prevPosition = Selection.transforms[0].position;
        }
        catch(e)
        {
            // Nothing to move.
            Debug.LogError("Nothing to move.  " + e);
        }
    }
 
    function round(input : float)
    {
        var snappedValue : float;
 
        snappedValue = snapValue * Mathf.Round((input / snapValue));
 
        return(snappedValue);
    }
}