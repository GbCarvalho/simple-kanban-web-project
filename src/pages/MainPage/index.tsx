import { Icon } from '@iconify/react';
import addTaskButton from '@iconify/icons-ic/round-add-task';
import cancelTaskButton from '@iconify/icons-ic/round-close';
import nextTaskButton from '@iconify/icons-ic/round-navigate-next';
import backTaskButton from '@iconify/icons-ic/round-navigate-before';
import check from '@iconify/icons-ic/twotone-check';
import add from '@iconify/icons-ic/round-plus';
import React, { FormEvent, useEffect, useState } from 'react';

import {
  Container,
  CardContainer,
  CardHeader,
  Page,
  Card,
  AddCard,
  ButtonsContainer,
  CardForm
} from './styles';
import api from '../../utils/api';

interface Task {
  id?: number;
  description: string;
  state: 1 | 2 | 3;
}

function MainPage() {
  const [description, setDescription] = useState('');
  const [addTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTaskCard() {
  }

  async function handleAddingTask(event: FormEvent) {
  }

  function handleCancelTaskAdding() {
  }

  async function handleTaskStateAdd(task: Task, index: number) {
  }

  async function handleTaskStateRemoval(task: Task, index: number) {
  }

  return (
    <Page>
      <Container>
        <CardHeader>
          <strong>TO DO</strong>
        </CardHeader>
        <CardContainer>


          <AddCard onClick={handleAddTaskCard}>
            <Icon icon={addTaskButton} style={{ fontSize: '35px' }} />
          </AddCard>
        </CardContainer>
      </Container>

      <Container>
        <CardHeader>
          <strong>DOING</strong>
        </CardHeader>

        <CardContainer>
        </CardContainer>
      </Container>

      <Container>
        <CardHeader>
          <strong>DONE</strong>
        </CardHeader>

        <CardContainer>
        </CardContainer>
      </Container>
    </Page>
  );
}

export default MainPage;
