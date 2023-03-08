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
    direction?: string;
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
    title?: string;
    width?: number;
    height?: number;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none';
    objectPosition?: string;
}

export interface productListInterface {
    title?: string;
    data?: any;
}

export interface menuMoreInterface {
    data: [];
}

export interface subMenuInterface {
    showSubMenu: boolean;
    data: [];
}
