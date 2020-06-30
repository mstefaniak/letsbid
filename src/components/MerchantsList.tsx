import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Avatar, Button, Divider } from 'antd';
import { PlusOutlined, CrownTwoTone } from '@ant-design/icons';

import { Merchant } from '../types';

import { loadMerchants } from '../store/actions';
import { getMerchants } from '../store/selectors';

import MerchantForm from './MerchantForm';

const Description = ({ merchant }: { merchant: Merchant }): JSX.Element => {
    const email = merchant.get('email');
    const phone = merchant.get('phone');

    return (
        <span>Email: <a href={`mailto: ${email}`}>{email}</a>, Phone: <a href={`tel: ${phone}`}>{phone}</a></span>
    )
};

const MerchantsList = (): JSX.Element => {
    const dispatch = useDispatch();
    const merchants = useSelector(getMerchants);
    const [formVisible, setFormVisible] = useState(false);
    const [initialData, setInitialData] = useState<Merchant>();

    useEffect((): void => {
        dispatch(loadMerchants());
    }, [dispatch]);

    const addMerchant = (): void => {
        setFormVisible(true);
    }

    const onFormClose = (): void => {
        setFormVisible(false);
        setInitialData(undefined);
    }

    const onEditClick = (merchant: Merchant): void => {
        setInitialData(merchant);
        setFormVisible(true);
    };

    const onShowBidsClick = (): void => {

    };

    return (
        <React.Fragment>
            <Button type="primary" onClick={addMerchant}>
                <PlusOutlined />Add merchant
            </Button>
            <MerchantForm merchant={initialData} visible={formVisible} onClose={onFormClose} />
            <Divider />
            <List
                itemLayout="horizontal"
                dataSource={merchants.valueSeq()}
                renderItem={(merchant: Merchant): JSX.Element => (
                    <List.Item
                        actions={[<a onClick={() => onEditClick(merchant)} key="list-edit">edit</a>, <a onClick={onShowBidsClick} key="list-bids">show bids</a>]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={`${merchant.get('avatarUrl')}`} />}
                            title={<>
                                {merchant.get('firstname')} {merchant.get('lastname')}
                                {' '}
                                {merchant.get('hasPremium') && <CrownTwoTone twoToneColor="red" />}
                            </>}
                            description={<Description merchant={merchant} />}
                        />
                    </List.Item>
                )}
            />
        </React.Fragment>
    );
}

export default MerchantsList;
