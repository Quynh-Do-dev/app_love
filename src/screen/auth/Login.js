import {useState} from "react";
import { Button, Form, Input,notification } from "antd";
import {UserOutlined ,LockOutlined} from "@ant-design/icons"
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";

function Login() {
   const auth=getAuth();
   const [loading,setLoading] = useState(false)
   function handleLogin(value){
        setLoading(true)
        signInWithEmailAndPassword(auth,value.email, value.password)
            .then((res) => {
                notification.success({
                  message:"Đăng nhập thành công!"
                })
              setLoading(false)
            })
            .catch((e) => {
               notification.error({
                 message:"Tài khoản hoặc mật khẩu sai!"
               })
              setLoading(false)
            })
    }
    return (
        <div className="login">
            <div className="title"> Login</div>
            <div className="form-body">
                <Form
                    onFinish={handleLogin}
                >
                    <Form.Item label="Email" className="items-form" name="email"
                               rules={[{
                                    required: true,
                                    message: 'Please input your E-mail!',
                               },]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Nhập email"></Input>
                    </Form.Item>
                    <Form.Item label="Mật khẩu" className="items-form" name="password"
                               rules={[{
                                 required: true,
                                 message: 'Please input your password!',
                               },]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Nhập mật khẩu"></Input.Password>
                    </Form.Item>
                    <div className="redrect-register">
                      Bạn chưa có tài khoản?
                      <a href="#register"> Đăng ký</a>
                    </div>
                    <Button htmlType="submit" className="button-form" loading={loading}>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login