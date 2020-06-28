import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Avatar } from 'antd';

import { loadMerchants } from '../store/actions';
import { getMerchants } from '../store/selectors';

const MerchantsList = (): JSX.Element => {
    const dispatch = useDispatch();
    const merchants = useSelector(getMerchants);
    console.log(merchants.valueSeq());
    useEffect(() => {
        dispatch(loadMerchants());
    }, [dispatch]);

    return (
        <List
          itemLayout="horizontal"
          dataSource={merchants.valueSeq()}
          renderItem={(merchant) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={merchant.get('avatarUrl')} />}
                title={`${merchant.get('firstname')} ${merchant.get('lastname')}`}
                description={`Email: ${merchant.get('email')}, Phone: ${merchant.get('phone')}`}
              />
            </List.Item>
          )}
        />
    );
}

export default MerchantsList;
