import { useState } from 'react';

const LoginBtn = ({ loginAction, styleBtn }) => {
	return (
		<div>
			<button style={loggedStyle} className={styleBtn} onClick={loginAction}>
				Login
			</button>
		</div>
	);
};
const LogoutBtn = ({ logoutAction, styleBtn }) => {
	return (
		<div>
			<button style={unLoggedStyle} className={styleBtn} onClick={logoutAction}>
				Logout
			</button>
		</div>
	);
};

const loggedStyle = {
	backgroundColor: `rgb(0,150,50)`,
	color: 'white',
};
const unLoggedStyle = {
	backgroundColor: 'red',
	color: 'white',
	fontWeight: 'bold',
};

export const OptionalRender = () => {
	const [access, setAccess] = useState(false);
	const [nMessages, setNMessages] = useState(0);

	const loginAction = () => {
		setAccess(true);
	};
	const logoutAction = () => {
		setAccess(false);
	};

	let optionalBtn;
	const styleBtn =
		'mt-10 inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out';

	if (!access)
		optionalBtn = <LoginBtn loginAction={loginAction} styleBtn={styleBtn} />;
	else
		optionalBtn = <LogoutBtn logoutAction={logoutAction} styleBtn={styleBtn} />;

	let addMessages = () => {
		setNMessages(nMessages + 1);
	};

	return (
		<div>
			{optionalBtn}
			{/* {nMessages > 0 && <p>You have {nMessages} new messages...</p>}
			{nMessages === 0 && <p>There are no new messages...</p>} */}
			{access ? (
				<div>
					{nMessages > 0 ? (
						<p>
							You have {nMessages} new message{nMessages > 1 ? 's' : null}...
						</p>
					) : (
						<p>There are no new messages...</p>
					)}
					<button className={styleBtn} onClick={addMessages}>
						{nMessages === 0 ? 'Add your first message' : 'Add new message'}
					</button>
				</div>
			) : null}
		</div>
	);
};
