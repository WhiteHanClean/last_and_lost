import Headers from '../src/components/Header/Header';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';

import { Card } from 'antd';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCotegories } from '../src/store/foundSlice';

const { Header, Sider, Content } = Layout;
const { Meta } = Card;

const Lost = () => {
  const { categories: category } = useSelector((state) => state.found);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(getCotegories());
  }, []);

  useEffect(() => {
    setCategories(category);
  }, [category]);

  const infite = (product) => {
    setProducts(product);
  };
  const showModal = (product) => {
    setModalText(product);
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout>
        <Headers />

        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            height: '100vh',
            marginTop: '80px',
            background: 'white',
          }}
        >
          <div className='logo' />
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            items={categories.map((item, i) => {
              return {
                key: i,
                label: item.title,
                onClick: () => infite(item.items),
              };
            })}
          />
        </Sider>
        <Layout
          className='site-layout'
          style={{
            marginTop: '80px',
          }}
        >
          <Header
            className='site-layout-background'
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
              {products.map((product) => {
                return (
                  <Card
                    hoverable
                    style={{
                      width: '240px',
                      marginRight: '20px',
                      marginBottom: '20px',
                    }}
                    cover={
                      <img
                        style={{ width: '240px', height: '280px' }}
                        alt='example'
                        src={product.picture}
                      />
                    }
                    onClick={() => showModal(product)}
                  >
                    <Meta
                      title={product.title}
                      description={product.description}
                    />
                  </Card>
                );
              })}
            </div>
          </Content>
        </Layout>
      </Layout>

      <Modal
        title={modalText.title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        style={{ maxWidth: '800px', height: '100%' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <img
              style={{ height: '150px', width: '150px' }}
              src={modalText.picture}
              alt='img'
            />
          </div>
          <div>
            <p>
              <b>Категории </b> : {modalText.category_title}
            </p>
            <p>
              <strong>Дата</strong> : {modalText.date}
            </p>
            <p>
              <b>Название</b> : {modalText.description}
            </p>
            <p>
              <b>Место где было найдено</b> : {modalText.geotag}
            </p>
            <p>
              <b>Место для возврата</b> : {modalText.pickup_location}
            </p>
            <p>
              <b>Телефон номера</b> : <a href=''>{modalText.phone_number}</a>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Lost;
