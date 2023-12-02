/// <reference types="react" />
declare const _default: {
    title: string;
    component: ({ children }: {
        children: import("react").ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        onClick: {
            action: boolean;
        };
    };
};
export default _default;
/**
 * The primary call-to-action
 * - Always uses `--palette-primary` background color
 */
export declare const Primary: {
    args: {
        variant: string;
        isWide: boolean;
        children: string;
    };
};
/**
 * When more than one CTA is present, use a secondary button
 * - Always uses `--palette-secondary` background color
 *
 */
export declare const Secondary: {
    args: {
        variant: string;
        children: string;
    };
};
/**
 * aka Ghost button
 * - It inherits the font colour and has a transparent background
 * - Changes font color to `--palette-primary` colour on hover
 *   - There is no guarantee the hover state will have sufficient contrast
 * */
export declare const Link: {
    args: {
        variant: string;
        children: string;
    };
};
