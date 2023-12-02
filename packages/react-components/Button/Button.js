import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Loading from '@xxx/components/Loading';
import useConfig from '@xxx/components/ConfigContext';
import { Solid, Simple, Outline, Label } from './Button.styles';

/**
 * Button component
 * Marshmallow bear claw tootsie roll chupa chups ice cream ice cream candy.
 * Macaroon jujubes tiramisu lollipop cotton candy gingerbread croissant sesame snaps croissant.
 * Powder gummies bear claw jelly beans jelly-o danish biscuit chocolate topping.
 * Marshmallow muffin lollipop marzipan cupcake oat cake. Sesame snaps chocolate lollipop jelly-o shortbread halvah.
 */
const Button = forwardRef(
  ({ variant, isLoading, error, children, ...props }, ref) => {
    const { buttonStyle = {} } = useConfig();
    const base = buttonStyle[variant];
    const content = (
      <>
        <Label>{children}</Label>
        {isLoading && <Loading />}
      </>
    );

    const finalProps = {
      variant,
      ...props,
      ref,
      isLoading,
    };

    let buttonJsx = <Solid {...finalProps}>{content}</Solid>;
    if (base === 'outline')
      buttonJsx = <Outline {...finalProps}>{content}</Outline>;
    if (base === 'simple')
      buttonJsx = <Simple {...finalProps}>{content}</Simple>;

    return (
      <>
        {buttonJsx}
        {error}
      </>
    );
  },
);

export const variants = ['primary', 'secondary', 'link'];

Button.defaultProps = {
  type: 'button',
  variant: variants[0],
  isWide: false,
  isLoading: false,
  error: null,
  children: null,
  onClick: () => {},
};

Button.propTypes = {
  /** the type */
  type: PropTypes.oneOf(['button', 'submit']),
  /** the variant */
  variant: PropTypes.oneOf(variants),
  /** makes the button adapt to width of parent */
  isWide: PropTypes.bool,
  /** display a loading spinner */
  isLoading: PropTypes.bool,
  /** the error message */
  error: PropTypes.string,
  /** children */
  children: PropTypes.node,
  /** click function */
  onClick: PropTypes.func,
};

export default Button;
