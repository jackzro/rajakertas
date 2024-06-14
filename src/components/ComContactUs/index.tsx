"use client";
import { usePostContactUs } from "@/services/apiRajaKertas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Space,
  notification,
} from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};

function ComponentContactUs() {
  const [form] = Form.useForm();
  const { mutate: postContactUs } = usePostContactUs();
  const [api, contextHolder] = notification.useNotification();

  // const {
  //   //@ts-ignore
  //   formProps,
  //   formState: { errors },
  // } = useForm({
  //   //@ts-ignore
  //   form,
  //   async submit({ username, email }: any) {
  //     console.log("submit");
  //     await new Promise((r) => setTimeout(r, 1000));
  //     console.log("fewfew");
  //     return "ok";
  //   },
  // });
  // const formUse = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  // });

  const onFinish = (data: any) => {
    postContactUs(data, {
      onSuccess: (data: any) => {
        api.open({
          message: (
            <div style={{ color: "white" }}>Pesan sudah berhasil dikirim</div>
          ),

          style: {
            backgroundColor: "green",
            borderRadius: 20,
          },
        });
        form.resetFields();
      },
      onError: (err: any) => {
        api.open({
          message: <div style={{ color: "white" }}>Pesan gagal dikirim</div>,

          style: {
            backgroundColor: "red",
            borderRadius: 20,
          },
        });
      },
    });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
      {contextHolder}
      <div className="p-10 ">
        <iframe
          className="h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px] w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.187538790804!2d106.66909917975539!3d-6.369771345838335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e4349a9a9891%3A0x2be9f0a6efd082c8!2sJl.%20Gotong%20Royong%20No.268%2C%20Pabuaran%2C%20Kec.%20Gn.%20Sindur%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016340!5e0!3m2!1sen!2sid!4v1717926114662!5m2!1sen!2sid"
          width="0"
          height="0"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
      <div className="px-10 flex items-center justify-center">
        <Form
          form={form}
          layout="vertical"
          style={{
            width: "100%",
            // backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
          }}
          onFinish={onFinish}

          // onFinishFailed={onFinishFailed}
        >
          <Form.Item<FieldType>
            label="Nama"
            name="name"
            labelCol={{ span: 24 }}
            style={{
              width: "100%",
            }}
            rules={[{ required: true, message: "Tolong isi nama anda!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: "Tolong isi email anda!" },
              {
                type: "email",
                message: "Tolong isi E-mail! anda dengan benar! ",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Pesan"
            name="message"
            labelCol={{ span: 24 }}
            style={{
              width: "100%",
            }}
            rules={[{ required: true, message: "Tolong isi pesan anda!" }]}
          >
            <Input.TextArea rows={4} style={{ width: "100%" }} />
          </Form.Item>

          {/* <Form.Item<FieldType>
            name="terms"
            valuePropName="checked"
            // wrapperCol={{ offset: 8, span: 16 }}
            rules={[{ required: true, message: "Please check the box!" }]}
          >
            <Checkbox>I accept the Terms</Checkbox>
          </Form.Item> */}

          <Form.Item>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimaryHover: "#B99470",
                    defaultHoverBg: "",
                  },
                },
              }}
            >
              <Button
                style={{
                  backgroundColor: "#B99470",
                  color: "white",
                }}
                htmlType="submit"
              >
                Submit
              </Button>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ComponentContactUs;
