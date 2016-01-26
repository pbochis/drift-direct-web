/**
 * Created by Paul on 12/27/2015.
 */
var util = {
	build: function(suffix){
		var prefix = "http://46.101.120.89:8080/driftdirect";
		//var prefix = "http://localhost:8080/driftdirect";
		return prefix + suffix;
	},
	imageLink: function(id, width, height){
		if (!id){
			return '/images/user.png';
		}
		if (width !== undefined && height !== undefined){
			return this.build('/file/' + id + '?height=' + height + '&width=' + width);
		}
		return this.build('/file/' + id);
	},
	loggedIn: function(){
		if(localStorage.getItem('user') != null){
			return JSON.parse(localStorage.getItem('user'));
		}
	},

	currentUser: function(){
		return JSON.parse(localStorage.getItem('user'));
	},

	hasRole: function(role){
		var user = JSON.parse(localStorage.getItem('user'));
		for (var i = 0; i < user.roles.length; i++){
			if (user.roles[i] === role){
				return true;
			}
		}
		return false;
	},
	isAdmin: function(){
		var user = JSON.parse(localStorage.getItem('user'));
		for (var i = 0; i < user.roles.length; i++){
			if (user.roles[i] === 'ROLE_ADMIN'){
				return true;
			}
		}
		return false;
	},

	isJudge: function(){
		var user = JSON.parse(localStorage.getItem('user'));
		for (var i = 0; i < user.roles.length; i++){
			if (user.roles[i] === 'ROLE_JUDGE'){
				return true;
			}
		}
		return false;
	},

	isOrganizer: function(){
		var user = JSON.parse(localStorage.getItem('user'));
		for (var i = 0; i < user.roles.length; i++){
			if (user.roles[i] === 'ROLE_ORGANIZER'){
				return true;
			}
		}
		return false;
	},

	formatDate: function(date, ommitTime){
		var month = Number(date.getMonth()) + 1;
		var formattedDate = date.getDate() + '-' + month + '-' + date.getFullYear();
		if (!ommitTime){
			formattedDate = formattedDate + ' ' + this.getTimeField(date.getHours()) + ':' + this.getTimeField(date.getMinutes())
		}
		return formattedDate;
	},
	getTimeField: function(timeField){
		if (timeField < 10){
			return '0' + timeField;
		}
		return timeField;

	}
};
