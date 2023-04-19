//Returns the signed in profile info
import React from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Layout,
  message,
  Row,
  Spin,
  Typography,
} from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../utils/Constants";
import { useState } from "react";
import { getToken } from "../../utils/helper";
import AppHeader from "../../components/AppHeader/AppHeader";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();

  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setUser(responseData);
      message.success("Data saved successfully!");
    } catch (error) {
      console.error(Error);
      message.error("Error While Updating the Profile!");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Layout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <AppHeader />
        </Col>
        <Col span={22} offset={1}>
          {user ? (
            <Card className="profile_page_card">
              <Typography.Title>
                Welcome {user?.username}! Below are your details.
              </Typography.Title>
              <Form
                layout="vertical"
                initialValues={{
                  username: user?.username,
                  email: user?.email,
                }}
                onFinish={handleProfileUpdate}
              >
                <Row gutter={[16, 16]}>
                  <Col md={8} lg={8} sm={24} xs={24}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Username is required!",
                          type: "string",
                        },
                      ]}
                    >
                      <Input placeholder="Username" />
                    </Form.Item>
                  </Col>
                  <Col md={8} lg={8} sm={24} xs={24}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Email is required!",
                          type: "email",
                        },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>
                  </Col>
                </Row>
                <Button
                  className="profile_save_btn"
                  htmlType="submit"
                  type="primary"
                  size="large"
                >
                  {loading ? (
                    <>
                      <Spin size="small" /> Saving
                    </>
                  ) : (
                    "Save"
                  )}
                </Button>
              </Form>
            </Card>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default Profile;
