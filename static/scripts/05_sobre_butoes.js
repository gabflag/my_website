var coll = document.getElementsByClassName("colapsar_atuacao");
    
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("atuacao_ativa");
    var content = this.nextElementSibling;
    var icon = this.querySelector('.icon');
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      icon.classList.remove('icon-x');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add('icon-x');
    } 
  });
}