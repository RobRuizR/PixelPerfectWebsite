webpackJsonp([2],{118:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex; \n  background: black;\n  position: relative;\n  height: 100vh;\n"],["\n  display: flex; \n  background: black;\n  position: relative;\n  height: 100vh;\n"]),l=n(0),a=r(l),o=n(29),u=n(22),d=r(u),c=n(307),s=r(c),f=n(308),p=r(f),m=d.default.div(i);t.default=(0,o.withSiteData)(function(){return a.default.createElement(m,null,a.default.createElement(s.default,{items:[{key:0,background:"darkred"},{key:1,background:"darkblue",render:function(e){return a.default.createElement(f.SlideOne,e)}},{key:2,background:"green",render:function(e){return a.default.createElement(f.SlideTwo,e)}}],defaultElementRender:function(e){return a.default.createElement(p.default,e)},timeBetweenSlides:5e3}))})},307:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=o(["\n  position: absolute; \n  display: flex;\n  bottom: 0;\n  height: 10vh;\n  width: 100%;\n  justify-content: center;\n  align-items: flex-start;\n"],["\n  position: absolute; \n  display: flex;\n  bottom: 0;\n  height: 10vh;\n  width: 100%;\n  justify-content: center;\n  align-items: flex-start;\n"]),s=o(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"],["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]),f=o(["\n  margin: 0 2px;\n  width: 10px;\n  height: 10px;\n  border: 2px solid white;\n  border-radius: 100%;\n  transition: 0.3s linear all;\n"],["\n  margin: 0 2px;\n  width: 10px;\n  height: 10px;\n  border: 2px solid white;\n  border-radius: 100%;\n  transition: 0.3s linear all;\n"]),p=n(0),m=r(p),h=n(22),b=r(h),v=n(117),y=b.default.div(c),g=b.default.div(s),w=b.default.div.attrs({style:function(e){return{background:e.selected?"white":"transparent"}}})(f),k=function(e){function t(){var e,n,r,a;i(this,t);for(var o=arguments.length,u=Array(o),d=0;d<o;d++)u[d]=arguments[d];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={currentSlide:0},r.nextSlide=function(){var e=(r.state.currentSlide+1)%r.props.items.length;r.setState({currentSlide:e})},r.previousSlide=function(){var e=(r.state.currentSlide+r.props.items.length-1)%r.props.items.length;r.setState({currentSlide:e})},r.resetTimer=function(){r.slideTimer&&(clearInterval(r.slideTimer),r.slideTimer=setInterval(r.nextSlide,r.timeBetweenSlides))},r.setCurrentSlide=function(e){r.setState({currentSlide:e}),r.resetTimer()},a=n,l(r,a)}return a(t,e),d(t,[{key:"componentDidMount",value:function(){this.timeBetweenSlides=this.props.timeBetweenSlides||999999,this.slideTimer=setInterval(this.nextSlide,this.timeBetweenSlides)}},{key:"componentWillUnmount",value:function(){clearInterval(this.slideTimer)}},{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,n){return m.default.createElement(w,{selected:n===e.state.currentSlide,key:n,onClick:function(){return e.setCurrentSlide(n)}})}),n=this.props.items[this.state.currentSlide];return m.default.createElement(p.Fragment,null,m.default.createElement(v.NodeGroup,{data:[u({key:n.key},n)],keyAccessor:function(e){return e.key},start:function(){return{opacity:[0],translateY:[-10]}},enter:function(){return{opacity:[1],timing:{duration:600,delay:200},translateY:[0]}},update:function(){return{opacity:[1]}},leave:function(){return{opacity:[0],translateY:[10],timing:{duration:200}}}},function(t){return m.default.createElement(g,null,t.map(function(t){var n=t.key,r=t.data,i=t.state.opacity;return m.default.createElement("div",{key:n,style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,opacity:i}},r.render?r.render(r):e.props.defaultElementRender(r))}))}),m.default.createElement(y,null,t))}}]),t}(p.Component);t.default=k},308:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.SlideTwo=t.SlideOne=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=i(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: flex-end;\n"],["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: flex-end;\n"]),o=i(["\n  min-width: 450px;\n  width: 30%;\n  margin-right: 60px;\n"],["\n  min-width: 450px;\n  width: 30%;\n  margin-right: 60px;\n"]),u=i(["\n  font-size: 4em;\n"],["\n  font-size: 4em;\n"]),d=i(["\n  font-size: 2em;\n  margin-top: 1em;\n  line-height: 1.3em;\n"],["\n  font-size: 2em;\n  margin-top: 1em;\n  line-height: 1.3em;\n"]),c=i(["\n  font-weight: bold;\n"],["\n  font-weight: bold;\n"]),s=n(0),f=r(s),p=n(22),m=r(p),h=n(68),b=m.default.div.attrs({style:function(e){return l({},e)}})(a),v=(0,h.MainText)(m.default.div(o)),y=m.default.div(u),g=m.default.div(d),w=m.default.span(c),k=function(e){return f.default.createElement(b,e,f.default.createElement(v,null,f.default.createElement(y,null,"Perfeccionando la industria en ",f.default.createElement(w,null,"Monterrey")),f.default.createElement(g,null,"demo ",f.default.createElement(w,null,"reel"))))};t.default=k;t.SlideOne=function(e){return f.default.createElement(b,{background:e.background},f.default.createElement(v,null,f.default.createElement(y,null,"Lorem ipsum dolor sit amet"),f.default.createElement(g,null,"Lorem dolor sit amet.")))},t.SlideTwo=function(e){return f.default.createElement(b,{background:e.background},f.default.createElement(v,null,f.default.createElement(y,null,"Consectetur adipisicing elit"),f.default.createElement(g,null,"Aspernatur corrupti excepturi vel, esse consequatur eaque porro!")))}}});