import { AlertStatus, TransactionFlow, TransactionStatus } from 'models';
import { DEFAULT_STYLES } from 'styles';
import { IconType } from 'react-icons';
import { MdWarning } from '@react-icons/all-files/md/MdWarning';
import { AiFillInfoCircle } from '@react-icons/all-files/ai/AiFillInfoCircle';

export const flowColorHandler = (str: TransactionFlow) => {
  let color: string;

  if (str === 'Inflow') {
    color = DEFAULT_STYLES.purple;
  } else {
    color = DEFAULT_STYLES.pink;
  }

  return color;
};

export const statusColorHandler = (str: TransactionStatus) => {
  switch (str) {
    case 'Completed':
    case 'Pending':
      return DEFAULT_STYLES.lightYellow;
    case 'InProgress':
    case 'Paid':
      return DEFAULT_STYLES.blue;
  }
};

export const alertStatusHandler = (status: AlertStatus) => {
  let color: string = '';
  let bg: string = '';
  let icon: IconType | undefined = undefined;

  switch (status) {
    case 'warning':
      color = DEFAULT_STYLES.warning;
      bg = DEFAULT_STYLES.warningBg;
      icon = MdWarning;

      break;

    case 'success':
      color = DEFAULT_STYLES.success;
      bg = DEFAULT_STYLES.successBg;
      icon = AiFillInfoCircle;
      break;
  }

  return { color, bg, icon };
};
