# Loading indicator

This component is part of the [Fotihose](https://github.com/halloverden/fotihose) network, which is a network of standalone components.

## Description
A simple loading indicator using svg.

## Considerations
This component relies on [Renderer2](https://angular.io/api/core/Renderer2) for styling.

## Installation
```
npm i @fotihose/loading-indicator -S
```

## Usage
```html
  <fih-loading-indicator size="15" color="#fff"></fih-loading-indicator>
```

### Inputs

| Input | Type    | Default | Description |
|-------|:-------:|:-------:|:-----------:|
| color | string  | #000    | Color of the loading indicator (hex)
| size  | number  | -       | Size of the loading indicator (in px)

### Outputs

No outputs

## License
MIT

## Change log

### 1.0.2
- Bugfix: Handle changes in input

### 1.0.1
- Docs: Small changes

### 1.0.0
- First release
