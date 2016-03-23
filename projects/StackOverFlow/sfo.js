function draw(J){var D=document.getElementById("top20tags").getContext("2d");var M=document.getElementById("popularityChange").getContext("2d");var N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var K=J.getDate();var H=J.getMonth();var C=J.getFullYear();var B="data/"+C+"/"+N[H]+"/"+K+"/top100tags.json";var E=0;var G;var F;var L=5;var I=new Date();var A=new Date(I);$.ajax({url:B,dataType:"json",error:function(O){if(O.status==="404"){E=E+1;if(L>E){I=new Date();A=new Date(I);A.setDate(I.getDate()-E);draw(A)}}},success:function(V){var W=[];var Q=[];for(G=0;G<20;G+=1){W[W.length]=V.items[G].name;Q[Q.length]=V.items[G].count}var T=[];var R=[];V.items.sort(function(Z,Y){return Y.popularityChange-Z.popularityChange});for(F=0;F<20;F+=1){T[F]=V.items[F].popularityChange;R[F]=V.items[F].name}var U={labels:R,datasets:[{label:"Top 20 Tags by popularity",fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,0.8)",highlightFill:"rgba(220,220,220,0.75)",highlightStroke:"rgba(220,220,220,1)",data:T}]};var S={labels:W,datasets:[{label:"Top 20 Tags by popularity",fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,0.8)",highlightFill:"rgba(220,220,220,0.75)",highlightStroke:"rgba(220,220,220,1)",data:Q}]};var X={scaleBeginAtZero:true,scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:true,scaleShowVerticalLines:false,barShowStroke:true,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};var O=new Chart(D).Bar(S,X);var P=new Chart(M).Bar(U,X)},async:false})}var loadOnAjax=function(){var A=new Date();draw(A)};$.ajax({url:"/js/components/Chart.min.js",success:loadOnAjax,async:false});