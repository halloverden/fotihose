# Button

This component is part of the [Fotihose](https://github.com/halloverden/fotihose) network, which is a network of standalone components.

## Description
A simple wrapper for a native button element that shows a loading indicator in the button when prompted. 

## Installation
```
npm i @fotihose/button -S
```

## Usage

Add #button to the button, so the component knows what element is the button. Woah, poetry! 

```html
  <fih-button loadingIndicatorColor="#fff" loadingIndicatorSize="20" [processing]=true>
    <button #button></button>
  </fih-button>
```

### Inputs

| Input                   | Type     | Default  | Description |
|-------------------------|:--------:|:--------:|:-----------:| 
| loadingIndicatorColor   | string   | #000     | Color of the loading indicator (hex)
| loadingIndicatorSize    | string   | 15       | Size of the loading indicator (px)
| processing              | boolean  | false    | When true, it shows a loading indicator

### Outputs

No outputs

## TODO
- Keep button aspect ratio when processing

## License
MIT

## Change log

### 1.0.0
- First release
