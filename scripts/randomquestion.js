function zufallsmodus_gefahrenlehre() {
    var questions = [ '/questions/Gefahrenlehre/1.1.01-001.html', '/questions/Gefahrenlehre/1.1.01-002.html', '/questions/Gefahrenlehre/1.1.01-003.html', '/questions/Gefahrenlehre/1.1.01-004.html']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}
function zufallsmodus_verhalten() {
    var questions = [ 'question1', 'question2', 'question3']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}