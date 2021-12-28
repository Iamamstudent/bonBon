const linkList = ["studentId.html", "phoneNum.html", "track.html", "sex.html", "sleepComment.html", "sleepTime.html", "sleepHabit.html", "cleanComment.html", "trash.html", "othersComment.html", "studyPlace.html", "noise.html", "bathTime.html", "finalComment.html", "insectHunt.html", "endingComment.html"]
const listName = ["index", "studentId", "phoneNum", "track", "sex", "sleepComment", "sleepTime", "sleepHabit", "cleanComment", "trash", "othersComment", "studyPlace", "noise", "bathTime", "finalComment", "insectHunt", "endingComment"]
function buttonNext(sth) {location.href=linkList[sth]};

function nextPage(sth) {
    var x = document.forms["inputTextKeyup"][listName[sth]].value;
    if (x == "") {
    alert("Below must be filled out");
    return false;
    } else if (listName[sth-1] == "SleepHabit") {
        var x1 = document.forms["inputTextKeyup"]["SleepTalk"];
        var x2 = document.forms["inputTextKeyup"]["SleepSnore"];
        var x3 = document.forms["inputTextKeyup"]["SleepTeeth"];
        if (x1 == "" || x2 == "" || x3 == "") {
            alert("Below must be filled out")
        }
    } else if (window.event.keyCode == 13) {
        location.href=linkList[sth+1];
    }
}