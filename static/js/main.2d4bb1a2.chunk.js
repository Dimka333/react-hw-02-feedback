(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(t,e,a){},18:function(t,e,a){},2:function(t,e,a){t.exports={statisticsItem:"Statistics_statisticsItem__yd679"}},20:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(6),i=a.n(s),o=(a(16),a(7)),r=a(8),d=a(9),l=a(11),b=a(10),u=a(4),j=a.n(u),h=a(0),O=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("section",{className:j.a.upSection,children:[Object(h.jsx)("h2",{className:j.a.title,children:e}),a]})},f=a(2),p=a.n(f),k=function(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,s=t.positiveFeedback;return Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{className:p.a.statisticsItem,children:["Good:",e]}),Object(h.jsxs)("li",{className:p.a.statisticsItem,children:["Neutral:",a]}),Object(h.jsxs)("li",{className:p.a.statisticsItem,children:["Bad:",c]}),Object(h.jsxs)("li",{className:p.a.statisticsItem,children:["Total:",n()]}),Object(h.jsxs)("li",{className:p.a.statisticsItem,children:["Positive feedback: ",s(),"%"]})]})},m=function(t){var e=t.message;return Object(h.jsx)("p",{children:e})},x=a(5),g=a.n(x),_=function(t){var e=t.options,a=t.handleFeedback;return Object(h.jsx)("div",{className:g.a.btnCotainer,children:e.map((function(t){return Object(h.jsx)("button",{className:g.a[t],id:t,type:"button",onClick:function(){return a(t)},children:t.charAt(0).toUpperCase()+t.slice(1)},t)}))})},v=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t.handleFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return t.state.bad+t.state.good+t.state.neutral},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback();return 0===e?0:Math.round(t.state.good/e*100)},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(_,{options:["good","neutral","bad"],handleFeedback:this.handleFeedback})}),Object(h.jsx)(O,{title:"Statistics",children:this.countTotalFeedback()?Object(h.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback,positiveFeedback:this.countPositiveFeedbackPercentage}):Object(h.jsx)(m,{message:"No feedback given"})})]})}}]),a}(c.Component);a(18),a(19);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))},4:function(t,e,a){t.exports={upSection:"Section_upSection__1hJfD",title:"Section_title__2_jBL"}},5:function(t,e,a){t.exports={good:"FeedbackOptions_good__3i9b2",neutral:"FeedbackOptions_neutral__3zMFN",bad:"FeedbackOptions_bad__2oJm-"}}},[[20,1,2]]]);
//# sourceMappingURL=main.2d4bb1a2.chunk.js.map