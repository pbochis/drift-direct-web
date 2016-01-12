/**
 * Created by Paul on 12/27/2015.
 */
var util = {
	build: function(suffix){
		//var prefix = "http://46.101.120.89:8080/driftdirect";
		var prefix = "http://localhost:8080";
		return prefix + suffix;
	},
	imageLink: function(id, width, height){
		if (width !== undefined && height !== undefined){
			return this.build('/file/' + id + '?height=' + height + '&width=' + width);
		}
		return this.build('/file/' + id);
	},
	loggedIn: function(){
		if(localStorage.getItem('user') != null){
			console.log(JSON.parse(localStorage.getItem('user')));
			return JSON.parse(localStorage.getItem('user'));
		}
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

	formatDate: function(date){
		return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' ' + this.getTimeField(date.getHours()) + ':' + this.getTimeField(date.getMinutes());
	},
	getTimeField: function(timeField){
		if (timeField < 10){
			return '0' + timeField;
		}
		return timeField;

	}
};
