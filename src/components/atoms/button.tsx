import React, { ReactNode } from 'react';
import { Button as AntdButton } from 'antd';
import * as Icons from 'react-feather';
import { createUseStyles } from 'react-jss';

type ButtonSizes = 'small' | 'middle' | 'large';
type ButtonVariant = "default" | "primary" | "dashed" | "link" | "text";
type ButtonShape = "default" | "circle" | "round";
type HtmlButtonType = "submit" | "button" | "reset";

type ButtonProps = {
    variant: ButtonVariant;
    size: ButtonSizes;
    iconBefore?: ReactNode;
    iconAfter?: ReactNode;
    iconName?: keyof typeof Icons;
    shapes?: ButtonShape;
    htmlButtonType?: HtmlButtonType;
    label?: string;
    onClick?: () => void;
};

const useStyles = createUseStyles({
  flexContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  iconBefore: {
    marginRight: (props: any) => props.label ? '8px' : '0'
  },
  iconAfter: {
    marginLeft: (props: any) => props.label ? '8px' : '0'
  }
});

const ButtonComponent = ({
    iconBefore,
    iconAfter,
    iconName,
    variant = 'primary',
    size = 'middle',
    shapes = 'default',
    htmlButtonType = 'button',
    label,
    onClick,
}: ButtonProps) => {
    const IconComponent = iconName ? Icons[iconName] : null;
    const classes = useStyles({label});

    return (
        <AntdButton
            type={variant}
            size={size}
            shape={shapes === 'default' ? undefined : shapes}
            htmlType={htmlButtonType}
            onClick={onClick}
        >
            <div className={classes.flexContainer}>
                {iconBefore && IconComponent && <IconComponent className={classes.iconBefore} />}
                {label}
                {iconAfter && IconComponent && <IconComponent className={classes.iconAfter} />}
            </div>
        </AntdButton>
    );
}

export default ButtonComponent;
