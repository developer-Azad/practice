import Link from 'next/link';
import Image from 'next/image';
import logo from 'assets/images/logo.png';
import { DashRoutes } from 'utils';
import { DEFAULT_STYLES } from 'styles';
import { useDefaultContext } from 'context';

export const Logo = () => {
  const { isBrand } = useDefaultContext();

  return (
    <Link
      href={isBrand ? DashRoutes.campaigns : DashRoutes.overview}
      style={{
        width: 'max-content',
        marginLeft: DEFAULT_STYLES.sharedPx.sm,
      }}
    >
      <Image src={logo} alt='Buxx' priority quality={100} />
    </Link>
  );
};
