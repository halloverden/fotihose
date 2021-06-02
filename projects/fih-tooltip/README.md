# Tooltip

This component is part of the [Fotihose](https://github.com/halloverden/fotihose) network, which is a network of standalone components.

## Description
A simple loading indicator using svg.

## Installation
```
npm i @fotihose/tooltip -S
```

## Usage
```html
  <fih-tooltip id="my-id" arrowPosition="top" text="It's me, the tooltip"></fih-tooltip>
```

### Inputs

| Input         | Type               | Default               | Description                                 |
|---------------|:------------------:|:---------------------:|:-------------------------------------------:|
| arrowPosition | string             | -                     | bottom / bottom-left / bottom-right / left / right / top-left / top / top-right / none
| id            | string             | -                     | The id to use internally for the tooltip
| minWidth      | number             | 200                   | The max width of the tooltip
| show          | boolean            | false                 | Programmatically show / hide the tooltip
| showOnHover   | boolean            | true                  | If the tooltip should show on hover
| showOnLoad    | boolean            | false                 | If the tooltip should show on load
| text          | string             | -                     | The tooltip text content
| width         | number             | -                     | The width of the tooltip

### Outputs

No outputs

## TODO
- Support style changes

## License
MIT

## Change log

### 1.0.0
- First release
