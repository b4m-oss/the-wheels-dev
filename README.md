# The Wheels Dev env and Kitchen sink

The Wheels is Japanese language oriented design framework for digital solutions. Our great principles are two.

- Leadability for Japanese text contents.
- User-friendly interactive functions.

We develop on Nuxt 3, and aim publish on npm package as a CSS and Vanilla JavaScript framework like Bootstrap.

## Develop status

- ✅: **Implmented or work around**. May some has to be polished are included.
- 🧠: **Under consideration**. Or under planinng, just an idea.
- 🛠️: **Work in progress**.
- --: **Backlog**. Decided to implment, but there is no code written at all.

### Basic feature

| Function       | Status | Description                                  |
| -------------- | ------ | -------------------------------------------- |
| Typography     | ✅     | Basic typography for Japanese language.      |
| Layout         | ✅     | Basic Layout single and with-sidebar layout. |
| Grid Layout    | 🧠     | Grid layout with utility class.              |
| Button         | ✅     | Button for multi purpose.                    |
| Modal          | ✅     | Dialog screen overlays main screen.          |
| Accordion      | ✅     | Collapse content with header.                |
| Message Panel  | ✅     | Panel for alert, caution, messages.          |
| Form           | 🛠️     | See below                                    |
| Tip            | --     | Tiny information                             |
| Dropdown       | --     | Click to show menu or something nearby.      |
| Pagination     | --     | Smart navigation for multiple pages.         |
| Cookie concent | 🧠     | Agreement for cookie usage.                  |
| i18n           | --     | Develop with Japanese language first.        |

### Form feature

| Function                         | Status | Description                                                       |
| -------------------------------- | ------ | ----------------------------------------------------------------- |
| Single line input                | 🛠️     | Like `<input type="text">`, password, tel, url... so on.          |
| Multiline input                  | 🛠️     | The `<textarea>`                                                  |
| Radio button                     | ✅     | Single select, multiple selectives are shows on single screen.    |
| Checkbox                         | ✅     | Multiple select, selectives are shows on single screen.           |
| Select                           | 🛠️     | Single or multiple select with dropdown                           |
| Label, Legend                    | ✅     | Instruction of input or select element                            |
| Label for required element       | ✅     | Label for required elements are should be with "required" text    |
| Label for optional element       | 🛠️     | Label for required elements are should be with "optional" text    |
| Indicate satisfy input condition | ✅     | Indicate if input condition is satisfied.                         |
| Text counter                     | --     | Indicate current text count and max length.                       |
| Text meter                       | --     | Indicate current text count with linear meter.                    |
| Term of use agreement            | ✅     | Term agreement checkbox with terms in small scrollable container. |

## W-ATOMic components

We use customized atomic component concept called "**W-ATOMic**".

| Name                | Role      | Definition                                                                                                                                                                            |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Atom                | item      | Elements that cannot be further divided. (e.g., buttons, chips, etc. Equivalents for Atomic design's atom.)                                                                           |
| Element             | item      | A collection of multiple Atoms. However, it cannot constitute a function by itself. (e.g., displaying an amount of money, etc. Equivalents for Atomic design's element.)              |
| Module              | Container | A collection of multiple Atoms or Elements that together constitute a stand-alone function. (e.g., cards, pagers, drop-downs, modals, etc. Equivalents for Atomic design's molecules) |
| List                | Container | A set of Elements or Modules of the same type (e.g., product listings, etc.)                                                                                                          |
| Layout              | Template  | A Layout pattern for a page or screen. The page or screen must select a single Layout.                                                                                                |
| Page or Screen      | Screen    | Screen. When screen is reflowable, call it as Page. However, this distinction is not strictly necessary.                                                                              |
| Site or System, App | Solution  | A page, or set of screens, is a digital solution that encompasses multiple functions for one or more purposes.                                                                        |

## Start to Dev

```bash
git clone https://github.com/b4m-oss/the-wheels-dev/
cd the-wheels-dev/dev
npm i
```

### Requirements

Node.js >= 18

### Stacks we use...

- Sass(SCSS)
- Vite
- WebComponents

## License

MIT License
