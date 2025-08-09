import { FaGripVertical } from 'react-icons/fa';
import type {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from '@hello-pangea/dnd';
import type { Task } from '@interfaces';

interface Props {
  task: Task;
  innerRef?: (element: HTMLElement | null) => void;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
}

export const SingleTask = ({
  task,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) => {
  return (
    <div
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      className='flex items-center justify-between rounded shadow-md p-3 cursor-move'
    >
      {/* Task title */}
      <p className='text-sm font-medium'>{task.title}</p>
      {/* Drag icon */}
      <FaGripVertical size={14} />
    </div>
  );
};
