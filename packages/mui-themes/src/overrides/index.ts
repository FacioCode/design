/* eslint-disable sort-keys */
import { MuiFormLabel, MuiInputLabel } from "./MuiLabel";
import type { CSSProperties } from "@material-ui/styles";
import { MuiButton } from "./MuiButton";
import { MuiCssBaseline } from "./MuiCssBaseline";
import { MuiInput } from "./MuiInput";
import { MuiInputBase } from "./MuiInputBase";
import { MuiLink } from "./MuiLink";
import { MuiScopedCssBaseline } from "./MuiScopedCssBaseline";
import type { ThemeOptions } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

export const overrides : ThemeOptions["overrides"] = {
  MuiAppBar: {
    colorDefault: customProperties.appBarStyles.colorDefault,
  },
  MuiBackdrop: {
    root: customProperties.backdropStyles.root,
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
  MuiContainer: {
    root: {
      ...customProperties.containerStyles.root,
      ...customProperties.containerStyles.colorTransparent,
    },
    disableGutters: customProperties.containerStyles.disableGutters,
  },
  MuiCssBaseline,
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
    input: {
      ...customProperties.inputBaseStyles.inputMedium,
      ...customProperties.filledInputStyles.input,
      padding: null,
    },
    inputMultiline: {
      ...customProperties.filledInputStyles.inputMultiline,
      padding: null,
    },
    multiline: {
      ...customProperties.filledInputStyles.multiline,
      padding: null,
    },
  },
  MuiFormLabel,
  MuiFormHelperText: {
    contained: customProperties.formHelperTextStyles.contained,
    root: customProperties.formHelperTextStyles.root as CSSProperties,
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
  MuiInput,
  MuiInputBase,
  MuiInputLabel,
  MuiLink,
  MuiPaper: {
    root: {
      ...customProperties.paperStyles.root,
      ...customProperties.paperStyles.square,
    },
    rounded: customProperties.paperStyles.rounded,
    outlined: customProperties.paperStyles.outlined,
  },
  MuiScopedCssBaseline,
  MuiSwitch: {
    root: {
      "&$checked": customProperties.switchStyles.checked,
    },
    colorPrimary: {
      "&$checked": {
        ...customProperties.switchStyles.checked,
      },
      "&$checked + $track": customProperties.switchStyles.checkedTrack,
      "&$disabled + $track": customProperties.switchStyles.disabledTrack,
    },
    switchBase: {
      ...customProperties.switchStyles.base,
      "&$checked + $track": customProperties.switchStyles.checkedTrack,
      "&:hover": customProperties.switchStyles.hover,
    },
    thumb: customProperties.switchStyles.thumb,
    track: customProperties.switchStyles.track,
  },
  MuiTableCell: {
    root: {
      ...customProperties.tableCellStyles.root,
      borderBottom: null,
      "& data": {
        ...customProperties.tableCellStyles.dataChild,
      },
      "& time": {
        ...customProperties.tableCellStyles.timeChild,
      },
    },
    body: customProperties.tableCellStyles.body,
    head: {
      ...customProperties.tableCellStyles.head as CSSProperties,
      borderBottomStyle: "solid",
    },
    paddingNone: customProperties.tableCellStyles.paddingNone,
    sizeSmall: customProperties.tableCellStyles.sizeSmall,
  },
  MuiTableRow: {
    root: {
      ...customProperties.tableRowStyles.root,
      "&$hover:hover": {
        ...customProperties.tableRowStyles.hover,
      },
      "&$selected, &$selected:hover": customProperties.tableRowStyles.selected,
      "&:nth-child(odd)": {
        ...customProperties.tableRowStyles.odd,
        "&$selected, &$selected:hover": customProperties.tableRowStyles.selected,
      },
      "&:nth-child(even)": {
        ...customProperties.tableRowStyles.even,
        "&$selected, &$selected:hover": customProperties.tableRowStyles.selected,
      },
    },
    head: {
      ...customProperties.tableRowStyles.head as CSSProperties,
      "&:nth-child(odd)": customProperties.tableRowStyles.head as CSSProperties,
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
