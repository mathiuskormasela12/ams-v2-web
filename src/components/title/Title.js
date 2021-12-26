// ========== Title
// import all modules
import React, { Fragment } from 'react';

// import styled
import styled from './style.module.scss';

export function Title() {
	return (
		<Fragment>
			<div>
				<h1 className={styled.title}>Home Title</h1>
			</div>
		</Fragment>
	);
}