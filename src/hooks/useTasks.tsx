import Swal from 'sweetalert2';
import type { IconType } from 'react-icons';
import type { TaskStatus } from '@interfaces';
import { useTaskStore } from '@stores';
import { taskColorStyles, taskStatusIcons } from '@utils';

/**
 * Custom hook to handle task column behavior:
 * - Returns styles and icon based on task status
 * - Provides handler to add a new task using SweetAlert2
 */
export const useTasks = (status: TaskStatus) => {
  const addTask = useTaskStore(state => state.addTask);

  const styles = taskColorStyles[status];
  const Icon: IconType = taskStatusIcons[status];

  const handleAddTask = async () => {
    const { isConfirmed, value } = await Swal.fire({
      title: 'Add New Task',
      input: 'text',
      inputLabel: 'What do you need to do?',
      inputPlaceholder: 'Enter task title',
      showCancelButton: true,
      confirmButtonText: 'Add task',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#6b7280',
      icon: 'question',
      iconColor: '#4f46e5',
      background: '#f3f4f6',
      inputAttributes: {
        'aria-label': 'Task title',
        autocapitalize: 'off',
        autocorrect: 'off',
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster',
      },
      inputValidator: (value: string) => {
        if (!value.trim()) {
          return 'Please enter a task title';
        }
      },
    });

    if (isConfirmed && value.trim()) {
      addTask(value.trim(), status);
    }
  };

  return {
    styles,
    Icon,
    handleAddTask,
  };
};
