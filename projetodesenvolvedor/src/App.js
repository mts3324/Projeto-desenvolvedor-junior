import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { TaskController } from './controllers/TaskController';
import { TaskForm, TaskList, FilterBar } from './views';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const AppHeader = styled.header`
  text-align: center;
  margin-bottom: 30px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  backdrop-filter: blur(10px);
`;

const AppTitle = styled.h1`
  color: ${props => props.theme.colors.gray800};
  margin-bottom: 20px;
  font-size: 2.5em;
  font-weight: 700;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TaskStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Stat = styled.span`
  padding: 12px 20px;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: 600;
  font-size: 14px;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &.total {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, #764ba2);
    color: white;
  }

  &.pending {
    background: linear-gradient(135deg, ${props => props.theme.colors.warning}, ${props => props.theme.colors.warningDark});
    color: white;
  }

  &.completed {
    background: linear-gradient(135deg, ${props => props.theme.colors.success}, ${props => props.theme.colors.successDark});
    color: white;
  }
`;

const AppMain = styled.main`
  display: grid;
  gap: 24px;
`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [taskCount, setTaskCount] = useState({ total: 0, pending: 0, completed: 0 });

  const taskController = new TaskController();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => {
    const allTasks = taskController.getAllTasks();
    setTasks(allTasks);
    updateTaskCount();
  };

  const updateTaskCount = () => {
    setTaskCount(taskController.getTasksCount());
  };

  const handleAddTask = (title, description) => {
    taskController.addTask(title, description);
    loadTasks();
  };

  const handleToggleStatus = (id) => {
    taskController.toggleTaskStatus(id);
    loadTasks();
  };

  const handleDeleteTask = (id) => {
    taskController.deleteTask(id);
    loadTasks();
  };

  useEffect(() => {
    const filteredTasks = taskController.getTasks(filterType, searchText);
    setTasks(filteredTasks);
  }, [filterType, searchText]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <AppHeader>
          <AppTitle>Gerenciador de Tarefas</AppTitle>
          <TaskStats>
            <Stat className="total">Total: {taskCount.total}</Stat>
            <Stat className="pending">Pendentes: {taskCount.pending}</Stat>
            <Stat className="completed">Concluídas: {taskCount.completed}</Stat>
          </TaskStats>
        </AppHeader>

        <AppMain>
          <TaskForm onAddTask={handleAddTask} />
          <FilterBar
            filterType={filterType}
            setFilterType={setFilterType}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <TaskList
            tasks={tasks}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDeleteTask}
          />
        </AppMain>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;