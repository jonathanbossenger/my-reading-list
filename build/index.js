!function(){"use strict";var e,t={363:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,o=window.wp.data,i=window.wp.coreData,l=JSON.parse('{"u2":"my-reading-list/reading-list-block"}');(0,e.registerBlockType)(l.u2,{edit:function(){const e=(0,o.useSelect)((e=>e(i.store).getEntityRecords("postType","book")),[]);return e?(0,t.createElement)("div",{...(0,r.useBlockProps)()},(0,t.createElement)("p",null,(0,n.__)("My Reading List – hello from the editor!","my-reading-list")),e.map((e=>(0,t.createElement)("div",null,(0,t.createElement)("h2",null,e.title.rendered),(0,t.createElement)("img",{src:e.featured_image_src}),(0,t.createElement)("div",{dangerouslySetInnerHTML:{__html:e.content.rendered}}))))):(0,t.createElement)("div",{...(0,r.useBlockProps)()},(0,t.createElement)("p",null,(0,n.__)("My Reading List – hello from the editor!","my-reading-list")))},save:function(){return(0,t.createElement)("p",{...r.useBlockProps.save()},"My Reading List – hello from the saved content!")}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,i<l&&(l=i));if(a){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,l=n[0],a=n[1],c=n[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var u=c(r)}for(t&&t(n);s<l.length;s++)i=l[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self.webpackChunkmy_reading_list=self.webpackChunkmy_reading_list||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(363)}));o=r.O(o)}();