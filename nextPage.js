const linkList = 
["studentId.html", 
"phoneNum.html", 
"track.html", 
"sex.html", 
"sleepComment.html", 
"sleepTime.html", 
"sleepHabit.html", 
"sleepSense.html", 
"cleanComment.html", 
"trash.html", 
"clean.html", 
"othersComment.html", 
"studyPlace.html", 
"noise.html", 
"bathTime.html", 
"insectHunt.html", 
"finalComment.html", 
"mbti.html", 
"endingComment.html"]
function nextPage(sth) {
    if (window.event.keyCode == 13) {
        location.href=linkList[sth];
    }
}