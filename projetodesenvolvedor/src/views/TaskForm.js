import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background: rgba(255, 255, 255, 0.95);
  padding: 24px;
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  backdrop-filter: blur(10px);
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h2`
  margin: 0 0 24px 0;
  color: ${props => props.theme.colors.gray800};
  font-size: 1.5em;
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray700};
  font-size: 14px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${props => props.theme.colors.gray300};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 14px;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray500};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${props => props.theme.colors.gray300};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 14px;
  transition: all 0.3s ease;
  background: white;
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray500};
  }
`;

const ErrorMessage = styled.div`
  background: #fed7d7;
  color: #c53030;
  padding: 12px 16px;
  border-radius: ${props => props.theme.borderRadius.md};
  margin-bottom: 20px;
  border-left: 4px solid #fc8181;
  font-size: 14px;
  font-weight: 500;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, #764ba2);
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: ${props => props.theme.colors.gray400};
    transform: none;
    box-shadow: none;
    cursor: not-allowed;
  }
`;

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    try {
      onAddTask(title, description);
      setTitle('');
      setDescription('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Adicionar Nova Tarefa</Title>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <FormGroup>
        <FormLabel htmlFor="title">Título *</FormLabel>
        <FormInput
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título da tarefa"
        />
      </FormGroup>
      
      <FormGroup>
        <FormLabel htmlFor="description">Descrição</FormLabel>
        <TextArea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Digite a descrição da tarefa (opcional)"
          rows="3"
        />
      </FormGroup>
      
      <SubmitButton type="submit">
        Adicionar Tarefa
      </SubmitButton>
    </Form>
  );
};

export default TaskForm;