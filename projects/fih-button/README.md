<p align="center">
 <img width="65px" height="65px" src="https://github.com/halloverden/fotihose/blob/main/src/assets/logo/logo_black_500x500.png" alt="logo" >
</p>

# Button

This component is part of the [Fotihose](https://github.com/halloverden/fotihose) network, which is a network of standalone components.

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

With a tag

```html
  <fih-button>
    <a #button></a>
  </fih-button>
```

### Inputs

| Input       | Type     | Default  | Description |
|-------------|:--------:|:--------:|:-----------:|
| buttonId    | string   | fih-btn  | Used inside component to enable loading indicator 
| processing  | boolean  | false    | When true, it shows a loading indicator

### Outputs

No outputs

## License
MIT

## Change log

### 1.0.0
- First release
