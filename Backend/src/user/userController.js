const userModel = require('./userModel');

// Hàm tạo người dùng
const createUserControllerFn = async (req, res) => {
    try {
        const body = req.body;
        const userModelData = new userModel({
            Username: body.Username,
            Passwork: body.Passwork,
        });
        await userModelData.save();

        res.status(200).send({
            status: true,
            message: "User created successfully",
        });
    } catch (error) {
        res.status(400).send({
            status: false,
            message: error.message,
        });
    }
};

// Hàm tìm một người dùng (giả định bạn có hàm này)
const findOneUserController = async (req, res) => {
    try {
        const user = await userModel.findOne({ Username: req.query.Username });
        if (!user) {
            return res.status(404).send({ status: false, message: "User not found" });
        }
        res.status(200).send({ status: true, user });
    } catch (error) {
        res.status(400).send({ status: false, message: error.message });
    }
};

module.exports = {
    createUserControllerFn,
    findOneUserController,
};
