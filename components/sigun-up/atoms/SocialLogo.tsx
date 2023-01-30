import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface SocialLoginProps {
  link: string;
  imageURL: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

function SocialLogo({ link, imageURL, alt, width, height }: SocialLoginProps) {
  return (
    <SocialLogoWrapper>
      <Link href={link}>
        <LogoImage alt={alt} src={imageURL} width={width} height={height} />
      </Link>
    </SocialLogoWrapper>
  );
}

SocialLogo.defaultProps = {
  width: 48,
  height: 48,
};

export default SocialLogo;

const SocialLogoWrapper = styled.div``;

const LogoImage = styled(Image)`
  border-radius: 50%;
  margin: 0 10px;
`;
