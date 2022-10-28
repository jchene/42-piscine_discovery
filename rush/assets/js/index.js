const	infoData = JSON.parse(data);

function loadSkills(user)
{
	$('#pbhtml').empty();
	vhtml.innerText = user.skills.html + "%";
	$(`#pbhtml`).append(`<div class="progress-bar" role="progressbar" aria-valuenow="${user.skills.html}" aria-valuemin="0" aria-valuemax="100"></div>`);

	$('#pbjs').empty();
	vjs.innerText = user.skills.js + "%";
	$(`#pbjs`).append(`<div class="progress-bar" role="progressbar" aria-valuenow="${user.skills.js}" aria-valuemin="0" aria-valuemax="100"></div>`);

	$('#pbc').empty();
	vc.innerText = user.skills.c + "%";
	$(`#pbc`).append(`<div class="progress-bar" role="progressbar" aria-valuenow="${user.skills.c}" aria-valuemin="0" aria-valuemax="100"></div>`);

	$('#pcpp').empty();
	vcpp.innerText = user.skills.cpp + "%";
	$(`#pcpp`).append(`<div id ="cpp" class="progress-bar" role="progressbar" aria-valuenow="${user.skills.cpp}" aria-valuemin="0" aria-valuemax="100"></div>`);
}

function loadExperiences(user)
{
	$('#school').empty();
	school.innerText = user.resume.education.school;

	$('#dateS').empty();
	dateS.innerText = user.resume.education.date

	$('#campus').empty();
	campus.innerText = user.resume.education.address;

	$('#descriptionS').empty();
	descriptionS.innerText = user.resume.education.description;
	descriptionS.style.fontStyle = "italic";


	$('#pro').empty();
	pro.innerText = user.resume.professional.main;

	$('#dateP').empty();
	dateP.innerText = user.resume.professional.date;

	$('#company').empty();
	company.innerText = user.resume.professional.company;
	company.style.fontStyle = "italic";

	$('#post').empty();
	for (let desc of user.resume.professional.post)
		$(`#post`).append(`<li>${desc}</li>`);

	
}

function reloadData(user)
{
	profile.src = user.profile;
	about1.innerText = user.about.about1;
	student.innerText = user.name;

	loadSkills(user);
	loadExperiences(user);

	email.innerText = user.email;
}

$('select').on('change', function (e) {
	const	name = this.value;
	let		user;

	if (name == "Julien Chêne") {
		user = infoData[0]['jchene'];
	}
	else if (name == "Theo Zeribi") {
		user = infoData[0]['thzeribi'];
	} else {
		alert("Error");
		return ;
	}
	reloadData(user);
});

window.onload = function() {
	reloadData(infoData[0]['thzeribi']);
};