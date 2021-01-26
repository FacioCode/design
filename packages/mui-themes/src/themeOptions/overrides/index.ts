/* eslint-disable sort-keys */
import type { CSSProperties } from "@material-ui/styles";
import { MuiButton } from "./MuiButton";
import { MuiLink } from "./MuiLink";
import type { ThemeOptions } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const { placeholder } = customProperties.inputBaseStyles;

export const overrides : ThemeOptions["overrides"] = {
  MuiAppBar: {
    colorDefault: customProperties.appBarStyles.colorDefault,
  },
  MuiButton,
  MuiButtonBase: {
    root: customProperties.buttonBaseStyles.root,
  },
  MuiCard: {
    root: customProperties.cardStyles.root,
  },
  MuiCardContent: {
    root: customProperties.cardContentStyles.root,
  },
  MuiCheckbox: {
    root: {
      ...customProperties.checkboxStyles.root,

      /**
       * The `MuiCheckbox` component increases the CSS specificity of the `checked` internal state.
       *
       * So we are using the `$ruleName` syntax.
       */
      "&$checked": customProperties.checkboxStyles.checked,

      /**
       * The `MuiCheckbox` component increases the CSS specificity of the `disabled` internal state.
       *
       * So we are using the `$ruleName` syntax.
       */
      "&$disabled": customProperties.checkboxStyles.disabled,
    },
  },
  MuiChip: {
    root: customProperties.chipStyles.root,
  },
  MuiCssBaseline: {
    "@global": {
      "@media (prefers-reduced-motion: reduce)": {
        "*": {
          animationDuration: "0.01ms !important",
          animationIterationCount: "1 !important",
          scrollBehavior: "auto !important",
          transitionDuration: "0.01ms !important",
        },
      },
      body: {
        "@media print": customProperties.baselineStyles.mediaPrint,
        minHeight: "100vh",
        scrollBehavior: "smooth",
      },
      html: {
        ...customProperties.baselineStyles.html,
        MsTextSizeAdjust: "100%",
        WebkitTextSizeAdjust: "100%",
      },
      "strong, b": customProperties.baselineStyles.bold,
    },
  },
  MuiDialog: {
    paper: customProperties.dialogStyles.paper,
    paperWidthSm: customProperties.dialogStyles.paperWidthSm,
  },
  MuiDialogActions: {
    root: customProperties.dialogStyles.actions,
    spacing: {
      "& > :not(:first-child)": customProperties.dialogStyles.actionsSpacingChildren,
    },
  },
  MuiDialogContent: {
    root: customProperties.dialogStyles.content,
  },
  MuiDialogContentText: {
    root: {
      ...customProperties.dialogStyles.contentText,

      /**
       * Prevents dialog content text to be center-aligned
       */
      textAlign: "left",
    },
  },
  MuiDialogTitle: {
    root: {
      ...customProperties.dialogStyles.title,

      /**
       * Prevents dialog title to be center-aligned
       */
      textAlign: "left",
    },
  },
  MuiFilledInput: {
    root: customProperties.filledInputStyles.root,
  },
  MuiFormLabel: {
    root: {
      ...customProperties.formLabelStyles.root,
      "&$focused": customProperties.formLabelStyles.focused,
      "&$disabled": customProperties.formLabelStyles.disabled,
    } as CSSProperties,
  },
  MuiIconButton: {
    root: {
      ...customProperties.iconButtonStyles.root,
      ...customProperties.iconButtonStyles.sizeMedium,
      "&:hover": {
        ...customProperties.iconButtonStyles.hover,
        "& path": {
          fill: customProperties.iconButtonStyles.hover.color,
        },
      },
      "&:active": {
        ...customProperties.iconButtonStyles.pressed,
        "& path": {
          fill: customProperties.iconButtonStyles.pressed.color,
        },
      },
      "&$disabled": {
        ...customProperties.iconButtonStyles.disabled,
        "& path": {
          fill: customProperties.iconButtonStyles.disabled.color,
        },
      },
    },
    sizeSmall: customProperties.iconButtonStyles.sizeSmall,
    label: customProperties.iconButtonStyles.label,
  },
  MuiInputBase: {
    input: {
      fontSize: customProperties.typographyStyles.bodyText1.fontSize,
      ...customProperties.inputBaseStyles.input,
      "&:-ms-input-placeholder": placeholder,
      "&::-moz-placeholder": placeholder,
      "&::-ms-input-placeholder": placeholder,
      "&::-webkit-input-placeholder": placeholder,
    },
    root: customProperties.inputBaseStyles.root,
  },
  MuiInputLabel: {
    root: {
      "&$focused": customProperties.formLabelStyles.focused,
    },
  },
  MuiLink,
  MuiPaper: {
    root: {
      ...customProperties.paperStyles.root,
      ...customProperties.paperStyles.square,
    },
    rounded: customProperties.paperStyles.rounded,
  },
  MuiTableCell: customProperties.tableCellStyles,
  MuiTableRow: {
    root: {
      "&$selected, &$selected:hover": customProperties.tableRowStyles.selected,
    },
  },
  MuiToolbar: {
    regular: customProperties.appBarStyles.regularToolbar,
  },
  MuiTypography: {
    colorError: customProperties.typographyStyles.colorError,
    colorTextPrimary: customProperties.typographyStyles.colorTextPrimary,
    root: customProperties.typographyStyles.root,
  },
};

export default overrides;
