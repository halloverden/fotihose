# Fotihose

The general idea behind Fotihose is to create a network of standalone Angular components that lets you install that one component instead of a whole library.
It should not be opinionated when it comes to design, in fact, it shouldn't include design at all if not absolutely necessary. 

## Components
- [Button](projects/fih-button)
- [Icon Input](projects/fih-icon-input)
- [Loading Indicator](projects/fih-loading-indicator)
- [Tooltip](projects/fih-tooltip)

## Dogma
- Do not encapsulate native HTML elements.
- No design!
  - If you have to, then:
    - Use sane styling defaults.
    - Make them configurable!
- Have as few dependencies as possible.
  - No dependencies on external packages.
  - If depending on another Fotihose package, expose that API through your API.
- Make it as easy as possible for the developer to include and use the packages.
  - Minimum needed config.
  - Again, with a mix of sane defaults and configurable styles and functionality.

## Contribution checklist
### All components have to:
- Be prefixed with "fih-"
- Use ChangeDetectionStrategy.OnPush.
- Handle OnChanges for all inputs where needed.

### All packages have to:
- Reside in the @fotihose namespace.
- Follow SemVer:
  - Breaking changes is a major version! 
- Contain a readme that follows the same form and function as rest of the components.

### Misc
- Update app.component.html with an example showing your component in use. Follow the existing conventions.
- Start with basic functionality, then expand. It's better to have a functional library that does something basic than to work on something fancy for ages.

### Coding conventions
- Use leading underscore for private methods and attributes.
- Use trailing $ for observables.
  
## TODO
- Define supported Angular versions range in each project.
- Automate tasks:
  - Run `npm i` in all project sub folders.
  - Prep and release project.
- Write tests for all projects.
- Provide images for all projects, showing how the library works.
