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
    setAddTask(true);
  }

  async function handleAddingTask(event: FormEvent) {
    event.preventDefault();

    const task: Task = {
      description,
      state: 1,
    }

    const response = await api.post('/tasks', task);

    setTasks([...tasks, response.data]);

    setAddTask(false);
    setDescription('');
  }

  function handleCancelTaskAdding() {
    setAddTask(false);
  }

  async function handleTaskStateAdd(task: Task, index: number) {
    tasks.splice(index, 1);

    if (task.state >= 3) {
      await api.delete(`/tasks/${task.id}`);
      setTasks([...tasks]);
      return;
    }

    task.state += 1;
    await api.put(`/tasks/${task.id}`, task);
    setTasks([...tasks, task]);
  }

  async function handleTaskStateRemoval(task: Task, index: number) {
    tasks.splice(index, 1);
    task.state -= 1;

    if (task.state < 1) {
      await api.delete(`/tasks/${task.id}`);
      setTasks([...tasks]);
      return;
    };

    await api.put(`/tasks/${task.id}`, task);

    setTasks([...tasks, task]);
  }

  return (
    <Page>
      <Container>
        <CardHeader>
          <strong>TO DO</strong>
        </CardHeader>
        <CardContainer>

          {tasks.map((task, index) => {
            if (task.state !== 1) {
              return;
            }

            return (
              <Card key={task.id}>
                <p>{task.description}</p>
                <ButtonsContainer>
                  <button type="button" onClick={() => handleTaskStateAdd(task, index)}>
                    <Icon icon={nextTaskButton} style={{ fontSize: '24px' }} />
                  </button>

                  <button type="button" onClick={() => handleTaskStateRemoval(task, index)}>
                    <Icon icon={cancelTaskButton} style={{ fontSize: '24px' }} />
                  </button>
                </ButtonsContainer>
              </Card>
            )
          })}

          {addTask && (
            <CardForm onSubmit={handleAddingTask}>
              <input value={description} onChange={event => setDescription(event.target.value)} placeholder='Type the card title'></input>
              <ButtonsContainer confirmation>
                <button type="submit">
                  <Icon icon={add} style={{ fontSize: '24px' }} />
                </button>

                <button type="button" onClick={handleCancelTaskAdding}>
                  <Icon icon={cancelTaskButton} style={{ fontSize: '24px' }} />
                </button>
              </ButtonsContainer>
            </CardForm>
          )}

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
          {tasks.map((task, index) => {
            if (task.state !== 2) {
              return;
            }

            return (
              <Card key={task.id}>
                <p>{task.description}</p>
                <ButtonsContainer confirmation>
                  <button type="button" onClick={() => handleTaskStateAdd(task, index)}>
                    <Icon icon={check} style={{ fontSize: '24px' }} />
                  </button>

                  <button type="button" onClick={() => handleTaskStateRemoval(task, index)}>
                    <Icon icon={backTaskButton} style={{ fontSize: '26px' }} />
                  </button>
                </ButtonsContainer>
              </Card>
            )
          })}
        </CardContainer>
      </Container>

      <Container>
        <CardHeader>
          <strong>DONE</strong>
        </CardHeader>

        <CardContainer>
          {tasks.map((task, index) => {
            if (task.state !== 3) {
              return;
            }

            return (
              <Card key={task.id}>
                <p>{task.description}</p>
                <ButtonsContainer confirmation>
                  <button type="button" onClick={() => handleTaskStateAdd(task, index)}>
                    <Icon icon={check} style={{ fontSize: '24px' }} />
                  </button>
                </ButtonsContainer>
              </Card>
            )
          })}
        </CardContainer>
      </Container>
    </Page>
  );
}

export default MainPage;
