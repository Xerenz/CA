$(document).ready(function() {

	var db = firebase.firestore();
	var docMain = db.collection("ca");
	var main = [];

	docMain.get().then(function(snap) {
		snap.forEach(function(doc) {
			main.push(doc.data());
		});
	}).then(function() {
		console.log(main);
	});
});