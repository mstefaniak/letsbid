import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Avatar, Button, Divider, Modal } from 'antd';
import { PlusOutlined, CrownTwoTone } from '@ant-design/icons';

import { Merchant, Bids } from '../types';

import { loadMerchants, removeMerchant } from '../store/actions';
import { getMerchants } from '../store/selectors';

import MerchantBids from './MerchantBids';
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
    const [idToRemove, setIdToRemove] = useState(0);
    const [bids, setBids] = useState<Bids>();
    const [bidsOpen, setBidsOpen] = useState(false);

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

    const onRemoveClick = (merchant: Merchant): void => {
        setIdToRemove(merchant?.get('id') || 0);
    };

    const hideModal = (): void => {
        setIdToRemove(0);
    };

    const remove = () => {
        dispatch(removeMerchant(idToRemove));
        hideModal();
    }

    const onShowBidsClick = (merchant: Merchant): void => {
        setBids(merchant?.get('bids'));
        setBidsOpen(true);
    };

    const onBidsClose = (): void => {
        setBidsOpen(false);
    };

    return (
        <React.Fragment>
            <Button type="primary" onClick={addMerchant}>
                <PlusOutlined />
                Add merchant
            </Button>
            <MerchantForm merchant={initialData} visible={formVisible} onClose={onFormClose} />
            <MerchantBids bids={bids} visible={bidsOpen} onClose={onBidsClose} />
            <Modal
                title="Remove merchant"
                visible={!!idToRemove}
                onOk={remove}
                onCancel={hideModal}
                okText="Yes"
                cancelText="No"
            >
                <p>Are you sure you want to remove selected merchant?</p>
            </Modal>
            <Divider />
            <List
                itemLayout="horizontal"
                dataSource={merchants.valueSeq().toArray()}
                pagination={{
                    pageSize: 10,
                }}
                renderItem={(merchant: Merchant): JSX.Element => (
                    <List.Item
                        actions={[
                            <a onClick={() => onEditClick(merchant)} key="list-edit">edit</a>,
                            <a onClick={() => onRemoveClick(merchant)} key="list-edit">remove</a>,
                            <a onClick={() => onShowBidsClick(merchant)} key="list-bids">show bids</a>
                        ]}
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
