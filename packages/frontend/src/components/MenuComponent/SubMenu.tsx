import React from 'react';
import Link from 'next/link';
import { subMenuInterface } from '@/interface';
import isEmpty from 'lodash/isEmpty';
import styles from '@styles/components/menu.module.scss';

const subMenu = ({ data }: subMenuInterface) => {
    return (
		<div className={styles['menu__more__sub-menu']}>
			{!isEmpty(data) &&
				data.map((item: any) => (
					<div className={styles['menu__more__sub-menu__item']} key={item?.id}>
						<Link href={item?.slug}>{item?.name}</Link>
					</div>
				))}
		</div>
	);
};

export default subMenu;
