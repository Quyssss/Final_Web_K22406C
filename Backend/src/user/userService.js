const userModel = require('./userModel');
const key = '123456789trytryrtyr';
const encryptor = require('simple-encryptor')(key);

module.exports.createuserDBService = async (userDetails) => {
    try {
        const userModelData = new userModel({
            firstname: userDetails.firstname,
            lastname: userDetails.lastname,
            email: userDetails.email,
            password: encryptor.encrypt(userDetails.password), // Mã hóa ngay khi tạo đối tượng
        });

        await userModelData.save();
        return true;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Error creating user"); // Ném lỗi để xử lý bên ngoài
    }
};

module.exports.loginuserDBService = async (userDetails) => {
    try {
        const result = await userModel.findOne({ email: userDetails.email });

        if (!result) {
            throw { status: false, msg: "User not found" };
        }

        const decrypted = encryptor.decrypt(result.password);

        if (decrypted === userDetails.password) {
            return { status: true, msg: "User validated successfully" };
        } else {
            throw { status: false, msg: "User validation failed" };
        }
    } catch (error) {
        console.error("Error during login:", error);
        throw { status: false, msg: error.msg || "Invalid data" };
    }
};
