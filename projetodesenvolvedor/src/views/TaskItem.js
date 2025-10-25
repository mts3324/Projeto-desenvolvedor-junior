import React from 'react';
import styled from 'styled-components';
import { formatDate } from '../utils/dateUtils';

const TaskItemContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 24px;
  margin-bottom: 16px;
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-left: 4px solid ${props => props.completed ? props.theme.colors.success : props.theme.colors.primary};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 20px;
  }
`;

const TaskContent = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 8px;
  }
`;

const TaskTitle = styled.h3`
  margin: 0;
  color: ${props => props.completed ? props.theme.colors.gray600 : props.theme.colors.gray800};
  font-size: 18px;
  font-weight: 600;
  flex: 1;
  line-height: 1.4;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`;

const TaskStatus = styled.span`
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  margin-left: 12px;
  white-space: nowrap;
  background: ${props => props.completed ? props.theme.colors.success + '20' : props.theme.colors.warning + '20'};
  color: ${props => props.completed ? props.theme.colors.successDark : props.theme.colors.warningDark};
  border: 1px solid ${props => props.completed ? props.theme.colors.success + '40' : props.theme.colors.warning + '40'};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    align-self: flex-start;
    margin-left: 0;
  }
`;

const TaskDescription = styled.p`
  margin: 0 0 12px 0;
  color: ${props => props.theme.colors.gray700};
  line-height: 1.5;
  font-size: 14px;
`;

const TaskMeta = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.gray500};
  font-weight: 500;
`;

const TaskActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 160px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: row;
    width: 100%;
    min-width: auto;
  }
`;

const ToggleButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  background: ${props => props.completed ? 
    `linear-gradient(135deg, ${props.theme.colors.warning}, ${props.theme.colors.warningDark})` : 
    `linear-gradient(135deg, ${props.theme.colors.success}, ${props.theme.colors.successDark})`};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex: 1;
    padding: 12px 16px;
    font-size: 14px;
  }
`;

const DeleteButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  background: linear-gradient(135deg, ${props => props.theme.colors.danger}, ${props => props.theme.colors.dangerDark});
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex: 1;
    padding: 12px 16px;
    font-size: 14px;
  }
`;

const TaskItem = ({ task, onToggleStatus, onDelete }) => {
  const handleToggle = () => {
    onToggleStatus(task.id);
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      onDelete(task.id);
    }
  };

  return (
    <TaskItemContainer completed={task.status === 'completed'}>
      <TaskContent>
        <TaskHeader>
          <TaskTitle completed={task.status === 'completed'}>{task.title}</TaskTitle>
          <TaskStatus completed={task.status === 'completed'}>
            {task.status === 'completed' ? 'Concluída' : 'Pendente'}
          </TaskStatus>
        </TaskHeader>
        
        {task.description && (
          <TaskDescription>{task.description}</TaskDescription>
        )}
        
        <TaskMeta>
          Criada em: {formatDate(task.creationDate)}
        </TaskMeta>
      </TaskContent>
      
      <TaskActions>
        <ToggleButton 
          onClick={handleToggle}
          completed={task.status === 'completed'}
        >
          {task.status === 'completed' ? 'Marcar como Pendente' : 'Marcar como Concluída'}
        </ToggleButton>
        
        <DeleteButton onClick={handleDelete}>
          Excluir
        </DeleteButton>
      </TaskActions>
    </TaskItemContainer>
  );
};

export default TaskItem;