import model from "./model.js";

export function findAttemptsForQuiz(quizId) {
    return model.find({ quiz: quizId })
}

export function findAttemptsForUser(userId) {
    return model.find({ user: userId })
}

export function findAttemptForUserQuiz(userId, quizId) {
    return model.find({ quiz: quizId, user: userId })
}

export function createAttempt(attempt) {
    delete attempt._id
    return model.create(attempt);
}

export function deleteAttempt(attemptId) {
    return model.deleteOne({ _id: attemptId });
}

export function updateAttempt(attemptId, attemptUpdates) {
    return model.updateOne({ _id: attemptId }, attemptUpdates);
}