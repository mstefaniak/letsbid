import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Form, Button, Col, Row, Input, Switch } from 'antd';
import { FormInstance } from 'antd/lib/form';

import { addMerchant, updateMerchant } from '../store/actions';
import { Merchant } from '../types';
import { Store } from 'rc-field-form/lib/interface';

type FormProps = {
    merchant?: Merchant,
    visible: boolean,
    onClose: () => void,
};

const MerchantForm = ({ merchant, visible, onClose }: FormProps): JSX.Element => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [hasPremium, setHasPremium] = useState(merchant?.hasPremium || false);

    useEffect(() => {
        form.resetFields();
        setHasPremium(merchant?.hasPremium || false);
    }, [merchant]);

    const onFinish = (formData: Store): void => {
        const merchantData = {
            firstname: formData.firstname,
            lastname: formData.lastname,
            avatarUrl: formData.avatarUrl,
            email: formData.email,
            phone: formData.phone,
            hasPremium,
        };

        if (merchant?.id) {
            dispatch(updateMerchant(merchant?.id, merchantData));
        } else {
            dispatch(addMerchant(merchantData));
        }
        onFormClose();
    };

    const onFormClose = () => {
        form.resetFields();
        onClose();
    }

    return (
        <Drawer
            title="Create a new merchant"
            width={550}
            onClose={onFormClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <Form form={form} layout="vertical" initialValues={merchant} onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="firstname"
                            label="First name"
                            rules={[{ required: true, message: 'Please enter first name' }]}
                        >
                            <Input placeholder="Please enter first name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="lastname"
                            label="Last name"
                            rules={[{ required: true, message: 'Please enter last name' }]}
                        >
                            <Input placeholder="Please enter last name" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{ required: true, type: 'email', message: 'Please enter email address' }]}
                        >
                            <Input placeholder="Please enter email address" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="phone"
                            label="Phone"
                            rules={[{ required: true, pattern: /[0-9+\s-()]{5,12}/i, message: 'Please enter phone number' }]}
                        >
                            <Input placeholder="Please enter valid phone number" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="avatarUrl"
                            label="Avatar Url"
                            rules={[{ required: true, type: 'url', message: 'Please enter avatar url' }]}
                        >
                            <Input
                                placeholder="Please enter valid URL"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="hasPremium"
                            label="Premium"
                        >
                            <Switch checked={hasPremium} onChange={setHasPremium} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24} style={{
                        textAlign: 'right',
                    }}>
                        <Button onClick={onFormClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button htmlType="submit" type="primary">
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    )
}

export default MerchantForm;
