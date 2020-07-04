import React from 'react';
import { Drawer, Table } from 'antd';
import { format } from 'date-fns';
import { Bids, Bid } from '../types';

type MerchantBidsProps = {
    visible: boolean;
    onClose: () => void;
    bids?: Bids;
};

const columns = [
    {
        title: 'Car',
        dataIndex: 'carTitle',
        key: 'carTitle',
        sorter: (a: Bid, b: Bid): number => ('' + a.carTitle).localeCompare(b.carTitle),
        render: (carTitle: string): string => `${carTitle}`,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        sorter: (a: Bid, b: Bid): number => a.amount - b.amount,
        render: (amount: number): string => `${amount}€`,
    },
    {
        title: 'Created',
        dataIndex: 'created',
        key: 'created',
        sorter: (a: Bid, b: Bid): number => a.created.getTime() - b.created.getTime(),
        render: (created: Date): string => format(created, 'Y-MM-dd'),
    },
];

const MerchantBids = ({ visible, onClose, bids }: MerchantBidsProps): JSX.Element => {
    const hasBids = !!(bids && bids.length);

    return (
        <Drawer
            title="Bids"
            width={550}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
        >
            {hasBids && <Table
                columns={columns}
                dataSource={bids}
                rowKey={(record) => String(record.id)}
            />}
            {!hasBids && <div>No bids found</div>}
        </Drawer>
    );
};

export default MerchantBids;
