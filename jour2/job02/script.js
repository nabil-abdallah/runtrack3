function showhide()
{
  var content = document.body.textContent;
  if(content.indexOf("L'important n'est pas la chute, mais l'atterrissage.")== -1)
  {
    var article = document.createElement("article");
    var text = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
    document.body.appendChild(article);
    article.appendChild(text);

  }
  else
  {
      var thisArticle = document.getElementsByTagName("article");
      document.body.removeChild(thisArticle[0]);
  }

}