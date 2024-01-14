let feedbackForm = document.querySelector('.add-feedback');
feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let feedback = document.getElementById("feedback").value;
    if (validationFeedback(feedback)){
        let newFeedback = createFeedback(feedback);
        document.querySelector(".feedbacks-list").appendChild(newFeedback);
        let feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];
        feedbackList.push(feedback);
        localStorage.setItem("feedbacks", JSON.stringify(feedbackList));
    }
});

window.addEventListener('DOMContentLoaded', () => {
    let feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];
    let el = document.querySelector(".feedbacks-list");
    console.log(feedbackList);
    for (let i = 0; i < feedbackList.length; i++) {
        el.appendChild(createFeedback(feedbackList[i]));
    }
})

function validationFeedback(feedback){
    return feedback.trim() !== "";
}

function createFeedback(feedback) {
    let template = document.getElementById('feedback-template');
    let clone = template.content.cloneNode(true);
    clone.children[0].textContent = feedback;
    return clone;
}



