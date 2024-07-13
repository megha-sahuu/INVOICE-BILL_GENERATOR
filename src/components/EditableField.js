import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Styled components
const StyledInputGroup = styled(InputGroup)`
  margin: 0.25rem 0;
  display: flex;
  flex-wrap: nowrap;
`;

const StyledInputGroupText = styled(InputGroup.Text)`
  background-color: #f8f9fa;
  font-weight: bold;
  border: 0;
  color: #6c757d;
  padding: 0.5rem 0.75rem;
`;

const StyledFormControl = styled(Form.Control)`
  &.left {
    text-align: left;
  }
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }
`;

const LeadingSpan = styled.span`
  border: 2px solid #6c757d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  width: 20px;
  height: 20px;
`;

class EditableField extends React.Component {
  render() {
    return (
      <StyledInputGroup>
        {this.props.cellData.leading != null && (
          <StyledInputGroupText>
            <LeadingSpan>
              {this.props.cellData.leading}
            </LeadingSpan>
          </StyledInputGroupText>
        )}
        <StyledFormControl
          className={this.props.cellData.textAlign}
          type={this.props.cellData.type}
          placeholder={this.props.cellData.placeholder}
          min={this.props.cellData.min}
          name={this.props.cellData.name}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          step={this.props.cellData.step}
          presicion={this.props.cellData.presicion}
          aria-label={this.props.cellData.name}
          onChange={this.props.onItemizedItemEdit}
          required
        />
      </StyledInputGroup>
    );
  }
}

export default EditableField;
