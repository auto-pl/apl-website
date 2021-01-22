import React, { FC, ReactNode, ReactElement } from "react";

// Sauce: https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2

export interface BaseConditionalParentProps {
  /**
   * If truthy, return wrapper(children), else return children
   */
  condition: boolean;
  /**
   * The nodes to wraap
   */
  children: ReactNode;
}

/**
 * A function that returns the wrapped children
 */
type WrapperType = (children: ReactNode) => ReactElement<any, any>;

export interface ConditionalParentProps extends BaseConditionalParentProps {
  wrapper: WrapperType;
}

export interface ThisOrThatParentProps extends BaseConditionalParentProps {
  wrappers: [WrapperType, WrapperType];
}

export const ConditionalParent: FC<ConditionalParentProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : (children as ReactElement));

export const ThisOrThatParent: FC<ThisOrThatParentProps> = ({
  condition,
  wrappers,
  children,
}) => (condition ? wrappers[0](children) : wrappers[1](children));
