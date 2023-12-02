"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.Secondary = exports.Primary = void 0;
const Button_tsx_1 = require("./Button.tsx");
exports.default = {
    title: 'Components/Button',
    component: Button_tsx_1.default,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: true },
    },
};
/**
 * The primary call-to-action
 * - Always uses `--palette-primary` background color
 */
exports.Primary = {
    args: {
        variant: 'primary',
        isWide: false,
        children: 'Primary Button',
    },
};
/**
 * When more than one CTA is present, use a secondary button
 * - Always uses `--palette-secondary` background color
 *
 */
exports.Secondary = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};
/**
 * aka Ghost button
 * - It inherits the font colour and has a transparent background
 * - Changes font color to `--palette-primary` colour on hover
 *   - There is no guarantee the hover state will have sufficient contrast
 * */
exports.Link = {
    args: {
        variant: 'link',
        children: 'Link Button',
    },
};
