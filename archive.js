$(document).ready(function(){$.getJSON("/allpages.json",function(B){var A=[];$.each(B.pages,function(C,D){A.push("<li><a href="+D.page.uri+">"+D.page.title+"</a></li>")});$("#list").append(A)})});