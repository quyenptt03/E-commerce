import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TransferList from './MenuItem';
import "./MenuItem.scss"
// Define item names
const itemNames = {
  0: 'Electronics',
  1: 'Clothing',
  2: 'Home Appliances',
  3: 'Books',
  4: 'Toys',
  5: 'Furniture',
  6: 'Groceries',
  7: 'Sports Equipment',
};

const menuNames = {
  0: 'Dashboard',
  1: 'Shop',
  2: 'Chat',
  3: 'User',
  4: 'Stats',
  5: 'Setting',
  6: 'Profile',
  7: 'Adv',
};

const filterNames = {
  1: 'Brand',
  2: 'Category',
  3: 'Price Range',
  4: 'Location',
  5: 'Shipping Options',
  6: 'Customer Rating',
  7: 'Availability',
  8: 'Color',
  9: 'Size',
  10: 'Material',
  11: 'Discount',
  12: 'Seller',
  13: 'Warranty',
  14: 'Condition (New/Used)',
  15: 'Payment Methods',
  16: 'Manufacturer',
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Distinct initial lists for each tab
  const menuInitialLeft = [0, 1, 2, 3];
  const menuInitialRight = [4, 5, 6, 7];

  const itemInitialLeft = [0, 1, 2];
  const itemInitialRight = [3, 4, 5, 6, 7];

  const filterInitialLeft = [1, 2, 3, 4, 5];
  const filterInitialRight = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <Box sx={{ width: '100%' }}>
      <Box className="tab_choose" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Menu" {...a11yProps(0)} />
          <Tab label="Item Product" {...a11yProps(1)} />
          <Tab label="Filter Product" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TransferList
          itemNames={menuNames}
          initialLeft={menuInitialLeft}
          initialRight={menuInitialRight}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TransferList
          itemNames={itemNames}
          initialLeft={itemInitialLeft}
          initialRight={itemInitialRight}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TransferList
          itemNames={filterNames}
          initialLeft={filterInitialLeft}
          initialRight={filterInitialRight}
        />
      </CustomTabPanel>
    </Box>
  );
}
