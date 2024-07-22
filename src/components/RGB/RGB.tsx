import './RGB.css';

import type { FC } from 'react';

import {
  classNames,
  type RGB as RGBType,
} from '@telegram-apps/sdk-react';

export type RGBProps = JSX.IntrinsicElements["div"] & {
  color: RGBType;
};

export const RGB: FC<RGBProps> = ({ color, className, ...rest }) => (
  <span {...rest} className={classNames("rgb", className)}>
    <i className="rgb__icon" style={{ backgroundColor: color }} />
    {color}
  </span>
);
