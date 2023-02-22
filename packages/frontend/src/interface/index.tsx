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
    text?: string;
}
