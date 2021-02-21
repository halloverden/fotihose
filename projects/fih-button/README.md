<p align="center">
 <img width="65px" height="65px" src="https://github.com/halloverden/fotihose/blob/main/src/assets/logo/logo_black_500x500.png" alt="logo" >
</p>

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

With button

```html
  <fih-button>
    <button #button></button>
  </fih-button>
```

### Inputs

| Input                   | Type     | Default  | Description |
|-------------------------|:--------:|:--------:|:-----------:| 
| loadingIndicatorColor   | string   | #000     | Color of the loading indicator (hex)
| processing              | boolean  | false    | When true, it shows a loading indicator

### Outputs

No outputs

## License
MIT

## Change log

### 1.0.0
- First release
