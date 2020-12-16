type Args = {
  classKey: string,
  component: string,
  property: string
}

type GetCssVarName = ({ classKey, component, property }: Args) => string;
