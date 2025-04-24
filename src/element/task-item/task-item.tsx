import { useNavigate } from 'react-router';
import { removeTodo, Todo } from '../../redux/todo'
import styles from './task-item.module.css'
import TrashSVG from '../../assets/icon/trash-svg';
import { useDispatch } from 'react-redux';

interface Props {
  data: Todo;
}

export default function TaskItem(props: Props) {
  const { text, status, id } = props.data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className={styles.container}>
      <span onClick={() => navigate(`/edit-task/${id}`)} className={styles.text} style={{ textDecoration: status === "pending" ? "none" : "line-through"}}>{text}</span>
      <div className={`${styles.statusChip} ${ status === "pending" && styles.yellowBackground}`}>{status}</div>
      <div style={{ cursor: "pointer" }} onClick={() => dispatch(removeTodo(Number(id)))}>
        <TrashSVG size={20} />
      </div>
    </div>
  )
}
