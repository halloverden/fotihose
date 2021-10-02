# Icon input

This component is part of the [Fotihose](https://github.com/halloverden/fotihose) network, which is a network of standalone components.

## Description
A simple component for adding an icon to an input element

## Installation
```
npm i @fotihose/icon-input -S
```

## Usage
```html
  <fih-icon-input [disabled]="false"
                  iconPath="assets/images/my.svg"
                  iconPosition="right"
                  [iconSize]="20"
                  [processing]="false">
        <input />
  </fih-icon-input>
```

### Inputs

| Input         | Type    | Default | Description |
|---------------|:-------:|:-------:|:-----------:|
| disabled      | boolean | false   | If the input is disabled or not
| iconPath      | string  | -       | The path for the icon to display
| iconPosition  | string  | right   | right / left
| iconSize      | number  | 15      | Size of the icon (px)
| processing    | boolean | false   | If the input is "processing". Will disable input and click event

### Outputs

| Output        | Type    | Description |
|---------------|:-------:|:-----------:|
| clicked       | boolean | Event when the icon is clicked

## License
MIT

## Change log

### 1.0.0
- First release
