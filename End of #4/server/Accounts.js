var postSignUp = function(userId, info) {
	console.log(userId);
	console.log(info);
}

AccountsTemplates.configure({
	postSignUpHook: postSignUp
});

