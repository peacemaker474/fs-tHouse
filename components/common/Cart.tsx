import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import CartImage from '../../public/icons/cart.svg';

function Cart() {
  return (
    <CartLink href="/cart">
      <CartIcon alt="쇼핑목록" src={CartImage} />
    </CartLink>
  );
}

export default Cart;

const CartLink = styled(Link)`
  width: max-content;
  height: 100%;
  display: inline-flex;
  jutify-content: center;
  align-items: center;
`;

const CartIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;
