import type { CSSProperties } from "@material-ui/styles";
import type { ThemeOptions } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

export const overrides : ThemeOptions["overrides"] = {
  MuiButton: {
    contained: {
      ...customProperties.containedButtonStyles.root,
      ...customProperties.containedButtonStyles.default,
      "&:active": customProperties.containedButtonStyles.defaultPressed,
      "&:hover": {
        ...customProperties.containedButtonStyles.defaultHover,

        /**
         * @todo Use token from style-dictionary for contained button box shadow
         */
        boxShadow: `${customProperties.containedButtonStyles.hover.boxShadow} 0px 2px 4px 0px`,
      },
    },
    containedPrimary: {
      ...customProperties.containedButtonStyles.brand,
      "&:hover": customProperties.containedButtonStyles.brandHover,
      // eslint-disable-next-line sort-keys
      "&:active": customProperties.containedButtonStyles.brandPressed,
    },
    containedSizeSmall: customProperties.containedButtonStyles.sizeSmall,
    disableElevation: {
      "&:hover": {
        boxShadow: null,
      },
    },
    fullWidth: customProperties.buttonStyles.fullWidth,
    label: customProperties.buttonStyles.label as CSSProperties,
    outlined: {
      ...customProperties.outlinedButtonStyles.root,
      ...customProperties.outlinedButtonStyles.default,
    },
    outlinedPrimary: {
      ...customProperties.outlinedButtonStyles.default,
      "&:hover": customProperties.outlinedButtonStyles.hover,
    },
    outlinedSecondary: {
      ...customProperties.outlinedButtonStyles.default,
      "&:hover": customProperties.outlinedButtonStyles.hover,
    },
    outlinedSizeSmall: customProperties.outlinedButtonStyles.sizeSmall,
    root: {
      ...customProperties.buttonStyles.root,
      ...customProperties.buttonStyles.sizeMedium,
    },
    sizeSmall: customProperties.buttonStyles.sizeSmall,
    text: customProperties.linkButtonStyles.default,
    textPrimary: customProperties.linkButtonStyles.default,
    textSizeSmall: customProperties.linkButtonStyles.sizeSmall,
  },
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
      textAlign: "center",
    },
  },
  MuiDialogTitle: {
    root: {
      ...customProperties.dialogStyles.title,
      textAlign: "center",
    },
  },

  /**
   * @todo Check styles for FormLabel
   */
  MuiFormLabel: {
    root: {
      ...customProperties.typographyStyles.bodyText1 as CSSProperties,
      ...customProperties.formLabelStyles.root,
    },
  },
  MuiInputBase: {
    input: customProperties.inputBaseStyles.input,
    root: customProperties.inputBaseStyles.root,
  },
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
};

export default overrides;
