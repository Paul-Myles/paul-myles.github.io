import { css } from '@emotion/react';

export const palette = {
  gray: ['#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
  blue: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#315a69'],
  red: ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c'],
  yellow: ['#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#f1e4b9'],
};

export default {
  base: {
    light: css`
      color: ${palette.yellow[10]};
      background: ${palette.blue[10]};
    `,
    dark: css`
      color: ${palette.red[1]};
      background: ${palette.red[9]};
    `,
  },
  primary: {
    light: css`
      color: #000;
      background: #fff;
    `,
    dark: css`
      color: #fff;
      background: #000;
    `,
  },
};
