const models = require('../models/index')

const controller = {
    show: async (req, res) => {
        res.render('change_password', { styleLink: "/assets/css/ThayDoiMatKhau.css" });
    },

    changePassword: async (req, res) => {
        let inputPassword = {
            currentPass: req.body.currentPassword,
            newPass: req.body.newPassword,
            confirmPass: req.body.confirmPassword,
        }
        
        let oldPass = await models.TaiKhoan.findOne({
            attributes: ["password"],
            where: {
                ID_TK: 1,
            }
        })
      
        let msg = "";
        console.log(oldPass.password)
        if (oldPass.password === inputPassword.currentPass) {
            if (inputPassword.newPass === inputPassword.confirmPass) {
                console.log(inputPassword.confirmPass);
                console.log("B");
              
                await models.TaiKhoan.update({password: inputPassword.newPass}, {
                    where: {
                        ID_TK: 1,
                    }
                });

                msg = {
                    result: "Thành công",
                    sign: "1",
                }
            }
            else {
                msg = {
                    result: "Xác nhận mật khẩu không đúng",
                    sign: "0",
                }
            }
        }
        else {
            console.log("C");
            msg = {
                result: "Sai mật khẩu",
                sign: "0",
            }
        }
        
        console.log(msg)
        res.setHeader('content-type', 'application/json'); 
        res.status(200).send(JSON.stringify(msg));
    }
}



module.exports = controller;