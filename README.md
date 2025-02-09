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

| Function       | Status | Description                                  | status detail         |
| -------------- | ------ | -------------------------------------------- | --------------------- |
| Typography     | ✅     | Basic typography for Japanese language.      |                       |
| Layout         | ✅     | Basic Layout single and with-sidebar layout. |                       |
| Grid Layout    | 🧠     | Grid layout with utility class.              |                       |
| Button         | ✅     | Button for multi purpose.                    |                       |
| Modal          | ✅     | Dialog screen overlays main screen.          |                       |
| Accordion      | ✅     | Collapse content with header.                |                       |
| Message Panel  | ✅     | Panel for alert, caution, messages.          |                       |
| Off-canvas     | ✅     | Sidepanel collapses when screen is narrow.   |                       |
| Form           | 🛠️     | See below                                    | Ready to implemented. |
| Tip            | --     | Tiny information                             |                       |
| Dropdown       | ✅     | Click to show menu or something nearby.      |                       |
| Pagination     | ✅     | Smart navigation for multiple pages.         |                       |
| Cookie concent | 🧠     | Agreement for cookie usage.                  | Under consideration.  |
| i18n           | --     | Develop with Japanese language first.        |                       |

### Form feature

| Function                         | Status | Description                                                       |
| -------------------------------- | ------ | ----------------------------------------------------------------- |
| Single line input                | 🛠️     | Like `<input type="text">`, password, tel, url... so on.          |
| Multiline input                  | 🛠️     | The `<textarea>`                                                  |
| Radio button                     | 🛠️     | Single select, multiple selectives are shows on single screen.    |
| Checkbox                         | 🛠️     | Multiple select, selectives are shows on single screen.           |
| Select                           | 🛠️     | Single or multiple select with dropdown                           |
| Label, Legend                    | 🛠️     | Instruction of input or select element                            |
| Label for required element       | 🛠️     | Label for required elements are should be with "required" text    |
| Label for optional element       | 🛠️     | Label for required elements are should be with "optional" text    |
| Indicate satisfy input condition | 🛠️     | Indicate if input condition is satisfied.                         |
| Text counter                     | 🛠️     | Indicate current text count and max length.                       |
| Text meter                       | 🛠️     | Indicate current text count with linear meter.                    |
| Term of use agreement            | 🛠️     | Term agreement checkbox with terms in small scrollable container. |

## Twls-ATOMic components

We use customized atomic component concept called "**Twls-ATOMic**".

[See here](./docs/contents/components.md).

## Start to Dev

```shell
git clone https://github.com/b4m-oss/the-wheels-dev/ the-wheels-dev
cd the-wheels-dev
npm i
npm run dev
```

### Requirements

Node.js >= 18

### Stack we use...

- Sass(SCSS)
- Vite
- Vittum
- Nunjucks
- WebComponents

## Build Package

```shell
npm run build
```

## Build Site

```shell
npm run build:site
```

## License

MIT License
