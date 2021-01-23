import { PaperProps } from "../Paper";
import { SlideProps } from "@material-ui/core/Slide";

export interface BottomSheetProps extends Omit<PaperProps, "elevation"> {

  /**
   * @default true
   * @optional
   * @type boolean
   */
  open?: SlideProps["in"];

  /**
   * Props applied to the `Transition` element.
   *
   * @optional
   * @type object
   */
  TransitionProps?: Omit<SlideProps, "children" | "direction" | "in">;
}
