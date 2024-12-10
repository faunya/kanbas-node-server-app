import * as attemptDao from "./dao.js";

export default function QuizAttemptRoutes(app) {
    app.delete("/api/attempts/:attemptId", async (req, res) => {
        const { attemptId } = req.params;
        const status = await attemptDao.deleteQuestion(attemptId);
        res.send(status);
    });

    app.put("/api/attempts/:attemptId", async (req, res) => {
        const { attemptId } = req.params;
        const attemptUpdates = req.body;
        const status = await attemptDao.updateQuestion(attemptId, attemptUpdates);
        res.send(status);
    });
}