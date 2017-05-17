<#include "./sitecomp/header.ftl">
<#include "menu.ftl">
<a name="top" class="anchor"></a>
	<div class="container">
		<div class="row">
	  		<div class="col-md-10">
	  		<img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyBzFHAehrwMSQYz9o4eC7bja65zt5_mVPE"/>
	  			${.dataModel["page.body"]}
	  		</div>
	  			<div class="col-md-2">
					<div class="visible-lg">
						<#include "./sitecomp/rightnavbar-lg.ftl">
					</div>
	  			</div>
		</div> 
		<div class ="row">
			<div class="col-md-10">
				<div  class="fb-like"  data-share="true"  data-width="450"  data-show-faces="true"></div>
			</div>
			<div class="col-md-2"></div>
		</div>  

    </div>
<#include "./sitecomp/footer.ftl">