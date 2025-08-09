import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { TaskStatus } from '@interfaces';
import { useTaskStore } from '../../stores';
import { filterTasksByStatus } from '@utils';
import { JiraTasks } from '@components';

export const JiraPage = () => {
  const { tasks, updateTaskStatus } = useTaskStore();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // If dropped outside the list or in the same position
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    updateTaskStatus(result.draggableId, destination.droppableId as TaskStatus);
  };

  return (
    <>
      <h1 className='font-bold'>Tasks</h1>
      <p className='mt-2 text-gray-600'>State management with Zustand objects</p>
      <hr className='my-4 border-gray-300' />

      <div className='animate__animated animate__fadeIn'>
        {/* Tasks */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
            <JiraTasks
              title='Pending'
              status='pending'
              tasks={filterTasksByStatus(tasks, 'pending')}
            />
            <JiraTasks
              title='In Progress'
              status='inProgress'
              tasks={filterTasksByStatus(tasks, 'inProgress')}
            />
            <JiraTasks
              title='Done'
              status='done'
              tasks={filterTasksByStatus(tasks, 'done')}
            />
          </div>
        </DragDropContext>
      </div>
    </>
  );
};
