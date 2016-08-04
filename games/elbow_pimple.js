var user = prompt("You spot a pimple on your best friends elbow, Do you SQUEEZE it, SHOUT at them or VOMIT?").toLowerCase();

switch(user) {
    case 'squeeze':
        var squeezeStrength = prompt("Did you squeeze hard or soft?").toLowerCase();
        var squeezeEnjoyment = prompt("Did you enjoy it ALOT or a LITTLE?").toLowerCase();
        if (squeezeStrength === 'hard' && squeezeEnjoyment === 'alot') {
            console.log("You muscly perverted thing you!");
        }
        else {
            console.log("Oh well, better luck next time :)")
        }
        break;
    case 'shout':
      console.log("Ah! A rationalist! Very good, shouting will get you what you want!");
      var shoutVolume = prompt("Did you shout LOUD or SOFTLY?").toLowerCase();
      var shoutContent = prompt("Did you shout 'SHIT' or 'OH MY'?").toLowerCase();
      if (shoutVolume === 'loud' || shoutContent === 'shit') {
          console.log("Well done! That was very obnoxious!");
      }
      else {
          console.log("Well, I think your shouting needs a bit more practice to be honest")
      }
      break;
    case 'vomit':
      console.log("Ah! Now doesn't that feel better?");
      var vomitPower = prompt("Was it a POWERFUL chuck, or POWERLESS?").toLowerCase();
      if (vomitPower === 'powerful') {
        console.log("Amazing my friend!")
      }
      else {
        console.log("Perhaps your power will increase with age.. One can only hope.")
      }
      break;
    default:
        console.log("What! How dare you refuse to play my game!");
}