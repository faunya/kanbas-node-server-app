import * as quizDao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizDao.deleteAssignment(quizId);
        res.send(status);
    });

    app.put("/api/quizs/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizDao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });
}