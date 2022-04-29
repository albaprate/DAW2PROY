import React, { useCallback } from 'react';

import { Form, Input, Checkbox, Button } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

import { Register } from '@/utils/Register';

interface IRegisterData {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirm: string;
  agreement: boolean;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
/* const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}; */

export const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = useCallback((values: IRegisterData) => {
    console.log('Received values of form: ', values);
    Register(
      values.name,
      values.surname,
      values.email,
      values.password,
      values.confirm,
      values.agreement
    );
  }, []);

  const onFinishFailed = useCallback(
    (errorInfo: ValidateErrorEntity<IRegisterData>) => {
      console.log('Failed:', errorInfo);
    },
    []
  );

  const onValuesChange = useCallback((changedValues: any, allValues: any) => {
    console.log('Handle on change', changedValues, allValues);
  }, []);

  return (
    <Form
      className="m-auto max-w-lg"
      layout="vertical"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
      scrollToFirstError
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Apellidos"
        name="surname"
        rules={[{ required: true, message: 'Please input your surname!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        /*  {...tailFormItemLayout} */
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item /* {...tailFormItemLayout} */>
        <Button type="primary" htmlType="submit" className="w-full">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
