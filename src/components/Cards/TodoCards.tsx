import {
  AddButton,
  Columns,
  ContentWrapper,
  TaskDescription,
  TaskTitle,
} from '../../styles';
import DeleteTwoTone from '@ant-design/icons/lib/icons/DeleteTwoTone';
import { useDispatch } from 'react-redux';
import { Card } from '../Card';
import { Todo } from '../../types/Todos';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { getItemStyle, getListStyle } from './styles';
import { useTranslation } from 'react-i18next';
import { deleteColumns, editTask } from '../../service';
import { openCreateModal } from '../../redux/action/modal';

interface TodoCardProps {
  name: string;
  column: any;
}

export const TodoCard = ({ name, column }: TodoCardProps): JSX.Element => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  return (
    <Card nameCard={name}>
      <Droppable droppableId={name}>
        {(provided, snapshot): JSX.Element => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {column.map((item: Todo, index: number) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot): JSX.Element => (
                  <div>
                    <Columns
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <ContentWrapper
                        onClick={() => {
                          editTask(item, dispatch, name);
                        }}
                      >
                        <TaskTitle>{item.description}</TaskTitle>
                        <TaskDescription>{item.value}</TaskDescription>
                      </ContentWrapper>
                      <DeleteTwoTone
                        onClick={(): void => {
                          deleteColumns(item, dispatch, name);
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                    </Columns>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddButton
        onClick={() => {
          const data = { name: name };
          dispatch(openCreateModal(data));
        }}
      >
        {t('todoCards.addButton')}
      </AddButton>
    </Card>
  );
};
