import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, DatePicker } from 'antd';
import { FunctionComponent } from 'enzyme';

export interface ModalProps {
  visible: boolean;
  onCreate: any;
  onCancel: any;
}

const CollectionCreateForm: FunctionComponent<ModalProps> = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      className="modal-test"
      visible={visible}
      title="Create a new Group"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate();
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input className="title-input-test" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" className="des-input-test" />
        </Form.Item>
        <Form.Item name="date-time-picker" label="DatePicker[showTime]">
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" className="datePicker-test" />
        </Form.Item>

        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group className="radio-btn-test">
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  function success() {
    Modal.success({
      content: 'Group created successfully!',
    });
  }

  const onCreate = (values: void) => {
    console.log('Received values of form: ', values);
    setVisible(false);
    success()
  };

  return (
    <div className='button-test'>
      <Button
        
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
        data-testid="create-group-form"
      >
        Create Group
      </Button>
      <CollectionCreateForm
        data-testid="collection-create-form"
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default CollectionsPage
