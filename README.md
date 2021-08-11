# Fotihose

The general idea behind Fotihose is to create a network of standalone Angular components that lets you install that one component instead of a whole library.

## Dogma
- Do not encapsulate native HTML elements.
- Use sane styling defaults.
  - Make them configurable!
- Have as few dependencies as possible.
  - No dependencies on external packages.
  - If depending on another Fotihose package, expose that API through your API.
- Make it as easy as possible for the developer to include and use the packages.
  - Minimum needed config.
  - Again, with a mix of sane defaults and configurable styles and functionality.
- All components have to:
  - Use ChangeDetectionStrategy.OnPush.
