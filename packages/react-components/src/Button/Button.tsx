import { ButtonBase } from './Button.styles.ts';

/**
 * Button component
 * Marshmallow bear claw tootsie roll chupa chups ice cream ice cream candy.
 * Macaroon jujubes tiramisu lollipop cotton candy gingerbread croissant sesame snaps croissant.
 * Powder gummies bear claw jelly beans jelly-o danish biscuit chocolate topping.
 * Marshmallow muffin lollipop marzipan cupcake oat cake. Sesame snaps chocolate lollipop jelly-o shortbread halvah.
 */
const Button = ({ children }: { children: React.ReactNode }) => {
  return <ButtonBase>RCB {children}</ButtonBase>;
};

export default Button;
