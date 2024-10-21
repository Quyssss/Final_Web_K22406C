const userService = require('./userService');

const createUserControllerFn = async (req, res) => {
    try {
        console.log(req.body);
        const status = await userService.createuserDBService(req.body);
        console.log(status);

        if (status) {
            res.status(201).send({ status: true, message: "User created successfully" });
        } else {
            res.status(400).send({ status: false, message: "Error creating user" });
        }
    } catch (err) {
        console.error("Error in createUserController:", err);
        res.status(500).send({ status: false, message: "Internal server error" });
    }
};

const loginUserControllerFn = async (req, res) => {
    try {
        const result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.status(200).send({ status: true, message: result.msg });
        } else {
            res.status(401).send({ status: false, message: result.msg });
        }
    } catch (error) {
        console.error("Error in loginUserController:", error);
        res.status(500).send({ status: false, message: "Internal server error" });
    }
};

module.exports = { createUserControllerFn, loginUserControllerFn };
