import React from 'react';
import styled from 'styled-components';

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  backdrop-filter: blur(10px);
  flex-wrap: wrap;
  gap: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: ${props => props.theme.colors.gray700};
  font-size: 14px;
  white-space: nowrap;
`;

const Select = styled.select`
  padding: 10px 16px;
  border: 2px solid ${props => props.theme.colors.gray300};
  border-radius: ${props => props.theme.borderRadius.md};
  background: white;
  font-size: 14px;
  transition: all 0.3s ease;
  min-width: 140px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    min-width: auto;
  }
`;

const Input = styled.input`
  padding: 10px 16px;
  border: 2px solid ${props => props.theme.colors.gray300};
  border-radius: ${props => props.theme.borderRadius.md};
  min-width: 280px;
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    min-width: auto;
  }
`;

const FilterBar = ({ filterType, setFilterType, searchText, setSearchText }) => {
  return (
    <FilterBarContainer>
      <FilterGroup>
        <Label>Filtro:</Label>
        <Select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">Todas</option>
          <option value="pending">Pendentes</option>
          <option value="completed">Concluídas</option>
        </Select>
      </FilterGroup>
      <FilterGroup>
        <Label>Busca:</Label>
        <Input
          type="text"
          placeholder="Buscar por título ou descrição..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </FilterGroup>
    </FilterBarContainer>
  );
};

export default FilterBar;