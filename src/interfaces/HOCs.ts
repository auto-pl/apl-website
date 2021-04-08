import { PropsWithChildren } from "react";

export type WrappedProps<
  TargetProps extends object,
  WrapperProps extends object
> = PropsWithChildren<TargetProps & WrapperProps>;
