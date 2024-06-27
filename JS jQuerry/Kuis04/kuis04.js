var text = "";
for (var x=0; x<5; x++)
{
  for (var y=0; y<5-x; y++)
  {
    text += " ";
  }
  for (var z=0; z<=x; z++)
  {
    text += "*";
  }
  text += "\n";
}
console.log(text);