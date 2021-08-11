# Fotihose

The general idea behind Fotihose is to create a network of standalone Angular components that lets you install that one component instead of a whole library.
It should not be opinionated when it comes to design, in fact, it shouldn't include design at all if not absolutely necessary. 

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
### All components have to
- Be prefixed with "fih-"
- Use ChangeDetectionStrategy.OnPush.
- Handle OnChanges for all inputs.

### All packages have to
- Reside in the @fotihose namespace.
- Contain a readme that follows the same form and function as rest of the components.

### Misc
- Update app.component.html with an example showing your component in use. Follow the existing conventions.  

### Coding conventions
- Use trailing underscore for private methods and attributes.
  
## TODO
- Define supported Angular versions range in each project.
- Automate tasks:
  - Run `npm i` in all project sub folders.
  - Prep and release project.
