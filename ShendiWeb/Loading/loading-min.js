﻿/** @author Shendi */
var loading;window.onload=function(){var loadingDiv=document.createElement("div");loadingDiv.style.position="absolute";loadingDiv.style.top=0;loadingDiv.style.width="100%";loadingDiv.style.height="100%";loadingDiv.style.background="rgba(0,0,0,0.6)";loadingDiv.style.zIndex=9999;var loadingImg=document.createElement("img");loadingImg.src="/img/loading.gif";loadingImg.className="loadingImg";loadingDiv.appendChild(loadingImg);var style=document.createElement("style");style.type="text/css";style.innerHTML=".loadingImg {position: absolute; top: 50%; left: 50%; width: 20%; transform: translate(-50%, -50%);}@media screen and (max-width: 720px) { .loadingImg {width : 50%;}}";loading={show:function(){document.head.appendChild(style);document.body.appendChild(loadingDiv)},hide:function(){document.body.removeChild(loadingDiv);document.head.removeChild(style)},showAndSet:function(img){loadingImg.src=img;show()},getLoadingDiv:loadingDiv,getLoadingImg:loadingImg}}