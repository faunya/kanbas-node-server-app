import * as quizDao from "./dao.js";
import * as questionDao from "../Questions/dao.js";
import * as quizAttemptsDao from "../QuizAttempts/dao.js";

export default function QuizRoutes(app) {
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizDao.deleteQuiz(quizId);
        res.send(status);
    });

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizDao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });

    // questions -----------------------------------------------------------------------
    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await questionDao.findQuestionsForQuiz(quizId);
        res.json(questions);
    });

    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const question = {
            ...req.body,
            quiz: quizId,
        };
        const newQuestion = await questionDao.createQuestion(question);
        res.send(newQuestion);
    });

    // attempts ---------------------------------------------------------------------------
    const findAttemptsForQuiz = async (req, res) => { 
        const { quizId } = req.params;
        const attempts = await quizAttemptsDao.findAttemptsForQuiz(quizId);
        res.json(attempts);
    }
    app.get("/api/quizzes/:quizId/attempts", findAttemptsForQuiz)

    const createAttemptForQuiz = async (req, res) => {
        const { quizId } = req.params;
        const attempt = {
            ...req.body,
            quiz: quizId,
        };
        const newAttempt = await quizAttemptsDao.createAttempt(attempt);
        console.log(attempt)
        res.send(newAttempt);
    }
    app.post("/api/quizzes/:quizId/attempts", createAttemptForQuiz)
}