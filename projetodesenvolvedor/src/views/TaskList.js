import React from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

const TaskListContainer = styled.div`
  margin-bottom: 32px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${props => props.theme.colors.gray600};
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const EmptyStateText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const TaskList = ({ tasks, onToggleStatus, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <TaskListContainer>
        <EmptyState>
          <EmptyStateText>Nenhuma tarefa encontrada.</EmptyStateText>
        </EmptyState>
      </TaskListContainer>
    );
  }

  return (
    <TaskListContainer>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </TaskListContainer>
  );
};

export default TaskList;