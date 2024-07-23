var coll = document.getElementsByClassName("colapsar_suporte");
    
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("suporte_ativa");
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


var coll_02 = document.getElementsByClassName("colapsar_faq");
    
for (var i = 0; i < coll_02.length; i++) {
  coll_02[i].addEventListener("click", function() {
    this.classList.toggle("faq_ativa");
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