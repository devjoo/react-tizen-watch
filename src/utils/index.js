export const getAppVersion = () => {
	try {
		return window.tizen.application.getAppInfo('5RPTO5EL7G.genie').version;
	} catch (err) {
		// ignore
	}
};

export const showAlertMsg = msg => alert(msg);
