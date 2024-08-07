import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

// Sample data
const data = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    orderId: '15478256',
    amount: 124.00,
    status: 'Delivered'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Jane Smith',
    orderId: '48965786',
    amount: 365.02,
    status: 'Cancelled'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    orderId: '15478256',
    amount: 124.00,
    status: 'Delivered'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Jane Smith',
    orderId: '48965786',
    amount: 365.02,
    status: 'Cancelled'
  },  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    orderId: '15478256',
    amount: 124.00,
    status: 'Delivered'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Jane Smith',
    orderId: '48965786',
    amount: 365.02,
    status: 'Cancelled'
  },
  // Add more data as needed
];

// Styled TableContainer
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: '#202028',
  color: 'white',
  padding: theme.spacing(2),
  maxWidth: '100%', // Ensure the container does not exceed the parent width
  overflowX: 'auto', // Allow horizontal scrolling if content overflows
  '& .MuiTableCell-root': {
    color: 'white',
  },
  '& .MuiBadge-dot': {
    backgroundColor: '#00e676', // Green for Delivered
  },
  '& .MuiBadge-dot.MuiBadge-dotError': {
    backgroundColor: '#f44336', // Red for Cancelled
  },
  '& .MuiTableHead-root .MuiTableCell-root': {
    fontWeight: 'bold', // Make headings bold
  },
}));

const RecentOrders = () => {
  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell style={{display:'flex', alignItems: 'center', gap:"10px"}}>
                <Avatar alt={row.name} src={row.avatar} />
                {row.name}
              </TableCell>
              <TableCell>{row.orderId}</TableCell>
              <TableCell>${row.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge style={{marginLeft:"20px"}}
                  color={row.status === 'Delivered' ? 'success' : 'error'}
                  badgeContent={row.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default RecentOrders;
