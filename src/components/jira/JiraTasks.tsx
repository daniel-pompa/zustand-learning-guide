import { IoAddOutline } from 'react-icons/io5';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import type { Task, TaskStatus } from '@interfaces';
import { SingleTask } from '@components';
import { useTasks } from '@hooks';
import { pluralize } from '@utils';

interface Props {
  title: string;
  tasks: Task[];
  status: TaskStatus;
}

export const JiraTasks = ({ title, status, tasks = [] }: Props) => {
  const { styles, Icon, handleAddTask } = useTasks(status);

  return (
    <div className='flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm w-full overflow-hidden min-h-80'>
      {/* Column Header */}
      <div className={`flex justify-between items-center p-4 ${styles.header}`}>
        <div className='flex items-center gap-3'>
          {/* Status Icon */}
          <div className='p-2 rounded-full bg-white/80 border'>
            <Icon size={24} />
          </div>
          <div>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p className='text-sm opacity-80'>{pluralize(tasks.length, 'task')}</p>
          </div>
        </div>

        {/* Add Task Button */}
        <button
          onClick={handleAddTask}
          className={`p-2 rounded-full transition-colors ${styles.hoverButton}`}
        >
          <IoAddOutline size={22} />
        </button>
      </div>

      {/* Droppable Task Area */}
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`flex-1 p-4 transition-all duration-150 ${
              snapshot.isDraggingOver
                ? `border-2 border-dashed ${styles.dragOver}`
                : 'border-2 border-transparent'
            }`}
          >
            <div className='flex flex-col h-full'>
              {/* Task List */}
              <div className='space-y-3'>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`rounded border-l-4 transition-transform ${
                          snapshot.isDragging
                            ? 'shadow-lg opacity-90 scale-105'
                            : 'opacity-100'
                        } ${styles.taskCard}`}
                      >
                        <SingleTask task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>

              {provided.placeholder}

              {/* Empty State */}
              {tasks.length === 0 && (
                <div
                  className={`flex-1 flex items-center justify-center rounded border-dashed transition-all ${
                    snapshot.isDraggingOver
                      ? `${styles.emptyState} h-32`
                      : 'border-gray-200 h-20 text-gray-400'
                  }`}
                >
                  <p className='text-sm font-medium'>
                    {snapshot.isDraggingOver ? 'Drop tasks here' : 'Drag tasks here'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};
