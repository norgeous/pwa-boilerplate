import Button, { variants } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
    onClick: { action: true },
  },
};

/**
 * The primary call-to-action
 * - Always uses `--palette-primary` background color
 */
export const Primary = {
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
export const Secondary = {
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
export const Link = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};
