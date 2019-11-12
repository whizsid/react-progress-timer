<p align="center">
	<a href="https://github.com/whizsid/react-designer-component">
			<img src="https://i.imgur.com/dYifMd6.png" />
	</a>
</p>

---
<p align="center">
	<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="Travis:Status"/></a>
	<a href="https://travis-ci.org/whizsid/react-designer-component"><img src="https://travis-ci.org/whizsid/react-designer-component.svg?branch=master" alt="Travis:Status"/></a>
	<a href="https://github.com/whizsid/react-designer-component"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="Code Style: Prettier"/></a>
	<a href="https://www.npmjs.com/package/react-designer-component"><img src="https://img.shields.io/npm/v/react-designer-component" alt="NPM: Version"/></a>
</p>

---


<img align="right" width="400px" src="https://i.imgur.com/bXHpw2P.png" alt="React server side renderable designer canvas" />

A server side renderable react canvas.

## Features

- Get all items as objects
- Add texts, images, rectangles and circles
- You can draw your own shapes by using lines and brush
- Enable or disable features

### [Watch Demo >>](https://whizsid.github.io/react-designer-component)


## Installation

You can install this component using yarn or npm

```
//yarn
$ yarn add react-designer-component

//npm
$ npm install react-designer-component --save
```

## Usage

```
import Designer from 'react-designer-component';

...
class App extends Component {

 constructor(props){
	super(props);

	this.state = {items:[]}
 }

 handleChangeItems = (items)=>{
 	this.setState({items})
 }

 render(){
	return (
		<Designer
			items={items}
			onChangeItems={this.handleChangeItems}
			fontApiKey="API_KEY"
			paperSize={{
				height: 300,
				width: 600
			}}
		/>
	)
 }
}

```

## Documentation

Please provide following props.

| Prop | Description | Type |
| ------------- |:-------------:| -----:|
| *items | If you want to initialize the designer with a blank page provide an empty array. Otherwise provide an array with `DesignerItem`s | Array with [ImageItem](#imageitem), [CircleItem](#circleitem), [RectangleItem](#rectangleitem), [LineItem](#lineitem), [TextItem](#textitem), [BrushItem](#brushitem) |
| *onChangeItems | This callback function will calling when changing items. | (items:DesignerItem)=>void |
| className | CSS class name to apply the for the root element | string |
| features | You can enable/disable features by passing an object. | Object that containing boolean values for text,brush,image,circle,rectangle,line properties. All properties are optional. |
| classes | You can override all CSS classes by passing an Object | Please look at [this](src/styleClasses.ts) file to see all CSS classes. All properties are optional. |
|fontApiKey| Google Font API Key if you using the text feature. All fonts loading from google.| string |

### ImageItem

You can find following properties in an image item.

- `rotate:number` Current degree value
- `outlineColor:string` Color of the outline as a rgba string. `rgba(210,210,120,0.7)
- `outlineWeight:number` Weight of the outline as a pixel value.
- `position: Position` Current position of the image. This object has two properties named `left` and `top` that contains the coordinate data in pixel values.
- `size:Object` Current size of the image. This object contains `width:number`, `height:number` properties in pixel values.
- `data:string` Base 64 encoded original image
- `naturalSize:Object` This property is like `size` property. But this object contains size of the original image.

### CircleItem

This item containing `rotate,outlineColor,outlineWidth,position,size` properties like `ImageItem`. And additionally this item has a property called `color:string` that contains the fill color as a rgba value.

### RectangleItem

All properties is similiar to the `CircleItem`.

### LineItem

Also `LineItem` containing the `rotate,position,outlineColor,OutlineWeight` properties and a property called `width:number` that containing the width of the line in pixels.

### BrushItem

`BrushItem` also has the `rotate,position,outlineColor,OutlineWeight` properties and an array of brush spot positions in `positions:Position[]` property.

### TextItem

`TextItem` has `rotate,position,color` properties.

- `text:string` Typed text in the text box.
- `fontName:string` Name of the font family.
- `fontSize:number` Font size in pixels.
- `underline:bool`,`italic:bool`,`bold:bool` properties containing the font styles.

## Developing

1. Clone the repository

```
$ git clone https://github.com/whizsid/react-designer-component`
```

2. Install the dependencies

```
$ cd react-designer-component
$ yarn
```

3. Start the development server

```
yarn start
```

## Contributing

Please lint your code before made a PR.

```
$ yarn lint
```

Always follow prettier code styles and check before making your PR.

```
$ yarn prettier
```

I will reply to all PRs when I have a free time. Issues and stars also welcome.
