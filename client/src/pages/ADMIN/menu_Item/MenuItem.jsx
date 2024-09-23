import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "./MenuItem.scss"

export default function TransferList({ itemNames, initialLeft, initialRight }) {
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState(initialLeft || []);
  const [right, setRight] = useState(initialRight || []);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const MenuItem = (items = []) => (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
      <List dense component="div" role="list">
        {items.length > 0 ? (
          items.map((value) => {
            const labelId = `transfer-list-item-${value}-label`;

            return (
              <ListItemButton key={value} role="listitem" onClick={handleToggle(value)}>
                <ListItemIcon>
                  <Checkbox
                    checked={checked.includes(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={itemNames[value] || 'Unknown item'} />
              </ListItemButton>
            );
          })
        ) : (
          <ListItemText primary="No items available" />
        )}
      </List>
    </Paper>
  );

  const getItemsWithNames = (itemIds) => {
    return itemIds.map(id => ({ id, name: itemNames[id] }));
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid item>{MenuItem(left)}</Grid>
      <Grid item>
        <Grid container direction="column" sx={{ alignItems: 'center' }}>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
          <Button
            sx={{ my: 0.5,
              backgroundColor: 'grey',  // Thay đổi màu nền
              color: 'white',              // Thay đổi màu chữ
              '&:hover': {                 // Thay đổi màu nền khi hover
                backgroundColor: '#ff7004',
              },
              '&:active': {                // Thay đổi màu nền khi nhấn
                backgroundColor: '#ff7004',
              },}}
            variant="contained"
            color="primary"
            onClick={() => {
              const finalList = {
                leftItems: getItemsWithNames(left),
                rightItems: getItemsWithNames(right),
              };
              console.log('Selected items:', finalList);
            }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
      <Grid item>{MenuItem(right)}</Grid>
    </Grid>
  );
}

// Helper functions
function not(a, b) {
  return a.filter((value) => !b.includes(value));
}

function intersection(a, b) {
  return a.filter((value) => b.includes(value));
}
