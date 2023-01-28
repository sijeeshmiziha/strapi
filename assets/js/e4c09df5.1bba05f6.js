"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8644:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=t(3117),o=(t(7294),t(3905));const a={title:"useDragAndDrop",slug:"/content-manager/hooks/use-drag-and-drop",description:"API reference for the useDragAndDrop hook in Strapi's Content Manager",tags:["content-manager","hooks","drag-and-drop"]},i=void 0,d={unversionedId:"core/content-manager/hooks/use-drag-and-drop",id:"core/content-manager/hooks/use-drag-and-drop",title:"useDragAndDrop",description:"API reference for the useDragAndDrop hook in Strapi's Content Manager",source:"@site/docs/core/content-manager/hooks/use-drag-and-drop.mdx",sourceDirName:"core/content-manager/hooks",slug:"/content-manager/hooks/use-drag-and-drop",permalink:"/content-manager/hooks/use-drag-and-drop",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/core/content-manager/hooks/use-drag-and-drop.mdx",tags:[{label:"content-manager",permalink:"/tags/content-manager"},{label:"hooks",permalink:"/tags/hooks"},{label:"drag-and-drop",permalink:"/tags/drag-and-drop"}],version:"current",frontMatter:{title:"useDragAndDrop",slug:"/content-manager/hooks/use-drag-and-drop",description:"API reference for the useDragAndDrop hook in Strapi's Content Manager",tags:["content-manager","hooks","drag-and-drop"]},sidebar:"docs",previous:{title:"useCallbackRef",permalink:"/core/content-manager/hooks/use-callback-ref"},next:{title:"Relations",permalink:"/content-manager/relations"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Using custom previews",id:"using-custom-previews",level:3},{value:"Typescript",id:"typescript",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Further Reading",id:"further-reading",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Firefox quirks",id:"firefox-quirks",level:3}],p={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An abstraction around ",(0,o.kt)("inlineCode",{parentName:"p"},"react-dnd"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"useDrag")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useDrop")," hooks. It provides a simple API to handle drag and drop\nevents maintaining the same behaviour across the application e.g. when we consider the item to be above a new drop zone."),(0,o.kt)("p",null,"This hook also wraps an internal hook ",(0,o.kt)("inlineCode",{parentName:"p"},"useKeyboardDragAndDrop")," which implements keyboard accessibile drag and drop by\nreturning an onKeyDown handler to be passed to the component's drag icon button."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following examples assume that you have already set up the ",(0,o.kt)("inlineCode",{parentName:"p"},"DndProvider")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML5Backend")," in your application and\nthat you are somewhat familiar with ",(0,o.kt)("inlineCode",{parentName:"p"},"@strapi/design-system")," components.")),(0,o.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"Below is a basic example usage where we're not interested in rendering custom previews in the DragLayer. However, we do replace\nthe current item with a placeholder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Box, Flex, IconButton } from '@strapi/design-system';\nimport { Drag } from '@strapi/icons';\n\nimport { useDragAndDrop } from 'path/to/hooks';\nimport { composeRefs } from 'path/to/utils';\n\nimport { Placeholder } from './Placeholder';\n\nconst MyComponent = ({ onMoveItem }) => {\n  const [{ handlerId, isDragging, handleKeyDown }, myRef, dropRef, dragRef] = useDragAndDrop(true, {\n    type: 'my-type',\n    index,\n    onMoveItem,\n  });\n\n  const composedRefs = composeRefs(myRef, dragRef);\n\n  return (\n    <Box ref={dropRef} cursor={'all-scroll'}>\n      {isDragging ? (\n        <Placeholder />\n      ) : (\n        <Flex ref={composedRefs} data-handler-id={handlerId}>\n          <IconButton\n            forwardedAs=\"div\"\n            role=\"button\"\n            tabIndex={0}\n            aria-label=\"Drag\"\n            noBorder\n            onKeyDown={handleKeyDown}\n          >\n            <Drag />\n          </IconButton>\n          {'My item'}\n        </Flex>\n      )}\n    </Box>\n  );\n};\n")),(0,o.kt)("h3",{id:"using-custom-previews"},"Using custom previews"),(0,o.kt)("p",null,"The only really difference between the previous example and this one is\nthat we're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getEmptyImage")," function from ",(0,o.kt)("inlineCode",{parentName:"p"},"react-dnd-html5-backend"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { getEmptyImage } from 'react-dnd-html5-backend';\nimport { Box, Flex, IconButton } from '@strapi/design-system';\nimport { Drag } from '@strapi/icons';\n\nimport { useDragAndDrop } from 'path/to/hooks';\nimport { composeRefs } from 'path/to/utils';\n\nimport { Placeholder } from './Placeholder';\n\nconst MyComponent = ({ onMoveItem }) => {\n  const [{ handlerId, isDragging, handleKeyDown }, myRef, dropRef, dragRef, dragPreviewRef] =\n    useDragAndDrop(true, {\n      type: 'my-type',\n      index,\n      onMoveItem,\n    });\n\n  // highlight-start\n  useEffect(() => {\n    dragPreviewRef(getEmptyImage());\n  }, [dragPreviewRef]);\n  // highlight-end\n\n  const composedRefs = composeRefs(myRef, dragRef);\n\n  return (\n    <Box ref={dropRef} cursor={'all-scroll'}>\n      {isDragging ? (\n        <Placeholder />\n      ) : (\n        <Flex ref={composedRefs} data-handler-id={handlerId}>\n          <IconButton\n            forwardedAs=\"div\"\n            role=\"button\"\n            tabIndex={0}\n            aria-label=\"Drag\"\n            noBorder\n            onKeyDown={handleKeyDown}\n          >\n            <Drag />\n          </IconButton>\n          {'My item'}\n        </Flex>\n      )}\n    </Box>\n  );\n};\n")),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Identifier } from 'dnd-core';\nimport { ConnectDropTarget, ConnectDragSource, ConnectDragPreview } from 'react-dnd';\n\ninterface UseDragAndDropOptions {\n  index: number;\n  onMoveItem: (newIndex: number, currentIndex: number) => void;\n  /**\n   * @default \"regular\"\n   * Defines whether the change in index should be immediately over another\n   * dropzone or half way over it (regular).\n   */\n  dropSensitivity?: 'immediate' | 'regular';\n  item?: object;\n  /**\n   * @default 'STRAPI_DND'\n   */\n  type?: string;\n  onCancel?: (index: number) => void;\n  onDropItem?: (index: number) => void;\n  onEnd?: () => void;\n  onGrabItem?: (index: number) => void;\n  onStart?: () => void;\n}\n\ntype UseDragAndDropReturn = [\n  props: {\n    handlerId: Identifier;\n    isDragging: boolean;\n    handleKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;\n  },\n  objectRef: React.RefObject<HTMLElement>,\n  dropRef: ConnectDropTarget,\n  dragRef: ConnectDragSource,\n  dragPreviewRef: ConnectDragPreview\n];\n\ntype UseDragAndDrop = (active: boolean, options: UseDragAndDropOptions) => UseDragAndDropReturn;\n")),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"Its advised to implement a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"},"live text region")," in the\nparent component holding your individual dnd children. This should be done to inform the user of the current state of the drag and drop.\nTo implement this, you need to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"onDropItem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onGrabItem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onCancel")," callbacks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"useDragAndDrop")," hook which are fired\nonly with the purpose of updating the live region, hence why they're optional. You would also update the live region as part of your\n",(0,o.kt)("inlineCode",{parentName:"p"},"onMoveItem")," callback. There are generic messages that can be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"intl")," provider, an example of using this may look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setLiveText(\n  formatMessage(\n    {\n      id: getTrad('dnd.drop-item'),\n      defaultMessage: `{item}, dropped. Final position in list: {position}.`,\n    },\n    {\n      item: 'my item',\n      position: 1,\n    }\n  )\n);\n")),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-dnd.github.io/react-dnd/docs/overview"},"react-dnd docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-dnd.github.io/react-dnd/docs/api/use-drag"},"useDrag API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-dnd.github.io/react-dnd/docs/api/use-drop"},"useDrop API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-dnd.github.io/react-dnd/docs/api/use-drag-layer"},"useDragLayer API"))),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"firefox-quirks"},"Firefox quirks"),(0,o.kt)("p",null,"You might notice in the ",(0,o.kt)("a",{parentName:"p",href:"#basic-usage"},"basic usage")," section this piece of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<IconButton\n  forwardedAs="div"\n  role="button"\n  tabIndex={0}\n  aria-label="Drag"\n  noBorder\n  onKeyDown={handleKeyDown}\n>\n  <Drag />\n</IconButton>\n')),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"firefox")," the drag handler will not work if you click and drag when the element is a ",(0,o.kt)("inlineCode",{parentName:"p"},"button"),", this is known ",(0,o.kt)("a",{parentName:"p",href:"bugzilla.mozilla.org/show_bug.cgi?id=568313"},"bug in the browser"),".\nTherefore the workaround is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"forwardedAs")," prop to render a ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," instead of a ",(0,o.kt)("inlineCode",{parentName:"p"},"button"),"\nand add the ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tabIndex")," props to make this accessible. The actual ",(0,o.kt)("inlineCode",{parentName:"p"},"IconButton")," component\nadds an accessible lable from the ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-label")," prop. So we don't have to concern ourselves with that."))}c.isMDXComponent=!0}}]);