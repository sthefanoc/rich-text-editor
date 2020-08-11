(this["webpackJsonpreact-rich-text-editor"]=this["webpackJsonpreact-rich-text-editor"]||[]).push([[0],{188:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(47),r=n.n(o),i=(n(91),n(23)),c=n(24),s=n(26),d=n(25),u=(n(92),n(18)),h=n(13),y=(n(188),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={editorState:h.EditorState.createEmpty()},a.focus=function(){return a.refs.editor.focus()},a.onChange=function(e){return a.setState({editorState:e})},a.handleKeyCommand=a._handleKeyCommand.bind(Object(u.a)(a)),a.mapKeyToEditorCommand=a._mapKeyToEditorCommand.bind(Object(u.a)(a)),a.toggleBlockType=a._toggleBlockType.bind(Object(u.a)(a)),a.toggleInlineStyle=a._toggleInlineStyle.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"_handleKeyCommand",value:function(e,t){var n=h.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return Object(h.getDefaultKeyBinding)(e);var t=h.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(h.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(h.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),l.a.createElement("div",{className:"RichEditor-root"},l.a.createElement(f,{editorState:e,onToggle:this.toggleBlockType}),l.a.createElement(C,{editorState:e,onToggle:this.toggleInlineStyle}),l.a.createElement("div",{className:t,onClick:this.focus},l.a.createElement(h.Editor,{blockStyleFn:m,customStyleMap:g,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,placeholder:"Tell a story...",ref:"editor",spellCheck:!0})))}}]),n}(l.a.Component)),g={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function m(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var b=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return Object(c.a)(n,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),l.a.createElement("span",{className:e,onMouseDown:this.onToggle},this.props.label)}}]),n}(l.a.Component),p=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],f=function(e){var t=e.editorState,n=t.getSelection(),a=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return l.a.createElement("div",{className:"RichEditor-controls"},p.map((function(t){return l.a.createElement(b,{key:t.label,active:t.style===a,label:t.label,onToggle:e.onToggle,style:t.style})})))},E=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],C=function(e){var t=e.editorState.getCurrentInlineStyle();return l.a.createElement("div",{className:"RichEditor-controls"},E.map((function(n){return l.a.createElement(b,{key:n.label,active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style})})))},v=y,k=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Rich Text Editor Example"),l.a.createElement("h3",null,"Created with Draft.Js"),l.a.createElement(v,null))}}]),n}(a.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))},86:function(e,t,n){e.exports=n(189)},91:function(e,t,n){},92:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.6e585503.chunk.js.map