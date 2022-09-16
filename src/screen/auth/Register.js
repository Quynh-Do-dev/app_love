import { Button, Form, Input,notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useState} from "react";

function Register(){
  const [loading, setLoading] = useState(false)
  function handleRegister(val){
    setLoading(true)
    if(val.password !== val.confirmPassword){
        notification.error({
          message:"Mật khẩu không khớp!",
          description: "Vui lòng kiểm tra lại."
        })
      setLoading(false)
        return;
      }
      const auth=getAuth();
      createUserWithEmailAndPassword(auth,val.email,val.password)
          .then((res) =>{
            console.log(res);
            notification.success({
              message:"Tạo tài khoản thành công!"
            })
            window.location.hash="#login"
          })
          .catch(e => {
            notification.error({
              message:"Tạo tài khoản thất bại!",
              description: "Vui lòng kiểm tra và thử lại."
            })
            setLoading(false)
          })
  }
   return (
       <div className="Register">
         <div className="login">
           <div className="title"> Register</div>
           <div className="form-body">
             <Form
                 onFinish={handleRegister}
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
               <Form.Item label=" Nhập lại mật khẩu" className="items-form" name="confirmPassword"
                          rules={[{
                            required: true,
                            message: 'Please input your confirm password!'
                          },]}
               >
                 <Input.Password prefix={<LockOutlined />} placeholder="Nhập mật khẩu"></Input.Password>
               </Form.Item>
               <div className="redrect-register">
                 Bạn đã có tài khoản
                 <a href="#login"> Đăng nhập</a>
               </div>
               <Button htmlType="submit" className="button-form" loading={loading}>
                 Register
               </Button>
             </Form>
           </div>
         </div>
       </div>
   )
}
export default Register