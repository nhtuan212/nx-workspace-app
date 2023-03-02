export interface InitialPropsInterface {
    store?: any;
    req?: string;
    res?: string;
    asPath?: string;
    query?: string;
}

export interface ErrorInterface {
    statusCode: number;
}

export interface SvgIconsInterface {
    kind: string;
    isActive?: boolean;
    isHover?: boolean;
}

export interface buttonInterface {
    className?: string;
    disabled?: boolean;
    svgIconKind?: string;
    onClick?: any;
    type?: 'submit' | 'button' | undefined;
    text?: string;
}

export interface inputInterface {
    className?: string;
    onChange?: any;
    disabled?: boolean;
    type?: 'text' | 'number';
    placeHolder?: string;
    text?: string;
}

export interface imageInterface {
    className?: string;
    src?: string;
    alt?: string;
    width?: string;
    height?: string;
    title?: string;
}

export interface productOptionInterface {
    title?: string;
    data?: any;
}
