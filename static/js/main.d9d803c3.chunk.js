(this["webpackJsonpyoutube-viewer"]=this["webpackJsonpyoutube-viewer"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(18),i=n.n(a),s=n(9),c=n.n(s),o=n(19),u=n(5),l=n(6),m=n(8),b=n(7),j=n(20),d=n(0),p=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"ui segment",children:Object(d.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{style:{fontSize:"20px",marginBottom:"15px",color:"#1c0707"},children:"YoutubeViewer"}),Object(d.jsx)("input",{type:"text",value:this.state.term,onChange:this.onInputChange})]})})})}}]),n}(r.Component),v=n(23),h=n.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:10,key:"AIzaSyAZF2P78IR4p4BtXVyUAepWWnaUP0ILw0E"}}),f=(n(51),function(e){var t=e.video;return Object(d.jsxs)("div",{className:"video-item item",children:[Object(d.jsx)("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:""}),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"header",style:{fontSize:"15px"},children:t.snippet.title})})]})}),O=function(e){var t=e.videos.map((function(e){return Object(d.jsx)(f,{video:e})}));return Object(d.jsx)("div",{className:"ui relaxed divided list",children:t})},x=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={videos:[]},e.onTermSubmit=function(){var t=Object(o.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/search",{params:{q:n}});case 2:r=t.sent,e.setState({videos:r.data.items});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"ui container",children:[Object(d.jsx)(j.a,{children:Object(d.jsx)("title",{children:"YoutubeViewer"})}),Object(d.jsx)(p,{onFormSubmit:this.onTermSubmit}),Object(d.jsx)(O,{videos:this.state.videos})]})}}]),n}(r.Component);i.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.d9d803c3.chunk.js.map