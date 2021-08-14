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
                  iconClassList="my-class your-class"
                  iconPath="assets/images/my.svg"
                  iconPosition="right"
                  [processing]="false">
</fih-icon-input>
```

### Inputs

| Input         | Type    | Default | Description |
|---------------|:-------:|:-------:|:-----------:|
| disabled      | boolean | false   | If the input is disabled or not
| iconClassList | string  | -       | List of classes to add to the icon img element. Separate with space
| iconPath      | string  | -       | The path for the icon to display
| iconPosition  | string  | right   | right / left
| processing    | boolean | false   | If the input is "processing". Will disable input and click event

### Outputs

| Output        | Type    | Description |
|---------------|:-------:|:-----------:|
| clicked       | boolean | Event when the icon is clicked

## TODO

## License
MIT

## Change log

### 1.0.0
- First release
