import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/MyStyledComponents"
import { Button, Form, Input, InputNumber, Radio, Select } from "antd"
import axios from "axios"
import { navigate } from "gatsby"
import TextArea from "antd/lib/input/TextArea"

function Contact() {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(d) {
    setIsLoading(true)
    const res = await axios.post(
      "https://us-central1-form-b0cfc.cloudfunctions.net/handleFormSubmission",
      d
    )
    if (res.status === 200) {
      navigate("/success")
    }
    setIsLoading(false)
  }

  return (
    <>
      <SEO title="Contact" />
      <Layout>
        <Container>
          <h1>Contact</h1>
          <Form layout="vertical" onFinish={onSubmit}>
            <Form.Item
              form={form}
              label="Name of student"
              name="studentName"
              rules={[
                {
                  required: true,
                  message: "Please provide the name of the student",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Age of student"
              name="studentAge"
              rules={[
                {
                  required: true,
                  message: "Please provide the age of the student",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item label="Prior experience" name="priorExperience">
              <Input />
            </Form.Item>

            <Form.Item label="Parent/guardian name" name="parentName">
              <Input />
            </Form.Item>

            <Form.Item label="Email address" name="email">
              <Input
                htmlType="email"
                rules={[
                  {
                    required: true,
                    message: "Please provide your email address",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item label="Phone number" name="phone">
              <Input
                rules={[
                  {
                    required: true,
                    message: "Please provide your phone number",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="What type of lesson are you interested in?"
              name="type"
            >
              <Radio.Group>
                <Radio value="Piano">Piano</Radio>
                <Radio value="Voice">Voice</Radio>
                <Radio value="Flute">Flute</Radio>
                <Radio value="Music Theory">Music theory</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="preferredTimes"
              label="Preferred days and times for lessons (eg Monday afternoons, Saturday
            mornings etc)"
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="What format of lesson are you interested in?"
              name="format"
            >
              <Radio.Group>
                <Radio value="One-on-one">One-on-one</Radio>
                <Radio value="Group">Group</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="notes"
              label="Other notes (please feel free to tell us more about yourself or your child)"
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Container>
      </Layout>
    </>
  )
}

export default Contact
