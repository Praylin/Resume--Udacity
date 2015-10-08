/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /*$("#main").append("Praylin Diana");
 var awesomeThoughts = "I am Praylin and I am awesome";
 var funThoughts = awesomeThoughts.replace("awesome", "fun");
 console.log(awesomeThoughts);
 console.log(funThoughts);
 $("#main").append(funThoughts);*/



 var name = "Praylin Diana";
 var formattedName = HTMLheaderName.replace("%data%", name);
 //$("#header").prepend(formattedName);
 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedName,formattedRole);

 
 var bio = { 
 	"name" : "Praylin Diana",
 	"role" : "Web Developer",
 	"contacts": [ {
 		"mobile" : "+1 415 802 9112",
 		"email" : "praylin.diana@gmail.com",
 		"location" : "San Francisco, USA"
 		}
 	],
	"welcome_msg" : "Here is my resume....",
 	"image" : "images/me.jpg",
 	"skills" : ["JavaScript","Python","Ruby on Rails","Git","Linux"]
 };



var education = {
	"schools" : [
		{
			"name" : "Anna University",
			"course" : "Master of Engineering",
			"major" : "Computer Science and Engineering",
			"year" : "2009 - 2011",
			"location" : "Chennai, India"
		},
		{
			"name" : "Cochin University of Science and Technology",
			"course" : "Bachelor of Technology",
			"major" : "Computer Science and Engineering",
			"year" : "2004-2008",
			"location" : "Cochin, India"
		}
		],
	"onlineclasses" : [ 
		{
			"title" : "Machine Learning",
			"school" : "Standford",
			"url" : "https://www.coursera.org/learn/machine-learning"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity Nanodegree",
			"url" : "https://www.udacity.com/course/javascript-basics"
		},
		{
			"title" : "Linux linux-command-line-basics",
			"school" : "Udacity Nanodegree",
			"url" : "https://www.udacity.com/course/linux-command-line-basics"
		},
		{
			"title" : "How to use git and github",
			"school" : "Udacity Nanodegree",
			"url" : "https://www.udacity.com/course/how-to-use-git-and-github"
		},
		{
			"title" : "Ruby on Rails essential training",
			"school" : "Lynda",
			"url" : "http://www.lynda.com/Ruby-on-Rails-training-tutorials"
		}
	]
}
	

var work = {
	"jobs" : [
		{
			"employer" : "Sree Chitra Thirunal College of Engineering",
			"website" : "http://www.sctce.ac.in/",
			"location" : "Trivandrum, India",
			"title" : "Assistant Professor",
			"dates" : "June 2012 - April 2013",
			"subHandled" : "Took classes on Data Mining and Distributed Systems and conducted Network & OS Lab"
		},
		{
			"employer" : "Mar Baselious College of Engineering and Technology",
			"website" : "http://www.mbcet.ac.in/",
			"location" : "Trivandrum, India",
			"title" : "Assistant Professor",
			"dates" : "Dec 2011 - April 2012",
			"subHandled" : "Took classes on Data Mining and conducted C Programming Lab"
		},
		{
			"employer" : "Sree Chitra Thirunal College of Engineering",
			"website" : "http://www.sctce.ac.in/",
			"location" : "Trivandrum, India",
			"title" : "Guest Lecturer",
			"dates" : "June 2011 - Nov 2011",
			"subHandled" : "Took classes on Computer Networks and Operating Systems and conducted Networks & OS Lab"
		}
	]
}

var projects = {
	"title" : "SVM-GA fraud detection model in power utilities.",
	"dates" : "April 2010 - June 2011",
	"description" : "This thesis classifies the fraud customers and normal customers in a power utility using historic data. The classification is done by Support Vector Machine and the result is optimized using Genetic Algorithms. "
}



var formattedpic = HTMLbioPic.replace("%data%",bio.image);
$("#header").append(formattedpic);

function displaycontact() {
	for (info in bio.contacts) {
		var formattedmobile = HTMLmobile.replace("%data%",bio.contacts[info].mobile);
		var formattedemail = HTMLemail.replace("%data%",bio.contacts[info].email);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contacts[info].location);
	//concat = formattedmobile + formattedemail + formattedlocation;
		$("#topContacts").append(formattedmobile, formattedemail, formattedlocation);
		$("#footerContacts").append(formattedmobile, formattedemail, formattedlocation);
	}	
}

displaycontact();


$("#main").append(work["position"]);
$("#main").append(work.period);
$("#main").append(education.school);
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
	$("#skills").append(formattedSkill);
}


function displayWork() {
	for (info in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[info].employer);
		//var formattedwebsite = HTMLworkEmployer.replace("#",work.details[info].website);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[info].title);
		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[info].dates);
		var formattedsubHandled = HTMLworkDescription.replace("%data%",work.jobs[info].subHandled);
		var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs[info].location);
		var concat = formattedEmployer + formattedTitle + formattedDate + formattedlocation + formattedsubHandled;
		$(".work-entry:last").append(concat);
	}
}

displayWork();

function displayEducation() {
	for (info in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[info].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[info].course);
		var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[info].year);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[info].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[info].major);
		var concat = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
		$(".education-entry:last").append(concat);
	}

		
		$(".education-entry:last").append(HTMLonlineClasses);

		for (info in education.onlineclasses) {
		var formattedtitle = HTMLonlineTitle.replace("%data%",education.onlineclasses[info].title);
		var formattedschool = HTMLonlineSchool.replace("%data%",education.onlineclasses[info].school);
		//var formattedurl = HTMLonlineURL.replace("%data%",education.onlineclasses[info].url);
		var concat = formattedtitle + formattedschool ;
		$(".education-entry:last").append(concat);
	}
}

displayEducation();

/*function displayonlineclass() {
	for (info in onlineclasses.details) {
		$(".education-entry:last").append(HTMLonlineclasses);
		var formattedtitle = HTMLonlineTitle.replace("%data",onlineclasses.details[info].title);
		var formattedschool = HTMLonlineSchool.replace("%data",onlineclasses.details[info].school);
		var formattedurl = HTMLonlineURL.replace("%data",onlineclasses.details[info].url);
		var concat = formattedtitle + formattedschool + formattedurl ;
		$(".education-entry:last").append(concat);
	}
}

displayonlineclass();*/

function inName() {
	var name = window.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] +" "+ name[1];
}


var name = $("#name").text();

$("#main").append(internationalizeButton);

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.title);
	$(".project-entry:last").append(formattedprojectTitle);
	var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.dates);
	$(".project-entry:last").append(formattedprojectDates);
	var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.description);
	$(".project-entry:last").append(formattedprojectDescription);
}

projects.display();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

$("#mapDiv").append(googleMap);