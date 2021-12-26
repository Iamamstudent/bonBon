const linkList = ["studentId.html", "phoneNum.html", "track.html", "sex.html", "sleepComment.html", "sleepTime.html", "sleepHabit.html", "cleanComment.html", "trash.html", "othersComment.html", "studyPlace.html", "noise.html", "bathTime.html", "finalComment.html", "insectHunt.html", "endingComment.html"]
function nextPage(sth) {
    if (window.event.keyCode == 13) {
        location.href=linkList[sth];
    }
}