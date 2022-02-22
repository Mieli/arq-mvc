const TestController = {
    home(req, res) {
        res.sendError('Erro na base de dados', 500);
    }
}

module.exports = TestController;