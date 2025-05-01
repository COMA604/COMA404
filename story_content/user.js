function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kAR6DUvefg":
        Script1();
        break;
  }
}

function Script1()
{
  var audio=document.gettElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

