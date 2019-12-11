$(document).ready(function() {
	console.log("document ready");

	var db = firebase.firestore();

	$("#ca-form").submit(function() {
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var college = $("#college").val();
		var sem = $("#semester").val();
		var exp = $("#exp").val();
		var timestamp = Date();

		db.collection("ca").add({
			name: name.trim(),
			email : email.trim(),
			phone : phone.trim(),
			college : college.trim(),
			sem : sem.trim(),
			exp : exp.trim(),
			timestamp : timestamp
		}).then(function(docRef) {
			console.log("Message saved");
			window.location.href = "fin.html";
		}).catch(function(err) {
			console.log("Got an error: ", err);
			alert("Error submitting data");
		});

		return false;
	});	
});