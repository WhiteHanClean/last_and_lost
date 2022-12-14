import Headers from '../src/components/Header/Header';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Input, Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';

import { Card } from 'antd';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createCategories, getCotegories } from '../src/store/foundSlice';

const { Header, Sider, Content } = Layout;
const { Meta } = Card;

const Lost = () => {
  const { categories: category } = useSelector((state) => state.found);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [titleAdd, setTitleAdd] = useState('');
  const [openAdd, setOpenAdd] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);
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

  const showModalAdd = () => {
    setOpenAdd(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleOkAdd = () => {
    setConfirmLoadingAdd(true);
    dispatch(createCategories({ title: titleAdd }));
    dispatch(getCotegories());
    setConfirmLoadingAdd(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleCancelAdd = () => {
    setOpenAdd(false);
  };

  const handleCreateCategory = () => {};

  return (
    <>
      <Layout>
        <Headers />
        <div className={'add_block'}>
          <Button onClick={(e) => showModalAdd()}>???????????????? ??????????????????</Button>
        </div>
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
        open={openAdd}
        onOk={handleOkAdd}
        confirmLoading={confirmLoadingAdd}
        onCancel={handleCancelAdd}
        style={{ maxWidth: '800px', height: '100%' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Input
            style={{ width: '80%' }}
            value={titleAdd}
            onChange={(e) => setTitleAdd(e.target.value)}
          />
        </div>
      </Modal>

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
              <b>?????????????????? </b> : {modalText.category_title}
            </p>
            <p>
              <strong>????????</strong> : {modalText.date}
            </p>
            <p>
              <b>????????????????</b> : {modalText.description}
            </p>
            <p>
              <b>?????????? ?????? ???????? ??????????????</b> : {modalText.geotag}
            </p>
            <p>
              <b>?????????? ?????? ????????????????</b> : {modalText.pickup_location}
            </p>
            <p>
              <b>?????????????? ????????????</b> : <a href=''>{modalText.phone_number}</a>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Lost;
