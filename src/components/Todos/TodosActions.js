import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosAction.module.css'

function TodosActions({resetTodos, deleteCompletedTodos, completedTodosExist}) {
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Удалить все задачи" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Удалить завершенные" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
