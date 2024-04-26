var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScoreAndName; 

	function addScoreAndName() {
    addScore(); 
  
}
	
	
};



function addScore() {
	var score = document.getElementById("score").value


	if(score !=NaN && score >= 0  && score<=100) {
	scores.push(parseInt(score));
	

		var name = $("name").value;
		names.push(name);
	
}

}

function displayResults()
{
	var average = 0;
	var max = 0;
	var maxIndex=0;
	for(var i=0;i<scores.length;i++)
	{
		
		average= (average*(i)+scores[i])/(i+1);
		if(scores[i]>=max) {
			max = scores[i];
			maxIndex = i;
		}
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \>  <p>High Score =  "+ max+"  with a score of "+ names[maxIndex]+ "</p>  "
}

function displayScores() {
	var tableHTML = "<h2>Scores</h2><table><tr><th>Name</th><th>Score</th></tr>";
    for (let j = 0; j < names.length; j++) {
        tableHTML += "<tr><td>" + names[j] + "</td><td>" + scores[j] + "</td></tr>";
    }
    tableHTML += "</table>";
    $("scores_table").innerHTML = tableHTML;
}


