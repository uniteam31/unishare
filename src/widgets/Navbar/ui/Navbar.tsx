import { Button } from '@uniteam31/uni-shared-ui';
import React, { useCallback } from 'react';
import { useNavigationStore } from 'entities/Navigation';
import { useUserStore } from 'entities/User';
import { Link } from 'shared/ui/Link/Link';
import { MODULES } from '../model/const';
import s from './Navbar.module.scss';

export const Navbar = () => {
	const { currentServiceEndPath } = useNavigationStore();
	const { logout } = useUserStore();

	const handleLogout = useCallback(() => {
		logout();
	}, [logout]);

	return (
		<div>
			<div className={s.Navbar}>
				<div className={s.breadcrumbs}>
					<div className={s.navigation}>
						<Link to={'/'}>
							<span className={s.mainName}>UNISHARE</span>
						</Link>

						{MODULES[currentServiceEndPath].name && (
							<span className={s.serviceName}>
								/{MODULES[currentServiceEndPath].name}
							</span>
						)}
					</div>

					<Button onClick={handleLogout}>Выход</Button>
				</div>
			</div>
		</div>
	);
};
