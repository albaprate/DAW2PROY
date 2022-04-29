/* eslint-disable import/no-extraneous-dependencies */
import { useCallback } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import Link from 'next/link';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

import { Login } from '@/utils/Login';

interface ILoginData {
  username: string;
  password: string;
  remember: boolean;
}

// validations

export const FormSesionInit = () => {
  const [form] = Form.useForm();

  const onFinish = useCallback((values: ILoginData) => {
    console.log('Success:', values);
    Login(values.username, values.password);
  }, []);

  const onFinishFailed = useCallback(
    (errorInfo: ValidateErrorEntity<ILoginData>) => {
      console.log('Failed:', errorInfo);
    },
    []
  );

  const onValuesChange = useCallback((changedValues: any, allValues: any) => {
    console.log('Handle on change', changedValues, allValues);
  }, []);

  return (
    <Form<ILoginData>
      form={form}
      className="max-w-md"
      layout="vertical"
      name="basic"
      /*  labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }} */
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        /*  wrapperCol={{ offset: 8, span: 16 }} */
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item /* wrapperCol={{ offset: 8, span: 16 }} */>
        <Button type="primary" htmlType="submit" className="w-full">
          Log in
        </Button>
        Nuevo en Ecommerce ?
      </Form.Item>

      <Form.Item /* wrapperCol={{ offset: 8, span: 16 }} */>
        <Link href="/register/">
          <a className="border-none text-gray-700 hover:text-gray-900">
            <Button type="primary" htmlType="submit" className="w-full">
              Crear una Cuenta
            </Button>
          </a>
        </Link>
      </Form.Item>
    </Form>
  );
};
