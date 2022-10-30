import { AnchorHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
	variant?: 'primary';
};

const ExternalLinkButton = ({
	href,
	children,
	variant = 'primary',
	className = '',
	...props
}: Props) => {
	const variantClass = `btn-${variant}`;

	return (
		<a
			className={`${styles.btn} ${styles[variantClass]} ${className}`}
			href={href}
			rel={'noreferrer'}
			target={'_blank'}
			{...props}
		>
			{children}
		</a>
	);
};

export { ExternalLinkButton };
