// ========== Router
// import all modules
import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import persistedStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './style/style.scss';

// import all pages
import Home from './views/Home';

function Router() {
	const { store, persistor } = persistedStore();

	return (
		<Fragment>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</Fragment>
	);
}

export default Router;