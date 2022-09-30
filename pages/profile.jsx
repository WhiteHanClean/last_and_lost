import React, { useState } from "react";
import Header from "../src/components/Header/Header";
import s from "../src/style/profile.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });
const Profile = () => {
  const [user, setUser] = useState({
    name: "Han Okaski",
    contacts: [
      {
        name: "Contact number",
        description: "0709849789",
      },
      {
        name: "Alternative number",
        description: "0709849789",
      },
      {
        name: "Alternative email",
        description: "0709849789",
      },
    ],
  });
  const [editUser, setEditUser] = useState(true);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
          border: 'none !important'
        }}
      >
        Upload
      </div>
    </div>
  );

  console.log(user.contacts[0].description);
  return (
    <div>
      <Header />

      <div className="profile">
        <div className={s.profile_flex}>
          <div className={s.profile_info}>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              style={{width:"350px !important",height:"300px !important", border:"none  !important"}}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
            <h2>{user.name}</h2>
          </div>

          <div className={s.profile_contacts}>
            {user.contacts.map((item, i) => {
              return (
                <div className={s.items}>
                  <h2>{item.name}</h2>
                  {editUser !== true ? (
                    <p>{item.decription}</p>
                  ) : (
                    <input
                      placeholder="asdas"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          contacts: [
                            ...user.contacts,
                            {
                              ...user.contacts[i],
                              description: e.target.value,
                            },
                          ],
                        });
                      }}
                    />
                  )}
                </div>
              );
            })}
            <button
              className={s.profile_btn}
              onClick={() => setEditUser(!editUser)}
            >
              Редактировать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
