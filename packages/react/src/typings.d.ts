declare module "*.module.css" {
  // eslint-disable-next-line init-declarations
  const classes: { [className: string]: string };

  export default classes;
}
