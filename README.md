---
title: Categories and Tags
sidebar: true
sidebarDepth: 0
isShowComments: true
---

<!-- <div id='category'>

[Category](/categories/)

</div> -->

 <div id='tag'> 

[Tag](/tag/)

</div>

<style lang='stylus' scoped> 
	img.noActive{
		opacity: 0;
		transition: opacity 5s linear;
		pointer-events: none;
	}
	img.active{
		opacity: 1;
		transition: opacity 5s linear;
		pointer-events: none;
	} 
	.content__default:not(.custom) img {
	    max-width: 20% !important;
	    margin-top: -10px;
	    //padding-left: 26%;
	}

	#category {
		width:100px;
		height:10px;
		float: center;
		border-radius: 15%;
		background:#ffff0059;
		transition:width 2s;
		-moz-transition:width 2s;
		-webkit-transition:width 2s;
		-o-transition:width 2s;
	}

	#category:hover {
		width:300px;
	}

	#category {
		width:100px;
		height:1099px;
		float: center;
		border-radius: 15%;
		background:#ffff0059;
		transition:width 2s, height 2s;
		-moz-transition:width 2s, height 2s, -moz-transform 2s; /* Firefox 4 */
		-webkit-transition:width 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */
		-o-transition:width 2s, height 2s, -o-transform 2s; /* Opera */
	}
	#category:hover {
		width:100px;
		height:100px;
		transform:rotate(360deg);
		-moz-transform:rotate(360deg); /* Firefox 4 */
		-webkit-transform:rotate(360deg); /* Safari and Chrome */
		-o-transform:rotate(360deg	); /* Opera */
	}
	
	#tag {
		width:100px;
		height:100px;
		float: right;
		border-radius: 15%;
		background:#ffff0059;
		transition:width 2s, height 2s;
		-moz-transition:width 2s, height 2s, -moz-transform 2s; /* Firefox 4 */
		-webkit-transition:width 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */
		-o-transition:width 2s, height 2s, -o-transform 2s; /* Opera */
	}
	
	#tag:hover {
		width:100px;
		height:100px;
		transform:rotate(360deg);
		-moz-transform:rotate(360deg); /* Firefox 4 */
		-webkit-transform:rotate(360deg); /* Safari and Chrome */
		-o-transform:rotate(360deg	); /* Opera */
	}
	
	#category p,#tag p {
		    margin: 0;
		    padding-top: 30px;
		    padding-left: 23 px;
		    padding-right: 15px;
		    font-size: 13px;
	}
	
	@media screen and (max-width: 960px){
		.content__default:not(.custom) img {
		    max-width: 35% !important;
		    margin: 17px;
		    padding-left: 26%;
		}
		#fj {
			font-size: 13px !important;
			margin-top: 28px;
		}
		#se {
			font-size: 13px !important;
		}
		#category {
			width:100px;
			height:100px;
			float: right;
			background:#ffff0059;
			transition:width 2s, height 2s;
			-moz-transition:width 2s, height 2s, -moz-transform 2s; /* Firefox 4 */
			-webkit-transition:width 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */
			-o-transition:width 2s, height 2s, -o-transform 2s; /* Opera */
		}
		#category:hover {
			width:100px;
			height:100px;
			transform:rotate(360deg);
			-moz-transform:rotate(360deg); /* Firefox 4 */
			-webkit-transform:rotate(360deg); /* Safari and Chrome */
			-o-transform:rotate(360deg	); /* Opera */
		}
	}
	
	@media screen and (max-width: 360px){
		#fj {
			font-size: 12px !important;
			margin-top: 28px;
		}
		#se {
			font-size: 12px !important;
		}
	}
	@media screen and (max-width: 320px){
		#fj {
			font-size: 12px !important;
			margin-top: 26px;
		}
		#se {
			font-size: 12px !important;
			margin-top: -10px;
		}
	}
</style>


