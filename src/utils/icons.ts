import { IoCheckmarkCircleOutline, IoTimeOutline, IoSyncOutline } from 'react-icons/io5';
import type { IconType } from 'react-icons';
import type { TaskStatus } from '@interfaces';

// Task status to icon mapping
export const taskStatusIcons: Record<TaskStatus, IconType> = {
  pending: IoTimeOutline,
  inProgress: IoSyncOutline,
  done: IoCheckmarkCircleOutline,
};
