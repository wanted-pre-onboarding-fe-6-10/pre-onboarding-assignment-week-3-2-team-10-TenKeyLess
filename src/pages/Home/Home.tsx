import Header from '@/components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/index';

const Home = () => {
  const dispatch = useDispatch();
  const todoData = useSelector(state => state);

  console.log(todoData);
  return (
    <div>
      HomeHomeHomeHomeHome
      <button type="button" onClick={() => dispatch(add({ id: 2, todo: '놀기' }))}>
        click
      </button>
    </div>
  );
};

export default Home;
