# Button

This component is part of the [Fotihose](https://github.com/halloverden/fotihose) network, which is a network of standalone components.

## Description
A simple wrapper for a native button element that shows a loading indicator in the button when prompted. 

## Considerations
This component relies on [Renderer2](https://angular.io/api/core/Renderer2) for styling.

## Installation
```
npm i @fotihose/button -S
```

## Usage

Add #button to the button, so the component knows what element is the button. Woah, poetry! 

```html
  <fih-button>
    <button #button></button>
  </fih-button>
```

### Inputs

| Input                   | Type     | Default  | Description |
|-------------------------|:--------:|:--------:|:-----------:| 
| loadingIndicatorColor   | string   | #000     | Color of the loading indicator (hex)
| loadingIndicatorSize    | string   | 15       | Size of the loading indicator (in px)
| processing              | boolean  | false    | When true, it shows a loading indicator

### Outputs

No outputs

## TODO
- Keep button aspect ratio when in loading state

## License
MIT

## Change log

### 1.0.0
- First release
