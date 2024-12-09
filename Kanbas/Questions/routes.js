import * as questionDao from "./dao.js";

export default function QuizRoutes(app) {
    app.delete("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const status = await questionDao.deleteQuiz(questionId);
        res.send(status);
    });

    app.put("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const questionUpdates = req.body;
        const status = await questionDao.updateQuiz(questionId, questionUpdates);
        res.send(status);
    });
}