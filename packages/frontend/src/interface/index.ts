export interface App {
    className?: string;
    disabled?: boolean;
    onClick?: (e: {} | undefined) => {} | void;
}

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

export interface iconInterface {
    icon?: string;
    iconClassName?: string;
    direction?: string;
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

export interface emptyPageInterface {
    message?: string;
}
