var classArray = [];
$(document).ready(function() {
   if (!window.localStorage) {
	alert('Your browser does not support HTML5 localStorage. Try upgrading.');
     } else {
	$("#addId").click(function() {
	var id,newDate;
         newDate=new Date();
	id = newDate.getTime();
	var className = document.getElementById("classNameId").value;
	var objA = new classA(id,className);
	//objA.add("Ram");
	classArray[classArray.length] = objA;
	$("#theLog").append('<tr><td>'+objA.cName+'</td><td><button id="'+ (classArray.length - 1) +'" name="'+objA.cName+'" onclick="classModal(this);">manage</button><button id="'+classArray.length+'" onclick = "delClassModal(this);"><b>-</b></button></td></tr>');
	});
	}
});


function classA (id,className) {
       this.id = id;
       this.cName = className;
       this.array = [];

       this.add = function (newObject) {
          this.array.push(newObject);
	   };
	   
        this.remove = function(newObject){
			this.array.pop(newObject);
		};
}

function studentDetails(s_no,s_name,d_o_b){
	this.s_no = s_no + 1;
	this.s_name = s_name;
	this.d_o_b = d_o_b;
}


/*
 * $('#theLog tr').last().after('<tr><td>'+objA.cName+'</td><td><button
 * id="'+id+'" onclick="classModal();">manage</button><button id="delBtn"
 * onclick = ""><b>-</b></button></td></tr>');
 */

// Get the modal
function classModal(object) {
	var modal = document.getElementById('myModal');
	doShowAll(object);
	modal.style.display = "block";
	document.getElementsByClassName("addClass")[0]
			.setAttribute("id", object.id);
        //alert("add classid"+object.id);
	$('#closeId').click(function() {
		$('#myModal').hide();
	});
}

// This fuction is used to populate add new class modal.
function addNewClass() {
	var modal = document.getElementById('addNewClassModal');

	modal.style.display = "block";
	// get the delModal button

	var cancelBtn = document.getElementById("cnclId");
	var addBtn = document.getElementById("addId");

	// When user click on button
	cancelBtn.onclick = function() {
		modal.style.display = "none";
	}

	         addBtn.onclick = function() {
		 modal.style.display = "none";
	}
}

function doShowAll(object){
	var logTable = "<tr><th>S.No</th><th>Name</th><th>D.O.B</th><th>Actions</th></tr>\n";
        for (var l = 0; l < (classArray[object.id].array.length) && (classArray[object.id].array[l] != null) ; l++);
        //alert(l); 
	for (var k = 0; k < l ; k++) {
		logTable += ('<tr><td>'
				+ classArray[object.id].array[k].s_no
				+ '</td><td>'
				+ classArray[object.id].array[k].s_name
				+ '</td><td>'
				+ classArray[object.id].array[k].d_o_b
				+ '</td><td><button id="'+ classArray[object.id].array[k].s_no + '" name="' + object.id + '" onclick="updateStudentModal(this);">Edit</button><button id="'
				+ classArray[object.id].array[k].s_no + '" name="' + object.id + '" onclick="delStudentModal(this);"><b>-</b></button></td></tr>\n');
	}
        document.getElementById('list').innerHTML = logTable;

}

// This fuction is used to populate add new student modal.
function addNewStudent(object) {
	// alert(object.id);
	var studentModal = document.getElementById('addNewStudentModal');
	document.getElementsByClassName("addStudentClass")[0]
			.setAttribute("id", object.id);
	studentModal.style.display = "block";
	// get the delModal button
	var cancelBtn = document.getElementById("cnclStudentId");
	// var addBtn = document.getElementById("addStudentId");

	// When user click on button
	cancelBtn.onclick = function() {
		doShowAll(object);
		$('#addNewStudentModal').hide();
	}
}

function addStudentDetails(object){
	//finding length
	for (var l = 0; l < (classArray[object.id].array.length) && (classArray[object.id].array[l] != null) ; l++);
	var s_no = l;
	var s_name = document.getElementById("studentName").value;
	var d_o_b = document.getElementById("dateOfBirth").value;
	var studentObject = new studentDetails(s_no, s_name, d_o_b);
	classArray[object.id].array[l] = (studentObject);
	doShowAll(object);
	$('#addNewStudentModal').hide();
   }
// Get the modal for delete the class
function delClassModal(object) {
	var modal = document.getElementById('myDelClassModal');

	// When the user clicks on the button, open the modal

	modal.style.display = "block";

	// get the delModal button
	var cancelBtn = document.getElementById("cancelId");
	var deleteBtn = document.getElementById("deleteId");

	document.getElementsByClassName("deleteClass")[0]
			.setAttribute("id", object.id);

	// When user click on button
	cancelBtn.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

// Get the modal for delete the Student details
function delStudentModal(object) {
	var modal = document.getElementById('delStudentModal');

	// When the user clicks on the button, open the modal

	modal.style.display = "block";

	// get the delModal button

	var cancelBtn = document.getElementById("cancelDelStudentId");
	document.getElementsByClassName("deleteStudentClass")[0]
			.setAttribute("name", object.id);
	document.getElementsByClassName("deleteStudentClass")[0]
			.setAttribute("id", object.name);
	// When user click on button
	cancelBtn.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

function deleteStudentDetails(object){
		// delete operation done here..!
		var id = object.name;

		for (var l = 0; l < (classArray[object.id].array.length) && (classArray[object.id].array[l] != null) ; l++);
		for (var index = id - 1; index < l - 1; index++) {
			classArray[object.id].array[index] = classArray[object.id].array[index + 1];
			classArray[object.id].array[index + 1].s_no = (classArray[object.id].array[index + 1].s_no - 1);
			//console.log(classArray[object.id].array[index + 1].s_no);
		}
		classArray[object.id].array[l - 1] = null;
		doShowAll(object);
		$('#delStudentModal').hide();
   }


//This function is used to get the update student details modal.
function updateStudentModal(object) {
	var modal = document.getElementById('updateStudentModal');

	modal.style.display = "block";
	// get the delModal button

	var cancelBtn = document.getElementById("cnclUpdateStudentId");
	document.getElementsByClassName("updateStudentClass")[0]
			.setAttribute("name", object.id);
	document.getElementsByClassName("updateStudentClass")[0]
			.setAttribute("id", object.name);

	// When user click on button
	cancelBtn.onclick = function() {
		modal.style.display = "none";
	}

}

function updateStudentDetails(object){
	classArray[object.id].array[object.name - 1].s_name = document.getElementById("updateStudentNameId").value; 
	classArray[object.id].array[object.name - 1].d_o_b = document.getElementById("updateDateOfBirthId").value;
	doShowAll(object);
	$('#updateStudentModal').hide();
}

function saveDetailsInToLocalStorage(){
      localStorage.setItem("classDetails", JSON.stringify(classArray));
      alert("Your data has been successfully updated..");
}

//This function is used to get the data from the local storage.
function classList(){
      var myClassArrayObject = JSON.parse(localStorage.getItem("classDetails"));
	var timeLog = "<tr><th>Class</th><th>Actions</th></tr>\n";
	if(null != myClassArrayObject){
    for (var i=0; i < myClassArrayObject.length; i++){
          classArray[i] = myClassArrayObject[i];
	  timeLog += '<tr><td>'+classArray[i].cName+'</td><td><button id="'+ (classArray.length - 1) +'" name="'+classArray[i].cName+'" onclick="classModal(this);">manage</button><button id="'+i+'" onclick = "delClassModal(this);"><b>-</b></button></td></tr>\n';
	}
	}
	document.getElementById('theLog').innerHTML = timeLog;
}


//This method is used for deleting the class.
function deleteClass(object){
	for (var l = 0; l < (classArray.length); l++);
	for (var index = object.id - 1; index < l - 1; index++) {
	    classArray[index] = classArray[index + 1];
	}
	classArray.pop();
	var id = object.id;
	$("#" + id).parents("tr").remove();
	$('#myDelClassModal').hide();
	//localStorage.removeItem(object.id);
}
